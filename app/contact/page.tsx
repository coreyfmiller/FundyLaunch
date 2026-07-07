"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle2, Send, Mail, MapPin, Clock } from "lucide-react"

const services = [
  "Website Design",
  "Local SEO",
  "AI Search Optimization",
  "Google Business Profile",
  "Local Growth Program",
  "Other",
]

const budgets = [
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000+",
  "Not sure yet",
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Let&apos;s Talk
            </p>
            <h1 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Ready to grow your business?
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us about your business and goals. We&apos;ll get back to you within one business
              day with a clear plan to get you more customers.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {/* Contact info sidebar */}
            <div className="space-y-8 lg:col-span-1">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-lg font-bold text-foreground">Get in touch</h2>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a
                        href="mailto:hello@fundylaunch.ca"
                        className="text-sm text-muted-foreground hover:text-accent"
                      >
                        hello@fundylaunch.ca
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Serving Atlantic Canada</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Response time</p>
                      <p className="text-sm text-muted-foreground">Within 1 business day</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <h3 className="font-display text-sm font-bold text-foreground">
                  What happens next?
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      1
                    </span>
                    We review your submission and research your business
                  </li>
                  <li className="flex gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      2
                    </span>
                    We reach out to schedule a quick discovery call
                  </li>
                  <li className="flex gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      3
                    </span>
                    You get a custom plan tailored to your goals
                  </li>
                </ol>
              </div>
            </div>

            {/* Intake form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center py-16 text-center">
                    <span className="flex size-16 items-center justify-center rounded-full bg-accent/15">
                      <CheckCircle2 className="size-8 text-accent" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                      Thanks — we&apos;re on it!
                    </h3>
                    <p className="mt-3 max-w-md text-muted-foreground">
                      We&apos;ll review your info and get back to you within one business day. In
                      the meantime, feel free to check out our services.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Full Name" name="name" placeholder="Jane Smith" required />
                      <Field
                        label="Business Name"
                        name="business"
                        placeholder="Smith Roofing"
                        required
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                      />
                      <Field
                        label="Phone (optional)"
                        name="phone"
                        type="tel"
                        placeholder="(902) 555-0123"
                      />
                    </div>
                    <Field
                      label="Website (if you have one)"
                      name="website"
                      placeholder="www.yourbusiness.ca"
                    />

                    {/* Service interest */}
                    <fieldset>
                      <legend className="mb-2 text-sm font-medium text-foreground">
                        What are you interested in?
                      </legend>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {services.map((s) => (
                          <label
                            key={s}
                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-input px-3 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 has-[:checked]:border-accent has-[:checked]:bg-accent/5"
                          >
                            <input
                              type="checkbox"
                              name="services"
                              value={s}
                              className="size-4 rounded border-input accent-accent"
                            />
                            {s}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Budget */}
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Approximate budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                      >
                        <option value="">Select a range</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Details */}
                    <div>
                      <label
                        htmlFor="details"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Tell us about your goals
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={4}
                        placeholder="What does success look like for you? More calls, better website, ranking on Google Maps, beating competitors..."
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                      />
                    </div>

                    {/* How did you hear about us */}
                    <Field
                      label="How did you hear about us? (optional)"
                      name="referral"
                      placeholder="Google, referral, social media..."
                    />

                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
                    >
                      Send My Inquiry
                      <Send className="size-4" />
                    </button>
                    <p className="text-center text-xs text-muted-foreground">
                      No spam. No pressure. We reply within one business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
