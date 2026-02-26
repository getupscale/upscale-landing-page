"use client";

import { useEffect, useState } from "react";
import { getNavbarShrinkPercent, getNavbarSideInsetPercent } from "@/lib/navbar-shrink";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [shrinkPercent, setShrinkPercent] = useState(10);

  useEffect(() => {
    const onScroll = () => {
      setShrinkPercent(getNavbarShrinkPercent(window.scrollY));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const sideInsetPercent = getNavbarSideInsetPercent(shrinkPercent);

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 transition-all duration-300" style={{ paddingInline: `${sideInsetPercent}%` }}>
      <div
        className="mx-auto flex h-20 w-full max-w-[1820px] items-center justify-between rounded-full border border-gray-300/60 bg-background-light/95 px-6 shadow-soft backdrop-blur-md transition-all duration-300 dark:border-gray-700/70 dark:bg-surface-dark/95 sm:px-10"
      >
        <div className="flex shrink-0 items-center">
          <span className="font-serif text-2xl font-bold tracking-tight">Upscale</span>
        </div>
        <div className="hidden items-center gap-10 md:flex">
          <a className="text-sm font-medium transition-colors hover:text-accent" href="#product">
            Product
          </a>
          <a className="text-sm font-medium transition-colors hover:text-accent" href="#how-it-works">
            How it works
          </a>
          <a className="text-sm font-medium transition-colors hover:text-accent" href="#security">
            Security
          </a>
          <a className="text-sm font-medium transition-colors hover:text-accent" href="#faq">
            FAQ
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800" href="#">
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
