"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SERVICES_LIST } from "./servicesData";

// Minimal abstract visual preview renderer for desktop sticky panel
function ServicePreviewGraphic({ type }) {
  switch (type) {
    case "browser":
      return (
        <div className="w-full h-full p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-sky-500/20 pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <div className="ml-4 h-3 w-40 rounded-full bg-sky-500/20" />
          </div>
          <div className="flex-1 grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-xl border border-sky-500/20 bg-sky-500/5 p-4 flex flex-col justify-between">
              <div className="h-4 w-3/4 bg-sky-400/40 rounded" />
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-700/50 rounded" />
                <div className="h-2 w-4/5 bg-slate-700/50 rounded" />
              </div>
            </div>
            <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-4" />
          </div>
        </div>
      );
    case "workflow":
      return (
        <div className="w-full h-full p-6 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
            <div className="p-4 rounded-xl border border-sky-500/30 bg-sky-500/10 text-center text-xs text-sky-300 font-mono">
              FINANCE
            </div>
            <div className="p-4 rounded-xl border border-sky-500/30 bg-sky-500/10 text-center text-xs text-sky-300 font-mono">
              INVENTORY
            </div>
            <div className="p-4 rounded-xl border border-sky-500/30 bg-sky-500/10 text-center text-xs text-sky-300 font-mono col-span-2">
              AUTOMATED ERP CORE
            </div>
          </div>
        </div>
      );
    case "nodes":
      return (
        <div className="w-full h-full p-6 flex items-center justify-center relative">
          <div className="w-20 h-20 rounded-full border border-sky-400/50 bg-sky-500/20 flex items-center justify-center font-mono text-xs text-white shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            CRM
          </div>
        </div>
      );
    case "finance":
      return (
        <div className="w-full h-full p-6 flex items-end gap-3 justify-center">
          <div className="w-8 h-20 bg-sky-500/20 rounded-t border border-sky-500/30" />
          <div className="w-8 h-32 bg-sky-500/40 rounded-t border border-sky-500/40" />
          <div className="w-8 h-28 bg-sky-500/30 rounded-t border border-sky-500/30" />
          <div className="w-8 h-44 bg-sky-400/60 rounded-t border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]" />
        </div>
      );
    case "email":
      return (
        <div className="w-full h-full p-6 flex flex-col justify-center items-center gap-3">
          <div className="w-48 h-28 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 flex flex-col justify-between">
            <div className="h-3 w-20 bg-sky-400/60 rounded" />
            <div className="h-2 w-full bg-slate-700/60 rounded" />
            <div className="h-2 w-3/4 bg-slate-700/60 rounded" />
          </div>
        </div>
      );
    case "seo":
      return (
        <div className="w-full h-full p-6 flex flex-col justify-center gap-3">
          <div className="p-3 rounded-lg border border-sky-400/60 bg-sky-500/20 flex items-center justify-between">
            <span className="text-xs font-mono text-sky-300">#1 Organic Rank</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 opacity-60">
            <div className="h-2 w-32 bg-slate-700 rounded" />
          </div>
        </div>
      );
    case "marketing":
      return (
        <div className="w-full h-full p-6 flex items-center justify-center">
          <div className="relative w-36 h-36 rounded-full border border-sky-500/30 flex items-center justify-center animate-spin-slow">
            <div className="w-24 h-24 rounded-full border border-sky-400/60 bg-sky-500/10" />
          </div>
        </div>
      );
    case "design":
      return (
        <div className="w-full h-full p-6 flex items-center justify-center">
          <div className="w-40 h-28 rounded-xl border border-dashed border-sky-400/60 flex items-center justify-center">
            <span className="text-xs font-mono text-sky-300 tracking-widest">DESIGN GRID</span>
          </div>
        </div>
      );
    case "packaging":
      return (
        <div className="w-full h-full p-6 flex items-center justify-center">
          <div className="w-28 h-32 rounded-lg border border-sky-400/60 bg-sky-500/10 shadow-[0_0_20px_rgba(56,189,248,0.2)] flex items-center justify-center">
            <span className="text-xs font-mono text-sky-300">3D BOX</span>
          </div>
        </div>
      );
    case "video":
      return (
        <div className="w-full h-full p-6 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full border border-sky-400 bg-sky-500/20 flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            <svg className="w-5 h-5 text-sky-300 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      );
    case "code":
      return (
        <div className="w-full h-full p-6 font-mono text-[11px] text-sky-300/80 flex flex-col justify-center space-y-2">
          <div>const developer = new Engineer();</div>
          <div className="pl-4 text-emerald-400">developer.deploy();</div>
          <div className="text-slate-500">// Dedicated Team Extension</div>
        </div>
      );
    default:
      return null;
  }
}

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState("01");
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal header elements smoothly
      gsap.fromTo(
        ".services-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeService = SERVICES_LIST.find((s) => s.id === activeServiceId) || SERVICES_LIST[0];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Header: Eyebrow, Main Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-6">
          <div className="services-reveal flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              02
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              SERVICES
            </span>
          </div>

          <h2 className="services-reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light tracking-tight text-white leading-[1.08]">
            Everything your business needs to build, operate and grow.
          </h2>

          <p className="services-reveal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-2xl">
            From custom business software to digital marketing and creative services, we bring
            technology and execution together under one roof.
          </p>
        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-[var(--border-subtle)]/40" />

        {/* Content Layout: Numbered List + Desktop Sticky Preview Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Numbered Service List */}
          <div className="lg:col-span-7 xl:col-span-7 divide-y divide-[var(--border-subtle)]/40">
            {SERVICES_LIST.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  className={`group py-6 sm:py-8 transition-colors duration-300 cursor-pointer ${
                    isActive ? "bg-sky-500/[0.03]" : ""
                  }`}
                >
                  <Link href={service.href} className="block text-decoration-none">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xs font-mono font-medium transition-colors duration-300 ${
                              isActive ? "text-sky-400" : "text-[var(--text-muted)]"
                            }`}
                          >
                            {service.id}
                          </span>
                          <h3
                            className={`text-lg sm:text-2xl font-light tracking-tight transition-colors duration-300 font-sans ${
                              isActive ? "text-white font-normal" : "text-slate-300 group-hover:text-white"
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>

                        <p
                          className={`text-xs sm:text-sm leading-relaxed transition-all duration-300 font-sans max-w-xl ${
                            isActive
                              ? "text-slate-300 opacity-100 max-h-24 pt-1"
                              : "text-[var(--text-secondary)] opacity-80"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* Right Arrow Indicator */}
                      <span
                        className={`text-lg sm:text-xl transition-all duration-300 transform ${
                          isActive
                            ? "text-sky-400 translate-x-1"
                            : "text-[var(--text-muted)] group-hover:text-white group-hover:translate-x-1"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Sticky Visual Preview Panel */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-32">
            <div className="w-full h-[420px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/50 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)]/30 pb-3">
                <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase">
                  {activeService.id} // {activeService.title}
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
              </div>

              {/* Dynamic Abstract Graphic */}
              <div className="flex-1 relative flex items-center justify-center my-4 rounded-xl border border-sky-500/10 bg-black/40">
                <ServicePreviewGraphic type={activeService.previewType} />
              </div>

              <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase text-right">
                TECHNO MANTRA PLATFORM ARCHITECTURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
