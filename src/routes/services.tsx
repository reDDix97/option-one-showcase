import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Sofa, Building2, PenTool, Compass, Ruler, Hammer, Home, Layers, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Option One Interior" },
      { name: "description", content: "Interior design, architecture, renovation and custom furniture services in Dhaka." },
      { property: "og:title", content: "Services — Option One Interior" },
      { property: "og:description", content: "From residential interiors to corporate offices and architectural planning across Bangladesh." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Home, title: "Residential Interior Design", text: "Apartments, family homes and full-floor residences designed to feel calm, warm and considered." },
  { icon: Sparkles, title: "Luxury Apartment Design", text: "High-end interiors for owners who want a hotel-grade finish in their primary residence." },
  { icon: Layers, title: "Duplex & Villa Interiors", text: "Spatial planning and styling for two- and three-storey homes, with bespoke joinery and lighting." },
  { icon: Building2, title: "Commercial Interior Design", text: "Retail, restaurants and hospitality interiors built around brand and customer experience." },
  { icon: PenTool, title: "Corporate Office Design", text: "Workplaces that balance focus, collaboration and the seriousness of a corporate brand." },
  { icon: Compass, title: "Architectural Planning", text: "Master planning, concept architecture and structural detailing for ground-up projects." },
  { icon: Ruler, title: "Space Planning & Layout", text: "Layout optimisation that gets more from existing square footage without major construction." },
  { icon: Hammer, title: "Renovation & Remodelling", text: "Full or partial renovations executed by our in-house construction team in Dhaka." },
  { icon: Sofa, title: "Custom Furniture Design", text: "Made-to-measure furniture and joinery, drafted in-house and produced by our workshop." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full studio for design, architecture and build."
        description="One accountable team — from the first sketch to the final snag-list."
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <div className="group bg-background p-10 h-full hover:bg-secondary transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-12">
                  <s.icon className="w-8 h-8 text-accent" strokeWidth={1.25} />
                  <span className="text-xs tracking-widest text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[oklch(0.13_0_0)] text-white py-24 md:py-32">
        <div className="container-luxe text-center">
          <p className="eyebrow">Engagement</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl max-w-3xl mx-auto">Not sure which service fits your project?</h2>
          <p className="mt-6 text-white/70 max-w-xl mx-auto">A 30-minute consultation is the fastest way to scope it. No obligation, no fees.</p>
          <Link to="/contact" className="btn-gold mt-10">Book a Consultation <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
