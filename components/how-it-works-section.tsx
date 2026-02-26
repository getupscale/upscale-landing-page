import { Card } from "@/components/ui/card";

const items = [
  {
    icon: "cloud_sync",
    titlePrefix: "Capture",
    titleSuffix: "Data",
    description:
      "Seamlessly integrates with your existing stack (Stripe, Salesforce, HubSpot) to build a unified operational graph."
  },
  {
    icon: "psychology",
    titlePrefix: "Diagnose",
    titleSuffix: "Friction",
    description:
      "AI agents analyze workflows 24/7 to identify bottlenecks, payment failures, and churn risks invisible to humans."
  },
  {
    icon: "rocket_launch",
    titlePrefix: "Execute",
    titleSuffix: "Fixes",
    description:
      "Auto-pilots the solution. From recovering failed payments to re-engaging stalled leads, it just handles it."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center font-serif text-3xl md:text-5xl">How Upscale Transforms Operations</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.titleSuffix}
              className="group rounded-2xl border border-gray-100 bg-surface-light p-8 transition-all duration-300 hover:shadow-soft dark:border-gray-800 dark:bg-surface-dark"
            >
              <div className="relative mb-8 flex h-48 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors group-hover:border-accent/30 dark:border-gray-700 dark:bg-black/20">
                <span className="material-symbols-outlined text-6xl text-gray-300 transition-colors group-hover:text-accent dark:text-gray-600">
                  {item.icon}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                <span className="border-b-4 border-accent/30">{item.titlePrefix}</span> {item.titleSuffix}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
