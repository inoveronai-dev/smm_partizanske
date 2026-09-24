"use client";

import { useCallback, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SplashScreen } from "@/components/SplashScreen";

export function HomeExperience() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      <Header revealed={splashDone} />
      <main>
        <Hero revealed={splashDone} />
        {/* Anchor targets for navigation — content sections follow in later iterations */}
        <div id="o-nas" className="h-px scroll-mt-24" aria-hidden />
        <div id="sluzby" className="h-px scroll-mt-24" aria-hidden />
        <div id="volne-priestory" className="h-px scroll-mt-24" aria-hidden />
        <div id="oznamenia" className="h-px scroll-mt-24" aria-hidden />
        <div id="kontakt" className="h-px scroll-mt-24" aria-hidden />
      </main>
    </>
  );
}
