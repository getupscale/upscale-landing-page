"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type FeatureTab = {
  id: string;
  label: string;
  icon: string;
  headline: string;
  bullets: string[];
};

const TABS: FeatureTab[] = [
  {
    id: "diagnose",
    label: "Diagnose",
    icon: "search",
    headline: "See what’s broken before it shows up in revenue.",
    bullets: [
      "Unify Stripe, CRM, billing, and support signals.",
      "Spot leakage: DSO drift, churn risk, failed payments.",
      "Turn noise into a prioritized queue of issues."
    ]
  },
  {
    id: "recommend",
    label: "Recommend",
    icon: "psychology",
    headline: "Get high-leverage moves, not another dashboard.",
    bullets: [
      "Rank fixes by impact and time-to-value.",
      "Generate playbooks your team can trust.",
      "Explain the why with evidence, not vibes."
    ]
  },
  {
    id: "execute",
    label: "Execute",
    icon: "bolt",
    headline: "From insight to action in minutes.",
    bullets: [
      "Trigger workflows: outreach, billing retries, alerts.",
      "Ship changes with human-in-the-loop safety.",
      "Keep every action auditable and reversible."
    ]
  },
  {
    id: "measure",
    label: "Measure",
    icon: "query_stats",
    headline: "Prove ROI with clean, simple metrics.",
    bullets: [
      "Track DSO, recovery rate, and churn risk over time.",
      "Capture before/after baselines automatically.",
      "Share board-ready summaries as one pagers."
    ]
  }
];

export function FeaturesTabsSection() {
  const groupId = useId();
  const [active, setActive] = useState(TABS[0]?.id ?? "diagnose");

  const activeTab = useMemo(() => TABS.find((t) => t.id === active) ?? TABS[0], [active]);
  const tabIds = useMemo(() => {
    const base = `features-${groupId}`;
    return {
      list: `${base}-tablist`,
      trigger: (id: string) => `${base}-tab-${id}`,
      panel: (id: string) => `${base}-panel-${id}`
    };
  }, [groupId]);

  return (
    <section id="features" className="bg-background-light px-4 py-20 dark:bg-background-dark sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center rounded-full border border-secondary/60 bg-secondary/30 px-3 py-1 text-xs font-medium text-primary dark:text-text-dark">
            Built for modern operators
          </div>
          <h2 className="font-serif text-4xl tracking-tight text-primary dark:text-text-dark sm:text-5xl">
            Notion-like clarity. Real execution.
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A single workflow from diagnosis to action—designed to feel calm, structured, and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div
              role="tablist"
              aria-label="Features"
              id={tabIds.list}
              data-testid="features-tabs-row"
              className="no-scrollbar -mx-2 flex gap-2 overflow-x-auto px-2 pb-2"
            >
              {TABS.map((tab) => {
                const selected = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={tabIds.panel(tab.id)}
                    id={tabIds.trigger(tab.id)}
                    onClick={() => setActive(tab.id)}
                    data-testid={`features-tab-${tab.id}`}
                    className={cn(
                      "flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
                      selected
                        ? "border-accent bg-secondary/30 text-primary shadow-sm dark:text-text-dark"
                        : "border-gray-200 bg-white/50 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-400 dark:hover:bg-white/5"
                    )}
                  >
                    <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={tabIds.panel(activeTab.id)}
              aria-labelledby={tabIds.trigger(activeTab.id)}
              data-testid={`features-panel-${activeTab.id}`}
              className="mt-5"
            >
              <h3 className="font-serif text-2xl text-primary dark:text-text-dark">{activeTab.headline}</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {activeTab.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="material-symbols-outlined mt-0.5 text-[18px] text-accent">check</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["SOC2-minded", "Human-in-the-loop", "Evidence-backed"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-secondary/60 bg-secondary/20 px-3 py-1 text-xs font-medium text-primary/80 dark:text-text-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="relative overflow-hidden border-none bg-transparent shadow-none">
              <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-secondary/30 blur-[60px] dark:bg-secondary/10" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-surface-light/50 p-3 shadow-2xl dark:border-white/10 dark:bg-surface-dark">
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-[#161616]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      <div className="font-mono text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">Live signals</div>
                    </div>
                    <div className="rounded-lg border border-gray-100 px-3 py-1 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-300">
                      {activeTab.label}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-gray-100 bg-[#FDFBF7]/50 p-5 dark:border-gray-800 dark:bg-gray-800/30">
                      <div className="font-mono text-[10px] uppercase tracking-tighter text-gray-400 dark:text-gray-500">Top issue</div>
                      <div className="mt-1 font-serif text-xl text-primary/90 dark:text-white">DSO creeping up</div>
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
                        <div className="font-mono text-[10px] uppercase tracking-tighter text-gray-400">Impact</div>
                        <div className="font-mono text-[10px] font-bold uppercase text-green-600">High</div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-[#FDFBF7]/50 p-5 dark:border-gray-800 dark:bg-gray-800/30">
                      <div className="font-mono text-[10px] uppercase tracking-tighter text-gray-400 dark:text-gray-500">Recommended move</div>
                      <div className="mt-1 font-serif text-xl text-primary/90 dark:text-white">Automate retry + outreach</div>
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
                        <div className="font-mono text-[10px] uppercase tracking-tighter text-gray-400">ETA</div>
                        <div className="font-mono text-[10px] font-bold uppercase text-primary dark:text-text-dark">15 min</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-secondary/20 bg-secondary/5 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">Action queue</div>
                      <div className="font-mono text-[11px] text-gray-400">3 pending</div>
                    </div>
                    <div className="space-y-3">
                      {["Failed payments spike", "Renewal risk: 5 accounts", "Invoice aging: 30+ days"].map((item) => (
                        <div key={item} className="flex items-center justify-between rounded-xl border border-gray-50 bg-white px-4 py-3 text-sm shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                          <div className="flex items-center gap-3">
                            <div className="h-1.5 w-1.5 rounded-full border border-gray-400" />
                            <span className="font-mono text-gray-700 dark:text-gray-200">{item}</span>
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Review</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
