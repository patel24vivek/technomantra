"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { INDUSTRIES_DATA } from "@/data/industries";

export default function IndustryExplorer() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeIndustry = INDUSTRIES_DATA[activeIndex];

  // GSAP scroll trigger for section entrance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".explorer-header-reveal",
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

  const handleSelect = (idx) => {
    if (idx === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(idx);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section
      id="industry-explorer"
      ref={sectionRef}
      aria-labelledby="industry-explorer-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="explorer-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              SIGNATURE EXPLORER
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              10 INDUSTRY REALITIES
            </span>
          </div>

          <h2
            id="industry-explorer-title"
            className="explorer-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            The Active Industry Explorer
          </h2>

          <p className="explorer-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Scroll or select an industry to examine how operational challenges, data workflows, and technology architecture change across sectors.
          </p>
        </div>

        {/* Desktop Split Explorer (Left: 10 Navigation Buttons, Right: Dynamic Editorial Showcase) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column: 10 Sticky Interactive Nav Items */}
          <div
            className="lg:col-span-4 sticky top-24 space-y-2"
            role="tablist"
            aria-label="Industry Selector"
          >
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase pb-2 px-1">
              SELECT SECTOR (10)
            </div>
            {INDUSTRIES_DATA.map((ind, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={ind.id}
                  id={`tab-${ind.slug}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${ind.slug}`}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-4 py-3 rounded-2xl border transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? "bg-white border-slate-900 shadow-md shadow-slate-900/5 text-slate-900 font-medium"
                      : "bg-white/60 hover:bg-white border-slate-200/80 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-600"
                      }`}
                    >
                      {ind.id}
                    </span>
                    <span className="text-sm font-display tracking-tight">{ind.title}</span>
                  </div>

                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  ) : (
                    <span className="text-xs text-slate-300 group-hover:text-slate-400">→</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Industry Panel */}
          <div
            id={`panel-${activeIndustry.slug}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeIndustry.slug}`}
            className="lg:col-span-8 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 space-y-8 animate-in fade-in zoom-in-[0.99] duration-300"
          >
            {/* Top Bar: Sector Number + Category Tags */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200/80">
                  SECTOR {activeIndustry.id} / 10
                </span>
                <span className="text-slate-300 font-mono text-xs">/</span>
                <span className="text-xs font-mono tracking-wider text-slate-500 uppercase">
                  {activeIndustry.slug}
                </span>
              </div>

              <Link
                href={`/contact?subject=${encodeURIComponent(`Consultation for ${activeIndustry.title}`)}`}
                className="text-xs font-mono text-sky-600 hover:text-sky-700 font-semibold transition-colors flex items-center gap-1 group"
              >
                <span>Request {activeIndustry.shortTitle} Scope</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Headline & Tagline */}
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight leading-tight">
                {activeIndustry.title}
              </h3>
              <p className="text-lg font-sans text-sky-800 font-medium leading-snug">
                {activeIndustry.tagline}
              </p>
              <p className="text-base text-slate-600 font-sans leading-relaxed pt-1">
                {activeIndustry.description}
              </p>
            </div>

            {/* Large High-Fidelity Industry Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
              <Image
                key={activeIndustry.image}
                src={activeIndustry.image}
                alt={activeIndustry.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="font-mono text-[11px] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  REAL OPERATIONAL CONTEXT: {activeIndustry.title.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-white/70 hidden sm:inline">
                  TECHNOMANTRA ARCHITECTURE
                </span>
              </div>
            </div>

            {/* Two-Column Deep-Dive: Core Business Areas & Technologies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              {/* Business Focus Areas */}
              <div className="space-y-3 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                  COMMON BUSINESS AREAS
                </div>
                <div className="space-y-2">
                  {activeIndustry.businessAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Technology Stack */}
              <div className="space-y-3 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                  RELEVANT TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeIndustry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-mono font-medium shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    KEY BOTTLENECKS ELIMINATED:
                  </div>
                  {activeIndustry.challengesSolved.slice(0, 2).map((ch) => (
                    <div key={ch} className="text-xs text-slate-600 font-sans flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Action Bar */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href={`/contact?industry=${activeIndustry.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-xs sm:text-sm transition-all duration-200 shadow-md group"
                >
                  <span>Build For {activeIndustry.shortTitle}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <Link
                  href="/services"
                  className="text-xs sm:text-sm font-sans text-slate-600 hover:text-slate-900 transition-colors"
                >
                  View Supporting Services →
                </Link>
              </div>

              <span className="text-xs font-mono text-slate-400">
                {activeIndustry.id} / 10
              </span>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Full Stack Editorial Cards (All 10 Industries Listed Vertically) */}
        <div className="space-y-10 lg:hidden">
          {INDUSTRIES_DATA.map((ind) => (
            <article
              key={ind.id}
              id={`industry-${ind.slug}`}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 space-y-6"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200/80">
                  {ind.id} • {ind.shortTitle.toUpperCase()}
                </span>
                <span className="text-[11px] font-mono text-slate-400">INDUSTRY FOCUS</span>
              </div>

              {/* Title & Narrative */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-light text-slate-900 tracking-tight">
                  {ind.title}
                </h3>
                <p className="text-sm sm:text-base font-sans text-sky-800 font-medium leading-snug">
                  {ind.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {ind.description}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src={ind.image}
                  alt={ind.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Business Areas */}
              <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                  CORE WORKFLOWS
                </div>
                <div className="space-y-1.5">
                  {ind.businessAreas.slice(0, 4).map((area) => (
                    <div key={area} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {ind.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <Link
                  href={`/contact?industry=${ind.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-xs transition-colors"
                >
                  <span>Discuss {ind.shortTitle} Systems</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
