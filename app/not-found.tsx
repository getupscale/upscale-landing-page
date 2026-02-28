"use client";

import Link from "next/link";
import { openWaitlist } from "@/components/waitlist/open-waitlist";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background-light px-4 py-24 dark:bg-background-dark sm:px-6">
      <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-secondary/40 bg-secondary/20 p-8 text-center sm:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#2E2E2E 1px, transparent 1px)", backgroundSize: "18px 18px" }} />

        <p className="relative z-10 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70 dark:text-text-dark/70">Error 404</p>
        <h1 className="relative z-10 mb-4 font-serif text-4xl text-primary dark:text-text-dark sm:text-6xl">Page not found</h1>
        <p className="relative z-10 mx-auto mb-10 max-w-xl text-base text-primary/80 dark:text-text-dark/80 sm:text-lg">
          The page you are looking for does not exist, but Upscale is still here to diagnose what is broken and automate what matters.
        </p>

        <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center rounded-full border border-primary/30 bg-white px-8 py-3.5 font-medium text-primary transition-colors hover:bg-white/70 dark:border-text-dark/30 dark:bg-surface-dark dark:text-text-dark dark:hover:bg-gray-800"
          >
            Go home
          </Link>
          <button
            type="button"
            onClick={openWaitlist}
            className="flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-gray-800"
          >
            <span className="material-symbols-outlined mr-2 text-[20px]">bolt</span>
            Get Early Access
          </button>
        </div>
      </section>
    </main>
  );
}
