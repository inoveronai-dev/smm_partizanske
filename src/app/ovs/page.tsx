import type { Metadata } from "next";
import Link from "next/link";
import { OVS_ITEMS } from "@/lib/notices";
import { SubpageShell } from "@/components/SubpageShell";

export const metadata: Metadata = {
  title: "OVS | SMM Partizánske",
  description:
    "Obchodné verejné súťaže a prenájmy Správy majetku mesta, n.o., Partizánske.",
};

export default function OvsPage() {
  return (
    <SubpageShell
      eyebrow="Súťaže a prenájmy"
      title="Obchodné verejné súťaže"
      intro="Položky OVS a prenájmov dostupné v tomto projekte. Stav otvorenia/uzavretia neuvádzame bez oficiálneho potvrdenia."
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <ul className="divide-y divide-line border-y border-line">
          {OVS_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex min-h-[4.5rem] flex-col justify-center gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="min-w-0">
                <p className="font-sans text-lg font-medium text-ink sm:text-xl">
                  {item.title}
                </p>
                {item.category !== "OVS" ? (
                  <p className="mt-1 font-sans text-sm text-muted">
                    {item.category}
                  </p>
                ) : (
                  <p className="mt-1 font-sans text-sm text-muted">OVS</p>
                )}
              </div>
              <time className="shrink-0 font-sans text-base font-semibold tabular-nums text-muted sm:text-lg">
                {item.date}
              </time>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
          <div id="archiv" className="scroll-mt-28">
            <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
              Archív OVS
            </h2>
            <p className="mt-2 font-sans text-base leading-relaxed text-muted">
              Oficiálny archív zatiaľ nie je na tejto stránke zverejnený. O
              staršie dokumenty môžete požiadať kontaktom.
            </p>
            <Link
              href="/#kontakty"
              className="mt-4 inline-flex min-h-11 items-center font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Požiadať o archív OVS
            </Link>
          </div>

          <div id="protokoly" className="scroll-mt-28">
            <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
              Protokoly
            </h2>
            <p className="mt-2 font-sans text-base leading-relaxed text-muted">
              Protokoly zatiaľ nie sú na tejto stránke zverejnené. Môžete o ne
              požiadať kontaktom SMM.
            </p>
            <Link
              href="/#kontakty"
              className="mt-4 inline-flex min-h-11 items-center font-sans text-base font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Požiadať o protokoly
            </Link>
          </div>
        </div>

        <p className="mt-10 font-sans text-base text-muted">
          Oznámenia pre občanov nájdete na stránke{" "}
          <Link
            href="/oznamy"
            className="font-semibold text-[#2563eb] underline-offset-4 hover:underline"
          >
            Oznamy
          </Link>
          .
        </p>
      </div>
    </SubpageShell>
  );
}
