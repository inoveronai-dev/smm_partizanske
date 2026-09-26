"use client";

import { useState } from "react";

type DecorativeImageProps = {
  src: string;
  fallback: string;
  className?: string;
  objectClassName?: string;
};

/**
 * Decorative plate with solid-color fallback.
 * Hides a broken image if the asset file is missing at runtime.
 */
export function DecorativeImage({
  src,
  fallback,
  className,
  objectClassName,
}: DecorativeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ backgroundColor: fallback }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          role="presentation"
          className={
            objectClassName ??
            "absolute inset-0 h-full w-full object-cover"
          }
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : null}
    </div>
  );
}
