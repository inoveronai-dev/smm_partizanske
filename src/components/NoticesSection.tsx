import { NOTICES, OVS_ITEMS } from "@/lib/notices";

export function NoticesSection() {
  return (
    <section
      id="oznamenia"
      className="scroll-mt-24 bg-surface"
      aria-labelledby="oznamenia-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="border-b border-line pb-8">
          <p className="section-label">Aktuálne informácie</p>
          <h2
            id="oznamenia-heading"
            className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl"
          >
            Oznámenia a OVS
          </h2>
          <span className="mt-5 block h-0.5 w-14 bg-[#2563eb]" aria-hidden />
          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            Aktuálne oznámenia pre občanov a najnovšie obchodné verejné súťaže
            SMM Partizánske.
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-16">
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
                    className="group flex min-h-[4.5rem] flex-col justify-center gap-1.5 py-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-sans text-lg font-medium text-ink transition-colors group-hover:text-[#2563eb] sm:text-xl">
                      {item.title}
                    </span>
                    <time className="shrink-0 font-sans text-base font-semibold tabular-nums text-[#2563eb] sm:text-lg">
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
            </div>
            <ul>
              {OVS_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="flex min-h-[4.5rem] flex-col justify-center gap-2 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="min-w-0">
                    <p className="font-sans text-sm font-semibold text-[#2563eb]">
                      {item.category}
                    </p>
                    <p className="mt-1 font-sans text-lg font-medium text-ink sm:text-xl">
                      {item.title}
                    </p>
                  </div>
                  <time className="shrink-0 font-sans text-base font-semibold tabular-nums text-ink sm:text-lg">
                    {item.date}
                  </time>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-7 text-base">
          <a
            id="archiv-ovs"
            href="#kontakty"
            className="scroll-mt-24 font-sans font-semibold text-[#2563eb] underline-offset-4 hover:underline"
          >
            Požiadať o archív OVS
          </a>
          <a
            id="protokoly"
            href="#kontakty"
            className="scroll-mt-24 font-sans font-semibold text-[#2563eb] underline-offset-4 hover:underline"
          >
            Požiadať o protokoly
          </a>
        </div>
      </div>
    </section>
  );
}
