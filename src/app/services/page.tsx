import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import BlueprintFrame from "@/components/BlueprintFrame";
import DividerLine from "@/components/DividerLine";
import { FadeUp } from "@/components/motion";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "خدمات MAS Group: تصميم معماري، تصميم داخلي، استشارات تصميم، وإدارة مشاريع. حلول معمارية شاملة لتحقيق رؤيتك.",
};

/**
 * Services page – Detailed service sections with blueprint frames.
 */
export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="section-container pt-12 pb-8 md:pt-20 md:pb-12">
        <SectionHeader
          title="خدماتنا"
          subtitle="نقدم حلولاً معمارية وتصميمية شاملة تغطي كل مراحل مشروعك من الفكرة حتى التسليم."
        />
      </section>

      {/* ────────── Service Sections ────────── */}
      <div className="section-container pb-16 md:pb-24 space-y-12">
        {services.map((service, index) => (
          <div key={service.id}>
            <FadeUp>
              <BlueprintFrame className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service header */}
                  <div className="space-y-4">
                    <span className="text-gold/30 font-heading text-5xl font-bold block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="text-gold block" aria-label={service.title}>
                      <service.icon size={48} strokeWidth={1} />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl text-white font-bold">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description + features */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-warm-gray text-base leading-relaxed">
                      {service.description}
                    </p>

                    <div className="gold-divider w-full" />

                    <div>
                      <h4 className="text-gold/50 text-xs font-body mb-4">ما نقدمه</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-warm-gray-light text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-gold/40 rotate-45 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-gold/30 text-gold px-5 py-2.5 font-body text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal"
                    >
                      اطلب استشارة
                      <span className="block w-4 h-px bg-current" />
                    </Link>
                  </div>
                </div>
              </BlueprintFrame>
            </FadeUp>

            {index < services.length - 1 && <DividerLine className="my-8" />}
          </div>
        ))}
      </div>

      {/* ────────── Final CTA ────────── */}
      <section className="section-container py-16 md:py-24 text-center">
        <FadeUp>
          <h2 className="font-heading text-2xl md:text-3xl text-white font-bold mb-4">
            لم تجد ما تبحث عنه؟
          </h2>
          <p className="text-warm-gray mb-8 max-w-lg mx-auto">
            تواصل معنا لمناقشة احتياجاتك الخاصة وسنجد الحل الأمثل لمشروعك.
          </p>
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
