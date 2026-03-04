import { AnimatedSection } from "./AnimatedSection";

export function AdvantageSection() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
              The Upscale Advantage
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
              Why traditional operations software and fragmented AI tools fall short.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-panel overflow-hidden rounded-3xl p-1 shadow-2xl">
            <div className="rounded-2xl bg-surface/80 p-2 sm:p-6 backdrop-blur-md">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pb-6">
                <div className="flex items-center p-2 text-sm font-semibold text-secondary sm:p-4">Feature / Metric</div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-white/[0.02] p-2 text-center text-sm font-semibold text-secondary sm:p-4">
                  Traditional Software
                  <span className="text-[10px] font-normal text-secondary/60">(ERP, CRM)</span>
                </div>
                <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-accent/10 p-2 text-center text-sm font-bold text-white shadow-[inset_0_0_20px_rgba(79,70,229,0.2)] ring-1 ring-accent/30 sm:p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-accent">bolt</span>
                    Upscale
                  </span>
                  <span className="relative z-10 mt-1 text-[10px] font-normal text-secondary/80">AI Copilot</span>
                </div>
              </div>

              {/* Table Body */}
              <div className="flex flex-col gap-2 sm:gap-4">
                {[
                  ["Data Processing", "Batch processing (Delayed)", "Real-time stream"],
                  ["Issue Resolution", "Requires manual intervention", "Autonomous execution"],
                  ["DSO (Days Sales Outstanding)", "45-60 days", "20-28 days"],
                  ["Involuntary Churn Recovery", "10-15%", "Up to 45%"],
                  ["Implementation Time", "Months (Heavy IT)", "Days (Self-serve)"],
                ].map(([metric, traditionalValue, upscaleValue]) => (
                  <div
                    key={metric}
                    className="grid grid-cols-3 gap-2 rounded-xl transition-colors hover:bg-white/[0.02] sm:gap-4"
                  >
                    <div className="flex items-center p-3 text-xs font-medium text-white sm:p-4 sm:text-sm">{metric}</div>
                    <div className="flex items-center justify-center rounded-xl bg-white/[0.01] p-3 text-center text-xs text-secondary sm:p-4 sm:text-sm">
                      {traditionalValue}
                    </div>
                    <div className="flex items-center justify-center rounded-xl bg-accent/[0.05] p-3 text-center text-xs font-semibold text-white ring-1 ring-accent/20 transition-all hover:bg-accent/10 sm:p-4 sm:text-sm">
                      {upscaleValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
