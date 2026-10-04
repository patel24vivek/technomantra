"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { FINDER_COMBINATIONS } from "@/data/projects";

const NEED_OPTIONS = [
  { id: "website", label: "A Website / Web App" },
  { id: "erp", label: "A Custom ERP System" },
  { id: "crm", label: "A CRM & Sales Pipeline" },
  { id: "automation", label: "Business Automation" },
];

const FOR_OPTIONS = [
  { id: "manufacturing", label: "Manufacturing & Factory" },
  { id: "trading", label: "Trading & Distribution" },
  { id: "ecommerce", label: "Ecommerce & Retail" },
  { id: "healthcare", label: "Healthcare & Clinic" },
  { id: "real-estate", label: "Real Estate & Property" },
];

export default function ProjectFinder() {
  const sectionRef = useRef(null);
  const [need, setNeed] = useState("website");
  const [industry, setIndustry] = useState("manufacturing");

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

  const lookupKey = `${need}-${industry}`;
  const matchedData = FINDER_COMBINATIONS[lookupKey] || FINDER_COMBINATIONS.default;

  return (
    <section
      id="project-finder"
      ref={sectionRef}
      aria-labelledby="project-finder-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="finder-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              PROJECT FINDER
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              CUSTOM SPECIFICATION
            </span>
          </div>

          <h2
            id="project-finder-title"
            className="finder-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Looking for something specific?
          </h2>

          <p className="finder-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Select what you are looking to build and your industry to explore a tailored architecture recommendation.
          </p>
        </div>

        {/* Interactive Query Builder Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Dropdowns / Selectors */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-6">
              {/* Question 1: I Need */}
              <div className="space-y-2">
                <label htmlFor="need-select" className="text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  1. I NEED
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {NEED_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setNeed(opt.id)}
                      className={`p-3 rounded-xl border text-xs font-sans font-medium text-left transition-all ${
                        need === opt.id
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: For Industry */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label htmlFor="industry-select" className="text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  2. FOR MY INDUSTRY
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FOR_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setIndustry(opt.id)}
                      className={`p-3 rounded-xl border text-xs font-sans font-medium text-left transition-all ${
                        industry === opt.id
                          ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Matched Architectural Recommendation */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 space-y-6 animate-in fade-in zoom-in-[0.99] duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono tracking-widest font-semibold text-sky-700 uppercase">
                  RECOMMENDED ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  MATCH: {need.toUpperCase()} × {industry.toUpperCase()}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">
                  {matchedData.capability}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {matchedData.desc}
                </p>
              </div>

              {/* Stack Badges */}
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  ENGINEERED COMPONENTS
                </div>
                <div className="flex flex-wrap gap-2">
                  {matchedData.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(matchedData.capability)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-xs transition-all duration-200 shadow-md group"
                >
                  <span>Inquire About This Build</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <Link
                  href="/services"
                  className="text-xs font-sans text-slate-600 hover:text-slate-900 transition-colors"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
