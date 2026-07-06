"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { CtaLink } from "@/components/cta-link"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "AI Search", href: "#ai" },
  { label: "Process", href: "#process" },
  { label: "Growth Program", href: "#growth" },
  { label: "Industries", href: "#industries" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:h-24 md:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Fundy Launch home">
          <Image
            src="/headerlogo.png"
            alt="Fundy Launch — Web Design and Marketing"
            width={800}
            height={218}
            className="h-14 w-auto md:h-20"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+19025550123"
            className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            (902) 555-0123
          </a>
          <CtaLink href="#audit">Free Audit</CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <CtaLink href="#audit" onClick={() => setOpen(false)} className="mt-3">
              Get Your Free Audit
            </CtaLink>
          </nav>
        </div>
      )}
    </header>
  )
}
