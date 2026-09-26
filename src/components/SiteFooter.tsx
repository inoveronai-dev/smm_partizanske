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
      {/* Navy contact — heading left, actions right */}
      <section
        className="relative overflow-hidden bg-navy-deep"
        aria-labelledby="kontakty-heading"
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 90% 30%, rgba(37,99,235,0.32), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-18">
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.28em] text-[#93c5fd]">
              KONTAKT
            </p>
            <h2
              id="kontakty-heading"
              className="mt-3 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] text-cream"
            >
              Sme tu pre vás
            </h2>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-cream/75 sm:text-lg">
              Správa majetku mesta, n.o., Partizánske — osobný kontakt počas
              stránkových dní.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            <div>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
                E-mail
              </p>
              <a
                href="mailto:sekretariat@smmpartizanske.sk"
                className="mt-1 block font-serif text-xl font-semibold text-cream underline-offset-4 transition-colors hover:text-white hover:underline sm:text-2xl"
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
                className="mt-1 block font-serif text-xl font-semibold text-cream underline-offset-4 transition-colors hover:text-white hover:underline sm:text-2xl"
              >
                038 / 28 517 11
              </a>
            </div>
            <a
              href="mailto:sekretariat@smmpartizanske.sk?subject=Spr%C3%A1va%20pre%20riadite%C4%BEa"
              className="btn-on-dark inline-flex min-h-12 w-full items-center justify-center px-7 py-3.5 sm:w-auto"
            >
              Napíšte riaditeľovi
            </a>
          </div>
        </div>
      </section>

      {/* Map-dominant location + hours */}
      <section
        id="kde-nas-najdete"
        className="scroll-mt-24 bg-paper"
        aria-labelledby="mapa-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Lokácia</p>
              <h2
                id="mapa-heading"
                className="section-heading mt-3 text-3xl sm:text-4xl"
              >
                Kde nás nájdete
              </h2>
            </div>
            <p className="font-sans text-base text-muted sm:text-right">
              {OFFICE_ADDRESS.street}
              <br />
              {OFFICE_ADDRESS.city}
            </p>
          </div>

          <div className="relative overflow-hidden border border-line bg-surface">
            <div className="relative aspect-[16/10] w-full sm:aspect-[21/10] lg:aspect-[2.4/1] lg:min-h-[20rem]">
              <iframe
                title="Mapa — SMM Partizánske, 29. augusta 1191/51"
                src={MAP_EMBED_SRC}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-4 border-t border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="font-serif text-xl font-semibold text-ink">
                  {OFFICE_ADDRESS.street}
                </p>
                <p className="font-sans text-base text-muted">
                  {OFFICE_ADDRESS.city}
                </p>
              </div>
              <a
                href={MAP_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#2563eb] px-6 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-navy"
              >
                Navigovať
              </a>
            </div>
          </div>

          <div className="mt-8 border border-line bg-surface">
            <div className="border-b border-line px-5 py-4 sm:px-6">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                Stránkové dni
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              {OFFICE_HOURS.map((block, index) => (
                <div
                  key={block.title}
                  className={`p-5 sm:p-6 ${
                    index === 0
                      ? "border-b border-line md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <h3 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
                    {block.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {block.rows.map((row) => (
                      <li
                        key={row.day}
                        className="flex flex-col gap-0.5 border-t border-line pt-3 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                      >
                        <span className="font-sans text-base font-semibold text-ink">
                          {row.day}
                        </span>
                        <span className="font-sans text-base text-ink sm:text-right sm:text-lg">
                          {row.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="font-sans text-sm font-medium text-ink">
              Správa majetku mesta, n.o., Partizánske
            </p>
            <p className="mt-1 font-sans text-xs text-muted">
              IČO: 379 23 145 · DIČ: 2022092963 · IČ DPH: SK2022092963
            </p>
          </div>
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
