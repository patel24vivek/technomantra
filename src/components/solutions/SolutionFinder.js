"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { SOLUTION_FINDER_DATA } from "@/data/solutions";

export default function SolutionFinder() {
  const sectionRef = useRef(null);
  const [selectedId, setSelectedId] = useState(SOLUTION_FINDER_DATA[0].id);

  const activeSolution =
    SOLUTION_FINDER_DATA.find((item) => item.id === selectedId) || SOLUTION_FINDER_DATA[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".finder-reveal",
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
      id="solution-finder"
      ref={sectionRef}
      aria-labelledby="solution-finder-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        {/* Header Title Section */}
        <div className="max-w-3xl space-y-5">
          <div className="finder-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              WHERE SHOULD WE START?
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              INTERACTIVE RECOMMENDER
            </span>
          </div>

          <h2
            id="solution-finder-title"
            className="finder-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            What are you trying to improve?
          </h2>

          <p className="finder-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Choose the operational bottleneck or business objective you are working on to explore a
            recommended architectural approach.
          </p>
        </div>

        {/* Interactive Dual-Column Finder Interface */}
        <div className="finder-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 6 Goal Selectors */}
          <div className="lg:col-span-6 space-y-3" role="radiogroup" aria-label="Business Improvement Objectives">
            {SOLUTION_FINDER_DATA.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isSelected
                      ? "bg-white border-sky-500 shadow-md shadow-sky-500/10 scale-[1.01]"
                      : "bg-white/70 hover:bg-white border-slate-200/90 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {item.category}
                    </span>
                    <h3 className={`text-sm sm:text-base font-display font-medium ${isSelected ? "text-slate-900 font-semibold" : "text-slate-700"}`}>
                      {item.goal}
                    </h3>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors shrink-0 ml-4 ${
                      isSelected
                        ? "bg-sky-500 border-sky-500 text-white"
                        : "border-slate-300 group-hover:border-slate-400 text-transparent"
                    }`}
                  >
                    <span className="text-xs font-bold">✓</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Recommended Solution Card */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono tracking-widest font-semibold text-sky-600 uppercase">
                  POSSIBLE ARCHITECTURAL SOLUTION
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  MATCH: {activeSolution.category}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">
                  {activeSolution.solutionTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {activeSolution.description}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                  KEY ARCHITECTURAL OUTCOMES
                </div>
                <div className="space-y-2">
                  {activeSolution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={activeSolution.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-xs sm:text-sm transition-colors group"
                >
                  <span>{activeSolution.cta}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="text-xs font-sans text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Schedule Solution Audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
