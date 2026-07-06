import { PhoneCall, Search, TrendingUp, Users } from "lucide-react"

const stats = [
  { icon: TrendingUp, value: "Websites built to rank", label: "not just to look good" },
  { icon: PhoneCall, value: "More calls & leads", label: "from ready-to-buy customers" },
  { icon: Search, value: "Google, Maps & AI", label: "visibility where it matters" },
  { icon: Users, value: "Local & transparent", label: "reporting every month" },
]

export function ValueStrip() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value} className="flex items-start gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <s.icon className="size-5 text-accent" />
            </div>
            <div>
              <p className="font-display font-semibold leading-tight">{s.value}</p>
              <p className="text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
