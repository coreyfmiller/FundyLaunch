import Image from "next/image"
import { ArrowRight, Bot, MessageSquare, Search } from "lucide-react"
import { CtaLink } from "@/components/cta-link"

const engines = ["ChatGPT", "Gemini", "Claude", "Perplexity"]

const features = [
  {
    icon: Bot,
    title: "AI Search Optimization",
    text: "We structure your site and content so AI assistants can understand and recommend your business.",
  },
  {
    icon: MessageSquare,
    title: "Answer Engine Optimization",
    text: "Show up in the direct answers people get instead of scrolling through ten blue links.",
  },
  {
    icon: Search,
    title: "Generative Engine Optimization",
    text: "Get cited by generative engines as the trusted local expert in your niche and region.",
  },
]

export function AiOptimization() {
  return (
    <section id="ai" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white shadow-xl">
            <Image
              src="/ai-search.png"
              alt="An AI assistant recommending a local business as the best answer"
              width={720}
              height={720}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            The differentiator
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            People are asking AI who the best contractor is
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Very few local agencies are talking about this. We help make sure your business is part
            of the answer when customers ask AI assistants for a recommendation.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {engines.map((e) => (
              <span
                key={e}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium"
              >
                {e}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                  <f.icon className="size-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <CtaLink href="#audit" size="lg" className="mt-8">
            See if AI recommends you
            <ArrowRight />
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
