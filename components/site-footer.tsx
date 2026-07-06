import Image from "next/image"
import { Mail, MapPin, PhoneCall } from "lucide-react"

const cols = [
  {
    title: "Services",
    links: [
      { label: "Website Design", href: "#services" },
      { label: "Local SEO", href: "#services" },
      { label: "AI Optimization", href: "#ai" },
      { label: "Local Growth Program", href: "#growth" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Process", href: "#process" },
      { label: "Who We Help", href: "#industries" },
      { label: "Free Audit", href: "#audit" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <Image
            src="/headerlogo.png"
            alt="Fundy Launch"
            width={180}
            height={180}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We help Atlantic Canadian contractors and local businesses dominate Google, Maps, and AI
            Search through high-performing websites and smart marketing.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <PhoneCall className="size-4 text-accent" />
              <a href="tel:+19025550123" className="hover:text-accent">
                (902) 555-0123
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-accent" />
              <a href="mailto:hello@fundylaunch.ca" className="hover:text-accent">
                hello@fundylaunch.ca
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-accent" />
              Serving Atlantic Canada
            </li>
          </ul>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:px-6">
          <p>&copy; {new Date().getFullYear()} Fundy Launch. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="transition-colors hover:text-accent">Privacy Policy</a>
            <span>·</span>
            <a href="/privacy#terms" className="transition-colors hover:text-accent">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
