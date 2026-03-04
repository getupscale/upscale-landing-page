import { AnimatedSection } from "./AnimatedSection";

export function AdvantageSection() {
  return (
    <section className="relative z-10 py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              The Upscale Advantage
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
              Why traditional operations software and fragmented AI tools fall short.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-panel overflow-hidden rounded-3xl p-1 shadow-2xl">
            <div className="rounded-2xl bg-surface/80 p-2 sm:p-6 backdrop-blur-md border border-border">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-border/50">
                <div className="flex items-center p-2 text-sm font-semibold text-text-muted sm:p-4">Feature / Metric</div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-surface2/30 p-2 text-center text-sm font-semibold text-text-muted sm:p-4">
                  Traditional Software
                  <span className="text-[10px] font-normal text-text-muted/60">(ERP, CRM)</span>
                </div>
                <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-green/10 p-2 text-center text-sm font-bold text-text-primary shadow-[inset_0_0_20px_rgba(124,184,122,0.1)] ring-1 ring-green/30 sm:p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-green/20 to-transparent opacity-50" />
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-green">bolt</span>
                    Upscale
                  </span>
                  <span className="relative z-10 mt-1 text-[10px] font-normal text-text-muted/80">AI Copilot</span>
                </div>
              </div>

              {/* Table Body */}
              <div className="flex flex-col gap-2 sm:gap-4 mt-4">
                {[
                  ["Data Processing", "Batch processing (Delayed)", "Real-time stream"],
                  ["Issue Resolution", "Requires manual intervention", "Autonomous execution"],
                  ["DSO (Days Sales Outstanding)", "45-60 days", "20-28 days"],
                  ["Involuntary Churn Recovery", "10-15%", "Up to 45%"],
                  ["Implementation Time", "Months (Heavy IT)", "Days (Self-serve)"],
                ].map(([metric, traditionalValue, upscaleValue]) => (
                  <div
                    key={metric}
                    className="grid grid-cols-3 gap-2 rounded-xl transition-colors hover:bg-surface2/50 sm:gap-4"
                  >
                    <div className="flex items-center p-3 text-xs font-medium text-text-primary sm:p-4 sm:text-sm">{metric}</div>
                    <div className="flex items-center justify-center rounded-xl bg-surface2/20 p-3 text-center text-xs text-text-muted sm:p-4 sm:text-sm">
                      {traditionalValue}
                    </div>
                    <div className="flex items-center justify-center rounded-xl bg-green/[0.05] p-3 text-center text-xs font-semibold text-text-primary ring-1 ring-green/20 transition-all hover:bg-green/10 sm:p-4 sm:text-sm">
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
