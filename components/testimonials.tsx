import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "We needed a digital presence that matched the quality of our custom builds. The site they delivered generates qualified leads on autopilot — our inquiry volume doubled in the first month.",
    name: "David Leblanc",
    business: "Ironwood Atlantic, Fredericton",
    stars: 5,
  },
  {
    quote:
      "The site is stunning and functional. The automated lead capture system qualifies prospects before they even call, saving us hours every week. We're now the top result in our area.",
    name: "Sarah Mitchell",
    business: "Diamond Floor Epoxy",
    stars: 5,
  },
  {
    quote:
      "They built our entire website and a custom AI chatbot that handles client inquiries 24/7. It qualifies leads while I focus on billable work. The chatbot alone saves me hours every week.",
    name: "Ron Miller",
    business: "RP Miller Consulting, Lakeville Corner",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Results that speak
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by local businesses across Atlantic Canada
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
