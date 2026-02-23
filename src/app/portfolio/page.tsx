"use client";

import { useState, useMemo } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { FadeUp } from "@/components/motion";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

const categories: (ProjectCategory | "الكل")[] = [
  "الكل",
  "سكني",
  "تجاري",
  "داخلي",
  "مكتبي",
  "ضيافة",
];

/**
 * Portfolio page – Filterable grid of all projects.
 */
export default function PortfolioPage() {
  const [active, setActive] = useState<ProjectCategory | "الكل">("الكل");

  const filtered = useMemo(() => {
    if (active === "الكل") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      {/* Header */}
      <section className="section-container pt-12 pb-8 md:pt-20 md:pb-12">
        <SectionHeader
          title="أعمالنا"
          subtitle="مجموعة من مشاريعنا التي تعكس تنوع خبراتنا وشغفنا بالتصميم المعماري."
        />
      </section>

      {/* Filter tabs */}
      <section className="section-container pb-8">
        <FadeUp>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm font-body border transition-all duration-300 ${
                  active === cat
                    ? "border-gold/40 text-gold bg-gold/5"
                    : "border-gold/10 text-warm-gray-dark hover:border-gold/20 hover:text-warm-gray"
                }`}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Projects grid */}
      <section className="section-container pb-16 md:pb-24" aria-label="معرض الأعمال">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-warm-gray-dark text-lg py-20">
            لا توجد مشاريع في هذا التصنيف حالياً.
          </p>
        )}
      </section>
    </>
  );
}
