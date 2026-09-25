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
      <h3 className="font-serif text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
        {title}
      </h3>
      <a
        href={href}
        className="shrink-0 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] transition-colors hover:text-ink"
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
      className="scroll-mt-24 bg-[#fcfcfc]"
      aria-labelledby="oznamenia-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="section-label">Aktuálne informácie</p>
          <h2
            id="oznamenia-heading"
            className="section-heading mt-5 text-3xl sm:text-4xl md:text-5xl"
          >
            Oznámenia a najnovšie OVS
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8">
            <ListHeader title="Oznámenia" href="#oznamenia" />
            <ul className="divide-y divide-line">
              {NOTICES.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-sans text-base font-medium text-ink transition-colors group-hover:text-[#2563eb] sm:text-lg">
                      {item.title}
                    </span>
                    <time className="shrink-0 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb]">
                      {item.date}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="aktualne-ovs"
            className="scroll-mt-24 rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8"
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
                      <span className="inline-flex w-fit rounded-md bg-royal-soft px-2.5 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#2563eb]">
                        {item.category}
                      </span>
                      <span className="font-sans text-base font-medium text-ink transition-colors group-hover:text-[#2563eb] sm:text-lg">
                        {item.title}
                      </span>
                    </span>
                    <time className="shrink-0 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb]">
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
