import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import BlueprintFrame from "@/components/BlueprintFrame";
import ProjectCard from "@/components/ProjectCard";
import DividerLine from "@/components/DividerLine";
import { FadeUp, FadeIn } from "@/components/motion";
import { projects, getProjectBySlug, getSimilarProjects } from "@/data/projects";

interface Params {
  params: { slug: string };
}

/* ─── Generate static params for all projects ─── */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ─── Dynamic metadata ─── */
export function generateMetadata({ params }: Params): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | MAS Group`,
      description: project.description,
      images: [{ url: project.thumbnail, width: 1200, height: 630 }],
    },
  };
}

/**
 * Project detail page – Gallery, info panel, similar projects.
 */
export default function ProjectDetailPage({ params }: Params) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const similar = getSimilarProjects(project);

  /* Info panel items */
  const infoItems = [
    { label: "نوع المشروع", value: project.category },
    { label: "المساحة", value: project.area },
    { label: "الستايل", value: project.style },
    { label: "الفكرة", value: project.concept },
    { label: "المواد", value: project.materials },
    { label: "العناصر المميزة", value: project.features },
    ...(project.location ? [{ label: "الموقع", value: project.location }] : []),
  ];

  return (
    <>
      {/* ────────── Hero Gallery ────────── */}
      <section className="section-container pt-8 md:pt-16" aria-label="معرض صور المشروع">
        <FadeUp>
          <div className="flex items-center gap-3 mb-6">
            <Link href="/portfolio" className="text-gold/50 hover:text-gold text-sm transition-colors">
              أعمالنا
            </Link>
            <span className="text-gold/20">/</span>
            <span className="text-warm-gray text-sm">{project.title}</span>
          </div>
        </FadeUp>

        {/* Main image */}
        <FadeIn>
          <div className="blueprint-frame p-2 mb-4">
            <div className="relative aspect-[16/9] overflow-hidden bg-charcoal-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[0]}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* Thumbnail gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project.images.slice(1).map((img, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="blueprint-frame p-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${project.title} - صورة ${i + 2}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeUp>
          ))}

          {/* Blueprint sketch placeholder */}
          <FadeUp delay={0.3}>
            <div className="blueprint-frame p-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-deep flex items-center justify-center">
                {/* TODO: Replace with real blueprint/floorplan image */}
                <div className="text-center p-4">
                  <span className="text-gold/20 text-4xl block mb-2">📐</span>
                  <span className="text-gold/30 text-xs font-body">مخطط المشروع</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <DividerLine />

      {/* ────────── Info Panel ────────── */}
      <section className="section-container py-12 md:py-20" aria-label="تفاصيل المشروع">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Title + description */}
          <div className="lg:col-span-2 space-y-6">
            <FadeUp>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gold/40 font-heading text-sm">{project.category}</span>
                <span className="block w-8 h-px bg-gold/20" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-warm-gray text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </FadeUp>
          </div>

          {/* Blueprint-style info card */}
          <FadeUp delay={0.15}>
            <BlueprintFrame className="h-fit">
              <div className="space-y-4">
                <h3 className="font-heading text-sm text-gold/60 mb-4">بيانات المشروع</h3>
                {infoItems.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-gold/40 text-xs font-body">{item.label}</span>
                    <span className="text-warm-gray-light text-sm">{item.value}</span>
                    {i < infoItems.length - 1 && (
                      <div className="gold-divider w-full mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </BlueprintFrame>
          </FadeUp>
        </div>
      </section>

      {/* ────────── Similar Projects ────────── */}
      {similar.length > 0 && (
        <>
          <DividerLine />
          <section className="section-container py-12 md:py-20" aria-label="مشاريع مشابهة">
            <SectionHeader title="مشاريع مشابهة" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {similar.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
