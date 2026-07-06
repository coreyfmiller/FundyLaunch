"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see measurable improvements within 30–60 days. Website builds typically launch in 2–4 weeks. SEO and AI optimization are ongoing—you'll see early wins quickly, with compounding growth over 3–6 months.",
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes, 100%. Everything we build for you is yours. If you ever decide to part ways, you keep your domain, your content, and your site files.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll audit what you have and recommend the best path forward. Sometimes a redesign makes sense, other times we can optimize your existing site for better rankings and conversions without starting over.",
  },
  {
    question: "What's the contract length?",
    answer:
      "Website projects are one-time with a clear scope. The Local Growth Program is month-to-month after an initial 3-month commitment—we earn your business every month, no long-term lock-ins.",
  },
  {
    question: "How is this different from other agencies?",
    answer:
      "Most agencies build you a website and disappear. We focus on local businesses specifically, we optimize for AI search (not just Google), and our Growth Program is a complete customer acquisition system—not just a pretty site collecting dust.",
  },
  {
    question: "What does AI search optimization actually mean?",
    answer:
      "When people ask ChatGPT, Google Gemini, or Perplexity 'who's the best roofer in Halifax?', we make sure your business shows up in those AI-generated answers. This is a brand new channel that most competitors aren't even aware of yet.",
  },
  {
    question: "Do you work with businesses outside Atlantic Canada?",
    answer:
      "Our specialty is Atlantic Canada because we understand the local market deeply. That said, if you're a service-based business elsewhere in Canada and our approach resonates, reach out—we're happy to chat.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just fill out our free audit form or contact page. We'll research your business, your competitors, and your market—then come back to you with a clear plan. No prep work needed on your end.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">FAQ</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Common questions, straight answers
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground md:text-base">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 py-4">
          <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  )
}
