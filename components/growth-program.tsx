import { ArrowRight, Check } from "lucide-react"
import { CtaLink } from "@/components/cta-link"

const included = [
  "Website updates & maintenance",
  "Local SEO",
  "AI search optimization",
  "Google Business Profile management",
  "Blog articles",
  "Review management",
  "Performance reports",
  "Ongoing strategy & support",
]

export function GrowthProgram() {
  return (
    <section id="growth" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="bg-primary p-8 text-primary-foreground md:p-12">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                Recurring growth, not one-off projects
              </span>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
                The Local Growth Program
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
                Most agencies stop at websites. We become your growth partner—a complete customer
                acquisition system that keeps working month after month.
              </p>
              <p className="mt-6 text-sm text-primary-foreground/60">
                We start with businesses where one new customer is worth hundreds or thousands of
                dollars—because that's where marketing delivers real ROI.
              </p>
              <CtaLink href="#audit" size="lg" className="mt-8">
                Start with a free audit
                <ArrowRight />
              </CtaLink>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="font-display text-lg font-bold text-foreground">
                Everything included, one monthly plan
              </h3>
              <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-secondary/60 p-5">
                <p className="text-sm leading-relaxed text-foreground">
                  {'"'}You{"'"}re not just buying a website. You{"'"}re getting a system that
                  generates more calls, leads, and customers.{'"'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
