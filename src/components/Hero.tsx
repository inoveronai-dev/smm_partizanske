"use client";

type HeroProps = {
  revealed?: boolean;
};

export function Hero({ revealed = true }: HeroProps) {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-paper"
      aria-label="Úvod"
    >
      {/* Mobile: image band then solid copy */}
      <div className="lg:hidden">
        <div className="relative h-[44svh] min-h-[16rem] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-panorama.png"
            alt="Panoráma Partizánskeho"
            className="h-full w-full object-cover object-[center_38%]"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-paper to-transparent"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-8 pt-2 sm:px-8">
          <HeroCopy revealed={revealed} />
        </div>
      </div>

      {/* Desktop: rich full-bleed photo with left reading panel */}
      <div className="relative hidden min-h-[78svh] lg:block xl:min-h-[82svh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-panorama.png"
          alt="Panoráma Partizánskeho"
          className={`absolute inset-0 h-full w-full object-cover object-[center_42%] transition-transform duration-[1.4s] ease-out ${
            revealed ? "scale-100" : "scale-105"
          }`}
          fetchPriority="high"
          decoding="async"
        />
        {/* Soft left veil — keeps panorama recognizable on the right */}
        <div
          className="absolute inset-y-0 left-0 w-[min(38rem,52%)] bg-gradient-to-r from-paper via-paper/95 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-paper/90 to-transparent"
          aria-hidden
        />

        <div
          className={`relative z-10 flex min-h-[78svh] max-w-7xl flex-col justify-center px-10 pb-36 pt-28 xl:min-h-[82svh] xl:px-14 ${
            revealed ? "" : "pointer-events-none"
          }`}
        >
          <div className="max-w-xl xl:max-w-2xl">
            <HeroCopy revealed={revealed} align="left" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCopy({
  revealed,
  align = "center",
}: {
  revealed: boolean;
  align?: "left" | "center";
}) {
  const alignClass =
    align === "left" ? "items-start text-left" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignClass}`}>
      <p
        className={`font-sans text-sm font-bold tracking-[0.08em] text-[#2563eb] sm:text-base ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.12s" : undefined }}
      >
        Správa majetku mesta, n.o.
      </p>

      <h1
        className={`mt-4 font-serif text-[clamp(2.15rem,5.2vw,3.75rem)] font-semibold leading-[1.12] tracking-[0.01em] text-ink ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.28s" : undefined }}
      >
        Spravujeme mestský majetok v Partizánskom
      </h1>

      <p
        className={`mt-5 max-w-xl font-sans text-base leading-relaxed text-ink sm:text-lg ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.4s" : undefined }}
      >
        Informácie o bytových a nebytových objektoch, dokumentoch a kontaktoch
        na jednom mieste.
      </p>

      <div
        className={`mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.52s" : undefined }}
      >
        <a
          href="#objekty-smm"
          className="btn-primary inline-flex min-h-12 items-center justify-center px-7 py-3.5"
        >
          Pozrieť spravované objekty
        </a>
        <a
          href="#kontakty"
          className="btn-secondary inline-flex min-h-12 items-center justify-center px-7 py-3.5"
        >
          Kontaktovať SMM
        </a>
      </div>
    </div>
  );
}
