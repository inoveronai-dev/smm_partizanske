import { NOTICES, OVS_ITEMS } from "@/lib/notices";

export function NoticesSection() {
  return (
    <section
      id="oznamenia"
      className="scroll-mt-24 bg-surface"
      aria-labelledby="oznamenia-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mb-7 max-w-2xl">
          <p className="section-label">Aktuálne informácie</p>
          <h2
            id="oznamenia-heading"
            className="section-heading mt-3 text-3xl sm:text-4xl"
          >
            Oznámenia a OVS
          </h2>
          <span className="mt-4 block h-0.5 w-14 bg-[#2563eb]" aria-hidden />
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted">
            Oznámenia pre občanov a obchodné verejné súťaže SMM Partizánske.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="border-b border-ink/15 pb-3 font-serif text-2xl font-semibold text-ink">
              Oznámenia
            </h3>
            <ul>
              {NOTICES.map((item) => (
                <li key={item.title} className="border-b border-line">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[4rem] items-baseline justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
                  >
                    <span className="font-sans text-base font-medium text-ink transition-colors group-hover:text-[#2563eb] sm:text-lg">
                      {item.title}
                    </span>
                    <time className="shrink-0 font-sans text-sm font-semibold tabular-nums text-muted sm:text-base">
                      {item.date}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="aktualne-ovs" className="scroll-mt-24">
            <h3 className="border-b border-ink/15 pb-3 font-serif text-2xl font-semibold text-ink">
              Najnovšie OVS
            </h3>
            <ul>
              {OVS_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="flex min-h-[4rem] items-baseline justify-between gap-4 border-b border-line py-4"
                >
                  <div className="min-w-0">
                    <span className="font-sans text-base font-medium text-ink sm:text-lg">
                      {item.title}
                    </span>
                    {item.category !== "OVS" ? (
                      <span className="mt-0.5 block font-sans text-sm text-muted">
                        {item.category}
                      </span>
                    ) : null}
                  </div>
                  <time className="shrink-0 font-sans text-sm font-semibold tabular-nums text-muted sm:text-base">
                    {item.date}
                  </time>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5 text-base">
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
