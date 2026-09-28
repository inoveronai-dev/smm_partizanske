"use client";

import { useState } from "react";

type MapPreviewProps = {
  embedSrc: string;
  title: string;
};

export function MapPreview({ embedSrc, title }: MapPreviewProps) {
  const [interactive, setInteractive] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full sm:aspect-[21/10] lg:aspect-[2.4/1] lg:min-h-[20rem]">
      <iframe
        title={title}
        src={embedSrc}
        className={`absolute inset-0 h-full w-full border-0 ${
          interactive ? "" : "pointer-events-none"
        }`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {!interactive ? (
        <button
          type="button"
          onClick={() => setInteractive(true)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-navy/25 px-4 transition-colors hover:bg-navy/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#2563eb]"
          aria-label="Zobraziť interaktívnu mapu"
        >
          <span className="rounded-sm bg-surface px-5 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-ink shadow-sm">
            Zobraziť interaktívnu mapu
          </span>
        </button>
      ) : null}
    </div>
  );
}
