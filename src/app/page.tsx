import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import DividerLine from "@/components/DividerLine";
import { FadeUp, FadeIn } from "@/components/motion";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

/**
 * Home page – Hero, Featured Projects, Services, Testimonials, Final CTA.
 */
export default function HomePage() {
  return (
    <>
      {/* ────────────────── HERO SECTION ────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="الرئيسية">
        {/* Blueprint line overlays in hero background */}
        <div className="absolute inset-0" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-lines" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="100" x2="100" y2="0" stroke="#D4AD5F" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-lines)" />
          </svg>
          <div className="absolute top-20 right-12 w-20 h-20 border-t border-r border-gold/10" />
          <div className="absolute bottom-20 left-12 w-20 h-20 border-b border-l border-gold/10" />
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="block w-px h-4 bg-gold/10" />
            ))}
          </div>
        </div>

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
          {/* Text content */}
          <div className="space-y-6">
            <FadeUp>
              <div className="flex items-center gap-3 mb-2">
                <span className="block w-10 h-px bg-gold/40" />
                <span className="text-gold/60 font-body text-xs tracking-widest">MAS GROUP</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                د.م. مجد مصطفى
                <br />
                <span className="text-gold">العويني</span>
              </h1>
            </FadeUp>

            {/* <FadeUp delay={0.2}>
              <p className="text-warm-gray-light text-lg md:text-xl font-body italic max-w-lg">
                &ldquo;Professional Architect Seeking for Perfection&rdquo;
              </p>
            </FadeUp> */}

            <FadeUp delay={0.3}>
              <p className="text-warm-gray text-base md:text-lg leading-relaxed max-w-lg">
                مكتب معماري متخصص في التصميم المعماري والتصميم الداخلي.
                نسعى لتحويل الأفكار إلى مساحات ملهمة تجمع بين الإبداع والوظيفة
                بأسلوب يعكس هوية كل مشروع.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-3 font-body text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal"
                >
                  مشاهدة الأعمال
                  <span className="block w-4 h-px bg-current" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold px-6 py-3 font-body text-sm transition-all duration-300 hover:bg-gold/20"
                >
                  تواصل
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="flex items-center gap-3 pt-4 text-warm-gray-dark text-xs">
                <span className="border border-gold/10 px-3 py-1">الهندسة المعمارية</span>
                <span className="text-gold/20">+</span>
                <span className="border border-gold/10 px-3 py-1">التصميم الداخلي</span>
              </div>
            </FadeUp>
          </div>

          {/* Featured project image */}
          <FadeIn delay={0.3}>
            <div className="relative blueprint-frame p-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                  alt="مشروع مميز - MAS Group"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              </div>
              <div className="absolute -bottom-3 -left-3 text-gold/20 text-[10px] font-body">
                X: 24.7136 — Y: 46.6753
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="text-gold/30 text-xs font-body">اكتشف</span>
          <span className="block w-px h-8 bg-gold/20 animate-pulse" />
        </div>
      </section>

      <DividerLine />

      {/* ────────────────── FEATURED PROJECTS ────────────────── */}
      <section className="section-container py-16 md:py-24" id="projects" aria-label="أعمال مميزة">
        <SectionHeader
          title="أعمال مميزة"
          subtitle="مجموعة مختارة من مشاريعنا التي تعكس شغفنا بالتفاصيل وحرصنا على الكمال المعماري."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <FadeUp>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold/60 hover:text-gold font-body text-sm transition-colors border-b border-gold/20 pb-1"
            >
              جميع الأعمال
              <span className="block w-4 h-px bg-current" />
            </Link>
          </div>
        </FadeUp>
      </section>

      <DividerLine />

      {/* ────────────────── SERVICES ────────────────── */}
      <section className="section-container py-16 md:py-24" id="services" aria-label="خدماتنا">
        <SectionHeader
          title="خدماتنا"
          subtitle="نقدم مجموعة متكاملة من الخدمات المعمارية والتصميمية لتحقيق رؤيتك."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <DividerLine />

      {/* ────────────────── TESTIMONIALS ────────────────── */}
      <section className="section-container py-16 md:py-24" aria-label="شهادات العملاء">
        <SectionHeader
          title="ماذا يقول عملاؤنا"
          subtitle="ثقة عملائنا هي أكبر إنجازاتنا."
        />
        <TestimonialSlider testimonials={testimonials} />
      </section>

      <DividerLine />

      {/* ────────────────── FINAL CTA ────────────────── */}
      <section className="section-container py-20 md:py-28 text-center" aria-label="ابدأ مشروعك">
        <FadeUp>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            جاهزين نبدأ مشروعك؟
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-warm-gray text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            تواصل معنا اليوم لنناقش فكرتك ونحولها إلى تصميم استثنائي يعكس رؤيتك.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-gold/40 text-gold px-8 py-4 font-body text-base transition-all duration-300 hover:bg-gold hover:text-charcoal"
          >
            تواصل معنا
            <span className="block w-6 h-px bg-current" />
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
