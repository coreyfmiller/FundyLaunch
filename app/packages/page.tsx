import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Check, ArrowRight } from "lucide-react"
import { CtaLink } from "@/components/cta-link"

const packages = [
  {
    name: "Website Launch",
    tagline: "Get online right",
    price: "3,500",
    priceNote: "one-time",
    description:
      "A fast, professional website built to convert — plus the foundation to start ranking locally.",
    features: [
      "Custom mobile-first website (up to 5 pages)",
      "Professional branding & design",
      "On-page SEO setup",
      "Google Business Profile setup",
      "30+ local citation submissions",
      "Review generation system (QR code + follow-up template)",
      "1 round of revisions",
      "Launched in 2–3 weeks",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth Starter",
    tagline: "Get found locally",
    price: "5,500",
    priceNote: "one-time + optional monthly",
    description:
      "Everything in Website Launch, plus aggressive local SEO to start generating calls from Google and Maps.",
    features: [
      "Everything in Website Launch",
      "Local SEO keyword strategy",
      "Service area landing pages",
      "Google Business Profile optimization",
      "Backlink building (10+ quality links)",
      "Technical SEO audit & fixes",
      "Competitor analysis report",
      "Optional: ongoing SEO at $1,000/mo",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Full Growth Partner",
    tagline: "Dominate your market",
    price: "1,500",
    priceNote: "/month (3-month minimum)",
    description:
      "Your complete customer acquisition system. We handle everything — website, SEO, AI, content, and reporting — so you focus on running your business.",
    features: [
      "Custom website (included in first month)",
      "Full local SEO management",
      "AI search optimization (ChatGPT, Gemini, Perplexity)",
      "Google Business Profile management",
      "Monthly blog content (2 posts)",
      "Backlink building & outreach",
      "Review monitoring & generation",
      "Monthly performance report & strategy call",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
]

export default function PackagesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Packages
            </p>
            <h1 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Simple pricing, serious results
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Every business is different — these are starting points. We&apos;ll build a plan
              around your goals on a quick discovery call.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-6 md:p-8 ${
                  pkg.highlighted
                    ? "border-accent/50 bg-accent/5 shadow-lg shadow-accent/10"
                    : "border-border bg-card"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-xl font-bold text-foreground">{pkg.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.tagline}</p>

                <div className="mt-5">
                  <span className="font-display text-4xl font-extrabold text-foreground">
                    ${pkg.price}
                  </span>
                  <span className="ml-1.5 text-sm text-muted-foreground">{pkg.priceNote}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="size-3.5 text-accent" />
                      </span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CtaLink
                  href="/contact"
                  size="lg"
                  variant={pkg.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {pkg.cta}
                  <ArrowRight />
                </CtaLink>
              </div>
            ))}
          </div>

          {/* Add-on: Content Engine */}
          <div className="mt-14">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Add-on service
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
                    Weekly Blog Content Engine
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    We write and publish one SEO-optimized blog post per week targeting real
                    keywords your customers search for in your area. Published automatically.
                    You never think about it. In 6 months you&apos;ll have 24 indexed pages
                    pulling in traffic your competitors can&apos;t match.
                  </p>
                  <div className="mt-5">
                    <span className="font-display text-3xl font-extrabold text-foreground">
                      $600
                    </span>
                    <span className="ml-1.5 text-sm text-muted-foreground">/month (4 posts)</span>
                  </div>
                  <CtaLink href="/contact" size="lg" className="mt-6">
                    Add to Any Package
                    <ArrowRight />
                  </CtaLink>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-foreground">4 blog posts per month, written for your trade and area</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-foreground">Keyword-targeted to rank for local searches</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-foreground">Published on your site automatically each week</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-foreground">Written in your voice with local references and expertise</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-foreground">Builds organic traffic that compounds month over month</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    <span className="text-sm text-foreground">Zero effort required from you</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-secondary/40 p-6 text-center md:p-8">
            <h3 className="font-display text-lg font-bold text-foreground">
              Not sure which is right for you?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Start with a free audit — we&apos;ll review your current setup and recommend the
              best path forward. No pressure, no commitment.
            </p>
            <CtaLink href="/contact" size="lg" className="mt-5">
              Get Your Free Audit
              <ArrowRight />
            </CtaLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
