"use client"

import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"

export function MobileCta() {
  const path = usePathname()

  if (path === "/contact") return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <a
        href="/contact"
        className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-accent text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
      >
        Get Your Free Audit
        <ArrowRight className="size-4" />
      </a>
    </div>
  )
}
