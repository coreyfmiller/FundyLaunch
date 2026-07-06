import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | Fundy Launch",
  description: "Privacy policy and terms of service for Fundy Launch.",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: July 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="font-display text-lg font-bold text-foreground">
                Information We Collect
              </h2>
              <p className="mt-3">
                When you fill out a form on our website (such as the free audit request or contact
                form), we collect the information you provide, including your name, email address,
                phone number, business name, website URL, and any additional details you share.
              </p>
              <p className="mt-2">
                We also collect standard analytics data through Vercel Analytics, including page
                views, referral sources, device type, and browser information. This data is
                anonymous and cannot be used to identify you personally.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">
                How We Use Your Information
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-1.5">
                <li>To respond to your inquiries and provide the services you requested</li>
                <li>To conduct website and SEO audits you&apos;ve opted into</li>
                <li>To communicate with you about our services</li>
                <li>To improve our website and services based on aggregate analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">
                Information Sharing
              </h2>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties. We may
                share information with trusted service providers who help us operate our business
                (such as email delivery or CRM tools), but only as necessary to provide our
                services to you.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">Data Retention</h2>
              <p className="mt-3">
                We retain your personal information for as long as necessary to provide our
                services and fulfill the purposes described in this policy. You may request
                deletion of your data at any time by contacting us at hello@fundylaunch.ca.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">Cookies</h2>
              <p className="mt-3">
                Our website uses essential cookies required for site functionality. Vercel
                Analytics collects anonymous usage data without setting tracking cookies. We do
                not use third-party advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">Your Rights</h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1.5">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for communications at any time</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, contact us at hello@fundylaunch.ca.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this privacy policy from time to time. Changes will be posted on
                this page with an updated revision date.
              </p>
            </section>
          </div>

          {/* Terms of Service */}
          <hr className="my-14 border-border" />

          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: July 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="font-display text-lg font-bold text-foreground">Agreement</h2>
              <p className="mt-3">
                By accessing and using the Fundy Launch website (fundylaunch.ca), you agree to be
                bound by these terms of service. If you do not agree with any part of these terms,
                please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">Services</h2>
              <p className="mt-3">
                Fundy Launch provides web design, local SEO, AI search optimization, and digital
                marketing services for local businesses. Specific deliverables, timelines, and
                pricing are outlined in individual project proposals and agreements provided to
                each client.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">
                Intellectual Property
              </h2>
              <p className="mt-3">
                All content on this website—including text, graphics, logos, and design—is the
                property of Fundy Launch unless otherwise stated. You may not reproduce,
                distribute, or create derivative works from our website content without written
                permission.
              </p>
              <p className="mt-2">
                For client projects: upon full payment, clients own all custom website files,
                content, and assets created specifically for their project.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                Fundy Launch provides services on an &quot;as-is&quot; basis. While we strive for
                excellent results, we cannot guarantee specific search engine rankings, traffic
                volumes, or revenue outcomes, as these depend on many external factors beyond our
                control.
              </p>
              <p className="mt-2">
                Fundy Launch shall not be liable for any indirect, incidental, or consequential
                damages arising from the use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">
                Cancellation &amp; Refunds
              </h2>
              <p className="mt-3">
                One-time projects: Deposits are non-refundable once work has begun. Remaining
                balances are due upon project completion and approval.
              </p>
              <p className="mt-2">
                Growth Program: After the initial 3-month commitment, either party may cancel
                with 30 days written notice. No refunds for partially completed months.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">Governing Law</h2>
              <p className="mt-3">
                These terms are governed by the laws of the Province of Nova Scotia, Canada. Any
                disputes will be resolved in the courts of Nova Scotia.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-bold text-foreground">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Reach out at{" "}
                <a href="mailto:hello@fundylaunch.ca" className="text-accent hover:underline">
                  hello@fundylaunch.ca
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
