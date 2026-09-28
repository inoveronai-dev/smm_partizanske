import { DecorativeImage } from "@/components/DecorativeImage";
import { EDITORIAL_IMAGES } from "@/lib/media";

/**
 * Full-width decorative architectural pause before contact.
 * Illustrative image only — not a claim about Partizánske or SMM properties.
 */
export function BlueHourBand() {
  const band = EDITORIAL_IMAGES.blueHourBand;

  return (
    <section aria-label="Vizuálny prechod" className="relative w-full overflow-hidden">
      <div className="relative h-[16rem] w-full sm:h-[18rem] lg:h-[20rem] xl:h-[22rem]">
        <DecorativeImage
          src={band.src}
          fallback={band.fallback}
          className="absolute inset-0 h-full w-full"
          objectClassName="absolute inset-0 h-full w-full object-cover object-[center_42%] sm:object-[center_45%] [filter:saturate(0.78)_hue-rotate(-8deg)_brightness(0.96)_contrast(1.04)]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,13,28,0.55) 0%, rgba(7,13,28,0.18) 42%, rgba(7,13,28,0.08) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex h-full max-w-6xl items-end px-5 pb-8 sm:px-8 sm:pb-9 lg:px-10 lg:pb-10">
          <p className="max-w-md font-serif text-xl font-semibold leading-snug text-cream sm:text-2xl">
            Správa majetku s dôrazom na poriadok a dostupnosť.
          </p>
        </div>
      </div>
    </section>
  );
}
