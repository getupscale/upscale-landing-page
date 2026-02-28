"use client";

import { RotatingHeroHeadline } from "./rotating-hero-headline";
import { Card } from "@/components/ui/card";
import { openWaitlist } from "@/components/waitlist/open-waitlist";
import { WAITLIST_CTA_TESTIDS } from "@/lib/waitlist-config";

export function HeroSection() {
  return (
    <section
      id="product"
      className="mx-auto max-w-7xl px-4 pb-16 pt-32 text-center sm:px-6 md:pb-24 md:pt-40 lg:px-8"
    >
      <div className="mb-8 inline-flex items-center rounded-full border border-secondary/50 bg-secondary/30 px-3 py-1 text-xs font-medium text-primary dark:text-white">
        <span className="mr-2">✨</span> Outcome-priced operations agent
      </div>
      <RotatingHeroHeadline />
      <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
        Upscale is an AI-powered agent that diagnoses what&apos;s broken, recommends the highest-leverage
        moves, and executes - automatically.
      </p>
      <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={openWaitlist}
          data-testid={WAITLIST_CTA_TESTIDS.heroPrimary}
          className="flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-gray-800"
        >
          <span className="material-symbols-outlined mr-2 text-[20px]">bolt</span> Get Early Access
        </button>
        <button
          type="button"
          onClick={openWaitlist}
          data-testid={WAITLIST_CTA_TESTIDS.heroSecondary}
          className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3.5 font-medium text-text-light transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-surface-dark dark:text-text-dark dark:hover:bg-gray-800"
        >
          <span className="material-symbols-outlined mr-2 text-[20px]">play_circle</span> See How It Works
        </button>
      </div>

      <Card className="relative mx-auto mt-12 max-w-5xl overflow-hidden border-none bg-transparent shadow-none">
        <div className="absolute -top-20 left-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 rounded-full bg-secondary/20 blur-[100px] dark:bg-secondary/5" />
        <div className="relative rounded-2xl border border-white/20 bg-surface-light p-2 shadow-2xl ring-1 ring-gray-900/5 dark:border-white/10 dark:bg-surface-dark dark:ring-white/10">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-sm dark:bg-[#1A1A1A] sm:aspect-[16/9]">
            <div className="flex flex-col p-3 sm:absolute sm:inset-0 sm:p-6">
              <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800 sm:mb-6 sm:pb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="font-mono text-xs text-gray-400">dashboard_view.js</div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:h-full sm:grid-cols-12 sm:gap-2 md:gap-6">
                <div className="col-span-1 flex flex-col gap-2 border-b border-gray-100 pb-3 dark:border-gray-800 sm:col-span-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-2 md:col-span-2 md:gap-4 md:pr-4">
                  <div className="mb-4 h-8 w-24 rounded bg-gray-100 dark:bg-gray-800" />
                  <div className="h-4 w-full rounded bg-gray-50 dark:bg-gray-800/50" />
                  <div className="h-4 w-3/4 rounded bg-gray-50 dark:bg-gray-800/50" />
                  <div className="hidden h-4 w-5/6 rounded bg-gray-50 dark:bg-gray-800/50 sm:block" />
                  <div className="mt-auto h-12 w-full rounded-lg bg-secondary/20" />
                </div>
                <div className="col-span-1 flex flex-col gap-3 sm:col-span-6 md:col-span-7 md:gap-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="mb-1 text-xs text-gray-400 sm:text-sm">Total Cashflow Velocity</div>
                      <div className="font-serif text-base font-bold sm:text-3xl">$2,840,920.00</div>
                    </div>
                    <div className="flex items-center text-xs font-medium text-green-500 sm:text-sm">
                      <span className="material-symbols-outlined mr-1 text-xs sm:text-sm">trending_up</span> +12.4%
                    </div>
                  </div>
                  <div className="relative flex-grow overflow-hidden rounded-lg border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/30">
                    <svg
                      className="absolute bottom-0 left-0 right-0 h-32 w-full fill-current text-accent/20"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path d="M0,20 L0,10 C10,12 20,5 30,8 C40,11 50,2 60,6 C70,10 80,4 90,8 C95,10 100,0 100,0 L100,20 Z" />
                    </svg>
                    <svg
                      className="absolute bottom-0 left-0 right-0 h-32 w-full fill-none stroke-current stroke-2 text-accent"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path d="M0,10 C10,12 20,5 30,8 C40,11 50,2 60,6 C70,10 80,4 90,8 C95,10 100,0 100,0" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="h-24 rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/30">
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                        <span className="material-symbols-outlined text-sm">attach_money</span>
                      </div>
                      <div className="h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="h-24 rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/30">
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30">
                        <span className="material-symbols-outlined text-sm">analytics</span>
                      </div>
                      <div className="h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2 rounded-lg border border-secondary/20 bg-secondary/10 p-2 sm:col-span-3 md:gap-3 md:p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Upscale AI</span>
                  </div>
                  <div className="rounded border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-surface-dark">
                    <div className="mb-2 h-2 w-full rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-2 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div className="rounded border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-surface-dark">
                    <div className="mb-2 h-2 w-full rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-2 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <button className="mt-auto w-full rounded bg-primary py-2 text-center text-xs text-white">Execute</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-8 top-1/3 hidden w-64 rotate-2 transform rounded-xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-surface-dark lg:block">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900">
              <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <div>
              <div className="text-xs font-bold">Optimization Complete</div>
              <div className="text-[10px] text-gray-500">Reduced DSO by 14 days</div>
            </div>
          </div>
        </div>
        <div className="absolute -left-8 bottom-1/4 hidden -rotate-2 transform rounded-xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-surface-dark lg:block">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900">
              <span className="material-symbols-outlined text-sm">warning</span>
            </div>
            <div>
              <div className="text-xs font-bold">Churn Risk Detected</div>
              <div className="text-[10px] text-gray-500">Action: Automated retention play</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
