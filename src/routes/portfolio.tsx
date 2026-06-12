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

