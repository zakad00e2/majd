import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import BlueprintFrame from "@/components/BlueprintFrame";
import ContactForm from "./ContactForm";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع MAS Group لمناقشة مشروعك المعماري. استشارة مجانية للتصميم المعماري والتصميم الداخلي.",
};

/**
 * Contact page – Contact info, WhatsApp CTA, and form.
 */
export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="section-container pt-12 pb-8 md:pt-20 md:pb-12">
        <SectionHeader
          title="تواصل معنا"
          subtitle="نسعد بسماعك — شاركنا فكرتك وسنعمل معاً على تحويلها إلى واقع."
        />
      </section>

      {/* ────────── Contact Grid ────────── */}
      <section className="section-container pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info + CTA */}
          <FadeUp>
            <div className="space-y-8">
              <BlueprintFrame>
                <div className="space-y-6">
                  <h3 className="font-heading text-xl text-white font-bold">معلومات التواصل</h3>
                  <div className="gold-divider w-full" />

                  <ul className="space-y-4">
                    {/* TODO: Replace with real contact info */}
                    <li className="flex items-start gap-3">
                      <span className="text-gold/40 mt-0.5">✉</span>
                      <div>
                        <span className="text-gold/50 text-xs block mb-1">البريد الإلكتروني</span>
                        <a href="mailto:info@masgroup.co" className="text-warm-gray-light text-sm hover:text-gold transition-colors">
                          info@masgroup.co
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/40 mt-0.5">📱</span>
                      <div>
                        <span className="text-gold/50 text-xs block mb-1">الهاتف</span>
                        <a href="tel:+966500000000" className="text-warm-gray-light text-sm hover:text-gold transition-colors" dir="ltr">
                          +966 50 000 0000
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold/40 mt-0.5">🌐</span>
                      <div>
                        <span className="text-gold/50 text-xs block mb-1">الموقع الإلكتروني</span>
                        <a href="https://masgroup.co" target="_blank" rel="noopener noreferrer" className="text-warm-gray-light text-sm hover:text-gold transition-colors">
                          masgroup.co
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </BlueprintFrame>

              {/* WhatsApp-style CTA */}
              <FadeUp delay={0.1}>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border border-gold/30 bg-gold/5 py-4 px-6 transition-all duration-300 hover:bg-gold/10 hover:border-gold/50 group"
                  aria-label="تواصل عبر واتساب"
                >
                  <span className="text-2xl">💬</span>
                  <span className="text-gold font-body text-base group-hover:text-gold-light transition-colors">
                    تواصل معنا عبر واتساب
                  </span>
                </a>
              </FadeUp>

              {/* Working hours */}
              <FadeUp delay={0.2}>
                <BlueprintFrame>
                  <h4 className="font-heading text-sm text-gold/60 mb-3">أوقات العمل</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-warm-gray">
                      <span>الأحد – الخميس</span>
                      <span className="text-warm-gray-light">٩:٠٠ ص – ٦:٠٠ م</span>
                    </div>
                    <div className="gold-divider w-full" />
                    <div className="flex justify-between text-warm-gray">
                      <span>الجمعة – السبت</span>
                      <span className="text-warm-gray-dark">مغلق</span>
                    </div>
                  </div>
                </BlueprintFrame>
              </FadeUp>
            </div>
          </FadeUp>

          {/* Contact form */}
          <FadeUp delay={0.15}>
            <BlueprintFrame>
              <h3 className="font-heading text-xl text-white font-bold mb-6">أرسل رسالة</h3>
              <div className="gold-divider w-full mb-6" />
              <ContactForm />
            </BlueprintFrame>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
