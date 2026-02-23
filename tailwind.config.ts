import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0B0A0A",
        "charcoal-deep": "#070504",
        gold: "#D4AD5F",
        "gold-light": "#E8CC8A",
        "gold-dark": "#B8922E",
        "warm-gray": "#B8B0A3",
        "warm-gray-dark": "#6B6560",
        "warm-gray-light": "#D4CFC8",
      },
      fontFamily: {
        heading: ["var(--font-readex-pro)", "sans-serif"],
        body: ["var(--font-ibm-plex-arabic)", "sans-serif"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(212,173,95,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,173,95,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "blueprint-grid": "60px 60px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
