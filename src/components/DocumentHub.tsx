import { LATEST_NOTICE } from "@/lib/notices";

/**
 * Compact disclosure section.
 * Unavailable categories remain as scroll anchors for nav — not empty archive rows.
 */
const PENDING_IDS = [
  "zmluvy",
  "faktury-objednavky",
  "vyrocne-spravy",
  "vyberove-konania",
  "legislativa",
] as const;

export function DocumentHub() {
  return (
    <section
      className="scroll-mt-24 border-t border-line bg-warm"
      aria-labelledby="zverejnovanie-heading"
    >
      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        {PENDING_IDS.map((id) => (
          <span
            key={id}
            id={id}
            className="pointer-events-none absolute -top-24"
            aria-hidden
          />
        ))}
        <span id="prenajom-priestorov" className="sr-only">
          Prenájom priestorov
        </span>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="section-label">Zverejňovanie</p>
            <h2
              id="zverejnovanie-heading"
              className="section-heading mt-3 text-3xl sm:text-4xl"
            >
              Dokumenty a zverejňovanie
            </h2>
            <span className="mt-4 block h-0.5 w-14 bg-[#2563eb]" aria-hidden />
            <p className="mt-4 font-sans text-base leading-relaxed text-muted">
              Na stránke je dostupný oznam o voľných nebytových priestoroch.
              Ostatné dokumenty (zmluvy, faktúry, výročné správy, výberové
              konania, legislatíva) zatiaľ nie sú zverejnené — môžete o ne
              požiadať.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-7">
            <div
              id="volne-priestory"
              className="scroll-mt-24 flex flex-col gap-3 border-l-[3px] border-[#2563eb] pl-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pl-5"
            >
              <div className="min-w-0">
                <p className="font-sans text-lg font-semibold text-ink sm:text-xl">
                  Voľné nebytové priestory
                </p>
                <p className="mt-1 font-sans text-sm text-muted sm:text-base">
                  Oznam o ponuke na prenájom
                </p>
              </div>
              <a
                href={LATEST_NOTICE.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
              >
                Otvoriť oznam
              </a>
            </div>

            <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="font-sans text-base leading-relaxed text-muted">
                Potrebujete iný dokument?
              </p>
              <a
                href="#kontakty"
                className="inline-flex min-h-11 shrink-0 items-center justify-center bg-[#2563eb] px-5 py-2.5 font-sans text-sm font-bold tracking-[0.02em] text-surface transition-colors hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
              >
                Požiadať o dokument
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
