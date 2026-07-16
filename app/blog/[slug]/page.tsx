import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { posts } from "@/lib/blog-posts"
import { notFound } from "next/navigation"
import { CtaLink } from "@/components/cta-link"
import { ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Fundy Launch Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <SiteHeader />
      <main className="bg-background py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="text-sm font-medium text-accent">{post.category}</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{post.date}</p>

          <div
            className="prose-blog mt-10 text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-6 text-center md:p-8">
            <h3 className="font-display text-lg font-bold text-foreground">
              Want help putting this into action?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We help local businesses across Atlantic Canada get found and grow. Let us do the
              heavy lifting.
            </p>
            <CtaLink href="/contact" size="lg" className="mt-5">
              Get Your Free Audit
              <ArrowRight />
            </CtaLink>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
