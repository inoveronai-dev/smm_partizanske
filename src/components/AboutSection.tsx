export function AboutSection() {
  return (
    <section
      id="o-nas"
      className="relative scroll-mt-24 bg-[#fcfcfc]"
      aria-labelledby="o-nas-heading"
    >
      <div
        id="o-organizacii"
        className="pointer-events-none absolute -top-24"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <p className="section-label">Organizácia</p>
            <h2
              id="o-nas-heading"
              className="section-heading mt-5 text-4xl sm:text-5xl md:text-6xl"
            >
              O NÁS
            </h2>
            <span className="mt-7 block h-0.5 w-16 bg-[#2563eb]" aria-hidden />
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5 sm:p-8 lg:p-10">
            <p className="font-sans text-lg leading-relaxed text-ink sm:text-xl">
              Správa majetku mesta bola ako nezisková organizácia mesta
              Partizánske so samostatnou právnou subjektivitou založená k{" "}
              <span className="font-semibold text-ink">9. 12. 2005</span>. Od
              svojho vzniku zabezpečuje starostlivosť o mestský majetok s
              dôrazom na transparentnosť, spoľahlivosť a dostupnosť služieb pre
              občanov.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-[#fcfcfc] p-5 sm:p-6">
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                  Hlavná činnosť
                </h3>
                <ul className="mt-5 space-y-3.5 font-sans text-base leading-relaxed text-ink">
                  <li className="border-l-[3px] border-[#2563eb] pl-3.5">
                    Správa bytového fondu a nájomných vzťahov
                  </li>
                  <li className="border-l-[3px] border-[#2563eb] pl-3.5">
                    Údržba a prevádzka zvereného majetku
                  </li>
                  <li className="border-l-[3px] border-[#2563eb] pl-3.5">
                    Výstavba nájomných bytových domov
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-[#fcfcfc] p-5 sm:p-6">
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                  Podnikateľská činnosť
                </h3>
                <ul className="mt-5 space-y-3.5 font-sans text-base leading-relaxed text-ink">
                  <li className="border-l-[3px] border-line pl-3.5">
                    Správa nehnuteľností a súvisiacich služieb
                  </li>
                  <li className="border-l-[3px] border-line pl-3.5">
                    Výkon práv a povinností mesta Partizánske voči nájomcom a
                    partnerom
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2563eb]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:px-10">
          <p className="max-w-2xl font-serif text-2xl font-semibold leading-snug text-surface sm:text-3xl">
            Hľadáte správcu alebo voľné priestory? Kontaktujte nás.
          </p>
          <a
            href="#kontakty"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-surface px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#2563eb] transition-colors hover:bg-[#fcfcfc]"
          >
            Kontaktovať SMM
          </a>
        </div>
      </div>
    </section>
  );
}
