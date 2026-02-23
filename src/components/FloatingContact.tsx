"use client";

/**
 * Floating contact button (bottom-left for RTL) styled to match gold lines.
 * NOT a loud green WhatsApp bubble – minimal and architectural.
 */
export default function FloatingContact() {
  return (
    <a
      href="/contact"
      className="fixed bottom-6 left-6 z-40 group"
      aria-label="تواصل معنا"
    >
      <span className="flex items-center gap-2 border border-gold/20 bg-charcoal/90 backdrop-blur-sm px-4 py-3 transition-all duration-300 hover:border-gold/50 hover:bg-charcoal">
        {/* Dot indicator */}
        <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
        <span className="text-gold text-sm font-body">تواصل</span>
      </span>
    </a>
  );
}
