"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { INDUSTRY_CONNECTIONS } from "@/data/industries";

export default function IndustryConnections() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".connections-reveal",
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
        ".connection-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
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
      aria-labelledby="industry-connections-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="connections-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              BUILT AROUND YOUR BUSINESS
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              WORKFLOW ADAPTATION
            </span>
          </div>

          <h2
            id="industry-connections-title"
            className="connections-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Technology changes <br className="hidden sm:inline" />
            when the business changes.
          </h2>

          <p className="connections-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            The right technology depends on how a business operates. We adapt systems, workflows and digital experiences around the processes that matter most.
          </p>
        </div>

        {/* Conceptual Linear Process Pipeline */}
        <div className="connections-reveal p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
          <div className="text-[10px] font-mono tracking-widest text-sky-400 uppercase font-bold">
            ADAPTATION METHODOLOGY
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-mono text-sky-400">01</span>
              <div className="text-sm font-semibold">Industry</div>
              <div className="text-[11px] text-slate-400">Sector realities & constraints</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-mono text-sky-400">02</span>
              <div className="text-sm font-semibold">Business Model</div>
              <div className="text-[11px] text-slate-400">Margins, volume, channels</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-mono text-sky-400">03</span>
              <div className="text-sm font-semibold">Workflows</div>
              <div className="text-[11px] text-slate-400">Team handoffs & data paths</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-[10px] font-mono text-sky-400">04</span>
              <div className="text-sm font-semibold">Technology</div>
              <div className="text-[11px] text-slate-400">ERP, CRM, custom software</div>
            </div>
            <div className="p-3.5 rounded-xl bg-sky-950/80 border border-sky-500/40 space-y-1">
              <span className="text-[10px] font-mono text-sky-300">05</span>
              <div className="text-sm font-semibold text-sky-200">Connected System</div>
              <div className="text-[11px] text-sky-300/80">Scalable operational outcome</div>
            </div>
          </div>
        </div>

        {/* Concrete Adaptation Examples Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_CONNECTIONS.map((item) => (
            <div
              key={item.industry}
              className="connection-item p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/30 space-y-5 hover:border-sky-400/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-sm font-display font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.industry}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    OPERATIONAL REALITY
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.model}
                  </p>
                </div>

                <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    CRITICAL WORKFLOW
                  </span>
                  <p className="text-xs text-slate-700 font-mono leading-snug">
                    {item.workflow}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  ENGINEERED STACK
                </span>
                <p className="text-xs font-semibold text-slate-800 font-sans">
                  {item.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
