import Link from "next/link";
import { Project } from "@/types";
import { FadeUp } from "./motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Project card with blueprint-style design:
 * - Index number in muted gold
 * - Thin measurement line accents
 * - Category label
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const indexStr = String(index + 1).padStart(2, "0");

  return (
    <FadeUp delay={index * 0.08}>
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block blueprint-frame p-0 overflow-hidden transition-all duration-300 hover:border-gold/30"
        aria-label={`مشاهدة مشروع ${project.title}`}
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-deep">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

          {/* Index number */}
          <span className="absolute top-4 right-4 font-heading text-2xl font-bold text-gold/40 group-hover:text-gold/60 transition-colors">
            {indexStr}
          </span>

          {/* Category badge */}
          <span className="absolute bottom-4 right-4 text-xs font-body text-gold border border-gold/20 px-3 py-1 backdrop-blur-sm bg-charcoal/40">
            {project.category}
          </span>
        </div>

        {/* Info panel */}
        <div className="p-4 md:p-5 space-y-2 border-t border-gold/10">
          {/* Measurement line accent */}
          <div className="flex items-center gap-2 text-gold/30 text-[10px] font-body">
            <span className="block w-3 h-px bg-gold/20" />
            <span>{project.area}</span>
            <span className="block flex-1 h-px bg-gold/10" />
            <span>{project.style}</span>
            <span className="block w-3 h-px bg-gold/20" />
          </div>

          <h3 className="font-heading text-lg text-white group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-warm-gray-dark text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </Link>
    </FadeUp>
  );
}
