import { EDITORIAL_IMAGES } from "@/lib/media";

/**
 * Photographic contact section with a left contact panel.
 * Desktop: the photo ends first; the panel continues ~100–150px onto the
 * light background of the following section (TRYES-style bridge).
 * Mobile: cropped band + readable panel with a light overlap only.
 */
export function BlueHourBand() {
  const band = EDITORIAL_IMAGES.blueHourBand;

  return (
    <section
      id="kontakty"
      className="relative z-20 overflow-visible scroll-mt-24 bg-warm lg:bg-transparent"
      aria-labelledby="kontakty-heading"
    >
      {/* Mobile photographic band */}
      <div
        className="relative h-[16.5rem] w-full overflow-hidden sm:h-[18.5rem] lg:hidden"
        style={{ backgroundColor: band.fallback }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={band.src}
          alt=""
          role="presentation"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%] [filter:saturate(0.82)_hue-rotate(-6deg)_brightness(0.97)_contrast(1.03)]"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Desktop photographic band — height ends before the panel does */}
      <div
        className="relative hidden h-[30rem] w-full overflow-hidden lg:block xl:h-[32rem]"
        style={{ backgroundColor: band.fallback }}
      >
        <div className="contact-photo-parallax absolute inset-0" aria-hidden />
      </div>

      {/*
        Single panel: on mobile overlaps the band slightly;
        on desktop sits near the top of the photo and hangs past its bottom
        onto the light spacer / map section background.
      */}
      <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-5 pb-10 sm:-mt-12 sm:px-8 sm:pb-12 lg:absolute lg:inset-x-0 lg:top-0 lg:mt-0 lg:max-w-none lg:overflow-visible lg:px-0 lg:pb-0">
        <div className="mx-auto max-w-6xl lg:px-10 lg:pt-12 xl:pt-14">
          <ContactPanel />
        </div>
      </div>

      {/* Desktop bridge: paper-colored space under the photo for the overhang */}
      <div
        className="hidden h-[11rem] bg-paper lg:block xl:h-[12rem]"
        aria-hidden
      />
    </section>
  );
}

function ContactPanel() {
  return (
    <div className="w-full max-w-[36rem] border border-line bg-[#f7f5f1] px-7 py-9 sm:max-w-[38rem] sm:px-10 sm:py-11 lg:px-12 lg:py-12">
      <p className="font-sans text-xs font-bold tracking-[0.28em] text-[#2563eb]">
        KONTAKT
      </p>
      <h2
        id="kontakty-heading"
        className="mt-3 font-serif text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.12] text-ink"
      >
        Sme tu pre vás
      </h2>
      <span className="mt-4 block h-0.5 w-14 bg-[#2563eb]" aria-hidden />
      <p className="mt-5 font-sans text-base leading-relaxed text-muted sm:text-lg">
        Správa majetku mesta, n.o., Partizánske — osobný kontakt počas
        stránkových dní.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
            E-mail
          </p>
          <a
            href="mailto:sekretariat@smmpartizanske.sk"
            className="mt-2 block min-h-11 font-sans text-lg font-semibold leading-snug text-ink underline-offset-4 transition-colors hover:text-[#2563eb] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] sm:text-xl"
          >
            sekretariat@smmpartizanske.sk
          </a>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
            Telefón
          </p>
          <a
            href="tel:+421382851711"
            className="mt-2 inline-flex min-h-12 items-center font-sans text-lg font-semibold leading-snug text-ink underline-offset-4 transition-colors hover:text-[#2563eb] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] sm:text-xl"
          >
            038 / 28 517 11
          </a>
        </div>
      </div>

      <a
        href="mailto:sekretariat@smmpartizanske.sk"
        className="btn-primary mt-9 inline-flex min-h-12 w-full items-center justify-center px-7 py-3.5 sm:w-auto"
      >
        Napísať SMM
      </a>
    </div>
  );
}
