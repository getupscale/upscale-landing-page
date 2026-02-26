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
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Upscale has the latest AI models built in, so it can help you identify revenue leakage and plug
              it instantly. No more manual CSV exports or endless dashboard checking.
            </p>
            <div className="rounded-xl border-l-4 border-accent bg-secondary/10 p-6">
              <p className="mb-4 text-lg italic text-gray-800 dark:text-gray-200">
                &quot;The addiction is real - at this point I cannot imagine running finance without it. It is like
                having a CFO in my pocket.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-300">
                  <Image
                    alt="Portrait"
                    className="h-full w-full rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChmWoEhS_nxYs-_hBOa9fLuaHNCt7rhAfBlnYOGKBdSMOkmok8mDDZ-YSjcyZvv_cArrJ8oO1VjyTLUwvBeeoV41P_sQPERKPm2oC6Y2IxhZfy7yrgYchmDq22CNlte8r2fK-M43r8_HukekFP-15fal_bclGbZjUMmaqAD3kRdTkqXY1S5xMs3ZeXxX_tCM3JS2o4QK6NDSL2kKzcQGNK0uL9M8dpMWTti8IHWpINLIwRVKjI9O0lREEPWEDUPMiuhnbeORB2qdU4"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold">Sarah Jenks</div>
                  <div className="text-xs text-gray-500">COO, TechFlow</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:w-1/2">
            <div className="relative z-10 mx-auto max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-surface-dark">
              <div className="flex flex-col gap-4">
                <div className="max-w-[85%] self-start rounded-2xl rounded-tl-none bg-gray-100 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    I noticed 5 enterprise renewals are at risk due to declining usage metrics this month.
                  </p>
                </div>
                <div className="max-w-[85%] self-end rounded-2xl rounded-tr-none bg-accent p-4 text-white">
                  <p className="text-sm">Generate a retention plan for each.</p>
                </div>
                <div className="w-full self-start">
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent">description</span>
                        <span className="text-sm font-bold">Renewal Strategy.pdf</span>
                      </div>
                      <span className="text-xs text-green-500">Ready</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Acme Corp</span>
                        <span className="text-red-500">High Risk</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Globex</span>
                        <span className="text-yellow-500">Med Risk</span>
                      </div>
                    </div>
                    <button className="mt-3 w-full rounded bg-gray-50 py-2 text-center text-xs font-medium transition-colors hover:bg-gray-100 dark:bg-gray-800">
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
