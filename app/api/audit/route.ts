import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export const maxDuration = 120

const auditCounts = new Map<string, number>()
const MAX_AUDITS_PER_EMAIL = 3

interface AuditLog {
    email: string
    businessName: string
    url: string
    scores: { seo: number; aeo: number; geo: number } | null
    timestamp: string
}

let dailyAudits: AuditLog[] = []
let lastResetDate = new Date().toDateString()

const resend = new Resend(process.env.RESEND_API_KEY)

function resetDailyIfNeeded() {
    const today = new Date().toDateString()
    if (today !== lastResetDate) {
        dailyAudits = []
        lastResetDate = today
    }
}

async function sendAlert(audits: AuditLog[]) {
    const a = audits[audits.length - 1]
    const avg = a.scores ? Math.round((a.scores.seo + a.scores.aeo + a.scores.geo) / 3) : null
    const seo = a.scores?.seo ?? "N/A"
    const aeo = a.scores?.aeo ?? "N/A"
    const geo = a.scores?.geo ?? "N/A"
    const needsHelp = typeof avg === "number" && avg < 50

    try {
        await resend.emails.send({
            from: "Fundy Launch Audit <onboarding@resend.dev>",
            to: ["coreyfmiller@gmail.com"],
            subject: `🔍 Audit: ${a.businessName || a.url} ${needsHelp ? "— NEEDS HELP" : ""} (${avg ?? "N/A"}/100)`,
            html: `
                <div style="font-family: system-ui, sans-serif; background: #0a0a0a; color: #fff; padding: 24px; border-radius: 12px;">
                    <h1 style="font-size: 20px; margin-bottom: 4px;">New Free Audit — Fundy Launch</h1>
                    <p style="color: #888; font-size: 14px; margin-bottom: 24px;">Audit #${audits.length} today</p>
                    <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 6px 0; color: #666; font-size: 12px;">BUSINESS</td><td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${a.businessName || "Not provided"}</td></tr>
                            <tr><td style="padding: 6px 0; color: #666; font-size: 12px;">URL</td><td style="padding: 6px 0; font-size: 14px;"><a href="${a.url}" style="color: #00e5ff;">${a.url}</a></td></tr>
                            <tr><td style="padding: 6px 0; color: #666; font-size: 12px;">EMAIL</td><td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${a.email}" style="color: #00e5ff;">${a.email}</a></td></tr>
                        </table>
                    </div>
                    <div style="display: flex; gap: 12px; margin-bottom: 20px;">
                        <div style="flex: 1; text-align: center; background: #111; border: 1px solid #00e5ff33; border-radius: 12px; padding: 16px;"><div style="font-size: 28px; font-weight: bold; color: #00e5ff;">${seo}</div><div style="font-size: 10px; color: #666;">SEO</div></div>
                        <div style="flex: 1; text-align: center; background: #111; border: 1px solid #BC13FE33; border-radius: 12px; padding: 16px;"><div style="font-size: 28px; font-weight: bold; color: #BC13FE;">${aeo}</div><div style="font-size: 10px; color: #666;">AEO</div></div>
                        <div style="flex: 1; text-align: center; background: #111; border: 1px solid #fe3f8c33; border-radius: 12px; padding: 16px;"><div style="font-size: 28px; font-weight: bold; color: #fe3f8c;">${geo}</div><div style="font-size: 10px; color: #666;">GEO</div></div>
                    </div>
                    ${needsHelp ? `<div style="background: #1a0a0a; border: 1px solid #ef444444; border-radius: 8px; padding: 12px;"><p style="color: #ef4444; font-size: 13px; margin: 0; font-weight: bold;">🔴 Scored ${avg}/100 — strong candidate for services.</p></div>` : ""}
                </div>
            `,
        })
    } catch (err) {
        console.error("Failed to send audit alert:", err)
    }
}

