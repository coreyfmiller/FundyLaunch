import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Instantiate lazily (not at module load) so a missing key can't crash the build.
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }
    const resend = new Resend(apiKey)

    const body = await request.json()
    const { name, business, email, phone, website, services, budget, details, referral, formType } = body

    let subject = ""
    let html = ""

    if (formType === "nonprofit") {
      const { org, mission, needs } = body
      subject = `Non-Profit Application: ${org}`
      html = `
        <h2>New Non-Profit Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${org}</p>
        <p><strong>Mission:</strong> ${mission || "Not provided"}</p>
        <p><strong>Current Website:</strong> ${website || "None"}</p>
        <p><strong>What they need:</strong> ${needs || "Not provided"}</p>
      `
    } else if (formType === "audit") {
      subject = `Free Audit Request: ${business}`
      html = `
        <h2>New Free Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>
        <p><strong>What they want to improve:</strong> ${details || "Not provided"}</p>
      `
    } else {
      subject = `New Inquiry: ${business}`
      html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>
        <p><strong>Services interested in:</strong> ${Array.isArray(services) ? services.join(", ") : "Not specified"}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Goals:</strong> ${details || "Not provided"}</p>
        <p><strong>How they heard about us:</strong> ${referral || "Not provided"}</p>
      `
    }

    const { error } = await resend.emails.send({
      from: "Fundy Launch <hello@fundylaunch.com>",
      to: "coreyfmiller@gmail.com",
      subject,
      html,
      replyTo: email,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Also forward the lead to the Quadropus ops command center (best-effort).
    // Never let this break the contact form: email above is the source of truth.
    void forwardLeadToOps({
      source: "fundylaunch",
      name,
      email,
      business,
      phone,
      message: details,
      formType,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}

// Mirror the lead into the Quadropus ops command center. Best-effort by design: the
// email above is the source of truth and this must never fail the contact form.
//
// Best-effort does not mean silent. This used to `return` with no trace when the env
// wasn't set, so the ops dashboard sat empty for weeks and looked like "no leads"
// rather than "never configured". Every exit path now says what happened.
async function forwardLeadToOps(lead: Record<string, unknown>) {
  const endpoint = process.env.OPS_LEADS_URL
  const token = process.env.LEADS_INGEST_TOKEN
  if (!endpoint || !token) {
    const missing = [!endpoint && "OPS_LEADS_URL", !token && "LEADS_INGEST_TOKEN"]
      .filter(Boolean)
      .join(", ")
    console.warn(
      `[contact] lead not mirrored to ops: ${missing} not set. The email was still sent.`,
    )
    return
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) {
      console.error(
        `[contact] ops rejected the lead: ${res.status} ${await res.text().catch(() => "")}`,
      )
    }
  } catch (e) {
    console.error("[contact] could not reach ops to mirror the lead:", e)
  }
}
