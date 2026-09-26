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
      <div className="relative h-[22rem] w-full sm:h-[26rem] lg:h-[28rem] xl:h-[30rem]">
        <DecorativeImage
          src={band.src}
          fallback={band.fallback}
          className="absolute inset-0 h-full w-full"
          objectClassName="h-full w-full object-cover object-[center_42%] sm:object-[center_45%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,13,28,0.55) 0%, rgba(7,13,28,0.18) 42%, rgba(7,13,28,0.08) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex h-full max-w-6xl items-end px-5 pb-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
          <p className="max-w-md font-serif text-2xl font-semibold leading-snug text-cream sm:text-3xl">
            Správa majetku s dôrazom na poriadok a dostupnosť.
          </p>
        </div>
      </div>
    </section>
  );
}
