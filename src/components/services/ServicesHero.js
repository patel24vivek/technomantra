"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ServiceConstellation from "./ServiceConstellation";

export default function ServicesHero() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline for left editorial column
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".srv-hero-fade",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          clearProps: "transform",
        }
      );

      // 2. Cinematic ScrollTrigger transition into next section
      if (leftColRef.current && rightColRef.current) {
        gsap.to(leftColRef.current, {
          y: -45,
          opacity: 0.88,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(rightColRef.current, {
          y: -25,
          scale: 0.98,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="services-hero-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Delicate Ambient Background Glow & Micro Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(14,165,233,0.06),transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(214,168,95,0.04),transparent_75%)] pointer-events-none" />

      {/* Micro Grid Background Accent */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center relative z-10">
        {/* Left Column: Editorial Headline, Narrative & System Tagline */}
        <div ref={leftColRef} className="lg:col-span-5 space-y-6 sm:space-y-8">
          {/* Eyebrow with Pulsing Live Status Pip */}
          <div className="srv-hero-fade flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              OUR SERVICES
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              11 CAPABILITIES
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1
            id="services-hero-title"
            className="srv-hero-fade text-[2.65rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-display font-light text-slate-900 leading-[1.02] sm:leading-[1.0] tracking-[-0.035em]"
          >
            Technology for every <br className="hidden sm:inline" />
            stage of your business.
          </h1>

          {/* Supporting Copy */}
          <p className="srv-hero-fade text-base sm:text-[1.075rem] text-slate-600 font-sans leading-relaxed max-w-lg">
            From websites and business software to automation, marketing and creative services, we bring the
            technology and expertise businesses need to build, operate and grow.
          </p>

          {/* Editorial Micro-Tagline Sequence: IDEA → BUILD → CONNECT → GROW */}
          <div className="srv-hero-fade pt-1 sm:pt-2">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3.5 py-2 rounded-xl bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-sm text-xs font-mono">
              <span className="font-semibold text-slate-700 tracking-wider">IDEA</span>
              <span className="text-slate-300 font-light text-sm">→</span>
              <span className="font-semibold text-slate-700 tracking-wider">BUILD</span>
              <span className="text-slate-300 font-light text-sm">→</span>
              <span className="font-semibold text-slate-700 tracking-wider">CONNECT</span>
              <span className="text-slate-300 font-light text-sm">→</span>
              <span className="font-bold text-sky-600 tracking-wider bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                GROW
              </span>
            </div>
          </div>

          {/* Quick Jump Callout */}
          <div className="srv-hero-fade pt-2 flex items-center gap-4 text-xs font-mono text-slate-500">
            <Link
              href="#service-explorer"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-sky-600 font-medium transition-colors group"
            >
              <span>Explore Catalogue</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-sky-600 font-medium transition-colors group"
            >
              <span>Schedule Architecture Call</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Open Interactive Service Constellation (Zero Box Container) */}
        <div ref={rightColRef} className="lg:col-span-7 relative flex items-center justify-center">
          <ServiceConstellation />
        </div>
      </div>
    </section>
  );
}
