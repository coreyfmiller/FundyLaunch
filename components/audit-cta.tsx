"use client"

import { useState } from "react"
import { CheckCircle2, Send, Loader2, AlertTriangle } from "lucide-react"

const perks = [
  "A review of your current website & branding",
  "How you rank on Google & Google Maps",
  "Whether AI assistants recommend you",
  "A clear, prioritized growth plan",
]

type AuditScores = {
  seo: number
  aeo: number
  geo: number
}

type AuditResult = {
  scores: AuditScores
  recommendations?: { title: string; description: string; priority: string }[]
  expertAnalysis?: { bottomLine?: string }
  auditsRemaining?: number
}

function ScoreRing({ score, label, color }: { score: number; label: string; color: string }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-24">
        <svg className="size-24 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={radius} fill="none" stroke="currentColor" strokeWidth="6" className="text-border" />
          <circle cx="40" cy="40" r={radius} fill="none" stroke={color} strokeWidth="6" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-1000" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-foreground">{score}</span>
      </div>
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
    </div>
  )
}

export function AuditCta() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [result, setResult] = useState<AuditResult | null>(null)
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const url = formData.get("website") as string
    const email = formData.get("email") as string
    const businessName = formData.get("name") as string

    if (!url || !email) return

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email, businessName }),
      })

      if (!res.ok) {
        const data = await res.json()
        setErrorMsg(data.error || "Something went wrong. Please try again.")
        setStatus("error")
        return
      }

      const data = await res.json()
      setResult(data)
      setStatus("success")
    } catch {
      setErrorMsg("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section id="audit" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-secondary/40 p-6 md:p-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Free, no obligation
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get your free website & SEO audit
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              See exactly where you stand and how to get more customers finding you first. Here{"'"}s
              what you{"'"}ll get:
            </p>
            <ul className="mt-6 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {/* Success - Show Scores */}
            {status === "success" && result?.scores && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-foreground">Your Audit Results</h3>
                  <p className="mt-1 text-sm text-muted-foreground">We{"'"}ve also emailed these to you.</p>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <ScoreRing score={result.scores.seo} label="SEO" color="#00e5ff" />
                  <ScoreRing score={result.scores.aeo} label="AEO" color="#BC13FE" />
                  <ScoreRing score={result.scores.geo} label="GEO" color="#fe3f8c" />
                </div>

                {result.expertAnalysis?.bottomLine && (
                  <p className="rounded-xl bg-secondary/60 p-4 text-sm leading-relaxed text-foreground">
                    <strong>Bottom line:</strong> {result.expertAnalysis.bottomLine}
                  </p>
                )}

                {result.recommendations && result.recommendations.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Top priorities:</p>
                    <ul className="space-y-2">
                      {result.recommendations.slice(0, 3).map((rec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">{i + 1}</span>
                          {rec.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Get Help Improving These Scores
                </a>

                {typeof result.auditsRemaining === "number" && (
                  <p className="text-center text-xs text-muted-foreground">
                    {result.auditsRemaining} free audit{result.auditsRemaining !== 1 ? "s" : ""} remaining
                  </p>
                )}
              </div>
            )}

            {/* Loading */}
            {status === "loading" && (
              <div className="flex flex-col items-center py-12 text-center">
                <Loader2 className="size-10 animate-spin text-accent" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  Scanning your website...
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  This takes 60–90 seconds. We{"'"}re checking your SEO, AI visibility, and more.
                </p>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-red-500/15">
                  <AlertTriangle className="size-7 text-red-500" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  Audit failed
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{errorMsg}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-accent hover:text-accent/80"
                >
                  Try again
                </button>
              </div>
            )}

            {/* Form */}
            {status === "idle" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="audit-name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Business Name
                  </label>
                  <input
                    id="audit-name"
                    name="name"
                    required
                    placeholder="Smith Roofing"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label htmlFor="audit-email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="audit-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label htmlFor="audit-website" className="mb-1.5 block text-sm font-medium text-foreground">
                    Website URL
                  </label>
                  <input
                    id="audit-website"
                    name="website"
                    required
                    placeholder="yourbusiness.ca"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                >
                  Run My Free Audit
                  <Send className="size-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Instant results. No spam. Powered by Duelly.ai.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
