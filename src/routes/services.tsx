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

*** Add File: src/routes/portfolio.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Option One Interior" },
      { name: "description", content: "Residential, commercial and architectural projects by Option One Interior across Dhaka." },
      { property: "og:title", content: "Portfolio — Option One Interior" },
      { property: "og:description", content: "Selected residential, commercial and architectural projects from our studio in Uttara, Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const FILTERS = ["All", "Residential", "Commercial", "Architectural"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Recent work across Dhaka."
        description="A curated selection of residential, commercial and architectural projects delivered by our studio."
      />

      <section className="container-luxe py-16 md:py-20">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase border transition-all duration-300 ${
                filter === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}

*** Add File: src/routes/portfolio.$slug.tsx
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Maximize2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Project"} — Option One Interior` },
      { name: "description", content: loaderData?.summary ?? "" },
      { property: "og:title", content: loaderData?.title ?? "Project" },
      { property: "og:description", content: loaderData?.summary ?? "" },
      { property: "og:type", content: "article" },
      ...(loaderData ? [{ property: "og:image", content: loaderData.image as string }] : []),
    ],
    links: loaderData ? [{ rel: "canonical", href: `/portfolio/${loaderData.slug}` }] : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-luxe py-40 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl">Project not found</h1>
      <Link to="/portfolio" className="btn-ghost mt-8 inline-flex">Back to portfolio</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="container-luxe py-40 text-center">
      <h1 className="font-display text-4xl">Something went wrong loading this project.</h1>
      <Link to="/portfolio" className="btn-ghost mt-8 inline-flex">Back to portfolio</Link>
    </div>
  ),
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden text-white">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
        <div className="absolute inset-x-0 bottom-0 container-luxe pb-16">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase opacity-80 hover:text-accent transition mb-8">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="eyebrow !text-accent">
            {project.category} · {project.type}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-8">
          <div>
            <p className="eyebrow flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Location</p>
            <p className="mt-2 font-display text-2xl">{project.location}</p>
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Year</p>
            <p className="mt-2 font-display text-2xl">{project.year}</p>
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2"><Maximize2 className="w-3.5 h-3.5" /> Area</p>
            <p className="mt-2 font-display text-2xl">{project.area}</p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">{project.summary}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-muted-foreground leading-relaxed text-lg">{project.description}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-border">
              {["Design", "Joinery", "Build"].map((s) => (
                <div key={s} className="bg-background p-6">
                  <p className="font-display text-2xl text-accent">In-house</p>
                  <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe pb-20">
        <Reveal>
          <div className="overflow-hidden">
            <img src={project.image} alt={`${project.title} detail`} loading="lazy" className="w-full h-auto" />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <Link to="/portfolio/$slug" params={{ slug: next.slug }} className="group block">
          <div className="container-luxe py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="eyebrow">Next Project</p>
              <p className="mt-3 font-display text-4xl md:text-5xl group-hover:text-accent transition-colors">{next.title}</p>
              <p className="mt-2 text-muted-foreground">{next.location}</p>
            </div>
            <ArrowRight className="w-12 h-12 text-accent group-hover:translate-x-3 transition-transform duration-500" strokeWidth={1} />
          </div>
        </Link>
      </section>
    </article>
  );
}

*** Add File: src/routes/contact.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Option One Interior" },
      { name: "description", content: "Schedule a consultation with Option One Interior in Uttara, Dhaka. Call +880 1711-371372." },
      { property: "og:title", content: "Contact Option One Interior" },
      { property: "og:description", content: "Visit our Uttara studio, call us or book a consultation online." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(6, "Enter a contact number").max(40),
  project: z.string().trim().min(1, "Select a project type").max(60),
  message: z.string().trim().min(10, "Tell us a little about your project").max(1500),
});

function ContactPage() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    // Open WhatsApp with composed message — no backend required.
    const text = encodeURIComponent(
      `Hello Option One Interior!\n\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nProject: ${parsed.data.project}\n\n${parsed.data.message}`,
    );
    window.open(`https://wa.me/8801711371372?text=${text}`, "_blank", "noopener,noreferrer");
    setDone(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design your next space."
        description="Book a complimentary consultation with our principal designer, or simply send us a note."
      />

      <section className="container-luxe py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <Reveal>
            <div>
              <p className="eyebrow">Studio</p>
              <p className="mt-3 font-display text-2xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-2 shrink-0" />
                House-01, Road-15, Sector-12,<br />Uttara, Dhaka-1230, Bangladesh
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <p className="eyebrow">Phone</p>
              <a href="tel:+8801711371372" className="mt-3 font-display text-2xl flex items-center gap-3 hover:text-accent">
                <Phone className="w-5 h-5 text-accent" /> +880 1711-371372
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow">Email</p>
              <a href="mailto:hello@optiononeinterior.com" className="mt-3 font-display text-2xl flex items-center gap-3 hover:text-accent">
                <Mail className="w-5 h-5 text-accent" /> hello@optiononeinterior.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="https://wa.me/8801711371372"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-fit"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {done ? (
            <div className="bg-secondary p-12 text-center border border-border">
              <CheckCircle2 className="w-12 h-12 mx-auto text-accent" strokeWidth={1.25} />
              <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
              <p className="mt-3 text-muted-foreground">We've opened WhatsApp with your message. Our team will reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-6">
              <Field name="name" label="Full Name" error={errors.name} />
              <Field name="email" label="Email" type="email" error={errors.email} />
              <Field name="phone" label="Phone" error={errors.phone} />
              <div className="flex flex-col gap-2">
                <label className="eyebrow !text-muted-foreground">Project Type</label>
                <select
                  name="project"
                  defaultValue=""
                  className="bg-transparent border-b border-border py-3 text-base focus:border-accent outline-none transition"
                >
                  <option value="" disabled>Select…</option>
                  <option>Residential Interior</option>
                  <option>Luxury Apartment</option>
                  <option>Duplex / Villa</option>
                  <option>Commercial Space</option>
                  <option>Corporate Office</option>
                  <option>Architectural Planning</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
                {errors.project && <p className="text-xs text-destructive">{errors.project}</p>}
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="eyebrow !text-muted-foreground">Tell us about your project</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1500}
                  className="bg-transparent border-b border-border py-3 text-base focus:border-accent outline-none transition resize-none"
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-gold sm:col-span-2 w-fit">
                Send via WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="aspect-[16/7] w-full">
          <iframe
            title="Option One Interior — Uttara, Dhaka"
            src="https://www.google.com/maps?q=Sector+12+Uttara+Dhaka&output=embed"
            className="w-full h-full grayscale-[0.4] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow !text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={200}
        className="bg-transparent border-b border-border py-3 text-base focus:border-accent outline-none transition"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}