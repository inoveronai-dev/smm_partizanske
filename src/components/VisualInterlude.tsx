export function VisualInterlude() {
  return (
    <section
      aria-labelledby="interlude-heading"
      className="relative overflow-hidden bg-navy-deep"
    >
      {/* Authentic town panorama — second memorable visual moment */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-panorama.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_55%] opacity-55"
        loading="lazy"
        decoding="async"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(7,13,28,0.92) 0%, rgba(11,19,41,0.78) 45%, rgba(37,99,235,0.45) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[22rem] lg:px-10 lg:py-24">
        <p className="font-sans text-xs font-bold tracking-[0.28em] text-[#93c5fd]">
          SPRÁVA MAJETKU MESTA
        </p>
        <h2
          id="interlude-heading"
          className="mt-4 max-w-3xl font-serif text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.15] text-cream"
        >
          Starostlivosť o mestský majetok — spoľahlivo a transparentne.
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#volne-priestory"
            className="btn-on-dark inline-flex min-h-12 items-center justify-center px-7 py-3.5"
          >
            Voľné priestory
          </a>
          <a
            href="#kontakty"
            className="btn-ghost-on-dark inline-flex min-h-12 items-center justify-center px-7 py-3.5"
          >
            Kontaktovať SMM
          </a>
        </div>
      </div>
    </section>
  );
}
