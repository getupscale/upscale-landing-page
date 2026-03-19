"use client";

import { openWaitlist } from "@/components/waitlist/open-waitlist";
import { WAITLIST_CTA_TESTIDS } from "@/lib/waitlist-config";

export function CtaSection() {
  return (
    <section className="bg-[#111111] px-4 py-24 sm:px-6 lg:px-8" id="faq">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#1A1A1A] p-12 text-center md:p-20">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          <h2 className="relative z-10 mb-6 font-serif text-4xl text-[#D4CFC8] md:text-6xl">Stop Operating Blind.</h2>

          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-xl text-[#9E9A94]">
            Join the fastest growing companies who use Upscale to automate their financial nervous system.
          </p>

          <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={openWaitlist}
              data-testid={WAITLIST_CTA_TESTIDS.ctaPrimary}
              className="flex items-center justify-center rounded-full bg-green px-8 py-4 font-bold text-white shadow-xl transition-transform hover:scale-105 hover:bg-gray-800"
            >
              <span className="material-symbols-outlined mr-2">bolt</span>
              Get Early Access
            </button>
            <button
              type="button"
              onClick={openWaitlist}
              data-testid={WAITLIST_CTA_TESTIDS.ctaSecondary}
              className="flex items-center justify-center rounded-full border-2 border-[#3A3A38] bg-transparent px-8 py-4 font-bold text-[#9E9A94] transition-colors hover:bg-white/5"
            >
              Book a Demo
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
