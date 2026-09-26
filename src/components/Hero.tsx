"use client";

type HeroProps = {
  revealed?: boolean;
};

export function Hero({ revealed = true }: HeroProps) {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-navy-deep"
      aria-label="Úvod"
    >
      {/* Full-bleed cinematic panorama — both breakpoints share one rich photo plane */}
      <div className="relative min-h-[92svh] w-full lg:min-h-[100svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-panorama.png"
          alt="Panoráma Partizánskeho"
          className={`absolute inset-0 h-full w-full object-cover object-[center_40%] transition-transform duration-[1.6s] ease-out ${
            revealed ? "scale-100" : "scale-105"
          }`}
          fetchPriority="high"
          decoding="async"
        />

        {/* Controlled deep navy veil — left reading side only; town lights stay clear on the right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-transparent lg:via-navy/80 lg:to-transparent"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(7,13,28,0.94) 0%, rgba(11,19,41,0.78) 34%, rgba(11,19,41,0.28) 58%, rgba(11,19,41,0) 78%)",
          }}
          aria-hidden
        />
        {/* Soft bottom fade into the overlapping quick-access strip */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-deep/55 to-transparent lg:h-36"
          aria-hidden
        />

        <div
          className={`relative z-10 mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-28 sm:px-8 sm:pb-32 lg:min-h-[100svh] lg:justify-center lg:px-10 lg:pb-40 lg:pt-24 xl:px-14 ${
            revealed ? "" : "pointer-events-none"
          }`}
        >
          <div className="max-w-xl xl:max-w-2xl">
            <HeroCopy revealed={revealed} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCopy({ revealed }: { revealed: boolean }) {
  return (
    <div className="flex flex-col items-start text-left">
      <p
        className={`font-sans text-xs font-bold tracking-[0.28em] text-[#93c5fd] sm:text-sm ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.12s" : undefined }}
      >
        SPRÁVA MAJETKU MESTA
      </p>

      <h1
        className={`mt-4 font-serif text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[0.01em] text-cream ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.26s" : undefined }}
      >
        Partizánske
      </h1>

      <span
        className={`mt-5 block h-0.5 w-16 origin-left bg-[#2563eb] ${
          revealed ? "animate-divider-draw" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.4s" : undefined }}
        aria-hidden
      />

      <p
        className={`mt-6 max-w-md font-sans text-base leading-relaxed text-cream/90 sm:text-lg ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.48s" : undefined }}
      >
        Spravujeme mestský bytový a nebytový majetok — objekty, dokumenty a
        kontakty na jednom mieste.
      </p>

      <div
        className={`mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.58s" : undefined }}
      >
        <a
          href="#objekty-smm"
          className="btn-on-dark inline-flex min-h-12 items-center justify-center px-7 py-3.5"
        >
          Spravované objekty
        </a>
        <a
          href="#kontakty"
          className="btn-ghost-on-dark inline-flex min-h-12 items-center justify-center px-7 py-3.5"
        >
          Kontaktovať SMM
        </a>
      </div>
    </div>
  );
}
