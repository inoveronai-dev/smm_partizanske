"use client";

import { useCallback, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickAccess } from "@/components/QuickAccess";
import { SplashScreen } from "@/components/SplashScreen";
import { SECTION_ANCHORS } from "@/lib/navigation";

export function HomeExperience() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      <Header revealed={splashDone} />
      <main className="pb-24">
        <Hero revealed={splashDone} />
        <QuickAccess revealed={splashDone} />
        {SECTION_ANCHORS.map((id) => (
          <div key={id} id={id} className="h-0 scroll-mt-24" aria-hidden />
        ))}
      </main>
    </>
  );
}
