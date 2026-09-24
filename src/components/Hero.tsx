"use client";

type HeroProps = {
  revealed?: boolean;
};

export function Hero({ revealed = true }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-start justify-center overflow-hidden"
      aria-label="Úvod"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80"
          alt="Nočná panoráma mesta s teplým architektonickým osvetlením"
          className={`h-full w-full object-cover object-[center_35%] transition-transform duration-[1.4s] ease-out ${
            revealed ? "scale-100" : "scale-105"
          }`}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-anthracite/75 via-anthracite/45 to-anthracite/85"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(17,17,17,0.45)_100%)]"
          aria-hidden
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-[28vh] text-center sm:pt-[30vh] md:pt-[32vh] ${
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
          className={`mt-5 font-serif text-[clamp(2.75rem,10vw,6.5rem)] font-medium leading-[0.95] tracking-[0.06em] text-cream sm:mt-6 ${
            revealed ? "animate-hero-rise" : "opacity-0"
          }`}
          style={{ animationDelay: revealed ? "0.32s" : undefined }}
        >
          PARTIZÁNSKE
        </h1>

        <span
          className={`mt-7 h-px w-14 origin-center bg-amber sm:mt-8 sm:w-16 ${
            revealed ? "animate-divider-draw" : "opacity-0"
          }`}
          style={{
            animationDelay: revealed ? "0.55s" : undefined,
            animationFillMode: "forwards",
          }}
          aria-hidden
        />
      </div>

      <a
        href="#o-nas"
        className={`absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/60 transition-colors hover:text-amber ${
          revealed ? "animate-hero-rise" : "opacity-0"
        }`}
        style={{ animationDelay: revealed ? "0.8s" : undefined }}
        aria-label="Posunúť sa nižšie"
      >
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.35em]">
          Scroll
        </span>
        <span
          className="animate-scroll-pulse flex h-9 w-5 items-start justify-center rounded-full border border-cream/35 pt-1.5"
          aria-hidden
        >
          <span className="h-1.5 w-px bg-cream/80" />
        </span>
      </a>
    </section>
  );
}
