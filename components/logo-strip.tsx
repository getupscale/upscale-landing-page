export function LogoStrip() {
  return (
    <section className="border-b border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-text-muted">
          Powering next-gen operations at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-70">
          <span className="text-xl font-bold text-text-muted">ACME Corp</span>
          <span className="text-xl font-bold text-text-muted">Stark Ind.</span>
          <span className="text-xl font-bold text-text-muted">Wayne Ent.</span>
          <span className="text-xl font-bold text-text-muted">Cyberdyne</span>
          <span className="text-xl font-bold text-text-muted">Umbrella</span>
        </div>
      </div>
    </section>
  );
}
