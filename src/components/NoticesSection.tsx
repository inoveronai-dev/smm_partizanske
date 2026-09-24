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

function ListHeader({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-cream/10 pb-5">
      <h3 className="font-serif text-2xl tracking-wide text-cream sm:text-3xl">
        {title}
      </h3>
      <a
        href={href}
        className="shrink-0 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-royal transition-colors hover:text-amber"
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
      className="scroll-mt-24 border-t border-cream/10 bg-[#0d0d0d]"
      aria-labelledby="oznamenia-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.35em] text-amber">
            Aktuálne informácie
          </p>
          <h2
            id="oznamenia-heading"
            className="mt-4 font-serif text-3xl font-medium tracking-wide text-cream sm:text-4xl md:text-5xl"
          >
            Oznámenia a najnovšie OVS
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ListHeader title="Oznámenia" href="#oznamenia" />
            <ul className="divide-y divide-cream/10">
              {NOTICES.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-sans text-sm text-cream/85 transition-colors group-hover:text-cream sm:text-base">
                      {item.title}
                    </span>
                    <time className="shrink-0 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/40">
                      {item.date}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="aktualne-ovs" className="scroll-mt-24">
            <ListHeader title="Najnovšie OVS" href="#aktualne-ovs" />
            <ul className="divide-y divide-cream/10">
              {OVS_ITEMS.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <span className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <span className="inline-flex w-fit border border-royal/40 bg-royal/15 px-2 py-0.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
                        {item.category}
                      </span>
                      <span className="font-sans text-sm text-cream/85 transition-colors group-hover:text-cream sm:text-base">
                        {item.title}
                      </span>
                    </span>
                    <time className="shrink-0 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/40">
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
