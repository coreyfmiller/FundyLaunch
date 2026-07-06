import { Gauge, MapPin, Sparkles } from "lucide-react"

const services = [
  {
    icon: Gauge,
    title: "Website Design",
    description:
      "Fast, mobile-first websites with professional branding, built to convert visitors into customers—and easy for you to edit.",
    points: [
      "Fast, mobile-first builds",
      "Professional branding",
      "Conversion optimized",
      "Easy editing",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "The engine behind long-term growth. We get your business found across Google Search and Google Maps in your service area.",
    points: [
      "Google Business Profile",
      "Citations & reviews",
      "Local landing pages",
      "Technical & on-page SEO",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Optimization",
    description:
      "People aren't just Googling anymore—they're asking AI who the best contractor is. We make sure your business is part of that answer.",
    points: [
      "Generative Engine Optimization",
      "Answer Engine Optimization",
      "ChatGPT, Gemini, Claude",
      "Perplexity & voice search",
    ],
    highlight: true,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">What we do</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A complete system to get your business found
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We build websites designed to rank, convert visitors into customers, and help your
            business become the obvious choice online.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
                s.highlight
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              <div
                className={`flex size-12 items-center justify-center rounded-xl ${
                  s.highlight ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                }`}
              >
                <s.icon className="size-6" />
              </div>
              {s.highlight && (
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                  Our differentiator
                </span>
              )}
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="inline-block size-1.5 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
