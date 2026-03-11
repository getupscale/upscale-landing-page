import Image from "next/image";

export function AutopilotSection() {
  return (
    <section className="overflow-hidden py-24" id="security">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          
          <div className="md:w-1/2">
            <div className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              Autopilot
            </div>
            <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
              Put operations on <span className="italic text-accent">autopilot</span>
            </h2>
            <p className="mb-8 text-lg text-text-muted">
              Upscale has the latest AI models built in, so it can help you identify revenue leakage and plug
              it instantly. No more manual CSV exports or endless dashboard checking.
            </p>
          </div>

          <div className="relative md:w-1/2">
            <div className="relative z-10 mx-auto max-w-md rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-2xl">
              <div className="flex flex-col gap-4">
                <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-surface2/70 p-4">
                  <p className="text-sm text-text-primary">
                    I noticed 5 enterprise renewals are at risk due to declining usage metrics this month.
                  </p>
                </div>
                <div className="max-w-[85%] self-end rounded-2xl rounded-tr-none bg-accent p-4 text-white">
                  <p className="text-sm">Generate a retention plan for each.</p>
                </div>
                <div className="w-full self-start">
                  <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent">description</span>
                        <span className="text-sm font-bold">Renewal Strategy.pdf</span>
                      </div>
                      <span className="text-xs text-green-500">Ready</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-text-muted">
                        <span>Acme Corp</span>
                        <span className="text-red-500">High Risk</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-text-muted">
                        <span>Globex</span>
                        <span className="text-yellow-500">Med Risk</span>
                      </div>
                    </div>
                    <button className="mt-3 w-full rounded bg-surface2/50 py-2 text-center text-xs font-medium text-text-primary transition-colors hover:bg-surface2">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary opacity-20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent opacity-10 blur-2xl" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
