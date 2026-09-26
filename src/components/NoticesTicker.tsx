import { LATEST_NOTICE } from "@/lib/notices";

/**
 * Static announcement highlight — no autoplay, marquee, or rotating carousel.
 * Older visitors can read and act without chasing moving text.
 */
export function NoticesTicker() {
  return (
    <aside
      className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm shadow-ink/5"
      aria-label="Aktuálny oznam"
    >
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <div className="flex shrink-0 items-center gap-2.5 border-b border-line bg-[#2563eb] px-4 py-4 sm:border-b-0 sm:border-r sm:px-5">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-surface"
            aria-hidden
          />
          <span className="font-sans text-sm font-bold text-surface">
            Aktuálny oznam
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
          <div className="min-w-0">
            <p className="font-sans text-base font-semibold leading-snug text-ink sm:text-lg">
              <a
                href={LATEST_NOTICE.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#2563eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
              >
                {LATEST_NOTICE.title}
              </a>
            </p>
            <p className="mt-1 font-sans text-sm text-muted">
              <time dateTime="2026-06-01">{LATEST_NOTICE.date}</time>
            </p>
          </div>

          <a
            href="#oznamenia"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md border border-[#2563eb]/35 bg-royal-soft px-5 py-2.5 font-sans text-sm font-bold text-[#2563eb] transition-colors hover:bg-[#2563eb] hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
          >
            Všetky oznamy
          </a>
        </div>
      </div>
    </aside>
  );
}
