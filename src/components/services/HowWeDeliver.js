"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const STAGES = [
  {
    number: "01",
    name: "Discover",
    detail: "Understand your business, users and goals.",
  },
  {
    number: "02",
    name: "Define",
    detail: "Clarify requirements, scope and priorities.",
  },
  {
    number: "03",
    name: "Design",
    detail: "Create the right structure and experience.",
  },
  {
    number: "04",
    name: "Build",
    detail: "Develop, integrate and test the solution.",
  },
  {
    number: "05",
    name: "Improve",
    detail: "Refine the product as the business evolves.",
  },
];

export default function HowWeDeliver() {
  const sectionRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".del-reveal",
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

      // Horizontal progress line animation
      gsap.fromTo(
        ".del-progress-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.3,
            onUpdate: (self) => {
              const idx = Math.min(
                STAGES.length - 1,
                Math.floor(self.progress * STAGES.length)
              );
              setActiveStage(idx);
            },
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-we-deliver-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="del-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              HOW WE DELIVER
            </span>
          </div>

          <h2
            id="how-we-deliver-title"
            className="del-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            From requirement <br />
            to working solution.
          </h2>

          <p className="del-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We move from understanding the problem to building and improving the solution through a clear,
            collaborative process.
          </p>
        </div>

        {/* Desktop Process Stages Timeline */}
        <div className="hidden lg:block relative pt-12 pb-6">
          {/* Base Gray Track */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-slate-200" />

          {/* Animated Sky Blue Progress Line */}
          <div className="del-progress-line absolute top-16 left-0 right-0 h-0.5 bg-sky-500 z-10" />

          {/* 5 Stages Grid */}
          <div className="grid grid-cols-5 gap-6 relative z-20">
            {STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              const isPast = activeStage > idx;

              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className="cursor-pointer group flex flex-col items-start space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-110"
                          : isPast
                          ? "bg-sky-100 text-sky-700 border border-sky-300"
                          : "bg-white text-slate-400 border border-slate-300 group-hover:border-slate-400"
                      }`}
                    >
                      {stage.number}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-display font-medium transition-colors duration-300 ${
                      isActive ? "text-slate-900 font-semibold" : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {stage.name}
                  </h3>

                  <p
                    className={`text-sm font-sans leading-relaxed transition-opacity duration-300 ${
                      isActive ? "text-slate-700 opacity-100" : "text-slate-500 opacity-70"
                    }`}
                  >
                    {stage.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Process Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-slate-200">
          {STAGES.map((stage) => (
            <div key={stage.number} className="relative space-y-1.5">
              <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-sky-500 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                {stage.number}
              </span>
              <h3 className="text-lg font-display font-medium text-slate-900">
                {stage.name}
              </h3>
              <p className="text-sm font-sans text-slate-600 leading-relaxed">
                {stage.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
