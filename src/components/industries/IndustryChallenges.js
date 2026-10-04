"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { COMMON_CHALLENGES } from "@/data/industries";

export default function IndustryChallenges() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".challenges-header-reveal",
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
        ".challenge-row",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.07,
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
      aria-labelledby="industry-challenges-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="challenges-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              COMMON CHALLENGES
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              OPERATIONAL FRICTION
            </span>
          </div>

          <h2
            id="industry-challenges-title"
            className="challenges-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Different industries. <br className="hidden sm:inline" />
            Some familiar problems.
          </h2>

          <p className="challenges-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            While every business is different, many organizations face similar technology challenges as they scale their teams and operations.
          </p>
        </div>

        {/* Editorial Challenge List with Large Numbers & Clean Dividers */}
        <div className="space-y-0 divide-y divide-slate-200/90 border-y border-slate-200/90">
          {COMMON_CHALLENGES.map((item) => (
            <div
              key={item.num}
              className="challenge-row py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center group hover:bg-white/60 transition-colors duration-200 px-3 sm:px-4 rounded-xl"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="text-2xl sm:text-3xl font-mono font-light text-slate-300 group-hover:text-sky-600 transition-colors">
                  {item.num}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-lg sm:text-xl font-display font-medium text-slate-900 group-hover:text-sky-900 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Summary */}
              <div className="lg:col-span-6">
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
