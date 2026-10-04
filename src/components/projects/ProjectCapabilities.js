"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { PROJECT_CAPABILITIES } from "@/data/projects";

export default function ProjectCapabilities() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCap = PROJECT_CAPABILITIES[activeIdx];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cap-header-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="project-capabilities"
      ref={sectionRef}
      aria-labelledby="project-capabilities-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="cap-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              WHAT WE BUILD
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              CAPABILITY SPECTRUM
            </span>
          </div>

          <h2
            id="project-capabilities-title"
            className="cap-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Connected capabilities. <br className="hidden sm:inline" />
            Unified engineering.
          </h2>

          <p className="cap-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            From high-speed web apps and custom ERPs to autonomous workflow integrations, explore the digital capabilities we engineer.
          </p>
        </div>

        {/* Interactive Capability Explorer (Left: Horizontal Strip Tabs, Right: Dynamic Preview Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Capability Selectors */}
          <div className="lg:col-span-6 space-y-2.5" role="tablist" aria-label="Capabilities">
            {PROJECT_CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={cap.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? "bg-white border-slate-900 shadow-md text-slate-900 scale-[1.01]"
                      : "bg-white/60 hover:bg-white border-slate-200/80 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      0{idx + 1} • {cap.subtitle}
                    </span>
                    <h3 className={`text-base sm:text-lg font-display font-medium ${isActive ? "text-slate-900 font-semibold" : ""}`}>
                      {cap.title}
                    </h3>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-sky-500" : "bg-transparent group-hover:bg-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Capability Visual Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6 animate-in fade-in duration-300">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                <Image
                  key={activeCap.image}
                  src={activeCap.image}
                  alt={activeCap.title}
                  fill
                  sizes="600px"
                  className="object-cover object-center transform transition-transform duration-700 ease-out hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs font-mono text-white bg-slate-900/80 px-3 py-1.5 rounded-full border border-white/10">
                  {activeCap.subtitle.toUpperCase()}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-semibold text-slate-900">
                  {activeCap.title}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {activeCap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services"
                  className="text-xs font-mono text-sky-700 hover:text-sky-800 font-semibold transition-colors flex items-center gap-1 group"
                >
                  <span>Explore Full 11-Service Catalogue</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <span className="text-xs font-mono text-slate-400">
                  0{activeIdx + 1} / 05
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
