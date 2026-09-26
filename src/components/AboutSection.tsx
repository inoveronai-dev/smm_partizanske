export function AboutSection() {
  return (
    <section
      id="o-nas"
      className="relative scroll-mt-24 bg-warm"
      aria-labelledby="o-nas-heading"
    >
      <div
        id="o-organizacii"
        className="pointer-events-none absolute -top-24"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <figure className="order-2 lg:order-1 lg:self-stretch">
            <div className="h-full overflow-hidden bg-navy/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/smm-hq-building.png"
                alt="Sídlo Správy majetku mesta, n.o., Partizánske — Ulica 29. augusta"
                className="aspect-[4/3] w-full object-cover object-[center_42%] sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[28rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 border-l-[3px] border-[#2563eb] pl-4">
              <span className="block font-serif text-lg font-semibold text-ink sm:text-xl">
                Sídlo SMM Partizánske
              </span>
              <span className="mt-1 block font-sans text-base text-muted">
                29. augusta 1191/51 — miesto osobného kontaktu počas stránkových
                dní
              </span>
            </figcaption>
          </figure>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <p className="section-label">Organizácia</p>
            <h2
              id="o-nas-heading"
              className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl"
            >
              O nás
            </h2>
            <span className="mt-6 block h-0.5 w-16 bg-[#2563eb]" aria-hidden />

            <p className="mt-6 font-sans text-lg leading-relaxed text-ink sm:text-xl">
              Správa majetku mesta, n.o., Partizánske je nezisková organizácia
              mesta so samostatnou právnou subjektivitou, založená k{" "}
              <span className="font-semibold">9. 12. 2005</span>. Zabezpečuje
              starostlivosť o mestský majetok a dostupnosť informácií pre
              občanov.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-sans text-base font-bold text-[#2563eb]">
                  Hlavná činnosť
                </h3>
                <ul className="mt-3 space-y-2.5 font-sans text-base leading-relaxed text-ink">
                  <li className="border-l-[3px] border-[#2563eb] pl-3">
                    Správa bytového fondu a nájomných vzťahov
                  </li>
                  <li className="border-l-[3px] border-[#2563eb] pl-3">
                    Údržba a prevádzka zvereného majetku
                  </li>
                  <li className="border-l-[3px] border-[#2563eb] pl-3">
                    Výstavba nájomných bytových domov
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-base font-bold text-[#2563eb]">
                  Podnikateľská činnosť
                </h3>
                <ul className="mt-3 space-y-2.5 font-sans text-base leading-relaxed text-ink">
                  <li className="border-l-[3px] border-line pl-3">
                    Správa nehnuteľností a súvisiacich služieb
                  </li>
                  <li className="border-l-[3px] border-line pl-3">
                    Výkon práv a povinností mesta Partizánske voči nájomcom a
                    partnerom
                  </li>
                </ul>
              </div>
            </div>

            <details className="mt-8 border-t border-line pt-5">
              <summary className="cursor-pointer font-sans text-base font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]">
                Podrobnejšie o organizácii
              </summary>
              <div className="mt-4 space-y-4 font-sans text-base leading-relaxed text-muted">
                <p>
                  Od svojho vzniku zabezpečuje Správa majetku mesta
                  starostlivosť o mestský majetok s dôrazom na transparentnosť,
                  spoľahlivosť a dostupnosť služieb pre občanov.
                </p>
                <p>
                  Organizácia pôsobí ako samostatný právny subjekt mesta
                  Partizánske. Presné znenie zriaďovacích dokumentov a odkazy na
                  záväzný právny rámec budú na stránke doplnené po oficiálnom
                  potvrdení zo strany SMM.
                </p>
              </div>
            </details>
          </div>
        </div>

        <div
          id="spravna-rada"
          className="scroll-mt-24 mt-14 border-t border-line pt-10"
        >
          <h3 className="font-serif text-2xl font-semibold text-ink">
            Správna rada
          </h3>
          <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-muted sm:text-lg">
            Zoznam členov správnej rady a funkčné obdobia budú zverejnené na
            tomto mieste po dodaní oficiálnych údajov od SMM. Nevymýšľame mená
            ani funkcie.
          </p>
          <a
            href="#kontakty"
            className="mt-5 inline-flex min-h-11 items-center font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline"
          >
            Kontaktovať SMM
          </a>
        </div>
      </div>
    </section>
  );
}
