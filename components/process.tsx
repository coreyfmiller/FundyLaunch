const steps = [
  {
    number: "01",
    title: "Free Audit",
    text: "We review your website, Google presence, and how you show up in AI search—no cost, no pressure.",
  },
  {
    number: "02",
    title: "Build a Growth Plan",
    text: "A clear, prioritized plan focused on the actions that will bring you the most calls and customers.",
  },
  {
    number: "03",
    title: "Build or Improve the Website",
    text: "Fast, mobile-first, conversion-focused—built to turn visitors into paying customers.",
  },
  {
    number: "04",
    title: "Optimize Google & AI Search",
    text: "We optimize your Google Business Profile, local SEO, and AI visibility so you get found first.",
  },
  {
    number: "05",
    title: "Measure Results Every Month",
    text: "Transparent reporting so you always know what's working and where your growth is coming from.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">How it works</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A simple, proven path to more customers
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-display text-3xl font-extrabold text-accent">{step.number}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
