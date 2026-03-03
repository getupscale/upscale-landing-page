"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    // Default to Light Mode unless the user explicitly chose Dark Mode previously
    const shouldUseDark = stored === "dark";

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const onToggle = () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    const next = !currentlyDark;

    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full p-2 transition-colors hover:bg-surface-light dark:hover:bg-surface-dark"
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      <span className="material-symbols-outlined text-lg">contrast</span>
    </button>
  );
}
