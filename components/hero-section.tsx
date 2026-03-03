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
                <div className="col-span-1 flex flex-col gap-2 border-b border-gray-100 bg-secondary/10 pb-3 dark:border-gray-800 sm:col-span-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-2 md:col-span-2 md:gap-4 md:pr-4">
                  <div className="mb-4 flex h-8 w-24 items-center rounded bg-white px-2 dark:bg-gray-800">
                    <div className="h-2 w-2 rounded-full bg-accent mr-2" />
                    <div className="h-2 w-12 rounded bg-secondary dark:bg-gray-600" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md bg-white/50 py-1 pl-1 pr-2 shadow-sm dark:bg-white/5">
                    <span className="material-symbols-outlined text-[14px] text-accent">dashboard</span>
                    <span className="text-[10px] font-bold text-primary dark:text-gray-300">Overview</span>
                  </div>
                  <div className="flex items-center gap-2 py-1 pl-1">
                    <span className="material-symbols-outlined text-[14px] text-gray-400">payments</span>
                    <span className="text-[10px] font-medium text-gray-500">Cashflow</span>
                  </div>
                  <div className="flex items-center gap-2 py-1 pl-1">
                    <span className="material-symbols-outlined text-[14px] text-gray-400">receipt_long</span>
                    <span className="text-[10px] font-medium text-gray-500">Invoices</span>
                  </div>
                  <div className="flex items-center gap-2 py-1 pl-1">
                    <span className="material-symbols-outlined text-[14px] text-gray-400">warning</span>
                    <span className="text-[10px] font-medium text-gray-500">Risk Desk</span>
                  </div>
                  <div className="flex items-center gap-2 py-1 pl-1">
                    <span className="material-symbols-outlined text-[14px] text-gray-400">monitoring</span>
                    <span className="text-[10px] font-medium text-gray-500">Analytics</span>
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="h-[1px] w-full bg-gray-100 dark:bg-gray-800" />
                    <div className="flex items-center gap-2 py-1">
                      <span className="material-symbols-outlined text-[14px] text-gray-400">settings</span>
                      <span className="text-[10px] font-medium text-gray-400">Settings</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3 sm:col-span-6 md:col-span-7 md:gap-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="mb-1 text-xs text-gray-400 sm:text-sm">Total Cashflow Velocity</div>
                      <div className="font-serif text-base sm:text-3xl font-medium">$2,840,920.00</div>
                    </div>
                    <div className="flex items-center text-xs font-medium text-green-500 sm:text-sm">
                      <span className="material-symbols-outlined mr-1 text-xs sm:text-sm">trending_up</span> +12.4%
                    </div>
                  </div>
                  <div className="relative flex-grow overflow-hidden rounded-lg border border-gray-100 bg-gray-50/50 p-2 dark:border-gray-800 dark:bg-gray-800/30">
                    <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-[0.03] dark:opacity-[0.05]">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="border-r border-black dark:border-white" />
                      ))}
                    </div>
                    <div className="absolute inset-0 grid grid-rows-4 gap-0 opacity-[0.03] dark:opacity-[0.05]">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="border-b border-black dark:border-white" />
                      ))}
                    </div>
                    <svg
                      className="absolute bottom-0 left-0 right-0 h-32 w-full fill-current text-accent/10"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path d="M0,20 L0,14 C5,13 10,15 15,13 C20,11 25,12 30,10 C35,8 40,11 45,9 C50,7 55,8 60,11 C65,14 70,12 75,10 C80,8 85,9 90,6 C95,3 100,5 100,5 L100,20 Z" />
                    </svg>
                    <svg
                      className="absolute bottom-0 left-0 right-0 h-32 w-full fill-none stroke-current stroke-[1.5] text-accent"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                    >
                      <path d="M0,14 C5,13 10,15 15,13 C20,11 25,12 30,10 C35,8 40,11 45,9 C50,7 55,8 60,11 C65,14 70,12 75,10 C80,8 85,9 90,6 C95,3 100,5 100,5" />
                    </svg>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-2 text-[8px] text-gray-400">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="h-24 rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-800/30">
                      <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      </div>
                      <div className="text-[10px] text-gray-400">Avg. DSO</div>
                      <div className="text-sm font-bold">24 Days</div>
                      <div className="text-[8px] text-green-500">↓ 4 days from last mo</div>
                    </div>
                    <div className="h-24 rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-800/30">
                      <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30">
                        <span className="material-symbols-outlined text-[14px]">account_balance_wallet</span>
                      </div>
                      <div className="text-[10px] text-gray-400">Net Burn</div>
                      <div className="text-sm font-bold">$124,000</div>
                      <div className="text-[8px] text-gray-400">On track for Q4</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-2 rounded-lg border border-secondary/20 bg-secondary/10 p-2 sm:col-span-3 md:gap-3 md:p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Upscale AI</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="rounded border border-gray-100 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-surface-dark">
                      <div className="mb-1 text-[10px] font-bold text-gray-800 dark:text-gray-200">Flagged: 12 Overdue Invoices</div>
                      <div className="text-[8px] text-gray-400">Aging bucket &gt; 60 days. Risk: $42k</div>
                    </div>
                    <div className="rounded border border-gray-100 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-surface-dark">
                      <div className="mb-1 text-[10px] font-bold text-gray-800 dark:text-gray-200">Action: Net-30 Optimization</div>
                      <div className="text-[8px] text-gray-400">Switch 4 vendors to early payment terms.</div>
                    </div>
                    <div className="rounded border border-gray-100 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-surface-dark">
                      <div className="mb-1 text-[10px] font-bold text-gray-800 dark:text-gray-200">Insight: Churn Signal</div>
                      <div className="text-[8px] text-gray-400">Stripe activity dropped 20% for top client.</div>
                    </div>
                  </div>
                  <button className="mt-auto w-full rounded bg-primary py-2 text-center text-xs font-bold text-white shadow-md hover:bg-gray-800">Execute Actions</button>
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
