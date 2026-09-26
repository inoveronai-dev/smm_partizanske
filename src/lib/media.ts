/**
 * Decorative editorial assets for the lower homepage.
 * These are illustrative — never bind them to a specific building, OVS item, or document.
 */
export const EDITORIAL_IMAGES = {
  ovsIntro: {
    src: "/images/ovs-editorial.webp",
    /** Warm solid fallback when the asset file is absent */
    fallback: "#f0ebe3",
    alt: "",
  },
  blueHourBand: {
    src: "/images/buildings-blue-hour.webp",
    fallback: "#0b1329",
    alt: "",
  },
} as const;
