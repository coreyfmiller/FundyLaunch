"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"

const perks = [
  "A review of your current website & branding",
  "How you rank on Google & Google Maps",
  "Whether AI assistants recommend you",
  "A clear, prioritized growth plan",
]

export function AuditCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
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
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent/15">
                  <CheckCircle2 className="size-7 text-accent" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                  Thanks — we{"'"}re on it!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We{"'"}ll review your business and get back to you within one business day with
                  your free audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Smith" required />
                  <Field label="Business" name="business" placeholder="Smith Roofing" required />
                </div>
                <Field label="Email" name="email" type="email" placeholder="jane@example.com" required />
                <Field label="Website (optional)" name="website" placeholder="yourbusiness.ca" />
                <div>
                  <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-foreground">
                    What do you want to improve?
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    placeholder="More calls, better website, ranking on Google Maps..."
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                >
                  Get My Free Audit
                  <Send className="size-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam. We reply within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
