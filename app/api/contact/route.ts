import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
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

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
