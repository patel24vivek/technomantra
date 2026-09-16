"use client";

import { useRef } from "react";
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";
import ScrollController from "@/components/scroll/ScrollController";

export default function Hero({ canvasContainer }) {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-cosmic-radial bg-[var(--background)] text-[var(--foreground)]">
      {/* GSAP ScrollTrigger Foundation Controller */}
      <ScrollController triggerRef={heroRef} />

      {/* 3D WebGL Background / Scene Container (Interactive Canvas Layer) */}
      <div className="absolute inset-0 z-10 pointer-events-auto opacity-90">
        {canvasContainer}
      </div>

      {/* Top Navigation */}
      <Navigation />

      {/* Main Hero Body - Full Screen Width with Responsive Side Padding */}
      <div className="relative z-10 flex-1 flex items-center w-full px-4 sm:px-8 lg:px-16 xl:px-20 py-6 sm:py-10 lg:py-0 pointer-events-none">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column (Main Title Content) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Right Column (3D Solar System Space Area) */}
          <div className="lg:col-span-6 xl:col-span-6 relative h-[280px] sm:h-[400px] lg:h-[600px] xl:h-[700px] w-full flex items-center justify-center pointer-events-none">
            <div className="hero-scene relative w-full h-full flex items-center justify-center pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
