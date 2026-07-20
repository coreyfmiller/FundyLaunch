import Image from "next/image"

const cols = [
  {
    title: "Services",
    links: [
      { label: "Website Design", href: "#services" },
      { label: "Local SEO", href: "#services" },
      { label: "AI Optimization", href: "#ai" },
      { label: "Local Growth Program", href: "#growth" },
      { label: "Our Work", href: "#work" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Process", href: "#process" },
      { label: "Who We Help", href: "#industries" },
      { label: "Blog", href: "/blog" },
      { label: "Packages", href: "/packages" },
      { label: "Free Demo", href: "/contact" },
      { label: "Non-Profits", href: "/nonprofits" },
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
