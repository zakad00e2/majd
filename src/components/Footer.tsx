import Link from "next/link";
import { navLinks } from "@/data/navigation";

/**
 * Footer in "credits" style: MAS Group branding + quick links + social.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-charcoal-deep" role="contentinfo">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-white">MAS</span>
              <span className="text-gold/40 text-xs font-body mr-2">GROUP</span>
            </Link>
            <p className="text-warm-gray-dark text-sm leading-relaxed max-w-xs">
              د.م. مجد مصطفى العويني
              <br />
              الهندسة المعمارية + التصميم الداخلي
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm text-gold/60 mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray-dark text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-heading text-sm text-gold/60 mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-warm-gray-dark text-sm">
              {/* TODO: Replace with real contact info */}
              <li>
                <a href="mailto:info@masgroup.co" className="hover:text-gold transition-colors">
                  info@masgroup.co
                </a>
              </li>
              <li>
                <a href="tel:+966500000000" className="hover:text-gold transition-colors" dir="ltr">
                  +966 50 000 0000
                </a>
              </li>
              <li>
                <a
                  href="https://masgroup.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  masgroup.co
                </a>
              </li>
            </ul>

            {/* Social icons (optional) */}
            <div className="flex gap-4 mt-4">
              {/* TODO: Replace with real social links */}
              {["تويتر", "انستقرام", "لينكدإن"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-8 h-8 border border-gold/15 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/40 transition-all text-xs"
                  aria-label={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider w-full mt-10 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-warm-gray-dark text-xs">
          <p>© {new Date().getFullYear()} MAS Group — جميع الحقوق محفوظة</p>
          <p className="text-gold/30">
            الهندسة المعمارية + التصميم الداخلي
          </p>
        </div>
      </div>
    </footer>
  );
}
