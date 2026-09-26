const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=29.augusta%201191%2F51%20%2C%20958%2001%20Partiz%C3%A1nske&t=m&z=15&output=embed&iwloc=near";

const MAP_EXTERNAL_URL =
  "https://www.google.com/maps/search/?api=1&query=29.%20augusta%201191%2F51%2C%20958%2001%20Partiz%C3%A1nske";

const OFFICE_ADDRESS = {
  street: "29. augusta 1191/51",
  city: "958 01 Partizánske",
} as const;

/**
 * Office hours as currently stored in this project only.
 * These values differ from the live smmpartizanske.sk footer — do not “correct”
 * them from the live site without SMM confirmation.
 */
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
    <footer id="kontakty" className="scroll-mt-24" aria-labelledby="kontakty-heading">
      {/* Deep navy contact scene — deliberate closing moment */}
      <section className="relative overflow-hidden bg-navy-deep" aria-labelledby="kontakty-heading">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 80% 20%, rgba(37,99,235,0.35), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p className="font-sans text-xs font-bold tracking-[0.28em] text-[#93c5fd]">
            KONTAKT
          </p>
          <h2
            id="kontakty-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] text-cream"
          >
            Sme tu pre vás
          </h2>
          <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-cream/80">
            Správa majetku mesta, n.o., Partizánske — osobný kontakt počas
            stránkových dní.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:gap-10">
            <div>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
                E-mail
              </p>
              <a
                href="mailto:sekretariat@smmpartizanske.sk"
                className="mt-2 block font-serif text-xl font-semibold text-cream underline-offset-4 transition-colors hover:text-white hover:underline sm:text-2xl"
              >
                sekretariat@smmpartizanske.sk
              </a>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
                Telefón
              </p>
              <a
                href="tel:+421382851711"
                className="mt-2 block font-serif text-xl font-semibold text-cream underline-offset-4 transition-colors hover:text-white hover:underline sm:text-2xl"
              >
                038 / 28 517 11
              </a>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
                Adresa
              </p>
              <p className="mt-2 font-serif text-xl font-semibold text-cream sm:text-2xl">
                {OFFICE_ADDRESS.street}
              </p>
              <p className="font-sans text-base text-cream/75">
                {OFFICE_ADDRESS.city}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:sekretariat@smmpartizanske.sk?subject=Spr%C3%A1va%20pre%20riadite%C4%BEa"
              className="btn-on-dark inline-flex min-h-12 items-center justify-center px-7 py-3.5"
            >
              Napíšte riaditeľovi
            </a>
            <a
              href={MAP_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-on-dark inline-flex min-h-12 items-center justify-center px-7 py-3.5"
            >
              Otvoriť v Google Maps
            </a>
          </div>

          <p className="mt-10 font-sans text-sm text-cream/55">
            IČO: 379 23 145 · DIČ: 2022092963 · IČ DPH: SK2022092963
          </p>
        </div>
      </section>

      {/* Light map + office hours block */}
      <section
        id="kde-nas-najdete"
        className="scroll-mt-24 bg-warm"
        aria-labelledby="mapa-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mb-8 max-w-2xl">
            <p className="section-label">Lokácia & stránkové dni</p>
            <h2
              id="mapa-heading"
              className="section-heading mt-4 text-3xl sm:text-4xl"
            >
              Kde nás nájdete
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
            <div className="overflow-hidden border border-line bg-surface">
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

            <div className="flex flex-col justify-between border border-line bg-surface p-6 sm:p-8">
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
              </div>
              <a
                href={MAP_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#2563eb] px-6 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-navy"
              >
                Navigovať
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-0 border border-line bg-surface md:grid-cols-2">
            {OFFICE_HOURS.map((block, index) => (
              <div
                key={block.title}
                className={`p-6 sm:p-8 ${
                  index === 0 ? "border-b border-line md:border-b-0 md:border-r" : ""
                }`}
              >
                <p className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                  {block.note}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-ink">
                  {block.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {block.rows.map((row) => (
                    <li
                      key={row.day}
                      className="flex flex-col gap-1 border-t border-line pt-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="font-sans text-base font-semibold text-ink">
                        {row.day}
                      </span>
                      <span className="font-sans text-lg text-ink sm:text-right">
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact footer bar — no oversized watermark */}
      <div className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="font-sans text-sm font-medium text-ink">
            Správa majetku mesta, n.o., Partizánske
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#top"
              className="font-sans text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline"
            >
              Návrat hore
            </a>
            <p className="font-sans text-sm text-muted">© 2025 / 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
