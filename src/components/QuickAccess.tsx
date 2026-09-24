"use client";

type QuickLink = {
  href: string;
  title: string;
  description: string;
  icon: "contracts" | "orders" | "spaces" | "notices";
};

const QUICK_LINKS: QuickLink[] = [
  {
    href: "#zmluvy",
    title: "Zmluvy a faktúry",
    description: "Rýchle vyhľadávanie",
    icon: "contracts",
  },
  {
    href: "#faktury-objednavky",
    title: "Objednávky",
    description: "Aktuálne objednávky",
    icon: "orders",
  },
  {
    href: "#volne-priestory",
    title: "Voľné nebytové priestory",
    description: "Prenájom a ponuka",
    icon: "spaces",
  },
  {
    href: "#oznamenia",
    title: "Oznámenia",
    description: "Aktuálne novinky",
    icon: "notices",
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
            strokeWidth="1.25"
          />
          <path
            d="M13.5 3.5V8H18M9 12h6M9 15.5h6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "orders":
      return (
        <svg {...common}>
          <path
            d="M5 7.5h14l-1.2 10.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 7.5Z"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M9 7.5V6a3 3 0 0 1 6 0v1.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spaces":
      return (
        <svg {...common}>
          <path
            d="M4.5 19.5V8.2L12 4.5l7.5 3.7v11.3"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 19.5v-5h5v5M4.5 19.5h15"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "notices":
      return (
        <svg {...common}>
          <path
            d="M6.5 16.5H5A1.5 1.5 0 0 1 3.5 15V9A1.5 1.5 0 0 1 5 7.5h1.5l10-3v15l-10-3Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 10.5a2.5 2.5 0 0 1 0 3"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
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
      className="relative z-20 -mt-24 px-4 sm:-mt-28 sm:px-6 md:-mt-32 lg:px-8"
    >
      <div
        className={`mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.85s" : undefined }}
      >
        {QUICK_LINKS.map((link) => (
          <a
            key={link.href + link.title}
            href={link.href}
            className="group flex items-start gap-4 border border-line bg-surface p-5 shadow-sm shadow-ink/5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-md hover:shadow-royal/10 sm:p-6"
          >
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-royal/20 bg-royal-soft text-royal transition-colors group-hover:border-royal group-hover:bg-royal group-hover:text-surface">
              <QuickIcon name={link.icon} />
            </span>
            <span className="min-w-0">
              <span className="block font-serif text-lg leading-snug tracking-wide text-ink sm:text-xl">
                {link.title}
              </span>
              <span className="mt-1.5 block font-sans text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-royal">
                {link.description}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
