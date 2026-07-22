import Image from "next/image"
import { ArrowRight, ExternalLink, Heart } from "lucide-react"

const industryShowcase = [
  {
    title: "Atlantic Plumbing and Heating",
    industry: "Plumbing & HVAC",
    description:
      "A professional website for a full-service plumbing and heating company. Emergency services, installations, and maintenance with online booking.",
    image: "/atlantic-plumbing.png",
    alt: "Atlantic Plumbing and Heating website — plumbing and HVAC services",
    link: "https://atlantic-plumbing.vercel.app",
  },
  {
    title: "Pristine Auto Detailing",
    industry: "Auto Detailing",
    description:
      "A sleek website for a mobile auto detailing business. Package pricing, before/after gallery, and online booking for ceramic coating and paint correction.",
    image: "/pristine.png",
    alt: "Pristine Auto Detailing website — mobile car detailing services",
    link: "https://pristine-chi.vercel.app",
  },
  {
    title: "Riverstone Renovations",
    industry: "Renovations",
    description:
      "A clean, trust-building site for a renovation company. Kitchens, bathrooms, basements, and full-home renovations with a portfolio and quote system.",
    image: "/riverstone.png",
    alt: "Riverstone Renovations website — home renovation contractor",
    link: "https://riverstone-kohl.vercel.app",
  },
  {
    title: "Greenstone Landscaping",
    industry: "Landscaping",
    description:
      "A vibrant website for a landscaping company. Lawn care, hardscaping, garden design, and seasonal maintenance with service area pages.",
    image: "/greenstone.png",
    alt: "Greenstone Landscaping website — landscaping and lawn care services",
    link: "https://greenstone-rho.vercel.app",
  },
  {
    title: "Maritime Pest Management",
    industry: "Pest Control",
    description:
      "A professional site for a pest control company. Residential and commercial services with emergency response and prevention programs.",
    image: "/maritime-pest.png",
    alt: "Maritime Pest Management website — pest control services",
    link: "https://maritime-pest.vercel.app",
  },
  {
    title: "Crystal Clear Cleaning Co.",
    industry: "Cleaning",
    description:
      "A bright, trustworthy site for a residential and commercial cleaning company. Recurring service plans, instant quotes, and a referral program.",
    image: "/crystal-clear.png",
    alt: "Crystal Clear Cleaning Co. website — residential and commercial cleaning",
    link: "https://crystal-clear-olive.vercel.app",
  },
  {
    title: "Harbour Realty",
    industry: "Real Estate",
    description:
      "A premium real estate website with property listings, agent profiles, neighbourhood guides, and market reports for coastal communities.",
    image: "/harbour.png",
    alt: "Harbour Realty website — real estate listings and agent profiles",
    link: "https://harbour-gamma.vercel.app",
  },
  {
    title: "Summit Roofing NB",
    industry: "Roofing",
    description:
      "A conversion-focused site for a roofing contractor. Shingle, metal, and flat roof services with storm damage repair and financing options.",
    image: "/summit-roofing.png",
    alt: "Summit Roofing NB website — roofing contractor services",
    link: "https://summit-roofing-ten.vercel.app",
  },
  {
    title: "Spark Electric",
    industry: "Electrical",
    description:
      "A modern website for an electrical contractor. Panel upgrades, EV charger installations, and smart home wiring with 24/7 emergency service.",
    image: "/spark-electric.png",
    alt: "Spark Electric website — residential and commercial electrical services",
    link: "https://spark-electric-blue.vercel.app",
  },
]

const youthProjects = [
  {
    title: "KV Adventure Club",
    description:
      "A playful, community-driven site for a monthly snail-mail subscription service. Screen-free missions, scavenger hunts, and local discoveries for kids in the Kennebecasis Valley.",
    image: "/kvadventureclub.jpg",
    alt: "KV Adventure Club — kids adventure subscription service in Kennebecasis Valley",
    link: "https://kvadventureclub.com",
  },
  {
    title: "Clean Cut Crew",
    description:
      "A sharp, no-nonsense site for a local lawn care crew in Quispamsis. Seasonal pricing, service breakdowns, and a quick-quote form that gets the phone ringing.",
    image: "/cleancutcrew.jpg",
    alt: "Clean Cut Crew — lawn mowing and yard services in Quispamsis, NB",
    link: "https://www.cleancutcrew.ca",
  },
  {
    title: "Sunrise Seedlings",
    description:
      "From our garden to yours. A vibrant e-commerce site for a kid-run plant nursery in Quispamsis, NB. Siblings Kaelan, Micah, and Madelyn grow heirloom tomatoes, fresh herbs, and colorful peppers.",
    image: "/kids-garden3.png",
    alt: "Sunrise Seedlings — kid-run plant nursery e-commerce site in Quispamsis, NB",
    link: "https://www.sunriseseedlings.com",
  },
]

export function RecentWork() {
  return (
    <section id="work" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Our work
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Websites that rank, convert, and grow businesses
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Design concepts built for specific trades and businesses. See what a modern website
            looks like for your industry.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryShowcase.map((item) =>
            item.link ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={630}
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {item.industry}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    View demo <ExternalLink className="size-3.5" />
                  </span>
                </div>
              </a>
            ) : (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={630}
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {item.industry}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t see your industry?{" "}
          <a href="/contact" className="font-semibold text-accent hover:text-accent/80">
            Tell us what you do
          </a>{" "}
          — we&apos;ll show you what&apos;s possible.
        </p>

        {/* Young Entrepreneur Initiative */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
              <Heart className="size-3.5" />
              Community
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Young Entrepreneur Initiative
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Free web design for young entrepreneurs in our community. Because every founder
              deserves a real online presence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {youthProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={600}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                    View site <ExternalLink className="size-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Know a young entrepreneur or non-profit in the Greater Saint John area who needs a website?{" "}
            <a href="/contact" className="font-semibold text-emerald-400 hover:text-emerald-300">
              Get in touch
            </a>{" "}
            — we&apos;d love to help.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">Like what you see?</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/packages"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See Packages <ArrowRight className="size-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
