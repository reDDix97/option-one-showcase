import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Star, Sparkles, Compass, Ruler, Hammer, Sofa, Building2, PenTool,
  CheckCircle2, Quote, Phone,
} from "lucide-react";

import heroImg from "@/assets/hero-living.jpg";
import studioImg from "@/assets/about-studio.jpg";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Option One Interior — Designing Spaces That Inspire" },
      { name: "description", content: "Luxury interior design, architecture and construction studio in Dhaka. Residential, commercial and bespoke projects across Bangladesh." },
      { property: "og:title", content: "Option One Interior — Luxury Interior Design in Dhaka" },
      { property: "og:description", content: "Transforming residential and commercial spaces into timeless environments through innovative design and craftsmanship." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Sofa, title: "Residential Interiors", text: "Apartments, duplexes and family homes designed for everyday luxury." },
  { icon: Building2, title: "Commercial Spaces", text: "Restaurants, retail and hospitality interiors with strong identity." },
  { icon: PenTool, title: "Corporate Offices", text: "Workplace design that balances brand, focus and well-being." },
  { icon: Compass, title: "Architectural Planning", text: "Ground-up villas, master planning and structural detailing." },
  { icon: Ruler, title: "Space Planning", text: "Layout optimisation that turns square footage into liveable rooms." },
  { icon: Hammer, title: "Renovation & Build", text: "End-to-end remodelling executed by our in-house construction team." },
];

const PROCESS = [
  { n: "01", title: "Consultation", text: "We meet at your site or in our Uttara studio to understand brief, lifestyle and budget." },
  { n: "02", title: "Planning", text: "Site survey, measurements and a written scope of work signed off before design begins." },
  { n: "03", title: "Concept Design", text: "Mood boards, layout options and 3D walk-throughs of every key space." },
  { n: "04", title: "Development", text: "Material selections, joinery shop drawings, lighting and MEP coordination." },
  { n: "05", title: "Execution", text: "Site mobilisation managed by our in-house build team with weekly client updates." },
  { n: "06", title: "Handover", text: "Snag-free delivery, styling, walkthrough and a 12-month aftercare programme." },
];

const WHY = [
  "Tailored Design Solutions",
  "Experienced In-House Team",
  "Premium Materials & Finishes",
  "On-Time Delivery",
  "Transparent Communication",
  "Modern Design Approach",
];

const TESTIMONIALS = [
  { quote: "Option One delivered a home that feels more like us than we knew how to describe. Calm, warm, beautifully detailed.", name: "Sadia R.", role: "Residential client, Gulshan" },
  { quote: "Our HQ fit-out came in on time and on budget, and our team has never been more proud to walk in every morning.", name: "Tanvir A.", role: "CEO, Meridian Holdings" },
  { quote: "From planning to handover, the process was disciplined, transparent and genuinely creative.", name: "Nazia H.", role: "Villa owner, Purbachal" },
];

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Stats />
      <About />
      <Services />
      <Featured />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[720px] overflow-hidden text-white">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImg} alt="Luxury Dhaka apartment interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative h-full container-luxe flex flex-col justify-end pb-24 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow !text-accent flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-accent" />
          Interior Design · Architecture · Construction
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] max-w-5xl"
        >
          Designing Spaces<br />
          <span className="italic text-accent">That Inspire.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-8 max-w-xl text-white/80 text-base md:text-lg leading-relaxed"
        >
          Transforming residential and commercial spaces into timeless environments through innovative design, architecture and craftsmanship — from our studio in Uttara, Dhaka.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/contact" className="btn-gold">Schedule Consultation <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/portfolio" className="btn-ghost !text-white !border-white/40 hover:!text-accent hover:!border-accent">View Portfolio</Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-[10px] tracking-[0.4em] uppercase"
      >
        <span>Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}

