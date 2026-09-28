import { DecorativeImage } from "@/components/DecorativeImage";
import { EDITORIAL_IMAGES } from "@/lib/media";

/**
 * Full-width photographic transition before contact.
 * Uses the existing buildings-blue-hour asset — illustrative only, not a
 * claim about a specific SMM property. No text or controls over the image.
 */
export function BlueHourBand() {
  const band = EDITORIAL_IMAGES.blueHourBand;

  return (
    <section
      aria-label="Vizuálny prechod"
      className="relative w-full overflow-hidden bg-navy-deep"
    >
      <div className="relative h-[18rem] w-full sm:h-[20rem] lg:h-[22rem] xl:h-[24rem]">
        <DecorativeImage
          src={band.src}
          fallback={band.fallback}
          className="absolute inset-0 h-full w-full"
          objectClassName="absolute inset-0 h-full w-full object-cover object-[center_40%] sm:object-[center_42%] lg:object-[center_45%] [filter:saturate(0.78)_hue-rotate(-8deg)_brightness(0.96)_contrast(1.04)]"
        />
      </div>
    </section>
  );
}
