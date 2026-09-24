"use client";

type HeroProps = {
  revealed?: boolean;
};

export function Hero({ revealed = true }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] w-full items-start justify-center overflow-hidden pb-28 sm:min-h-[90svh] sm:pb-32 md:pb-36"
      aria-label="Úvod"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-panorama.jpg"
          alt="Nočná panoráma mesta s teplým architektonickým osvetlením"
          className={`h-full w-full object-cover object-center transition-transform duration-[1.4s] ease-out ${
            revealed ? "scale-100" : "scale-105"
          }`}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-anthracite/80 via-anthracite/55 to-anthracite"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(17,17,17,0.55)_100%)]"
          aria-hidden
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-[22vh] text-center sm:pt-[24vh] md:pt-[26vh] ${
          revealed ? "" : "pointer-events-none"
        }`}
      >
        <p
          className={`font-sans text-[0.7rem] font-medium uppercase tracking-[0.42em] text-amber sm:text-xs ${
            revealed ? "animate-hero-rise" : "opacity-0"
          }`}
          style={{ animationDelay: revealed ? "0.15s" : undefined }}
        >
          Správa majetku mesta
        </p>

        <h1
          className={`mt-5 font-serif text-[clamp(3rem,11vw,6.75rem)] font-medium leading-[0.95] tracking-[0.02em] text-cream sm:mt-6 ${
            revealed ? "animate-hero-rise" : "opacity-0"
          }`}
          style={{ animationDelay: revealed ? "0.32s" : undefined }}
        >
          Partizánske
        </h1>

        <span
          className={`mt-6 h-px w-14 origin-center bg-amber sm:mt-7 sm:w-16 ${
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
