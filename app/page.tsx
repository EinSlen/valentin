'use client';

import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Career from "@/components/main/Career";

import '../utils/i18n';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 bg-black">
        <Hero />
        <Career />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
