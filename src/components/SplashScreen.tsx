"use client";

import { useEffect, useState } from "react";

const HOLD_MS = 1500;
const EXIT_MS = 650;

type SplashScreenProps = {
  onComplete?: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const holdMs = reduceMotion ? 0 : HOLD_MS;
    const exitMs = reduceMotion ? 0 : EXIT_MS;

    const exitTimer = window.setTimeout(() => setExiting(true), holdMs);
    const doneTimer = window.setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, holdMs + exitMs);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-paper ${
        exiting ? "animate-splash-exit" : ""
      }`}
      aria-hidden={exiting}
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
