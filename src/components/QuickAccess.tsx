"use client";

type QuickLink = {
  href: string;
  title: string;
  description: string;
  icon: "contracts" | "orders" | "spaces";
};

const QUICK_LINKS: QuickLink[] = [
  {
    href: "#zmluvy",
    title: "Zmluvy",
    description: "Zverejnené zmluvy a dokumenty",
    icon: "contracts",
  },
  {
    href: "#faktury-objednavky",
    title: "Faktúry a objednávky",
    description: "Prehľad faktúr a objednávok",
    icon: "orders",
  },
  {
    href: "#volne-priestory",
    title: "Voľné nebytové priestory",
    description: "Aktuálna ponuka na prenájom",
    icon: "spaces",
  },
];

function QuickIcon({ name }: { name: QuickLink["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "contracts":
      return (
        <svg {...common}>
          <path
            d="M8 3.5h5.5L18 8v12.5H8A1.5 1.5 0 0 1 6.5 19V5A1.5 1.5 0 0 1 8 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M13.5 3.5V8H18M9.5 12h5M9.5 15.5h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "orders":
      return (
        <svg {...common}>
          <path
            d="M5 7h14v12.5H5zM8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12.5h6M9 15.5h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spaces":
      return (
        <svg {...common}>
          <path
            d="M4 19.5V8.2L12 3.5l8 4.7V19.5H4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 19.5v-6h4v6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

type QuickAccessProps = {
  revealed?: boolean;
};

export function QuickAccess({ revealed = true }: QuickAccessProps) {
  return (
    <section
      id="rychly-pristup"
      aria-label="Rýchly prístup"
      className="relative z-20 -mt-14 px-0 sm:-mt-16 lg:-mt-20"
    >
      <div
        className={`mx-auto max-w-6xl border-y border-line bg-surface lg:border lg:border-line ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.7s" : undefined }}
      >
        <div className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href + link.title}
              href={link.href}
              className="group flex min-h-[5.5rem] items-center gap-4 px-5 py-5 transition-colors hover:bg-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2563eb] sm:min-h-[6.5rem] sm:px-6 sm:py-7 lg:px-8"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#2563eb] transition-colors group-hover:text-navy">
                <QuickIcon name={link.icon} />
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-base font-bold leading-snug text-ink sm:text-lg">
                  {link.title}
                </span>
                <span className="mt-1 block font-sans text-sm leading-snug text-muted">
                  {link.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
