import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { posts } from "@/lib/blog-posts"
import Link from "next/link"

export const metadata = {
  title: "Blog | Fundy Launch",
  description:
    "Tips, guides, and insights on web design, local SEO, and AI search optimization for Atlantic Canadian businesses.",
}

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Blog</p>
            <h1 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Insights for local businesses
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Practical advice on getting found online, growing your customer base, and staying
              ahead of your competition in Atlantic Canada.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-xs font-medium text-accent">{post.category}</p>
                <h2 className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
