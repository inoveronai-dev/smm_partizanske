const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=29.augusta%201191%2F51%20%2C%20958%2001%20Partiz%C3%A1nske&t=m&z=15&output=embed&iwloc=near";

const MAP_EXTERNAL_URL =
  "https://www.google.com/maps/search/?api=1&query=29.%20augusta%201191%2F51%2C%20958%2001%20Partiz%C3%A1nske";

const OFFICE_ADDRESS = {
  street: "29. augusta 1191/51",
  city: "958 01 Partizánske",
} as const;

const OFFICE_HOURS = [
  {
    title: "Vlastnícke a nájomné byty",
    note: "Stránkové dni",
    rows: [
      { day: "Pondelok", hours: "8:00 – 12:00 · 13:00 – 15:00" },
      { day: "Streda", hours: "8:00 – 12:00 · 13:00 – 17:00" },
      { day: "Piatok", hours: "8:00 – 12:00" },
    ],
  },
  {
    title: "Pokladňa",
    note: "Stránkové dni",
    rows: [
      { day: "Pondelok", hours: "8:00 – 12:00 · 13:00 – 14:30" },
      { day: "Streda", hours: "8:00 – 12:00 · 13:00 – 16:00" },
      { day: "Piatok", hours: "8:00 – 11:30" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="kontakty"
      className="scroll-mt-24 border-t border-line bg-[#fcfcfc]"
      aria-labelledby="kontakty-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Kde nás nájdete + mapa */}
        <section
          id="kde-nas-najdete"
          className="scroll-mt-24"
          aria-labelledby="mapa-heading"
        >
          <div className="mb-10 max-w-2xl">
            <p className="section-label">Lokácia</p>
            <h2
              id="mapa-heading"
              className="section-heading mt-5 text-3xl sm:text-4xl md:text-5xl"
            >
              Kde nás nájdete
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm shadow-ink/5">
              <div className="relative aspect-[16/11] w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]">
                <iframe
                  title="Mapa — SMM Partizánske, 29. augusta 1191/51"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8">
              <div>
                <p className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                  Adresa
                </p>
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {OFFICE_ADDRESS.street}
                </p>
                <p className="mt-2 font-sans text-lg text-ink">
                  {OFFICE_ADDRESS.city}
                </p>
                <p className="mt-6 font-sans text-base leading-relaxed text-ink/80">
                  Správa majetku mesta, n.o., Partizánske — osobný kontakt počas
                  stránkových dní.
                </p>
              </div>

              <a
                href={MAP_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-ink"
              >
                Otvoriť v Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Stránkové dni + kontakt */}
        <div className="mt-20 border-t border-line pt-16 sm:mt-24 sm:pt-20">
          <div className="mb-14 max-w-2xl">
            <p className="section-label">Kontakt & stránkové dni</p>
            <h2
              id="kontakty-heading"
              className="section-heading mt-5 text-3xl sm:text-4xl md:text-5xl"
            >
              Sme tu pre vás
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {OFFICE_HOURS.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8"
              >
                <p className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                  {block.note}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-ink sm:text-[1.75rem]">
                  {block.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {block.rows.map((row) => (
                    <li
                      key={row.day}
                      className="flex flex-col gap-1 border-t border-line pt-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                        {row.day}
                      </span>
                      <span className="font-sans text-base text-ink sm:text-right">
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                Správa majetku mesta, n.o., Partizánske
              </p>
              <div className="mt-6 space-y-2 font-sans text-base leading-relaxed text-ink sm:text-lg">
                <p className="font-medium text-ink">
                  {OFFICE_ADDRESS.street}, {OFFICE_ADDRESS.city}
                </p>
                <p>
                  <a
                    href="mailto:sekretariat@smmpartizanske.sk"
                    className="font-medium text-[#2563eb] transition-colors hover:text-ink"
                  >
                    sekretariat@smmpartizanske.sk
                  </a>
                  <span className="mx-2 text-line">|</span>
                  <a
                    href="tel:+421382851711"
                    className="font-medium text-[#2563eb] transition-colors hover:text-ink"
                  >
                    Tel.: 038/28 517 11
                  </a>
                </p>
                <p>
                  IČO: 379 23 145
                  <span className="mx-2 text-line">|</span>
                  DIČ: 2022092963
                  <span className="mx-2 text-line">|</span>
                  IČ DPH: SK2022092963
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end lg:flex-col xl:flex-row">
              <a
                href="mailto:sekretariat@smmpartizanske.sk?subject=Spr%C3%A1va%20pre%20riadite%C4%BEa"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-ink"
              >
                Napíšte riaditeľovi
              </a>
              <a
                href="#top"
                className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-[#2563eb] bg-surface px-6 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#2563eb] transition-colors hover:bg-[#2563eb] hover:text-surface"
              >
                Návrat hore
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
          <p className="select-none font-serif text-[clamp(1.4rem,5.5vw,4.25rem)] leading-none tracking-[0.04em] text-ink/[0.06]">
            Správa majetku mesta, n.o., Partizánske
          </p>
          <p className="mt-5 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-muted">
            © 2025 / 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
