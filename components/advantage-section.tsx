export function AdvantageSection() {
  return (
    <section className="bg-surface-light py-24 dark:bg-surface-dark">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-3xl">The Upscale Advantage</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-background-dark">
          <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="p-6 text-sm font-semibold text-gray-500">Metric</div>
            <div className="p-6 text-sm font-bold text-gray-900 dark:text-white">Without Upscale</div>
            <div className="border-l border-r border-secondary/20 bg-secondary/10 p-6 text-sm font-bold text-primary dark:text-white">
              With Upscale
            </div>
          </div>
          {[
            ["DSO (Days Sales Outstanding)", "45-60 days", "20-28 days"],
            ["Involuntary Churn Recovery", "12%", "45%"],
            ["Finance Team Load", "Overwhelmed", "Strategic Focus"],
            ["Audit Readiness", "Weeks of prep", "Always Ready"]
          ].map(([metric, withoutValue, withValue], index) => (
            <div
              key={metric}
              className={`grid grid-cols-3 ${index < 3 ? "border-b border-gray-100 dark:border-gray-800" : ""}`}
            >
              <div className="p-6 text-sm font-medium text-gray-600 dark:text-gray-400">{metric}</div>
              <div className="p-6 text-sm text-gray-600 dark:text-gray-400">{withoutValue}</div>
              <div className="border-l border-r border-secondary/20 bg-secondary/5 p-6 text-sm font-bold text-green-600">
                {withValue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
