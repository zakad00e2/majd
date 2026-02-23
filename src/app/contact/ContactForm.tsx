"use client";

import { useState, type FormEvent } from "react";

/**
 * Contact form component with mailto fallback.
 * Can be upgraded to an API route later.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Simple mailto approach – can be replaced with API route
    const subject = encodeURIComponent(`رسالة من ${formData.name} — MAS Group`);
    const body = encodeURIComponent(
      `الاسم: ${formData.name}\nالتواصل: ${formData.contact}\n\nالرسالة:\n${formData.message}`
    );
    window.open(`mailto:info@masgroup.co?subject=${subject}&body=${body}`, "_self");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  const inputClasses =
    "w-full bg-transparent border border-gold/15 px-4 py-3 text-warm-gray-light text-sm font-body placeholder:text-warm-gray-dark/50 focus:outline-none focus:border-gold/40 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-gold/50 text-xs font-body block mb-2">
          الاسم الكامل
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
          className={inputClasses}
          placeholder="أدخل اسمك"
        />
      </div>

      <div>
        <label htmlFor="contact" className="text-gold/50 text-xs font-body block mb-2">
          رقم الهاتف أو البريد الإلكتروني
        </label>
        <input
          id="contact"
          type="text"
          required
          value={formData.contact}
          onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
          className={inputClasses}
          placeholder="رقم الهاتف أو البريد"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-gold/50 text-xs font-body block mb-2">
          الرسالة
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className={`${inputClasses} resize-none`}
          placeholder="اكتب رسالتك هنا..."
        />
      </div>

      <button
        type="submit"
        className="w-full border border-gold/40 text-gold py-3 font-body text-sm transition-all duration-300 hover:bg-gold hover:text-charcoal disabled:opacity-40"
        disabled={submitted}
      >
        {submitted ? "تم الإرسال ✓" : "إرسال الرسالة"}
      </button>
    </form>
  );
}
