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

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
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

            {/* Full factual detail preserved — not deleted, only secondary on the page */}
            <details className="mt-8 rounded-2xl border border-line bg-surface p-5 sm:p-6">
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

          <figure className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/smm-hq-building.png"
                alt="Sídlo Správy majetku mesta, n.o., Partizánske — Ulica 29. augusta"
                className="aspect-[4/3] w-full object-cover object-center"
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
        </div>

        <div
          id="spravna-rada"
          className="scroll-mt-24 mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-8"
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

      <div className="bg-[#2563eb]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="max-w-xl font-serif text-2xl font-semibold leading-snug text-surface sm:text-3xl">
            Potrebujete voľné priestory alebo osobný kontakt?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#volne-priestory"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-surface px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#2563eb] transition-colors hover:bg-paper"
            >
              Voľné priestory
            </a>
            <a
              href="#kontakty"
              className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-surface px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-surface transition-colors hover:bg-surface hover:text-[#2563eb]"
            >
              Kontaktovať SMM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
