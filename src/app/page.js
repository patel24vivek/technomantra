import { Hero } from "@/components/hero";
import { SolarSystem } from "@/components/solar-system";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-[var(--accent-gold)]/25 selection:text-white">
      <Hero canvasContainer={<SolarSystem className="h-full w-full" />} />
    </main>
  );
}
