"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";
import { BUSINESS_PROBLEMS } from "@/data/solutions";

export default function BusinessProblems() {
  const sectionRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Reveal headers and problem list
      gsap.fromTo(
        ".prob-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Animated diagram transition from disconnected to connected on scroll
      gsap.to(".prob-wire", {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".prob-diagram-container",
          start: "top 70%",
          onEnter: () => setIsConnected(true),
          onLeaveBack: () => setIsConnected(false),
        },
      });

      // 3. Problem items hover / scroll stagger
      gsap.fromTo(
        ".prob-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".prob-list",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="business-problems"
      ref={sectionRef}
      aria-labelledby="business-problems-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Top Editorial Narrative */}
        <div className="max-w-3xl space-y-6">
          <div className="prob-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-amber-600 uppercase font-semibold">
              THE PROBLEM
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              FRAGMENTATION BOTTLENECK
            </span>
          </div>

          <h2
            id="business-problems-title"
            className="prob-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Business gets complicated <br />
            when systems stop working together.
          </h2>

          <p className="prob-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            As businesses grow, information, customers and workflows often become spread across different
            tools. The result can be repetitive work, disconnected data and processes that are harder to
            manage.
          </p>
        </div>

        {/* Two-Column Problem Explorer: Editorial List + Animated Fragmented-to-Connected Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 5 Editorial Problem Points */}
          <div className="lg:col-span-6 prob-list space-y-8">
            {BUSINESS_PROBLEMS.map((prob) => (
              <div
                key={prob.number}
                className="prob-item group relative pb-8 border-b border-slate-200 last:border-b-0 space-y-2 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">
                      {prob.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-slate-900 group-hover:text-sky-900 transition-colors">
                      {prob.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {prob.tag}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed pl-7">
                  {prob.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic System Diagram (Fragmented vs Connected State) */}
          <div className="lg:col-span-6 prob-diagram-container sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-slate-200/90 shadow-lg space-y-6">
              {/* Diagram Header State Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isConnected ? "bg-emerald-500 shadow-[0_0_6px_#10b981]" : "bg-amber-500"
                    }`}
                  />
                  <span className="font-mono text-xs font-semibold text-slate-800">
                    {isConnected ? "SYSTEM STATUS: HARMONIZED" : "SYSTEM STATUS: SILOED TOOLS"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsConnected(!isConnected)}
                  className="text-[11px] font-mono text-sky-600 hover:text-sky-800 underline transition-colors"
                >
                  {isConnected ? "Simulate Silo" : "Simulate Connection"}
                </button>
              </div>

              {/* SVG Diagram Canvas */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center select-none">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 300"
                  fill="none"
                >
                  {/* Connection Lines */}
                  <g className="transition-opacity duration-500" opacity={isConnected ? 1 : 0.2}>
                    {/* CRM to Business Core */}
                    <path
                      className="prob-wire"
                      d="M 80 80 L 200 150"
                      stroke={isConnected ? "#0ea5e9" : "#cbd5e1"}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    {/* Sales to Finance */}
                    <path
                      className="prob-wire"
                      d="M 80 220 L 200 150"
                      stroke={isConnected ? "#0ea5e9" : "#cbd5e1"}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    {/* Operations to Core */}
                    <path
                      className="prob-wire"
                      d="M 320 80 L 200 150"
                      stroke={isConnected ? "#0ea5e9" : "#cbd5e1"}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    {/* Inventory to Core */}
                    <path
                      className="prob-wire"
                      d="M 320 220 L 200 150"
                      stroke={isConnected ? "#0ea5e9" : "#cbd5e1"}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </g>
                </svg>

                {/* Node Buttons positioned over diagram */}
                {/* Center Hub */}
                <div
                  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2.5 rounded-2xl border transition-all duration-300 shadow-md ${
                    isConnected
                      ? "bg-slate-900 border-slate-800 text-white scale-105 shadow-sky-500/10"
                      : "bg-white border-slate-300 text-slate-800"
                  }`}
                >
                  <span className="font-mono text-xs font-bold tracking-tight">
                    {isConnected ? "CONNECTED CORE" : "ISOLATED CORE"}
                  </span>
                </div>

                {/* Top-Left: CRM / Customers */}
                <div
                  className={`absolute left-[15%] top-[20%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 ${
                    isConnected
                      ? "bg-white border-sky-400 text-sky-900 shadow-sm"
                      : "bg-white border-dashed border-amber-300 text-slate-600"
                  }`}
                >
                  CUSTOMERS / CRM
                </div>

                {/* Top-Right: Operations / ERP */}
                <div
                  className={`absolute right-[15%] top-[20%] transform translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 ${
                    isConnected
                      ? "bg-white border-sky-400 text-sky-900 shadow-sm"
                      : "bg-white border-dashed border-amber-300 text-slate-600"
                  }`}
                >
                  OPERATIONS / ERP
                </div>

                {/* Bottom-Left: Sales / Data */}
                <div
                  className={`absolute left-[15%] bottom-[20%] transform -translate-x-1/2 translate-y-1/2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 ${
                    isConnected
                      ? "bg-white border-sky-400 text-sky-900 shadow-sm"
                      : "bg-white border-dashed border-amber-300 text-slate-600"
                  }`}
                >
                  SALES & DATA
                </div>

                {/* Bottom-Right: Inventory & Finance */}
                <div
                  className={`absolute right-[15%] bottom-[20%] transform translate-x-1/2 translate-y-1/2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 ${
                    isConnected
                      ? "bg-white border-sky-400 text-sky-900 shadow-sm"
                      : "bg-white border-dashed border-amber-300 text-slate-600"
                  }`}
                >
                  INVENTORY & FINANCE
                </div>
              </div>

              {/* Bottom Clarifying Annotation */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between">
                <span>IMPACT ON BUSINESS:</span>
                <span className="font-semibold text-slate-900">
                  {isConnected ? "Seamless Data Flow & High Velocity" : "Data Duplication & Delayed Decisions"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