function TrustStrip() {
  const items = ["Awwwards-grade craftsmanship", "End-to-end project management", "12-month aftercare", "Certified contractors", "Local + imported materials", "On-time delivery"];
  const loop = [...items, ...items];
  return (
    <div className="bg-[oklch(0.12_0_0)] text-white/70 py-5 overflow-hidden border-y border-white/5">
      <div className="flex gap-16 whitespace-nowrap animate-marquee">
        {loop.map((t, i) => (
          <span key={i} className="text-xs tracking-[0.3em] uppercase flex items-center gap-16">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { v: 4.6, s: "★", label: "Google Rating" },
    { v: 180, s: "+", label: "Residential Projects" },
    { v: 65, s: "+", label: "Commercial Projects" },
    { v: 99, s: "%", label: "Client Satisfaction" },
    { v: 12, s: "+", label: "Years of Experience" },
  ];
  return (
    <section className="container-luxe py-24 md:py-32">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="border-t border-border pt-6">
              <AnimatedCounter value={s.v} suffix={s.s} />
              <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="container-luxe py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
      <Reveal>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={studioImg} alt="Inside the Option One Interior studio" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute -bottom-px -right-px bg-background p-6 border-t border-l border-border">
            <p className="font-display text-3xl text-accent">12+ <span className="text-foreground">yrs</span></p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Studio in Dhaka</p>
          </div>
        </div>
      </Reveal>
      <div>
        <SectionHeader
          eyebrow="About the Studio"
          title="A trusted design and construction partner in Dhaka."
          description="For over a decade, Option One Interior has designed and built homes, offices and commercial spaces across Bangladesh. We bring architectural rigour to interior design, and design sensibility to construction — so the spaces we deliver feel intentional in every detail."
        />
        <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {["Design excellence", "Space optimisation", "Professional execution", "Attention to detail", "End-to-end project management", "Honest pricing"].map((p) => (
            <div key={p} className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>{p}</span>
            </div>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <Link to="/about" className="btn-ghost">Our Story <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-[oklch(0.13_0_0)] text-white py-24 md:py-32">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow">What We Do</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">
                A full studio for design, architecture and build.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/services" className="btn-ghost !text-white !border-white/30 hover:!text-accent hover:!border-accent">All Services <ArrowUpRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group bg-[oklch(0.13_0_0)] p-8 md:p-10 hover:bg-[oklch(0.16_0_0)] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <s.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.25} />
                <span className="text-xs tracking-widest text-white/30">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.text}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="container-luxe py-24 md:py-32">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Spaces we've recently brought to life."
          description="A small selection from our residential, commercial and architectural portfolio across Dhaka."
        />
        <Reveal delay={0.1}>
          <Link to="/portfolio" className="btn-ghost">View All Projects <ArrowUpRight className="w-4 h-4" /></Link>
        </Reveal>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.slice(0, 6).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container-luxe grid lg:grid-cols-2 gap-16">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Discipline of an architect. Eye of a designer. Reliability of a builder."
          description="We're a single accountable team from the first sketch to the final snag — so nothing gets lost in translation between design and execution."
        />
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {WHY.map((w, i) => (
            <Reveal key={w} delay={i * 0.05}>
              <div className="bg-background p-8 h-full">
                <p className="font-display text-3xl text-accent">0{i + 1}</p>
                <p className="mt-6 font-display text-xl">{w}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="container-luxe py-24 md:py-32">
      <SectionHeader
        eyebrow="Our Process"
        title="Six considered steps, from first call to handover."
        description="A disciplined process keeps creative ambition on budget and on schedule."
      />
      <div className="mt-16 relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border" />
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative"
            >
              <div className="w-6 h-6 rounded-full bg-background border-2 border-accent mx-auto md:mx-0 mb-6 relative z-10 grid place-items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <p className="font-display text-4xl text-accent">{p.n}</p>
              <h3 className="mt-2 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[oklch(0.12_0_0)] text-white py-24 md:py-32 overflow-hidden">
      <div className="container-luxe">
        <div className="flex items-center gap-3 mb-12">
          <span className="inline-block w-8 h-px bg-accent" />
          <p className="eyebrow">Client Voices</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-[oklch(0.12_0_0)] p-10 flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent" strokeWidth={1.25} />
              <p className="mt-6 font-display text-2xl leading-snug text-white/90">"{t.quote}"</p>
              <div className="mt-auto pt-8 flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="mt-4 text-sm">
                <span className="text-white">{t.name}</span>
                <span className="text-white/50"> — {t.role}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-luxe py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden bg-[oklch(0.13_0_0)] text-white px-8 py-20 md:px-20 md:py-28 text-center">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 70% 70%, var(--gold) 0%, transparent 50%)",
          }} />
          <p className="eyebrow relative">Begin</p>
          <h2 className="relative mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl mx-auto">
            Let's create something <span className="italic text-accent">extraordinary.</span>
          </h2>
          <p className="relative mt-6 text-white/70 max-w-xl mx-auto">
            Book a complimentary 30-minute consultation with our principal designer to scope your project.
          </p>
          <div className="relative mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Book Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+8801711371372" className="btn-ghost !text-white !border-white/40 hover:!text-accent hover:!border-accent">
              <Phone className="w-4 h-4" /> +880 1711-371372
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
