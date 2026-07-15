import Image from "next/image"
import { ArrowRight, ExternalLink, Heart } from "lucide-react"

const works = [
  {
    title: "Donovan Home Solutions",
    description:
      "A clean, professional website for a trusted exterior renovation contractor in Fredericton, Oromocto, and Lincoln. Windows, doors, decks, and siding — with honest pricing and a lead generation system that fills the calendar.",
    image: "/donovan.jpg",
    alt: "Donovan Home Solutions website — windows, doors, decks, and siding contractor in Fredericton, NB",
    link: "https://donovanhomesolutions.com",
  },
  {
    title: "RP Miller Consulting",
    description:
      "Turning complex numbers into confident decisions. A professional digital presence for an expert accounting, tax planning, and consulting firm in Lakeville Corner, New Brunswick.",
    image: "/RPMiller.jpg",
    alt: "RP Miller Consulting website — accounting and tax services firm in New Brunswick",
    link: "https://rpmillerconsulting.com/",
  },
  {
    title: "Ironwood Atlantic",
    description:
      "Premium custom builds and precision craftsmanship. A high-performance digital portfolio for Ironwood Atlantic, showcasing excellence in home building and general contracting.",
    image: "/ironworks.jpg",
    alt: "Ironwood Atlantic website — home building and general contracting company",
    link: "https://fredericton-contractor.vercel.app/",
  },
  {
    title: "Diamond Floor Epoxy",
    description:
      "A premium digital storefront for a leading epoxy flooring specialist. Featuring high-impact visuals, service showcases, and a streamlined lead generation system.",
    image: "/epoxy.jpg",
    alt: "Diamond Floor Epoxy website — epoxy flooring company with lead generation",
    link: "https://epoxy-lyart.vercel.app/",
  },
  {
    title: "KV Launch",
    description:
      "A community platform giving young entrepreneurs in Quispamsis and Rothesay free professional websites, a startup checklist, curated funding sources, and resources to go from idea to real business.",
    image: "/kvlaunch.jpg",
    alt: "KV Launch — community platform for young entrepreneurs in the Kennebecasis Valley",
    link: "https://kvlaunch.com",
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
            Recent work
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Websites that rank, convert, and grow businesses
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Real results for real businesses across Atlantic Canada.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <a
              key={work.title}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.alt}
                  width={800}
                  height={600}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {work.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {work.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View site <ExternalLink className="size-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

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
            Know a young entrepreneur in the Kennebecasis Valley who needs a website?{" "}
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
