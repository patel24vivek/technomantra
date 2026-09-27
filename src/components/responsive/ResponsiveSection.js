"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Reusable realistic abstract website interface inside devices
function MockupWebsiteUI({ mode = "desktop" }) {
  const isMobile = mode === "mobile";
  const isTablet = mode === "tablet";

  return (
    <div className="w-full h-full bg-[#070d19] text-slate-100 p-3 sm:p-5 flex flex-col justify-between font-sans overflow-hidden select-none">
      {/* Navigation Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
          <span className="text-[10px] font-mono tracking-wider text-white font-semibold">
            TECHNO MANTRA
          </span>
        </div>

        {!isMobile && (
          <div className="flex items-center gap-3 text-[9px] font-mono text-slate-400">
            <span>SOLUTIONS</span>
            <span>SERVICES</span>
            <span>INDUSTRIES</span>
          </div>
        )}

        <div className="px-2 py-0.5 rounded text-[8px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
          BUILD
        </div>
      </div>

      {/* Hero Content Area */}
      <div className="space-y-2 my-auto">
        <div className="inline-block px-2 py-0.5 rounded-full bg-sky-400/10 border border-sky-400/20 text-[8px] font-mono text-sky-300 uppercase tracking-widest">
          SYSTEM ARCHITECTURE
        </div>

        <h4
          className={`font-display font-light text-white leading-tight ${
            isMobile ? "text-xs" : isTablet ? "text-base" : "text-xl"
          }`}
        >
          Building Digital Infrastructure
        </h4>

        <p
          className={`text-slate-400 font-sans leading-relaxed line-clamp-2 ${
            isMobile ? "text-[8px]" : "text-[10px]"
          }`}
        >
          Enterprise software, connected workflows, and intelligent automation built for business.
        </p>

        {/* Feature Cards Grid (Adapts columns dynamically) */}
        <div
          className={`grid gap-2 pt-2 ${
            isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          <div className="p-2 rounded border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
            <span className="text-[8px] font-mono text-sky-400">01 // AUTOMATION</span>
            <div className="h-1 w-full bg-slate-700/60 rounded mt-1" />
          </div>

          <div className="p-2 rounded border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
            <span className="text-[8px] font-mono text-sky-400">02 // INTEGRATION</span>
            <div className="h-1 w-full bg-slate-700/60 rounded mt-1" />
          </div>

          {!isMobile && !isTablet && (
            <div className="p-2 rounded border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
              <span className="text-[8px] font-mono text-sky-400">03 // ANALYTICS</span>
              <div className="h-1 w-full bg-slate-700/60 rounded mt-1" />
            </div>
          )}
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[8px] font-mono text-slate-500">
        <span>STATUS: ONLINE</span>
        <span className="text-sky-400">99.99%</span>
      </div>
    </div>
  );
}

export default function ResponsiveSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const desktopRef = useRef(null);
  const tabletRef = useRef(null);
  const mobileRef = useRef(null);
  const closingTextRef = useRef(null);

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsReducedMotion(prefersReduced);

    if (prefersReduced || !sectionRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      // Create ScrollTrigger Timeline pinned to section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          pin: pinRef.current,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Step 1: Initial state -> Desktop dominates, Tablet & Mobile hidden
      gsap.set(desktopRef.current, { scale: 1, xPercent: 0, yPercent: 0, opacity: 1 });
      gsap.set(tabletRef.current, { scale: 0.85, opacity: 0, y: 80 });
      gsap.set(mobileRef.current, { scale: 0.8, opacity: 0, y: 120 });
      gsap.set(closingTextRef.current, { opacity: 0, y: 20 });

      // Step 2: Desktop scales down slightly, shifts left. Tablet enters.
      tl.to(desktopRef.current, {
        scale: 0.82,
        xPercent: -20,
        duration: 1,
        ease: "power1.inOut",
      })
        .to(
          tabletRef.current,
          {
            opacity: 1,
            scale: 0.95,
            y: 0,
            duration: 1,
            ease: "power1.out",
          },
          "<0.2"
        )
        // Step 3: Mobile phone enters composition right beside tablet
        .to(mobileRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
        })
        // Step 4: All 3 devices align into final balanced composite & closing text reveals
        .to(desktopRef.current, {
          scale: 0.75,
          xPercent: -32,
          yPercent: -5,
          duration: 1,
        })
        .to(
          tabletRef.current,
          {
            scale: 0.85,
            xPercent: 10,
            yPercent: 5,
            duration: 1,
          },
          "<"
        )
        .to(
          mobileRef.current,
          {
            scale: 0.9,
            xPercent: 45,
            yPercent: 12,
            duration: 1,
          },
          "<"
        )
        .to(
          closingTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="responsive-by-design"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] border-t border-[var(--border-subtle)]/30"
    >
      <div
        ref={pinRef}
        className="w-full min-h-screen py-16 lg:py-24 px-4 sm:px-8 lg:px-16 flex flex-col justify-between max-w-7xl mx-auto relative overflow-hidden"
      >
        {/* Top Header Section */}
        <div className="max-w-3xl space-y-4 relative z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              RESPONSIVE BY DESIGN
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-white leading-[1.08]">
            One experience. Every screen.
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-2xl">
            We build digital experiences that adapt naturally across desktops, tablets and mobile
            devices, so your users get the same quality experience wherever they are.
          </p>
        </div>

        {/* Central Devices Transformation Stage */}
        <div className="relative w-full my-auto py-12 flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
          {/* 1. Desktop Browser Mockup */}
          <div
            ref={desktopRef}
            className={`w-[90%] max-w-[700px] h-[320px] sm:h-[400px] rounded-2xl border border-sky-500/20 bg-slate-900/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur flex flex-col overflow-hidden transition-all duration-300 ${
              isReducedMotion ? "scale-75 -translate-x-[30%]" : ""
            }`}
          >
            {/* Browser Window Bar */}
            <div className="h-9 bg-slate-950 px-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-5 px-4 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center">
                technomantra.in/platform
              </div>
              <span className="text-[10px] font-mono text-sky-400">DESKTOP</span>
            </div>
            {/* Desktop UI */}
            <div className="flex-1">
              <MockupWebsiteUI mode="desktop" />
            </div>
          </div>

          {/* 2. Tablet Mockup */}
          <div
            ref={tabletRef}
            className={`absolute w-[65%] max-w-[340px] h-[340px] sm:h-[420px] rounded-2xl border border-sky-500/30 bg-slate-950 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur p-2 flex flex-col overflow-hidden transition-all duration-300 ${
              isReducedMotion ? "opacity-100 scale-85 translate-x-[10%]" : "opacity-0"
            }`}
          >
            {/* Tablet Camera Bar */}
            <div className="h-5 flex items-center justify-between px-3 text-[9px] font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="text-sky-400">TABLET</span>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden border border-slate-800">
              <MockupWebsiteUI mode="tablet" />
            </div>
          </div>

          {/* 3. Mobile Phone Mockup */}
          <div
            ref={mobileRef}
            className={`absolute w-[45%] max-w-[200px] h-[320px] sm:h-[380px] rounded-3xl border-2 border-sky-400/40 bg-slate-950 shadow-[0_30px_70px_rgba(0,0,0,0.95)] backdrop-blur p-2 flex flex-col overflow-hidden transition-all duration-300 ${
              isReducedMotion ? "opacity-100 scale-90 translate-x-[45%]" : "opacity-0"
            }`}
          >
            {/* Dynamic Island / Speaker Notch */}
            <div className="h-6 flex items-center justify-between px-2 text-[8px] font-mono text-slate-500">
              <div className="w-10 h-3 rounded-full bg-slate-900 border border-slate-800 mx-auto" />
              <span className="text-sky-400">MOBILE</span>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border border-slate-800">
              <MockupWebsiteUI mode="mobile" />
            </div>
          </div>
        </div>

        {/* Bottom Closing Statement */}
        <div
          ref={closingTextRef}
          className="pt-4 border-t border-[var(--border-subtle)]/30 flex items-center justify-between"
        >
          <p className="font-display text-xl sm:text-2xl font-light tracking-tight text-sky-400">
            Designed once. Experienced everywhere.
          </p>

          <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider uppercase">
            MULTI-VIEWPORT PERFECTION
          </span>
        </div>
      </div>
    </section>
  );
}
