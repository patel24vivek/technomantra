"use client";

import Navigation from "./Navigation";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero({ canvasContainer }) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-cosmic-radial bg-[var(--background)] text-[var(--foreground)]">
      {/* 3D WebGL Background / Scene Container (Interactive Canvas Layer) */}
      <div className="absolute inset-0 z-0 opacity-90">
        {canvasContainer}
      </div>

      {/* Top Navigation */}
      <Navigation />

      {/* Main Hero Body - Two Column Composition on Desktop */}
      <div className="relative z-10 flex-1 flex items-center layout-container py-12 lg:py-0 pointer-events-none">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Hero Content: ~45% width on desktop) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Right Column (Reserved 3D Solar System Scene Container: ~55% width) */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[650px] w-full flex items-center justify-center pointer-events-none">
            {/* Conceptual reserved scene wrapper for future R3F Solar System */}
            <div className="hero-scene relative w-full h-full flex items-center justify-center pointer-events-none">
              {/* Natural background blend - no visible placeholder box */}
            </div>
          </div>

        </div>
      </div>

      {/* Hero Footer / Scroll Indicator */}
      <div className="relative z-10 layout-container pb-8 pt-4 flex justify-between items-end pointer-events-none">
        <div className="pointer-events-auto">
          <ScrollIndicator />
        </div>
        <div className="text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] uppercase hidden sm:block pointer-events-auto">
          Nova Digital Systems • 2026
        </div>
      </div>
    </section>
  );
}

