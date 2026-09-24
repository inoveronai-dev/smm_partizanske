export function AboutSection() {
  return (
    <section
      id="o-nas"
      className="relative scroll-mt-24 border-t border-cream/10 bg-anthracite"
      aria-labelledby="o-nas-heading"
    >
      <div
        id="o-organizacii"
        className="pointer-events-none absolute -top-24"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.35em] text-royal">
            Organizácia
          </p>
          <h2
            id="o-nas-heading"
            className="mt-4 font-serif text-4xl font-medium tracking-[0.08em] text-cream sm:text-5xl md:text-6xl"
          >
            O NÁS
          </h2>
          <span
            className="mt-6 block h-px w-14 bg-amber"
            aria-hidden
          />
        </div>

        <div className="space-y-8 text-cream/75">
          <p className="font-sans text-base leading-relaxed sm:text-lg">
            Správa majetku mesta bola ako nezisková organizácia mesta
            Partizánske so samostatnou právnou subjektivitou založená k{" "}
            <span className="text-cream">9. 12. 2005</span>. Od svojho vzniku
            zabezpečuje starostlivosť o mestský majetok s dôrazom na
            transparentnosť, spoľahlivosť a dostupnosť služieb pre občanov.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber">
                Hlavná činnosť
              </h3>
              <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed sm:text-base">
                <li className="border-l border-royal/50 pl-4">
                  Správa bytového fondu a nájomných vzťahov
                </li>
                <li className="border-l border-royal/50 pl-4">
                  Údržba a prevádzka zvereného majetku
                </li>
                <li className="border-l border-royal/50 pl-4">
                  Výstavba nájomných bytových domov
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber">
                Podnikateľská činnosť
              </h3>
              <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed sm:text-base">
                <li className="border-l border-cream/20 pl-4">
                  Správa nehnuteľností a súvisiacich služieb
                </li>
                <li className="border-l border-cream/20 pl-4">
                  Výkon práv a povinností mesta Partizánske voči
                  nájomcom a partnerom
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 bg-[linear-gradient(135deg,rgba(29,78,216,0.14),rgba(17,17,17,0.95)_45%,rgba(245,158,11,0.1))]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:px-10">
          <p className="max-w-2xl font-serif text-2xl leading-snug text-cream sm:text-3xl">
            Hľadáte správcu alebo voľné priestory? Kontaktujte nás.
          </p>
          <a
            href="#kontakty"
            className="inline-flex items-center justify-center border border-royal bg-royal px-6 py-3.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream transition-colors hover:border-amber hover:bg-amber hover:text-anthracite"
          >
            Kontaktovať SMM
          </a>
        </div>
      </div>
    </section>
  );
}
