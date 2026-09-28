"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { NOTICES } from "@/lib/notices";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function NoticeCard({
  date,
  title,
  href,
  interactive,
}: {
  date: string;
  title: string;
  href: string;
  interactive: boolean;
}) {
  return (
    <article className="flex w-[min(18.5rem,78vw)] shrink-0 flex-col justify-between border border-line bg-paper px-4 py-4 sm:w-[17.5rem] lg:w-[18rem]">
      <div>
        <time className="font-sans text-sm font-semibold tabular-nums text-muted">
          {date}
        </time>
        {interactive ? (
          <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-ink sm:text-xl">
            {title}
          </h3>
        ) : (
          <p className="mt-2 font-serif text-lg font-semibold leading-snug text-ink sm:text-xl">
            {title}
          </p>
        )}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={interactive ? undefined : -1}
        aria-hidden={interactive ? undefined : true}
        className="mt-4 inline-flex min-h-10 w-fit items-center font-sans text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
      >
        Otvoriť oznam
      </a>
    </article>
  );
}

export function NoticesCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const labelId = useId();
  const moving = !reducedMotion && inView && !userPaused;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="oznamy"
      className="scroll-mt-24 bg-surface"
      aria-labelledby={labelId}
    >
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="section-label">Informácie</p>
            <h2
              id={labelId}
              className="section-heading mt-3 text-3xl sm:text-4xl"
            >
              Oznamy
            </h2>
            <span className="mt-3 block h-0.5 w-14 bg-[#2563eb]" aria-hidden />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/oznamy"
              className="font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Všetky oznamy
            </Link>
            <Link
              href="/ovs"
              className="font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Obchodné verejné súťaže
            </Link>
          </div>
        </div>

        {reducedMotion ? (
          <div
            className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:thin]"
            role="list"
            aria-label="Oznamy"
          >
            {NOTICES.map((item) => (
              <div key={item.title} role="listitem">
                <NoticeCard
                  date={item.date}
                  title={item.title}
                  href={item.href}
                  interactive
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="oznamy-ribbon relative overflow-hidden"
            onMouseEnter={() => setUserPaused(true)}
            onMouseLeave={() => setUserPaused(false)}
            onFocusCapture={() => setUserPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setUserPaused(false);
              }
            }}
          >
            {/* Screen-reader list — unique notices only */}
            <ul className="sr-only">
              {NOTICES.map((item) => (
                <li key={item.title}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}, {item.date}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`oznamy-ribbon-track flex w-max gap-3 ${
                moving ? "" : "oznamy-ribbon-paused"
              }`}
              aria-hidden="true"
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-3">
                  {NOTICES.map((item) => (
                    <NoticeCard
                      key={`${copy}-${item.title}`}
                      date={item.date}
                      title={item.title}
                      href={item.href}
                      interactive={false}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
