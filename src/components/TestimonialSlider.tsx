"use client";

import { useState, useEffect, useCallback } from "react";
import { Testimonial } from "@/types";
import { FadeIn } from "./motion";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

/**
 * Simple elegant testimonial slider with auto-play.
 */
export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + count) % count);
  }, [count]);

  // Auto-play every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <FadeIn>
      <div className="blueprint-frame p-8 md:p-12 max-w-3xl mx-auto text-center relative">
        {/* Quote mark */}
        <span className="block text-gold/20 font-heading text-6xl mb-4 leading-none select-none">
          &ldquo;
        </span>

        {/* Quote text */}
        <blockquote className="text-warm-gray-light text-lg md:text-xl leading-relaxed mb-6 min-h-[80px]">
          {t.quote}
        </blockquote>

        {/* Author */}
        <div className="gold-divider w-16 mx-auto mb-4" />
        <cite className="not-italic">
          <span className="block text-white font-heading text-base">{t.name}</span>
          <span className="block text-gold/60 text-sm mt-1">{t.role}</span>
        </cite>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="شهادات العملاء">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`شهادة ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-gold/20 hover:bg-gold/40"
              }`}
            />
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gold/30 hover:text-gold transition-colors text-xl p-2"
          aria-label="الشهادة السابقة"
        >
          ›
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gold/30 hover:text-gold transition-colors text-xl p-2"
          aria-label="الشهادة التالية"
        >
          ‹
        </button>
      </div>
    </FadeIn>
  );
}
