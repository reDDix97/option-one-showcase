import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="group"
    >
      <Link to="/portfolio/$slug" params={{ slug: project.slug }} className="block">
        <div className="relative overflow-hidden bg-muted aspect-[4/5]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-90" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/90 bg-black/30 backdrop-blur-md px-3 py-1.5 border border-white/15">
              {project.category}
            </span>
            <span className="w-10 h-10 grid place-items-center bg-accent text-black translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-6 text-white">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent/90 mb-2">{project.type}</p>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">{project.title}</h3>
            <p className="text-xs text-white/70 mt-1">{project.location} · {project.year}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}