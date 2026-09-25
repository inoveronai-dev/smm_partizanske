"use client";

import { useEffect, useState } from "react";

const ANNOUNCEMENTS = [
  {
    title: "Voľné nebytové priestory",
    href: "https://smmpartizanske.sk/index.php/2026/06/01/volne-nebytove-priestory/",
  },
  {
    title: "Kultúrny dom SC Malé Bielice – uzatvorený",
    href: "https://smmpartizanske.sk/index.php/2026/03/03/kulturny-dom-sc-male-bielice-uzatvoreny/",
  },
  {
    title: "Cenník údržby a dopravy od 1.1.2026",
    href: "https://smmpartizanske.sk/index.php/2026/01/16/cennik-udrzby-a-dopravy-od-1-1-2026/",
  },
] as const;

const ROTATE_MS = 4500;

export function NoticesTicker() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % ANNOUNCEMENTS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const active = ANNOUNCEMENTS[index];

  return (
    <div
      className="group/ticker overflow-hidden rounded-2xl border border-line bg-surface shadow-sm shadow-ink/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <div className="flex shrink-0 items-center gap-2.5 border-b border-line bg-[#2563eb] px-4 py-3.5 sm:border-b-0 sm:border-r sm:px-5">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-surface"
            aria-hidden
          />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-surface">
            Oznamy
          </span>
        </div>

        <div className="relative min-h-[3.75rem] flex-1 overflow-hidden px-4 sm:px-5">
          <p className="sr-only" aria-live="polite">
            Aktuálny oznam: {active.title}
          </p>

          {reduceMotion ? (
            <ul className="flex flex-col gap-2 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              {ANNOUNCEMENTS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-medium text-ink transition-colors hover:text-[#2563eb] sm:text-base"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="relative h-full min-h-[3.75rem]">
              {ANNOUNCEMENTS.map((item, itemIndex) => {
                const isActive = itemIndex === index;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    aria-hidden={!isActive}
                    className={`absolute inset-x-0 top-1/2 flex items-center gap-3 transition-[opacity,transform] duration-500 ease-out ${
                      isActive
                        ? "pointer-events-auto -translate-y-1/2 opacity-100"
                        : "pointer-events-none -translate-y-[30%] opacity-0"
                    }`}
                  >
                    <span
                      className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb] sm:inline-block"
                      aria-hidden
                    />
                    <span className="truncate font-sans text-sm font-medium text-ink transition-colors hover:text-[#2563eb] sm:text-base">
                      {item.title}
                    </span>
                    <span className="ml-auto hidden shrink-0 font-sans text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#2563eb] sm:inline">
                      Čítať
                    </span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {!reduceMotion ? (
          <div className="flex shrink-0 items-center justify-center gap-1.5 border-t border-line px-4 py-2.5 sm:border-l sm:border-t-0">
            {ANNOUNCEMENTS.map((item, itemIndex) => (
              <button
                key={item.href}
                type="button"
                aria-label={`Zobraziť oznam ${itemIndex + 1}`}
                aria-current={itemIndex === index}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  itemIndex === index
                    ? "bg-[#2563eb]"
                    : "bg-line hover:bg-[#2563eb]/45"
                }`}
                onClick={() => setIndex(itemIndex)}
              />
            ))}
          </div>
        ) : null}
      </div>

      {!reduceMotion ? (
        <div className="overflow-hidden border-t border-line bg-[#fcfcfc]">
          <div
            className={`flex w-max gap-10 whitespace-nowrap py-2.5 pl-5 ${
              paused ? "[animation-play-state:paused]" : "animate-ticker-scroll"
            }`}
          >
            {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, i) => (
              <a
                key={`${item.href}-${i}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-sans text-sm text-ink/75 transition-colors hover:text-[#2563eb]"
              >
                <span
                  className="h-1 w-1 rounded-full bg-[#2563eb]"
                  aria-hidden
                />
                {item.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
