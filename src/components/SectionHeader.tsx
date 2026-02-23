import { FadeUp } from "./motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "start";
}

/**
 * Reusable section header component with gold accent line.
 * Used across all pages for consistent heading style.
 */
export default function SectionHeader({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <FadeUp className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass} ${className}`}>
      {/* Measurement line decoration */}
      <div className="flex items-center gap-3">
        <span className="block w-8 h-px bg-gold/30" />
        <span className="text-gold/50 font-body text-xs tracking-widest">MAS</span>
        <span className="block w-8 h-px bg-gold/30" />
      </div>

      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-warm-gray text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Bottom accent line */}
      <div className="gold-divider w-24 mt-2" />
    </FadeUp>
  );
}
