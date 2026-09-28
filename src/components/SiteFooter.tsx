import Link from "next/link";
import { BlueHourBand } from "@/components/BlueHourBand";
import { MapPreview } from "@/components/MapPreview";

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
    <footer>
      <BlueHourBand />

      {/* Map-dominant location + hours */}
      <section
        id="kde-nas-najdete"
        className="relative z-0 scroll-mt-24 bg-paper"
        aria-labelledby="mapa-heading"
      >
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-6 sm:px-8 sm:pb-14 sm:pt-8 lg:px-10 lg:pb-16 lg:pt-10">
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
            <MapPreview
              embedSrc={MAP_EMBED_SRC}
              title="Mapa — SMM Partizánske, 29. augusta 1191/51"
            />
            <div className="flex flex-col gap-4 border-t border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="font-sans text-xl font-semibold text-ink">
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
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#2563eb] px-6 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
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
            <p className="font-sans text-sm font-medium text-ink sm:text-base">
              Správa majetku mesta, n.o., Partizánske
            </p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
              IČO: 379 23 145 · DIČ: 2022092963 · IČ DPH: SK2022092963
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/#top"
              className="font-sans text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Návrat hore
            </Link>
            <p className="font-sans text-sm text-muted">© 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
