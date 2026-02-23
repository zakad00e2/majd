import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import BlueprintFrame from "@/components/BlueprintFrame";
import DividerLine from "@/components/DividerLine";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرف على د.م. مجد مصطفى العويني - مهندسة معمارية متخصصة ومؤسسة MAS Group للهندسة المعمارية والتصميم الداخلي.",
};

/* ─── Experience highlights ─── */
const highlights = [
  { number: "+١٥", label: "سنة خبرة" },
  { number: "+١٢٠", label: "مشروع منجز" },
  { number: "+٨٠", label: "عميل سعيد" },
  { number: "٤", label: "خدمات رئيسية" },
];

/* ─── Tools & Skills ─── */
const skills = [
  "أوتوكاد",
  "ريفيت",
  "سكتش أب",
  "لوميون",
  "في-راي",
  "فوتوشوب",
  "إن ديزاين",
  "ثري دي ماكس",
  "BIM",
  "التصميم المستدام",
  "إدارة المشاريع",
  "التصميم الحضري",
];

/**
 * About page – Bio, philosophy, experience, skills.
 */
export default function AboutPage() {
  return (
    <>
      {/* ────────── Header ────────── */}
      <section className="section-container pt-12 pb-8 md:pt-20 md:pb-12">
        <SectionHeader
          title="من نحن"
          subtitle="شغف بالتصميم، التزام بالكمال."
        />
      </section>

      {/* ────────── Bio ────────── */}
      <section className="section-container py-8 md:py-12" aria-label="السيرة الذاتية">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeUp>
            <BlueprintFrame>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="block w-8 h-px bg-gold/40" />
                  <span className="text-gold/50 text-xs font-body">نبذة</span>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl text-white font-bold">
                  د.م. مجد مصطفى العويني
                </h3>

                <p className="text-warm-gray leading-relaxed">
                  {/* TODO: Replace with real bio */}
                  مهندسة معمارية ومصممة داخلية تتمتع بخبرة تزيد عن ١٥ عاماً في مجال الهندسة المعمارية والتصميم الداخلي.
                  مؤسسة MAS Group، تؤمن بأن العمارة ليست مجرد مبانٍ بل هي تجربة حسية متكاملة تؤثر في حياة الناس.
                </p>

                <p className="text-warm-gray leading-relaxed">
                  حاصلة على درجة الدكتوراه في الهندسة المعمارية، تتميز بنهجها الذي يجمع بين
                  الدقة التقنية والحس الفني الرفيع. عملت على مشاريع متنوعة تشمل الفلل السكنية
                  والمباني التجارية والفنادق والمساحات المكتبية.
                </p>

                <div className="flex items-center gap-3 text-gold/60 text-sm">
                  <span className="border border-gold/15 px-3 py-1">الهندسة المعمارية</span>
                  <span className="text-gold/20">+</span>
                  <span className="border border-gold/15 px-3 py-1">التصميم الداخلي</span>
                </div>
              </div>
            </BlueprintFrame>
          </FadeUp>

          {/* Design Philosophy */}
          <FadeUp delay={0.15}>
            <BlueprintFrame>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="block w-8 h-px bg-gold/40" />
                  <span className="text-gold/50 text-xs font-body">الفلسفة التصميمية</span>
                </div>

                <h3 className="font-heading text-2xl text-white font-bold">
                  التوازن بين الشكل والوظيفة
                </h3>

                <p className="text-warm-gray leading-relaxed">
                  نؤمن أن التصميم المعماري الناجح هو الذي يحقق التوازن المثالي بين الجمال البصري
                  والأداء الوظيفي. كل خط، كل مادة، كل فراغ له غرض ومعنى.
                </p>

                <ul className="space-y-3">
                  {[
                    "الإنسان محور التصميم",
                    "الاستدامة ليست خياراً بل ضرورة",
                    "التفاصيل تصنع الفرق",
                    "كل مشروع قصة فريدة",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-warm-gray-light text-sm">
                      <span className="w-1.5 h-1.5 bg-gold/40 rotate-45 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlueprintFrame>
          </FadeUp>
        </div>
      </section>

      <DividerLine />

      {/* ────────── Experience Highlights ────────── */}
      <section className="section-container py-12 md:py-20" aria-label="أرقام وإنجازات">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <StaggerItem key={i}>
              <div className="blueprint-frame p-6 text-center">
                <span className="block font-heading text-3xl md:text-4xl text-gold font-bold mb-2">
                  {item.number}
                </span>
                <span className="text-warm-gray-dark text-sm">{item.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <DividerLine />

      {/* ────────── Skills & Tools ────────── */}
      <section className="section-container py-12 md:py-20" aria-label="الأدوات والمهارات">
        <SectionHeader title="الأدوات والمهارات" />

        <StaggerContainer className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <StaggerItem key={i}>
              <span className="border border-gold/15 text-warm-gray text-sm px-4 py-2 hover:border-gold/30 hover:text-gold transition-all cursor-default">
                {skill}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
