export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white pb-8 pt-16 dark:border-gray-800 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <span className="mb-4 block font-serif text-2xl tracking-tight">
              Upscale
            </span>
            <p className="mb-4 max-w-xs text-sm text-gray-500 dark:text-gray-400">
              The operational brain for modern businesses. Diagnosis,
              recommendation, and execution-all in one place.
            </p>
            <div className="flex space-x-4">
              <a className="text-gray-400 hover:text-accent" href="#">
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>
              <a className="text-gray-400 hover:text-accent" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
            </div>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Integrations", "Pricing", "Changelog"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security"],
            },
          ].map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-bold">{group.title}</h4>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400 md:space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-accent" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between border-t border-gray-100 pt-6 dark:border-gray-800 md:flex-row md:pt-8">
          <p className="text-xs text-gray-400">
            © 2026 Upscale Inc. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-2 md:mt-0">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs text-gray-400">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
