import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export interface SendRequest {
  prospects: {
    name: string
    email: string
    subject: string
    body: string
    trade: string
    location: string
  }[]
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("x-api-key")
    if (authHeader !== process.env.OUTREACH_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Instantiate lazily (not at module load) so a missing key can't crash the build.
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }
    const resend = new Resend(apiKey)

    const { prospects }: SendRequest = await req.json()

    if (!prospects || prospects.length === 0) {
      return NextResponse.json({ error: "No prospects to email" }, { status: 400 })
    }

    const results = await Promise.allSettled(
      prospects.map(async (p) => {
        const htmlBody = p.body
          .split("\n")
          .map((line: string) => (line.trim() ? `<p>${line}</p>` : ""))
          .join("")

        const unsubMailto = `mailto:unsubscribe@fundylaunch.com?subject=${encodeURIComponent("Unsubscribe")}&body=${encodeURIComponent(`Please remove ${p.email} from your list.`)}`

        const { data, error } = await resend.emails.send({
          from: "Corey at FundyLaunch <hello@fundylaunch.com>",
          to: p.email,
          subject: p.subject,
          html: `
            ${htmlBody}
            <br/>
            <p style="color: #666; font-size: 12px;">
              This is a one-time outreach from FundyLaunch (Fundy Logic Inc.). We build websites for trades businesses in Atlantic Canada.<br/>
              Fundy Logic Inc., 18 Sunrise Drive, Quispamsis, NB E2E 4V1, Canada.<br/>
              To stop receiving emails from us, reply with "unsubscribe" or <a href="${unsubMailto}">click here to unsubscribe</a>.
            </p>
          `,
          replyTo: "coreyfmiller@gmail.com",
          headers: {
            "List-Unsubscribe": `<${unsubMailto}>`,
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
          tags: [
            { name: "campaign", value: "outreach" },
            { name: "trade", value: p.trade },
            { name: "location", value: p.location },
          ],
        })

        if (error) throw new Error(error.message)
        return { name: p.name, email: p.email, messageId: data?.id }
      })
    )

    const sent = results.filter((r) => r.status === "fulfilled").length
    const failed = results.filter((r) => r.status === "rejected").length
    const errors = results
      .filter((r): r is PromiseRejectedResult => r.status === "rejected")
      .map((r) => r.reason?.message)

    return NextResponse.json({
      sent,
      failed,
      errors: errors.length > 0 ? errors : undefined,
      results: results.map((r, i) => ({
        name: prospects[i].name,
        status: r.status === "fulfilled" ? "sent" : "failed",
        ...(r.status === "fulfilled" ? { messageId: (r as any).value.messageId } : { error: (r as any).reason?.message }),
      })),
    })
  } catch (error) {
    console.error("Outreach send error:", error)
    return NextResponse.json({ error: "Send failed" }, { status: 500 })
  }
}
