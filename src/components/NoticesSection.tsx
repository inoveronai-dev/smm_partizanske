const NOTICES = [
  {
    date: "12. 03. 2026",
    title: "Voľné nebytové priestory",
    href: "#volne-priestory",
  },
  {
    date: "28. 02. 2026",
    title: "Kultúrny dom SC Malé Bielice – uzatvorený",
    href: "#oznamenia",
  },
  {
    date: "15. 02. 2026",
    title: "Cenník údržby",
    href: "#oznamenia",
  },
  {
    date: "04. 02. 2026",
    title: "Cena tepla",
    href: "#oznamenia",
  },
] as const;

const OVS_ITEMS = [
  {
    date: "10. 03. 2026",
    title: "DS – LUHY Nádražná",
    category: "Prenájom",
    href: "#aktualne-ovs",
  },
  {
    date: "03. 03. 2026",
    title: "Rudolfa Jašíka",
    category: "OVS",
    href: "#aktualne-ovs",
  },
  {
    date: "21. 02. 2026",
    title: "DS-ALFA",
    category: "Prenájom",
    href: "#aktualne-ovs",
  },
] as const;

function ListHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-line pb-5">
      <h3 className="font-serif text-2xl tracking-wide text-ink sm:text-3xl">
        {title}
      </h3>
      <a
        href={href}
        className="shrink-0 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-royal transition-colors hover:text-ink"
      >
        Zobraziť všetko
      </a>
    </div>
  );
}

export function NoticesSection() {
  return (
    <section
      id="oznamenia"
      className="scroll-mt-24 bg-paper"
      aria-labelledby="oznamenia-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-royal">
            Aktuálne informácie
          </p>
          <h2
            id="oznamenia-heading"
            className="mt-4 font-serif text-3xl font-medium tracking-wide text-ink sm:text-4xl md:text-5xl"
          >
            Oznámenia a najnovšie OVS
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8">
            <ListHeader title="Oznámenia" href="#oznamenia" />
            <ul className="divide-y divide-line">
              {NOTICES.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-sans text-sm text-ink/85 transition-colors group-hover:text-royal sm:text-base">
                      {item.title}
                    </span>
                    <time className="shrink-0 font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-royal">
                      {item.date}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="aktualne-ovs"
            className="scroll-mt-24 border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8"
          >
            <ListHeader title="Najnovšie OVS" href="#aktualne-ovs" />
            <ul className="divide-y divide-line">
              {OVS_ITEMS.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <span className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <span className="inline-flex w-fit bg-royal-soft px-2 py-0.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-royal">
                        {item.category}
                      </span>
                      <span className="font-sans text-sm text-ink/85 transition-colors group-hover:text-royal sm:text-base">
                        {item.title}
                      </span>
                    </span>
                    <time className="shrink-0 font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-royal">
                      {item.date}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
