"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Sticky minimal navbar with gold hover underline.
 * Fully RTL, Arabic-only.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-gold/10">
      <nav
        className="section-container flex items-center justify-between py-4 md:py-0 h-auto md:h-20"
        aria-label="التنقل الرئيسي"
      >
        {/* Logo / Brand */}
        <Link href="/" className="relative h-16 w-24 md:w-40" aria-label="الصفحة الرئيسية">
          <Image
            src="/logo.png"
            alt="MAS Group Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-body text-sm transition-colors duration-300 pb-1 ${
                    isActive
                      ? "text-gold"
                      : "text-warm-gray hover:text-gold"
                  }`}
                >
                  {link.label}
                  {/* Active / hover underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 inset-x-0 h-px bg-gold"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-px bg-gold transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal/95 backdrop-blur-md border-b border-gold/10 overflow-hidden"
          >
            <ul className="section-container py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-body text-lg py-2 border-b border-gold/5 transition-colors ${
                        isActive ? "text-gold" : "text-warm-gray hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
