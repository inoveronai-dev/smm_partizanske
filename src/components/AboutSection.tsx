export function AboutSection() {
  return (
    <section
      id="o-nas"
      className="relative scroll-mt-24 bg-paper"
      aria-labelledby="o-nas-heading"
    >
      <div
        id="o-organizacii"
        className="pointer-events-none absolute -top-24"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div>
            <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-royal">
              Organizácia
            </p>
            <h2
              id="o-nas-heading"
              className="mt-4 font-serif text-4xl font-medium tracking-[0.08em] text-ink sm:text-5xl md:text-6xl"
            >
              O NÁS
            </h2>
            <span className="mt-6 block h-px w-14 bg-royal" aria-hidden />
          </div>

          <div className="border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8 lg:p-10">
            <p className="font-sans text-base leading-relaxed text-muted sm:text-lg">
              Správa majetku mesta bola ako nezisková organizácia mesta
              Partizánske so samostatnou právnou subjektivitou založená k{" "}
              <span className="font-medium text-ink">9. 12. 2005</span>. Od
              svojho vzniku zabezpečuje starostlivosť o mestský majetok s
              dôrazom na transparentnosť, spoľahlivosť a dostupnosť služieb pre
              občanov.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border border-line bg-paper/80 p-5">
                <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-royal">
                  Hlavná činnosť
                </h3>
                <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-ink/80 sm:text-base">
                  <li className="border-l-2 border-royal/40 pl-3">
                    Správa bytového fondu a nájomných vzťahov
                  </li>
                  <li className="border-l-2 border-royal/40 pl-3">
                    Údržba a prevádzka zvereného majetku
                  </li>
                  <li className="border-l-2 border-royal/40 pl-3">
                    Výstavba nájomných bytových domov
                  </li>
                </ul>
              </div>
              <div className="border border-line bg-paper/80 p-5">
                <h3 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber">
                  Podnikateľská činnosť
                </h3>
                <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-ink/80 sm:text-base">
                  <li className="border-l-2 border-line pl-3">
                    Správa nehnuteľností a súvisiacich služieb
                  </li>
                  <li className="border-l-2 border-line pl-3">
                    Výkon práv a povinností mesta Partizánske voči nájomcom a
                    partnerom
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-royal">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:px-10">
          <p className="max-w-2xl font-serif text-2xl leading-snug text-surface sm:text-3xl">
            Hľadáte správcu alebo voľné priestory? Kontaktujte nás.
          </p>
          <a
            href="#kontakty"
            className="inline-flex items-center justify-center bg-surface px-6 py-3.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-royal transition-colors hover:bg-paper"
          >
            Kontaktovať SMM
          </a>
        </div>
      </div>
    </section>
  );
}
