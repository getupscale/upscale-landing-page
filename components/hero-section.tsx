"use client";

import { RotatingHeroHeadline } from "./rotating-hero-headline";
import { openWaitlist } from "@/components/waitlist/open-waitlist";
import { WAITLIST_CTA_TESTIDS } from "@/lib/waitlist-config";

import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  return (
    <section
      id="product"
      className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-40 text-center sm:px-6 md:pb-24 md:pt-48 lg:px-8"
    >
      <AnimatedSection>
        <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
          <span className="mr-2">✨</span> Autonomous Finance Operations
        </div>
        <RotatingHeroHeadline />
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
          Upscale is an AI-powered agent that diagnoses what&apos;s broken, recommends the highest-leverage
          moves, and executes - automatically.
        </p>
        <div className="mb-24 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={openWaitlist}
            data-testid={WAITLIST_CTA_TESTIDS.heroPrimary}
            className="flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.6)]"
          >
            <span className="material-symbols-outlined mr-2 text-[20px]">bolt</span> Get Early Access
          </button>
          <button
            type="button"
            onClick={openWaitlist}
            data-testid={WAITLIST_CTA_TESTIDS.heroSecondary}
            className="glass-panel flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
          >
            <span className="material-symbols-outlined mr-2 text-[20px]">play_circle</span> See How It Works
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="glass-panel relative overflow-hidden rounded-2xl p-1 shadow-2xl">
            <div className="relative overflow-hidden rounded-xl bg-surface/80 shadow-sm backdrop-blur-md sm:aspect-[16/9]">
              <div className="flex flex-col p-3 sm:absolute sm:inset-0 sm:p-6">

                {/* Window Controls */}
                <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3 sm:mb-6 sm:pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 font-mono text-xs text-secondary/60">dashboard_overview.tsx</div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:h-full sm:grid-cols-12 sm:gap-6">

                  {/* Left Sidebar */}
                  <div className="col-span-1 flex flex-col gap-2 sm:col-span-3 sm:border-r sm:border-white/10 sm:pr-4">
                    <div className="flex items-center gap-3 rounded-lg bg-white/5 p-2 text-white">
                      <span className="material-symbols-outlined text-[18px]">dashboard</span>
                      <span className="text-sm font-medium">Overview</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg p-2 text-secondary transition-colors hover:bg-white/5 hover:text-white">
                      <span className="material-symbols-outlined text-[18px]">payments</span>
                      <span className="text-sm font-medium">Cashflow</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg p-2 text-secondary transition-colors hover:bg-white/5 hover:text-white">
                      <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                      <span className="text-sm font-medium">Invoices</span>
                    </div>
                    <div className="mt-auto flex items-center gap-3 rounded-lg p-2 text-secondary transition-colors hover:bg-white/5 hover:text-white">
                      <span className="material-symbols-outlined text-[18px]">settings</span>
                      <span className="text-sm font-medium">Settings</span>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="col-span-1 flex flex-col gap-4 sm:col-span-9">
                    {/* Top Stats */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                        <span className="text-xs font-medium text-secondary">Total Cashflow</span>
                        <span className="text-2xl font-semibold tracking-tight text-white">$2.84M</span>
                        <span className="text-xs font-medium text-green-400">+12.4% vs last mo</span>
                      </div>
                      <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                        <span className="text-xs font-medium text-secondary">Active Runways</span>
                        <span className="text-2xl font-semibold tracking-tight text-white">18 mos</span>
                        <span className="text-xs font-medium text-secondary">Stable</span>
                      </div>
                      <div className="hidden flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:flex">
                        <span className="text-xs font-medium text-secondary">AI Actions</span>
                        <span className="text-2xl font-semibold tracking-tight text-white">14</span>
                        <span className="text-xs font-medium text-accent">Pending approval</span>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="relative flex-grow overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] p-4">
                      <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-10">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="border-r border-white/20" />
                        ))}
                      </div>
                      <svg
                        className="absolute bottom-0 left-0 right-0 h-40 w-full fill-accent/20 stroke-accent stroke-2"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 20"
                      >
                        <path d="M0,20 L0,14 C5,13 10,15 15,13 C20,11 25,12 30,10 C35,8 40,11 45,9 C50,7 55,8 60,11 C65,14 70,12 75,10 C80,8 85,9 90,6 C95,3 100,5 100,5 L100,20 Z" />
                      </svg>
                    </div>

                    {/* AI Insights Strip */}
                    <div className="flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/5 p-3">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                      <span className="text-sm font-medium text-white">Upscale AI has optimized 4 payment routes. Savings: $4,200/mo.</span>
                      <button className="ml-auto rounded-md bg-white px-3 py-1 text-xs font-bold text-black transition-transform hover:scale-105">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <div className="glass-panel absolute -right-6 top-1/4 hidden animate-[fadeInUp_1s_ease-out_0.5s_forwards] flex-col gap-1 rounded-xl p-4 opacity-0 shadow-2xl lg:flex">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <span className="material-symbols-outlined text-[16px] text-green-400">check_circle</span>
              Invoice Paid
            </div>
            <div className="text-[10px] text-secondary">Acme Corp • $12,000</div>
          </div>

          <div className="glass-panel absolute -left-6 bottom-1/4 hidden animate-[fadeInUp_1s_ease-out_0.7s_forwards] flex-col gap-1 rounded-xl p-4 opacity-0 shadow-2xl lg:flex">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <span className="material-symbols-outlined text-[16px] text-accent">bolt</span>
              Optimization Found
            </div>
            <div className="text-[10px] text-secondary">Net-30 Terms applied</div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
