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
        primary: "#2E2E2E",
        secondary: "#E8DCC8",
        accent: "#9D8C70",
        "background-light": "#FDFBF7",
        "background-dark": "#121212",
        "surface-light": "#F4F4F4",
        "surface-dark": "#1E1E1E",
        "text-light": "#2E2E2E",
        "text-dark": "#E5E5E5"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"]
      },
      borderRadius: {
        DEFAULT: "12px",
        xl: "16px",
        "2xl": "24px"
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 40px -10px rgba(232, 220, 200, 0.5)"
      }
    }
  },
  plugins: [forms, typography]
};

export default config;
