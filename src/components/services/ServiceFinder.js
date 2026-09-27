"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { SERVICE_RECOMMENDER_GOALS } from "@/data/services";
import { gsap } from "@/lib/gsap";

export default function ServiceFinder() {
  const sectionRef = useRef(null);
  const [selectedGoalIdx, setSelectedGoalIdx] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".finder-reveal",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeRecommendation = SERVICE_RECOMMENDER_GOALS[selectedGoalIdx];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="service-finder-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="finder-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              NOT SURE WHERE TO START?
            </span>
          </div>

          <h2
            id="service-finder-title"
            className="finder-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Tell us what you're <br />
            trying to achieve.
          </h2>

          <p className="finder-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Choose the outcome you're working toward and we'll help identify the services that may fit your
            business requirements.
          </p>
        </div>

        {/* 2-Column Interactive Decision Matcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 5 Selectable Goals */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-2">
              STEP 1: SELECT YOUR PRIMARY GOAL
            </span>

            {SERVICE_RECOMMENDER_GOALS.map((item, idx) => {
              const isSelected = selectedGoalIdx === idx;

              return (
                <button
                  key={item.goal}
                  onClick={() => setSelectedGoalIdx(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.01]"
                      : "bg-[#FAF9F6] border-slate-200/80 text-slate-800 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-sky-400 bg-sky-400"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />}
                    </span>
                    <span className="text-sm sm:text-base font-display font-medium">
                      {item.goal}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-md shrink-0 uppercase tracking-wider ${
                      isSelected
                        ? "bg-slate-800 text-sky-300"
                        : "bg-white border border-slate-200 text-slate-500"
                    }`}
                  >
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tailored Match Result Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-sky-600 tracking-wider">
                  STEP 2: SERVICES THAT MAY FIT
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
              </div>

              {/* Recommended Services List */}
              <div className="space-y-2.5">
                {activeRecommendation.recommended.map((serviceName, i) => (
                  <div
                    key={serviceName}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-sky-500/10 text-sky-600 text-xs font-mono font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-sm font-display font-semibold text-slate-900">
                        {serviceName}
                      </span>
                    </div>
                    <span className="text-sky-500 font-bold text-xs">Recommended</span>
                  </div>
                ))}
              </div>

              {/* Strategic Context */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  WHY THIS COMBINATION:
                </span>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {activeRecommendation.reason}
                </p>
              </div>

              {/* Action CTA */}
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/request-a-proposal"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold hover:bg-sky-600 transition-colors shadow"
                >
                  Discuss this Solution Package →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
