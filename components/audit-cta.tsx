import { ArrowRight, CheckCircle2 } from "lucide-react"
import { CtaLink } from "@/components/cta-link"

const perks = [
  "A custom demo website built for your business",
  "See your brand, services, and area brought to life",
  "No templates — designed specifically for you",
  "Yours to review with zero obligation",
]

export function AuditCta() {
  return (
    <section id="audit" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Free, no obligation
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              See what your new website could look like
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us about your business and we'll build you a free demo site showing exactly
              what we'd create for you. No commitment, no pressure.
            </p>

            <ul className="mt-8 inline-grid gap-3 text-left sm:grid-cols-2">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaLink href="/contact" size="lg">
                Get Your Free Demo
                <ArrowRight />
              </CtaLink>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              No spam. We reply within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
