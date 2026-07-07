import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ValueStrip } from "@/components/value-strip"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { AiOptimization } from "@/components/ai-optimization"
import { Process } from "@/components/process"
import { GrowthProgram } from "@/components/growth-program"
import { Industries } from "@/components/industries"
import { Faq } from "@/components/faq"
import { AuditCta } from "@/components/audit-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ValueStrip />
        <Services />
        <Testimonials />
        <AiOptimization />
        <Process />
        <GrowthProgram />
        <Industries />
        <Faq />
        <AuditCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
