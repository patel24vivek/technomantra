"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { INDUSTRIES_DATA } from "@/data/industries";

export default function IndustryFinder() {
  const sectionRef = useRef(null);
  const [selectedSlug, setSelectedSlug] = useState(INDUSTRIES_DATA[0].slug);

  const selectedIndustry =
    INDUSTRIES_DATA.find((item) => item.slug === selectedSlug) || INDUSTRIES_DATA[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".finder-header-reveal",
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
      id="industry-finder"
      ref={sectionRef}
      aria-labelledby="industry-finder-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="finder-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              FIND YOUR INDUSTRY
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              INTERACTIVE NAVIGATOR
            </span>
          </div>

          <h2
            id="industry-finder-title"
            className="finder-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Where does your business fit?
          </h2>

          <p className="finder-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Choose your industry to explore the areas where our digital solutions and connected systems may support your business operations.
          </p>
        </div>

        {/* Dual Column Finder Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 10 Clickable Industry Badges */}
          <div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5"
            role="radiogroup"
            aria-label="Select Your Industry"
          >
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = selectedSlug === ind.slug;
              return (
                <button
                  key={ind.slug}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelectedSlug(ind.slug)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isSelected
                      ? "bg-slate-900 border-slate-900 text-white shadow-lg scale-[1.01]"
                      : "bg-white hover:bg-slate-50 border-slate-200/90 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-sky-500 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:text-slate-800"
                      }`}
                    >
                      {ind.id}
                    </span>
                    <span className="text-sm font-display font-medium">{ind.title}</span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] shrink-0 ${
                      isSelected
                        ? "bg-sky-500 border-sky-500 text-white"
                        : "border-slate-300 group-hover:border-slate-400 text-transparent"
                    }`}
                  >
                    ✓
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Matched Architecture Recommendation */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-6 animate-in fade-in zoom-in-[0.99] duration-200">
              {/* Card Meta */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono tracking-widest font-semibold text-sky-700 uppercase">
                  RECOMMENDED ARCHITECTURE
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">
                  MATCH: {selectedIndustry.title.toUpperCase()}
                </span>
              </div>

              {/* Title & Narrative */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">
                  {selectedIndustry.title}
                </h3>
                <p className="text-xs sm:text-sm text-sky-800 font-medium">
                  {selectedIndustry.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed pt-1">
                  {selectedIndustry.description}
                </p>
              </div>

              {/* Relevant Technology Badges */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  PRIMARY TECHNOLOGY IMPLEMENTATIONS
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Common Operational Areas */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  CORE WORKFLOW FOCUS AREAS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIndustry.businessAreas.slice(0, 4).map((area) => (
                    <div key={area} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <Link
                  href={`#industry-${selectedIndustry.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-xs transition-all duration-200 shadow-md group"
                >
                  <span>Explore Detailed Profile</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <Link
                  href={`/contact?industry=${selectedIndustry.slug}`}
                  className="text-xs font-sans text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Consult on {selectedIndustry.shortTitle} Architecture →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
