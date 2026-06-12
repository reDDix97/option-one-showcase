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