async function sendUserResults(email: string, businessName: string, url: string, data: any) {
    const scores = data?.scores
    if (!scores) return

    const avg = Math.round((scores.seo + scores.aeo + scores.geo) / 3)
    const totalIssues = (data.recommendations || []).length
    const bottomLine = data.expertAnalysis?.bottomLine || ""

    try {
        await resend.emails.send({
            from: "Fundy Launch <onboarding@resend.dev>",
            to: [email],
            replyTo: "hello@fundylaunch.ca",
            subject: `Your SEO & AI Audit: ${avg}/100 for ${businessName || url}`,
            html: `
                <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 12px;">
                    <h1 style="font-size: 22px; margin-bottom: 8px;">Your Website & AI Visibility Audit</h1>
                    <p style="color: #888; font-size: 14px; margin-bottom: 24px;">Results for <strong style="color: #fff;">${url}</strong></p>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                        <tr>
                            <td style="text-align: center; padding: 16px; background: #111; border: 1px solid #00e5ff33; border-radius: 8px;"><div style="font-size: 32px; font-weight: bold; color: #00e5ff;">${scores.seo}</div><div style="font-size: 11px; color: #666;">SEO</div></td>
                            <td style="width: 8px;"></td>
                            <td style="text-align: center; padding: 16px; background: #111; border: 1px solid #BC13FE33; border-radius: 8px;"><div style="font-size: 32px; font-weight: bold; color: #BC13FE;">${scores.aeo}</div><div style="font-size: 11px; color: #666;">AEO</div></td>
                            <td style="width: 8px;"></td>
                            <td style="text-align: center; padding: 16px; background: #111; border: 1px solid #fe3f8c33; border-radius: 8px;"><div style="font-size: 32px; font-weight: bold; color: #fe3f8c;">${scores.geo}</div><div style="font-size: 11px; color: #666;">GEO</div></td>
                        </tr>
                    </table>
                    ${bottomLine ? `<p style="color: #ccc; font-size: 14px; line-height: 1.6; margin-bottom: 24px;"><strong style="color: #fff;">The bottom line:</strong> ${bottomLine}</p>` : ""}
                    ${totalIssues > 0 ? `<p style="color: #ccc; font-size: 14px; margin-bottom: 24px;">We found <strong style="color: #fff;">${totalIssues} issues</strong> affecting your visibility to search engines and AI assistants.</p>` : ""}
                    <p style="color: #ccc; font-size: 14px; margin-bottom: 24px;">Want help improving these scores? Just reply to this email — no pressure, no commitment.</p>
                    <div style="text-align: center; margin-bottom: 24px;">
                        <a href="https://fundylaunch.ca/contact" style="display: inline-block; background: #00e5ff; color: #000; font-weight: bold; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-size: 14px;">Get In Touch</a>
                    </div>
                    <p style="color: #444; font-size: 12px; text-align: center;">Powered by <a href="https://duelly.ai" style="color: #00e5ff;">Duelly.ai</a> | <a href="https://fundylaunch.ca" style="color: #00e5ff;">Fundy Launch</a></p>
                </div>
            `,
        })
    } catch (err) {
        console.error("Failed to send user follow-up:", err)
    }
}

export async function POST(request: NextRequest) {
    try {
        const { url, email, businessName } = await request.json()

        if (!url || !email) {
            return NextResponse.json({ error: "URL and email are required." }, { status: 400 })
        }

        resetDailyIfNeeded()

        let normalizedUrl = url.trim().toLowerCase()
        normalizedUrl = normalizedUrl.replace(/^(https?:\/\/)?(www\.)?/, "")
        normalizedUrl = normalizedUrl.replace(/\/+$/, "")
        normalizedUrl = `https://${normalizedUrl}`

        const normalizedEmail = email.toLowerCase().trim()
        const currentCount = auditCounts.get(normalizedEmail) || 0

        if (currentCount >= MAX_AUDITS_PER_EMAIL) {
            return NextResponse.json({ error: "You've used all 3 free audits. Contact us for a full analysis." }, { status: 429 })
        }

        const apiKey = process.env.DUELLY_API_KEY
        if (!apiKey) {
            return NextResponse.json({ error: "Audit service is not configured." }, { status: 503 })
        }

        const duellyResponse = await fetch("https://duelly.ai/api/public-audit", {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-api-key": apiKey },
            body: JSON.stringify({ url: normalizedUrl }),
        })

        if (!duellyResponse.ok) {
            if (duellyResponse.status === 429) {
                return NextResponse.json({ error: "Audit service is busy. Try again in a minute." }, { status: 429 })
            }
            return NextResponse.json({ error: `Audit failed. Please check the URL and try again.` }, { status: 500 })
        }

        const data = await duellyResponse.json()
        auditCounts.set(normalizedEmail, currentCount + 1)

        const auditLog: AuditLog = {
            email: normalizedEmail,
            businessName: businessName || "",
            url: normalizedUrl,
            scores: data.scores || null,
            timestamp: new Date().toISOString(),
        }
        dailyAudits.push(auditLog)

        sendAlert(dailyAudits).catch(console.error)
        sendUserResults(normalizedEmail, businessName || "", normalizedUrl, data).catch(console.error)

        return NextResponse.json({ ...data, auditsRemaining: MAX_AUDITS_PER_EMAIL - (currentCount + 1) })
    } catch (error) {
        console.error("Audit API error:", error)
        return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
    }
}
