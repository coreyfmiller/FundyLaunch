import type { AnchorHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "outline" | "ghost"
type Size = "md" | "lg"

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0"

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border border-border bg-background text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
}

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
}

interface CtaLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
}

export function CtaLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CtaLinkProps) {
  return <a className={cn(base, variants[variant], sizes[size], className)} {...props} />
}
