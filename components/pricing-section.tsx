const plans = [
  {
    name: "Starter",
    price: "$499",
    cadence: "/mo",
    subtitle: "+ 1% of recovered revenue",
    features: ["Up to $1M ARR processed", "Basic integrations", "Weekly reporting"],
    cta: "Start Trial",
    featured: false
  },
  {
    name: "Growth",
    price: "$1,499",
    cadence: "/mo",
    subtitle: "+ 0.8% of recovered revenue",
    features: [
      "Up to $10M ARR processed",
      "Advanced integrations",
      "Real-time slack alerts",
      "Dedicated success manager"
    ],
    cta: "Get Started",
    featured: true
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    subtitle: "Volume based pricing",
    features: ["Unlimited ARR", "Custom model training", "API Access", "SSO & Audit logs"],
    cta: "Contact Sales",
    featured: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-surface-light py-24 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center font-serif text-4xl">Simple, Outcome-Based Pricing</h2>
        <p className="mb-16 text-center text-gray-500">We only win when you win.</p>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "relative flex -translate-y-0 flex-col overflow-hidden rounded-2xl border border-transparent bg-primary p-8 text-white shadow-xl md:-translate-y-4"
                  : "flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-colors hover:border-accent dark:border-gray-800 dark:bg-background-dark"
              }
            >
              {plan.featured ? (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-accent px-3 py-1 text-xs font-bold text-white">
                  POPULAR
                </div>
              ) : null}
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <div className="mb-4 font-serif text-3xl font-bold">
                {plan.price}
                {plan.cadence ? (
                  <span
                    className={`text-base font-normal font-sans ${
                      plan.featured ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {plan.cadence}
                  </span>
                ) : null}
              </div>
              <p className={`mb-6 text-sm ${plan.featured ? "text-gray-300" : "text-gray-500"}`}>{plan.subtitle}</p>
              <ul className={`mb-8 flex-grow space-y-3 ${plan.featured ? "text-gray-200" : ""}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span
                      className={`material-symbols-outlined text-sm ${
                        plan.featured ? "text-accent" : "text-green-500"
                      }`}
                    >
                      check
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={
                  plan.featured
                    ? "block w-full rounded-lg bg-white py-3 text-center font-bold text-primary transition-colors hover:bg-gray-100"
                    : "block w-full rounded-lg border border-gray-300 py-3 text-center font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                }
                href="#"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
