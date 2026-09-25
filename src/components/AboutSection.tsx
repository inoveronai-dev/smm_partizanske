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
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left — editorial copy */}
          <div>
            <p className="section-label">Organizácia</p>
            <h2
              id="o-nas-heading"
              className="section-heading mt-5 text-4xl sm:text-5xl md:text-6xl"
            >
              O NÁS
            </h2>
            <span className="mt-7 block h-0.5 w-16 bg-[#2563eb]" aria-hidden />

            <p className="mt-8 font-sans text-lg leading-relaxed text-ink sm:text-xl">
              Správa majetku mesta bola ako nezisková organizácia mesta
              Partizánske so samostatnou právnou subjektivitou založená k{" "}
              <span className="font-semibold">9. 12. 2005</span>. Od svojho
              vzniku zabezpečuje starostlivosť o mestský majetok s dôrazom na
              transparentnosť, spoľahlivosť a dostupnosť služieb pre občanov.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                  Hlavná činnosť
                </h3>
                <ul className="mt-4 space-y-3.5 font-sans text-base leading-relaxed text-ink sm:text-lg">
                  <li className="border-l-[3px] border-[#2563eb] pl-4">
                    Správa bytového fondu a nájomných vzťahov
                  </li>
                  <li className="border-l-[3px] border-[#2563eb] pl-4">
                    Údržba a prevádzka zvereného majetku
                  </li>
                  <li className="border-l-[3px] border-[#2563eb] pl-4">
                    Výstavba nájomných bytových domov
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">
                  Podnikateľská činnosť
                </h3>
                <ul className="mt-4 space-y-3.5 font-sans text-base leading-relaxed text-ink sm:text-lg">
                  <li className="border-l-[3px] border-line pl-4">
                    Správa nehnuteľností a súvisiacich služieb
                  </li>
                  <li className="border-l-[3px] border-line pl-4">
                    Výkon práv a povinností mesta Partizánske voči nájomcom a
                    partnerom
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right — headquarters architectural plate */}
          <figure className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgba(17,17,17,0.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/smm-hq-building.png"
                alt="Sídlo Správy majetku mesta, n.o., Partizánske — Ulica 29. augusta"
                className="aspect-[4/3] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 flex flex-col gap-1 border-l-[3px] border-[#2563eb] pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span className="font-serif text-lg font-semibold text-ink sm:text-xl">
                Sídlo SMM Partizánske
              </span>
              <span className="font-sans text-sm font-medium tracking-wide text-ink/65">
                29. augusta 1191/51
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Premium CTA */}
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
