"use client";

import { useEffect, useRef, useState } from "react";
import { getNavbarShrinkPercent, getNavbarSideInsetPercent, NAVBAR_SHRINK_MIN_PERCENT } from "@/lib/navbar-shrink";
import { openWaitlist } from "@/components/waitlist/open-waitlist";
import { WAITLIST_CTA_TESTIDS } from "@/lib/waitlist-config";
// import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [shrinkPercent, setShrinkPercent] = useState(NAVBAR_SHRINK_MIN_PERCENT);
  const [isMd, setIsMd] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      const md = window.innerWidth >= 1024;
      setIsMd(md);
      setShrinkPercent(md ? getNavbarShrinkPercent(window.scrollY) : NAVBAR_SHRINK_MIN_PERCENT);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Close drawer on Escape
  useEffect(() => {
    if (!drawerOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    hamburgerRef.current?.focus();
  };

  const sideInsetPercent = isMd ? getNavbarSideInsetPercent(shrinkPercent) : 0;

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-4 z-50 transition-all duration-300"
        style={{ paddingInline: `${sideInsetPercent}%` }}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between rounded-full glass-panel bg-white/10 backdrop-blur-md border border-white/20 px-6 transition-all duration-300 sm:px-8">
          {/* Desktop nav links */}
          <div className="flex-1 flex justify-center md:pl-28">
            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                  href={href}
                >
                  {label}
                </a>
              ))}
              {/* <ThemeToggle/> */}
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((o) => !o)}
            className="mr-3 flex flex-col items-center justify-center gap-[5px] rounded-md p-2 text-text-primary transition-colors hover:bg-white/10 md:hidden"
          >
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${drawerOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${drawerOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${drawerOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>

          <button
            type="button"
            onClick={openWaitlist}
            data-testid={WAITLIST_CTA_TESTIDS.navbar}
            className="hidden md:inline-flex rounded-full bg-text-primary px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col glass-panel bg-white/10 backdrop-blur-md border-l border-white/20 transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-end p-5">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            className="rounded-md p-2 text-text-primary hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col px-6 py-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeDrawer}
                  className="block py-4 text-lg font-medium text-text-muted border-b border-white/10 transition-colors hover:text-text-primary last:border-0"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer CTA */}
        <div className="mt-auto px-6 pb-10">
          <button
            type="button"
            onClick={() => { closeDrawer(); openWaitlist(); }}
            className="w-full rounded-full bg-text-primary px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </>
  );
}
