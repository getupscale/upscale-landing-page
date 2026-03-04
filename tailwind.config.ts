import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        accent: "#4F46E5", // Indigo for high contrast CTAs
        background: "#000000",
        surface: "#09090B",
        "surface-light": "rgba(255, 255, 255, 0.05)",
        "surface-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"]
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      borderRadius: {
        DEFAULT: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 40px -10px rgba(79, 70, 229, 0.4)",
        glass: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      }
    }
  },
  plugins: [forms, typography]
};

export default config;
