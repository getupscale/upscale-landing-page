import { Card } from "@/components/ui/card";

export function FlexibilitySection() {
  return (
    <section className="bg-background-light py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <div className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              Flexibility
            </div>
            <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
              Get outputs in the format <span className="italic text-accent">your team needs</span>
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Whether it is a Slack alert for sales, a CSV for accounting, or a PDF report for the board,
              Upscale formats intelligence perfectly for the destination.
            </p>
            <ul className="space-y-4">
              {["Direct Slack/Teams Integration", "Auto-populates Spreadsheets", "Board-ready PDF Generation"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <span className="material-symbols-outlined text-sm text-green-600">check</span>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card className="rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-transform duration-300 hover:rotate-0 sm:rotate-[-2deg] sm:transform dark:border-gray-800 dark:bg-surface-dark">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 text-blue-600">
                    <span className="material-symbols-outlined text-sm">tag</span>
                  </div>
                  <div className="text-sm font-bold">#finance-alerts</div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-gray-100 dark:bg-gray-800" />
                  <div className="h-2 w-3/4 rounded bg-gray-100 dark:bg-gray-800" />
                </div>
              </Card>
              <Card className="rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-transform duration-300 hover:rotate-0 sm:mt-8 sm:rotate-[3deg] sm:transform dark:border-gray-800 dark:bg-surface-dark">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-sm">table_view</span>
                  </div>
                  <div className="text-sm font-bold">Q3_Forecast.xlsx</div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-4 w-full rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-4 w-full rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-4 w-full rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-4 w-full rounded bg-gray-100 dark:bg-gray-800" />
                  </div>
                  <div className="h-2 w-full rounded bg-gray-50 dark:bg-gray-900" />
                </div>
              </Card>
              <Card className="z-10 mx-auto w-full rounded-xl border border-gray-100 bg-white p-4 shadow-lg transition-transform duration-300 hover:rotate-0 sm:-mt-4 sm:col-span-2 sm:w-3/4 sm:rotate-[1deg] sm:transform dark:border-gray-800 dark:bg-surface-dark">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-red-100 text-red-600">
                    <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                  </div>
                  <div className="text-sm font-bold">Executive_Summary.pdf</div>
                </div>
                <div className="flex gap-4">
                  <div className="h-16 w-1/3 rounded bg-gray-100 dark:bg-gray-800" />
                  <div className="w-2/3 space-y-2">
                    <div className="h-2 w-full rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-2 w-full rounded bg-gray-100 dark:bg-gray-800" />
                    <div className="h-2 w-2/3 rounded bg-gray-100 dark:bg-gray-800" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
