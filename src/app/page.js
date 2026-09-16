import { Hero } from "@/components/hero";
import { SolarSystem } from "@/components/solar-system";
import { WhatWeDo } from "@/components/what-we-do";
import { Services } from "@/components/services";
import { Solutions } from "@/components/solutions";
import { Industries } from "@/components/industries";
import { Projects } from "@/components/projects";
import { Insights } from "@/components/insights";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-[var(--accent-gold)]/25 selection:text-white">
      {/* Section 01: Interactive 3D Solar System Hero */}
      <Hero canvasContainer={<SolarSystem className="h-full w-full" />} />

      {/* Section 02: What We Do */}
      <WhatWeDo />

      {/* Section 03: Services */}
      <Services />

      {/* Section 04: Solutions */}
      <Solutions />

      {/* Section 05: Industries */}
      <Industries />

      {/* Section 06: Selected Work / Projects */}
      <Projects />

      {/* Section 07: Insights / Blog */}
      <Insights />
    </main>
  );
}
