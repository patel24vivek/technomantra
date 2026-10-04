"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ADAPT_PRINCIPLES } from "@/data/industries";

export default function HowWeAdapt() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".adapt-header-reveal",
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

      gsap.fromTo(
        ".adapt-step-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-we-adapt-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="adapt-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              OUR APPROACH
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              4-STEP ADAPTATION METHOD
            </span>
          </div>

          <h2
            id="how-we-adapt-title"
            className="adapt-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            We don’t start with the software. <br className="hidden sm:inline" />
            We start with the business.
          </h2>

          <p className="adapt-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Before choosing a technology or building a system, we understand the processes, people and goals behind the requirement.
          </p>
        </div>

        {/* 4-Step Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ADAPT_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.step}
              className="adapt-step-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/40 space-y-6 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Step Marker */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-mono font-light text-slate-300 group-hover:text-sky-600 transition-colors">
                    {principle.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-sky-500 transition-colors" />
                </div>

                {/* Title & Subheading */}
                <div className="space-y-1">
                  <h3 className="text-xl font-display font-semibold text-slate-900">
                    {principle.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-700 font-medium">
                    {principle.subheading}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>PHASE {principle.step} OF 04</span>
                {index < 3 && <span className="hidden lg:inline text-slate-300">→ NEXT</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
