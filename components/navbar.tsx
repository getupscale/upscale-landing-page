"use client";

import { useEffect, useState } from "react";
import { getNavbarShrinkPercent, getNavbarSideInsetPercent } from "@/lib/navbar-shrink";
import { openWaitlist } from "@/components/waitlist/open-waitlist";
import { WAITLIST_CTA_TESTIDS } from "@/lib/waitlist-config";
// import { ThemeToggle } from "@/components/ThemeToggle";

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
        className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between rounded-full glass-panel bg-white/10 backdrop-blur-md border border-white/20 px-6 transition-all duration-300 sm:px-8"
      >
        <div className="flex-1 flex justify-center pl-28">
          <div className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary" href="#product">
              Product
            </a>
            <a className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary" href="#how-it-works">
              How it works
            </a>
            <a className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary" href="#security">
              Security
            </a>
            <a className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary" href="#faq">
              FAQ
            </a>

            {/* <ThemeToggle/> */}
          </div>
        </div>

        <button
          type="button"
          onClick={openWaitlist}
          data-testid={WAITLIST_CTA_TESTIDS.navbar}
          className="rounded-full bg-text-primary px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Get Early Access
        </button>
        
      </div>
    </nav>
  );
}
