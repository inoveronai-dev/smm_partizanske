import { NOTICES, OVS_ITEMS } from "@/lib/notices";

export function NoticesSection() {
  return (
    <section
      id="oznamenia"
      className="scroll-mt-24 bg-surface"
      aria-labelledby="oznamenia-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-12 max-w-2xl border-b border-line pb-8">
          <p className="section-label">Aktuálne informácie</p>
          <h2
            id="oznamenia-heading"
            className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl"
          >
            Oznámenia a OVS
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-muted">
            Prehľad oznámení a obchodných verejných súťaží — dátumy a názvy
            čitateľným písmom.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/15 pb-4">
              <h3 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                Oznámenia
              </h3>
              <span className="font-sans text-sm text-muted">
                {NOTICES.length} položiek
              </span>
            </div>
            <ul>
              {NOTICES.map((item) => (
                <li key={item.title} className="border-b border-line">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 py-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-sans text-lg font-medium text-ink transition-colors group-hover:text-[#2563eb]">
                      {item.title}
                    </span>
                    <time className="shrink-0 font-sans text-base font-semibold tabular-nums text-[#2563eb]">
                      {item.date}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="aktualne-ovs" className="scroll-mt-24">
            <div className="border-b border-ink/15 pb-4">
              <h3 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                Najnovšie OVS
              </h3>
              <p className="mt-2 font-sans text-base text-muted">
                Textový prehľad — fotografie nepriraďujeme bez overenia objektu.
              </p>
            </div>
            <ul>
              {OVS_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="min-w-0">
                    <p className="font-sans text-sm font-semibold text-[#2563eb]">
                      {item.category}
                    </p>
                    <p className="mt-1 font-sans text-lg font-medium text-ink">
                      {item.title}
                    </p>
                  </div>
                  <time className="shrink-0 font-sans text-base font-semibold tabular-nums text-muted">
                    {item.date}
                  </time>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2 md:gap-12">
          <article id="archiv-ovs" className="scroll-mt-24">
            <h3 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
              Archív OVS
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-muted">
              Kompletný archív obchodných verejných súťaží bude na tomto mieste
              doplnený po dodaní podkladov od SMM. Aktuálne položky sú vyššie v
              sekcii Najnovšie OVS.
            </p>
            <a
              href="#aktualne-ovs"
              className="mt-4 inline-flex min-h-11 items-center font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline"
            >
              Prejsť na aktuálne OVS
            </a>
          </article>

          <article id="protokoly" className="scroll-mt-24">
            <h3 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
              Protokoly
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-muted">
              Protokoly z OVS budú zverejnené tu, keď SMM poskytne oficiálne
              dokumenty. Doplnenie nevymýšľame vopred.
            </p>
            <a
              href="#kontakty"
              className="mt-4 inline-flex min-h-11 items-center font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline"
            >
              Kontaktovať SMM
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
