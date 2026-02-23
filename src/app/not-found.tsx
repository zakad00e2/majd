import Link from "next/link";

/**
 * Custom 404 page – Arabic, minimal, matching site style.
 */
export default function NotFound() {
  return (
    <section className="section-container min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
      <span className="font-heading text-8xl text-gold/20 font-bold mb-4">٤٠٤</span>
      <h1 className="font-heading text-2xl md:text-3xl text-white font-bold mb-4">
        الصفحة غير موجودة
      </h1>
      <p className="text-warm-gray mb-8 max-w-md">
        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة للصفحة الرئيسية.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-3 font-body text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal"
      >
        العودة للرئيسية
        <span className="block w-4 h-px bg-current" />
      </Link>
    </section>
  );
}
