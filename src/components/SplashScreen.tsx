"use client";

import { useEffect, useState } from "react";

const TOTAL_MS = 2200;

type SplashScreenProps = {
  onComplete?: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const delay = reduceMotion ? 0 : TOTAL_MS;
    const timer = window.setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, delay);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      className="splash-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#fcfcfc]"
      aria-hidden
      role="presentation"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <p className="animate-splash-mark font-serif text-5xl font-bold tracking-[0.28em] text-[#2563eb] sm:text-6xl md:text-7xl">
          SMM
        </p>
        <span
          className="animate-splash-line mt-5 h-0.5 w-16 origin-center bg-[#2563eb]"
          aria-hidden
        />
        <p className="animate-splash-mark mt-5 max-w-xs font-sans text-xs font-semibold uppercase tracking-[0.28em] text-ink sm:text-sm [animation-delay:150ms] [animation-fill-mode:both]">
          Správa majetku mesta
          <span className="mt-1.5 block tracking-[0.28em]">
            n.o., Partizánske
          </span>
        </p>
      </div>
    </div>
  );
}
