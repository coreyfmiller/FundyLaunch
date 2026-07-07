import Image from "next/image"
import { ArrowRight, MapPin, Search, Sparkles, Star } from "lucide-react"
import { CtaLink } from "@/components/cta-link"

const badges = [
  { icon: Search, label: "Google Search" },
  { icon: MapPin, label: "Google Maps" },
  { icon: Sparkles, label: "AI Search" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-secondary blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span className="inline-block size-2 rounded-full bg-accent" />
            Atlantic Canada Web Design & Marketing
          </span>

          <h1 className="mt-5 text-pretty font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Get Found. Get More Calls. <span className="text-accent">Grow Your Business.</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We help contractors and local businesses across Atlantic Canada rank higher on Google,
            Google Maps, and AI-powered search so more customers find you before your competitors.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#audit" size="lg">
              Get Your Free Website &amp; SEO Audit
              <ArrowRight />
            </CtaLink>
            <CtaLink href="#services" size="lg" variant="outline">
              See What We Do
            </CtaLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
              >
                <b.icon className="size-3.5 text-accent" />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative flex items-center justify-center rounded-3xl bg-secondary p-8 md:p-12">
            <Image
              src="/hero-dashboard3.png"
              alt="Local search rankings dashboard"
              width={720}
              height={720}
              className="h-auto w-full max-w-md drop-shadow-xl"
              priority
            />
          </div>

          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex">
            <div className="flex size-10 items-center justify-center rounded-full bg-accent/10">
              <Star className="size-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Top 3 on Maps</p>
              <p className="text-xs text-muted-foreground">for local searches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
