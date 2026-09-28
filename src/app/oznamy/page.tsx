import type { Metadata } from "next";
import Link from "next/link";
import { NOTICES } from "@/lib/notices";
import { SubpageShell } from "@/components/SubpageShell";

export const metadata: Metadata = {
  title: "Oznamy | SMM Partizánske",
  description:
    "Oznámenia Správy majetku mesta, n.o., Partizánske pre občanov a partnerov.",
};

export default function OznamyPage() {
  return (
    <SubpageShell
      eyebrow="Informácie"
      title="Oznamy"
      intro="Prehľad oznámení zverejnených v tomto projekte. Každá položka vedie na oficiálny oznam."
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <ul className="divide-y divide-line border-y border-line">
          {NOTICES.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[4.5rem] flex-col justify-center gap-1.5 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="font-sans text-lg font-medium text-ink transition-colors group-hover:text-[#2563eb] sm:text-xl">
                  {item.title}
                </span>
                <time className="shrink-0 font-sans text-base font-semibold tabular-nums text-muted sm:text-lg">
                  {item.date}
                </time>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-sans text-base text-muted">
          Obchodné verejné súťaže nájdete na stránke{" "}
          <Link
            href="/ovs"
            className="font-semibold text-[#2563eb] underline-offset-4 hover:underline"
          >
            OVS
          </Link>
          .
        </p>
      </div>
    </SubpageShell>
  );
}
