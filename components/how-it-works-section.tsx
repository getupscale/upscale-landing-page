import { AnimatedSection } from "./AnimatedSection";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl tracking-tight text-text-primary dark:text-white md:text-5xl lg:text-6xl">
              An Engine for <span className="text-accent">Growth</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted dark:text-secondary">
              Upscale orchestrates your entire operational stack, transforming raw data into automated execution.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-12 md:grid-rows-2">
          {/* Card 1: Capture */}
          <AnimatedSection delay={0.1} className="md:col-span-8 md:row-span-1">
            <div className="group glass-panel relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 p-8 transition-all hover:bg-card/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface2/70 text-text-primary ring-1 ring-border transition-transform group-hover:scale-110 dark:bg-white/10 dark:text-white dark:ring-white/20">
                  <span className="material-symbols-outlined text-2xl">cloud_sync</span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-text-primary dark:text-white">Capture Data</h3>
                <p className="max-w-md text-text-muted dark:text-secondary">
                  Seamlessly integrates with your existing stack (Stripe, Salesforce, HubSpot) to build a unified operational graph in real-time.
                </p>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px] transition-all group-hover:bg-accent/30" />
            </div>
          </AnimatedSection>

          {/* Card 2: Diagnose */}
          <AnimatedSection delay={0.2} className="md:col-span-4 md:row-span-1">
            <div className="group glass-panel relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/60 p-8 transition-all hover:bg-card/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface2/70 text-text-primary ring-1 ring-border transition-transform group-hover:scale-110 dark:bg-white/10 dark:text-white dark:ring-white/20">
                  <span className="material-symbols-outlined text-2xl">psychology</span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-text-primary dark:text-white">Diagnose</h3>
                <p className="text-text-muted dark:text-secondary">
                  AI agents analyze workflows 24/7 to identify bottlenecks, payment failures, and churn risks invisible to humans.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3: Execute */}
          <AnimatedSection delay={0.3} className="md:col-span-12 md:row-span-1">
            <div className="group glass-panel relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 p-8 transition-all hover:bg-card/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] md:flex-row md:items-center md:justify-between md:p-12">
              <div className="relative z-10 max-w-xl">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                </div>
                <h3 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary dark:text-white md:text-4xl">Execute Fixes Automatically</h3>
                <p className="text-lg text-text-muted dark:text-secondary">
                  Auto-pilots the solution. From recovering failed payments to re-engaging stalled leads, Upscale handles it without manual intervention.
                </p>
              </div>

              {/* Minimalist Graphic Representation */}
              <div className="mt-8 flex flex-col gap-4 md:mt-0 md:w-1/3">
                <div className="flex items-center gap-4 rounded-xl border border-border bg-surface2/60 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-black/40">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <div className="flex-grow">
                    <div className="mb-1 h-2 w-full rounded-full bg-border/70 dark:bg-white/20" />
                    <div className="h-2 w-2/3 rounded-full bg-border/50 dark:bg-white/10" />
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-surface2/60 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-black/40">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <div className="flex-grow">
                    <div className="mb-1 h-2 w-3/4 rounded-full bg-border/70 dark:bg-white/20" />
                    <div className="h-2 w-1/2 rounded-full bg-border/50 dark:bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[100px] transition-all group-hover:bg-indigo-600/20" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
