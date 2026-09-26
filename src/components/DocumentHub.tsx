import { LATEST_NOTICE } from "@/lib/notices";

type HubItem = {
  id: string;
  title: string;
  description: string;
  /** Optional working external link already present in the project */
  actionHref?: string;
  actionLabel?: string;
};

const DISCLOSURE_ITEMS: HubItem[] = [
  {
    id: "zmluvy",
    title: "Zmluvy",
    description:
      "Zoznam zverejnených zmlúv bude na tomto mieste doplnený po dodaní podkladov od SMM. Dovtedy tu nájdete priamy odkaz na kontakt, ak potrebujete overiť konkrétny dokument.",
    actionHref: "#kontakty",
    actionLabel: "Kontaktovať SMM",
  },
  {
    id: "faktury-objednavky",
    title: "Faktúry a objednávky",
    description:
      "Prehľad faktúr a objednávok bude zverejnený tu, keď SMM poskytne aktuálne súbory alebo odkazy. Doplnenie neovplyvní ostatné časti stránky.",
    actionHref: "#kontakty",
    actionLabel: "Kontaktovať SMM",
  },
  {
    id: "vyrocne-spravy",
    title: "Výročné správy",
    description:
      "Výročné správy organizácie budú dostupné v tejto sekcii po ich oficiálnom dodaní.",
  },
  {
    id: "vyberove-konania",
    title: "Výberové konania",
    description:
      "Informácie o výberových konaniach budú zverejnené tu, keď SMM potvrdí znenie a dokumenty.",
  },
  {
    id: "legislativa",
    title: "Legislatíva",
    description:
      "Odkazy na záväzné predpisy a interné dokumenty budú doplnené po potvrdení zo strany SMM.",
  },
];

export function DocumentHub() {
  return (
    <section
      className="scroll-mt-24 border-y border-line bg-surface"
      aria-labelledby="zverejnovanie-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="section-label">Zverejňovanie</p>
          <h2
            id="zverejnovanie-heading"
            className="section-heading mt-4 text-3xl sm:text-4xl"
          >
            Dokumenty a zverejňovanie
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-muted sm:text-lg">
            Tieto odkazy sú pripravené v navigácii. Kde ešte nie sú dokumenty
            dodané, uvádzame to otvorene — nevymýšľame obsah.
          </p>
        </div>

        <div
          id="volne-priestory"
          className="scroll-mt-24 mb-8 rounded-2xl border border-[#2563eb]/25 bg-royal-soft p-6 sm:p-8"
        >
          {/* Alias for older / alternate nav labels */}
          <span id="prenajom-priestorov" className="sr-only">
            Prenájom priestorov
          </span>
          <p className="font-sans text-sm font-bold text-[#2563eb]">
            Prenájom priestorov
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Voľné nebytové priestory
          </h3>
          <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink sm:text-lg">
            Aktuálny oznam o voľných nebytových priestoroch je dostupný na
            oficiálnej stránke SMM. Pre osobný kontakt použite telefonické alebo
            e-mailové spojenie nižšie na stránke.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={LATEST_NOTICE.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex min-h-12 items-center justify-center px-6"
            >
              Otvoriť oznam o priestoroch
            </a>
            <a
              href="#kontakty"
              className="btn-secondary inline-flex min-h-12 items-center justify-center px-6"
            >
              Kontaktovať SMM
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {DISCLOSURE_ITEMS.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-2xl border border-line bg-paper p-6 sm:p-7"
            >
              <h3 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-muted">
                {item.description}
              </p>
              {item.actionHref && item.actionLabel ? (
                <a
                  href={item.actionHref}
                  className="mt-5 inline-flex min-h-11 items-center font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
                >
                  {item.actionLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
