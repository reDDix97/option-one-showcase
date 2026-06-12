import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import studio from "@/assets/about-studio.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Option One Interior" },
      { name: "description", content: "Option One Interior is a Dhaka-based design, architecture and construction studio led by Abdullah Al Mamun." },
      { property: "og:title", content: "About Option One Interior" },
      { property: "og:description", content: "A studio of architects, designers and craftsmen building considered spaces across Bangladesh." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { t: "Considered design", d: "Every drawing is reviewed against how a space will actually be lived in — not how it looks in a render." },
  { t: "Honest craft", d: "We build what we draw, with our own contractors, using materials we'd specify in our own homes." },
  { t: "Quiet luxury", d: "We prefer restraint over decoration. Quality of light, proportion and material always come first." },
  { t: "Clear process", d: "Fixed scopes, transparent budgets and weekly site reports keep your project predictable." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Studio"
        title="A Dhaka studio for considered interiors and architecture."
        description="Option One Interior is an independent design and construction practice working on residences, offices and commercial spaces across Bangladesh."
      />

      <section className="container-luxe py-20 md:py-28 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <img src={studio} alt="The Option One Interior studio" loading="lazy" className="w-full aspect-[4/5] object-cover" />
        </Reveal>
        <div>
          <SectionHeader
            eyebrow="Our Story"
            title="Twelve years building rooms people don't want to leave."
            description="Founded in Uttara and led by principal designer Abdullah Al Mamun, our practice grew from a small interiors atelier into a fully integrated design–architecture–build studio."
          />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Today we work across luxury apartments, duplexes, villas, corporate fit-outs and hospitality interiors — but our way of working hasn't changed. One designer-led team, drawing every detail, building it with people we trust, and standing behind the result for years after handover.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <AnimatedCounter value={180} suffix="+" />
              <p className="mt-2 text-[10px] tracking-widest uppercase text-muted-foreground">Homes Designed</p>
            </div>
            <div>
              <AnimatedCounter value={65} suffix="+" />
              <p className="mt-2 text-[10px] tracking-widest uppercase text-muted-foreground">Commercial Projects</p>
            </div>
            <div>
              <AnimatedCounter value={12} suffix="" />
              <p className="mt-2 text-[10px] tracking-widest uppercase text-muted-foreground">Years in Practice</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeader eyebrow="Values" title="What we believe shapes how we work." />
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="bg-background p-10 h-full">
                  <p className="font-display text-4xl text-accent">0{i + 1}</p>
                  <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <SectionHeader
            eyebrow="Leadership"
            title="Led by Abdullah Al Mamun."
            description="Our principal designer brings over a decade of residential and commercial design experience to every project, and personally reviews every drawing that leaves the studio."
          />
          <Link to="/contact" className="btn-gold mt-10">Meet the team <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <Reveal className="order-1 lg:order-2">
          <img src={bedroom} alt="A signature Option One bedroom" loading="lazy" className="w-full aspect-square object-cover" />
        </Reveal>
      </section>
    </>
  );
}