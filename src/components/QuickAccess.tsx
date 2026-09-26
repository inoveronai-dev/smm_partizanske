"use client";

import { NoticesTicker } from "@/components/NoticesTicker";

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
    className: "h-6 w-6",
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
            d="M13.5 3.5V8H18M9 12h6M9 15.5h6"
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
            d="M5 7.5h14l-1.2 10.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 7.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 7.5V6a3 3 0 0 1 6 0v1.5"
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
            d="M4.5 19.5V8.2L12 4.5l7.5 3.7v11.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 19.5v-5h5v5M4.5 19.5h15"
            stroke="currentColor"
            strokeWidth="1.5"
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
      className="relative z-20 -mt-6 px-4 sm:-mt-8 sm:px-6 lg:-mt-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-4">
        <div
          className={`grid gap-3 sm:grid-cols-3 sm:gap-4 ${
            revealed ? "animate-hero-rise" : "opacity-0"
          }`}
          style={{ animationDelay: revealed ? "0.65s" : undefined }}
        >
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href + link.title}
              href={link.href}
              className="group flex min-h-[7.5rem] items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm shadow-ink/5 transition-[border-color,box-shadow] duration-200 hover:border-[#2563eb] hover:shadow-md hover:shadow-[#2563eb]/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] sm:min-h-[8.5rem] sm:p-6"
            >
              <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2563eb]/25 bg-royal-soft text-[#2563eb] transition-colors group-hover:border-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-surface">
                <QuickIcon name={link.icon} />
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  {link.title}
                </span>
                <span className="mt-2 block font-sans text-base leading-snug text-muted">
                  {link.description}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div
          className={revealed ? "animate-hero-rise" : "opacity-0"}
          style={{ animationDelay: revealed ? "0.8s" : undefined }}
        >
          <NoticesTicker />
        </div>
      </div>
    </section>
  );
}
