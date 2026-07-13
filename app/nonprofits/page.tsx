"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Check, ArrowRight, Heart, Globe, Users, TrendingUp } from "lucide-react"
import { CtaLink } from "@/components/cta-link"

const included = [
  "Custom mobile-first website (up to 5 pages)",
  "Professional design tailored to your mission",
  "Donation/volunteer call-to-action setup",
  "Google Business Profile setup",
  "Basic on-page SEO",
  "Mobile-friendly & fast",
  "You own everything",
  "Launched in 2–3 weeks",
]

const whoWeHelp = [
  "Community organizations",
  "Registered charities",
  "Youth programs & clubs",
  "Food banks & shelters",
  "Animal rescues",
  "Arts & culture organizations",
  "Environmental groups",
  "Faith-based organizations",
]

const howItWorks = [
  {
    step: "01",
    title: "Apply",
    description:
      "Tell us about your non-profit, your mission, and what you need. We take on 1–2 non-profit projects per month.",
  },
  {
    step: "02",
    title: "We Design & Build",
    description:
      "We create a professional website tailored to your organization. You review it and request changes before it goes live.",
  },
  {
    step: "03",
    title: "You Launch",
    description:
      "Your site goes live. Start sharing it with your community, donors, and volunteers. Grow your impact.",
  },
]

export default function NonprofitsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-secondary blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Heart className="size-3.5 text-accent" />
                Giving Back to Atlantic Canada
              </span>
              <h1 className="mt-5 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                Free websites for non-profits doing real work in our communities
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                Your mission matters more than your budget. We donate our time and expertise to
                build professional websites for non-profit organizations across Atlantic Canada —
                completely free.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <CtaLink href="#apply" size="lg">
                  Apply for a Free Website
                  <ArrowRight />
                </CtaLink>
                <CtaLink href="#how-it-works" size="lg" variant="outline">
                  See How It Works
                </CtaLink>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We take on 1–2 non-profit projects per month. Spots are limited.
              </p>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Heart className="size-5 text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold leading-tight">100% Free</p>
                <p className="text-sm text-primary-foreground/70">no cost, no strings</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Globe className="size-5 text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold leading-tight">Atlantic Canada</p>
                <p className="text-sm text-primary-foreground/70">NB, NS, PEI, NL</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Users className="size-5 text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold leading-tight">You Own It</p>
                <p className="text-sm text-primary-foreground/70">your site, your domain</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <TrendingUp className="size-5 text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold leading-tight">1–2 per month</p>
                <p className="text-sm text-primary-foreground/70">limited spots available</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                How it works
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Simple process, professional result
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <span className="font-display text-3xl font-extrabold text-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  What you get
                </p>
                <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  A professional website built for your mission
                </h2>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Not a template. Not a drag-and-drop builder. A custom-designed, modern website
                  that makes your organization look as professional as the work you do.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="size-3.5 text-accent" />
                      </span>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Who we help
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                  Any non-profit making a difference
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  If you&apos;re a registered non-profit or community organization in Atlantic
                  Canada and you need a better online presence, we want to hear from you.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {whoWeHelp.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Heart className="size-4 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Apply form */}
        <section id="apply" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Apply</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Apply for a free website
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Tell us about your non-profit. If we&apos;re a good fit, we&apos;ll reach out to
                get started.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <NonprofitForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function NonprofitForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        const payload = {
          formType: "nonprofit",
          name: formData.get("name"),
          email: formData.get("email"),
          org: formData.get("org"),
          mission: formData.get("mission"),
          website: formData.get("website"),
          needs: formData.get("needs"),
        }

        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        form.reset()
        form.innerHTML = `<div class="flex flex-col items-center py-10 text-center"><p class="font-display text-xl font-bold text-foreground">Thanks — we'll be in touch!</p><p class="mt-2 text-sm text-muted-foreground">We review every application and respond within one week.</p></div>`
      }}
      className="space-y-5"
    >  <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@organization.ca"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>
      </div>
      <div>
        <label htmlFor="org" className="mb-1.5 block text-sm font-medium text-foreground">
          Organization Name
        </label>
        <input
          id="org"
          name="org"
          required
          placeholder="Atlantic Community Food Bank"
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="mission" className="mb-1.5 block text-sm font-medium text-foreground">
          What does your organization do?
        </label>
        <textarea
          id="mission"
          name="mission"
          rows={3}
          required
          placeholder="Tell us about your mission and who you serve..."
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-foreground">
          Current website (if any)
        </label>
        <input
          id="website"
          name="website"
          placeholder="www.yourorg.ca"
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="needs" className="mb-1.5 block text-sm font-medium text-foreground">
          What do you need from a website?
        </label>
        <textarea
          id="needs"
          name="needs"
          rows={3}
          placeholder="Donations page, volunteer sign-up, event calendar, general awareness..."
          className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
      >
        Submit Application
        <ArrowRight className="size-4" />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We review every application and respond within one week. No cost, no obligation.
      </p>
    </form>
  )
}
