"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Service Visual Metaphor Components
 */
function ServiceVisual({ visualType, visualFlow, title }) {
  switch (visualType) {
    case "responsive":
      return (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            RESPONSIVE MULTI-DEVICE VIEWPORT
          </div>
          <div className="flex items-end justify-center gap-3 py-4">
            {/* Desktop Frame */}
            <div className="w-32 h-20 rounded-lg border-2 border-slate-800 bg-slate-50 flex flex-col p-1.5 shadow-sm">
              <div className="w-full h-2 bg-sky-500/20 rounded mb-1" />
              <div className="w-3/4 h-1.5 bg-slate-200 rounded mb-1" />
              <div className="w-1/2 h-1.5 bg-slate-200 rounded" />
            </div>
            {/* Tablet Frame */}
            <div className="w-16 h-24 rounded-lg border-2 border-slate-800 bg-slate-50 flex flex-col p-1 shadow-sm">
              <div className="w-full h-2 bg-sky-500/30 rounded mb-1" />
              <div className="w-full h-1 bg-slate-200 rounded mb-1" />
              <div className="w-2/3 h-1 bg-slate-200 rounded" />
            </div>
            {/* Mobile Frame */}
            <div className="w-10 h-18 rounded-md border-2 border-slate-800 bg-slate-50 flex flex-col p-0.5 shadow-sm">
              <div className="w-full h-1.5 bg-sky-500/40 rounded mb-0.5" />
              <div className="w-full h-0.5 bg-slate-200 rounded" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-600">
            <span>DESKTOP</span>
            <span className="text-sky-500">↔</span>
            <span>TABLET</span>
            <span className="text-sky-500">↔</span>
            <span>MOBILE</span>
          </div>
        </div>
      );

    case "erp-flow":
      return (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            UNIFIED ENTERPRISE CONVERGENCE
          </div>
          <div className="grid grid-cols-3 gap-2 text-center py-2">
            {["Sales", "Inventory", "Purchase", "Finance", "Operations", "Reports"].map((mod) => (
              <div
                key={mod}
                className="px-2 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700"
              >
                {mod}
              </div>
            ))}
          </div>
          <div className="pt-2 text-center">
            <div className="inline-block px-4 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold shadow">
              ↓ CENTRALIZED ERP CORE
            </div>
          </div>
        </div>
      );

    case "crm-pipeline":
      return (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            LIFECYCLE PIPELINE FLOW
          </div>
          <div className="space-y-2 py-2">
            {["Lead Capture", "Opportunity Scoring", "Sales Pipeline", "Customer Retention"].map(
              (step, i) => (
                <div
                  key={step}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono"
                >
                  <span className="text-slate-700 font-medium">0{i + 1}. {step}</span>
                  <span className="text-sky-500 font-bold">→</span>
                </div>
              )
            )}
          </div>
        </div>
      );

    default:
      return (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            SYSTEM ARCHITECTURE WORKFLOW
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 py-3">
            {visualFlow?.map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 font-medium">
                  {item}
                </span>
                {i < visualFlow.length - 1 && (
                  <span className="text-sky-500 font-bold text-xs">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default function ServiceExplorer() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".exp-header-reveal",
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

      // ScrollTrigger per service row to update the sticky left index
      const cards = gsap.utils.toArray(".service-item-row");
      cards.forEach((card, idx) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveIdx(idx),
          onEnterBack: () => setActiveIdx(idx),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-catalogue"
      aria-labelledby="service-catalogue-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="exp-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              SERVICE CATALOGUE
            </span>
          </div>

          <h2
            id="service-catalogue-title"
            className="exp-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Explore our capabilities.
          </h2>

          <p className="exp-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Every service is built around a practical business problem. Browse the complete catalogue or click any
            item to jump directly into its capabilities and deliverables.
          </p>
        </div>

        {/* 2-Column Catalogue Layout: Sticky Left Index + Scrolling Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky 11-Item Navigation Index */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-4 hidden lg:block">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase border-b border-slate-100 pb-2">
                SERVICE INDEX (01 – 11)
              </div>

              <div className="space-y-1">
                {SERVICES_DATA.map((srv, idx) => {
                  const isActive = activeIdx === idx;

                  return (
                    <button
                      key={srv.number}
                      onClick={() => {
                        setActiveIdx(idx);
                        const el = document.getElementById(`service-stage-${srv.number}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-mono flex items-center justify-between transition-all duration-200 ${
                        isActive
                          ? "bg-slate-900 text-white font-bold shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className={isActive ? "text-sky-400" : "text-slate-400"}>
                          {srv.number}
                        </span>
                        <span className="truncate">{srv.title}</span>
                      </div>
                      {isActive && <span className="text-sky-400 text-xs">●</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 11 Detailed Service Stages */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {SERVICES_DATA.map((service, idx) => {
              const isActive = activeIdx === idx;

              return (
                <article
                  key={service.number}
                  id={`service-stage-${service.number}`}
                  className={`service-item-row group p-8 sm:p-12 rounded-3xl border transition-all duration-300 space-y-8 ${
                    isActive
                      ? "bg-white border-sky-500/40 shadow-2xl shadow-sky-500/5 -translate-y-1"
                      : "bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Service Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-sky-600">
                        {service.number}
                      </span>
                      <span className="text-slate-300">/</span>
                      <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
                        {service.category}
                      </span>
                    </div>

                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
                  </div>

                  {/* Title & What it is */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* What Problem it Solves */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      THE PROBLEM WE SOLVE:
                    </span>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {service.problem}
                    </p>
                  </div>

                  {/* Visual System Demonstration */}
                  <ServiceVisual
                    visualType={service.visualType}
                    visualFlow={service.visualFlow}
                    title={service.title}
                  />

                  {/* What We Provide / Capabilities Grid */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold block">
                      WHAT WE DELIVER & BUILD:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-mono text-slate-800 font-medium flex items-center justify-between"
                        >
                          <span>{cap}</span>
                          <span className="text-sky-500 font-bold">✓</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Tag & Contextual CTA */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                        DELIVERABLE OUTCOME:
                      </span>
                      <p className="text-xs sm:text-sm font-sans text-slate-700 font-medium">
                        {service.outcome}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-medium hover:bg-sky-600 transition-colors shrink-0 shadow-sm"
                    >
                      {service.ctaText} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
