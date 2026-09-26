import { LATEST_NOTICE } from "@/lib/notices";

/**
 * Compact disclosure directory.
 * Only entries with a real destination get an external/action link.
 * Empty categories keep nav anchors but are not presented as archives.
 */
type DirectoryEntry = {
  id: string;
  title: string;
  href?: string;
  external?: boolean;
  label?: string;
};

const DIRECTORY: DirectoryEntry[] = [
  {
    id: "volne-priestory",
    title: "Voľné nebytové priestory",
    href: LATEST_NOTICE.href,
    external: true,
    label: "Otvoriť oznam",
  },
  {
    id: "zmluvy",
    title: "Zmluvy",
  },
  {
    id: "faktury-objednavky",
    title: "Faktúry a objednávky",
  },
  {
    id: "vyrocne-spravy",
    title: "Výročné správy",
  },
  {
    id: "vyberove-konania",
    title: "Výberové konania",
  },
  {
    id: "legislativa",
    title: "Legislatíva",
  },
];

export function DocumentHub() {
  return (
    <section
      className="scroll-mt-24 bg-warm"
      aria-labelledby="zverejnovanie-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-18">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="section-label">Zverejňovanie</p>
            <h2
              id="zverejnovanie-heading"
              className="section-heading mt-3 text-3xl sm:text-4xl"
            >
              Dokumenty a zverejňovanie
            </h2>
          </div>
          <p className="max-w-sm font-sans text-base leading-relaxed text-muted">
            Prehľad dostupných odkazov. Pre dokumenty, ktoré ešte nie sú
            zverejnené, použite kontakt.
          </p>
        </div>

        <span id="prenajom-priestorov" className="sr-only">
          Prenájom priestorov
        </span>

        <ul className="divide-y divide-line border border-line bg-surface">
          {DIRECTORY.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-24 flex min-h-[3.75rem] items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5"
            >
              <span className="font-sans text-lg font-semibold text-ink sm:text-xl">
                {item.title}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="shrink-0 font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
                >
                  {item.label ?? "Otvoriť"}
                </a>
              ) : (
                <a
                  href="#kontakty"
                  className="shrink-0 font-sans text-base font-medium text-muted underline-offset-4 hover:text-[#2563eb] hover:underline"
                >
                  Kontakt
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
