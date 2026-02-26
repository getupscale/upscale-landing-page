export function LogoStrip() {
  return (
    <section className="border-b border-gray-100 py-12 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Powering next-gen operations at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-70">
          <span className="text-xl font-bold text-gray-400">ACME Corp</span>
          <span className="text-xl font-bold text-gray-400">Stark Ind.</span>
          <span className="text-xl font-bold text-gray-400">Wayne Ent.</span>
          <span className="text-xl font-bold text-gray-400">Cyberdyne</span>
          <span className="text-xl font-bold text-gray-400">Umbrella</span>
        </div>
      </div>
    </section>
  );
}
