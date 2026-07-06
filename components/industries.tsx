import {
  Building2,
  Droplets,
  Hammer,
  HardHat,
  Home,
  Scale,
  Stethoscope,
  Trees,
  Wind,
  Wrench,
  Zap,
} from "lucide-react"

const industries = [
  { icon: HardHat, label: "Roofers" },
  { icon: Droplets, label: "Plumbers" },
  { icon: Zap, label: "Electricians" },
  { icon: Wind, label: "HVAC" },
  { icon: Hammer, label: "Excavation" },
  { icon: Trees, label: "Landscaping" },
  { icon: Home, label: "Home Builders" },
  { icon: Wrench, label: "Renovations" },
  { icon: Stethoscope, label: "Dentists" },
  { icon: Scale, label: "Lawyers" },
  { icon: Building2, label: "Realtors" },
  { icon: Building2, label: "Financial Advisors" },
]

export function Industries() {
  return (
    <section id="industries" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Who we help</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for local businesses that understand ROI
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We focus on businesses where one new customer is worth hundreds or thousands of
            dollars—so every lead we send you counts.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-colors hover:border-accent/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                <i.icon className="size-5 text-primary" />
              </span>
              <span className="text-sm font-medium text-foreground">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
