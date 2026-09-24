"use client";

type HeroProps = {
  revealed?: boolean;
};

export function Hero({ revealed = true }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[82svh] w-full items-start justify-center overflow-hidden bg-paper pb-28 sm:min-h-[86svh] sm:pb-32 md:pb-36"
      aria-label="Úvod"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-panorama.png"
          alt="Panoráma Partizánskeho"
          className={`h-full w-full object-cover object-[center_35%] transition-transform duration-[1.4s] ease-out ${
            revealed ? "scale-100" : "scale-105"
          }`}
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-paper/88 via-paper/72 to-paper"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/40"
          aria-hidden
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-[20vh] text-center sm:pt-[22vh] md:pt-[24vh] ${
          revealed ? "" : "pointer-events-none"
        }`}
      >
        <p
          className={`font-sans text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-royal sm:text-xs ${
            revealed ? "animate-hero-rise" : "opacity-0"
          }`}
          style={{ animationDelay: revealed ? "0.15s" : undefined }}
        >
          Správa majetku mesta
        </p>

        <h1
          className={`mt-5 font-serif text-[clamp(3rem,11vw,6.75rem)] font-medium leading-[0.95] tracking-[0.04em] text-ink sm:mt-6 ${
            revealed ? "animate-hero-rise" : "opacity-0"
          }`}
          style={{ animationDelay: revealed ? "0.32s" : undefined }}
        >
          PARTIZÁNSKE
        </h1>

        <span
          className={`mt-6 h-px w-14 origin-center bg-royal sm:mt-7 sm:w-16 ${
            revealed ? "animate-divider-draw" : "opacity-0"
          }`}
          style={{
            animationDelay: revealed ? "0.5s" : undefined,
            animationFillMode: "forwards",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}
