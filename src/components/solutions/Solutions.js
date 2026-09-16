"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SOLUTIONS_LIST } from "./solutionsData";

// Interactive System Diagram showing Connected Nodes & Flow
function SolutionSystemDiagram({ activeNode }) {
  const nodes = [
    { id: "PEOPLE", label: "PEOPLE", x: 20, y: 15, key: "crm" },
    { id: "PROCESSES", label: "PROCESSES", x: 80, y: 15, key: "automation" },
    { id: "CRM", label: "CRM", x: 20, y: 45, key: "crm" },
    { id: "ERP", label: "ERP CORE", x: 50, y: 45, key: "erp" },
    { id: "AUTOMATION", label: "AUTOMATION", x: 80, y: 45, key: "automation" },
    { id: "ECOMMERCE", label: "COMMERCE", x: 35, y: 75, key: "ecommerce" },
    { id: "MARKETING", label: "MARKETING", x: 65, y: 75, key: "marketing" },
  ];

  const connections = [
    { from: "PEOPLE", to: "CRM", key: "crm" },
    { from: "PROCESSES", to: "AUTOMATION", key: "automation" },
    { from: "CRM", to: "ERP", key: "crm" },
    { from: "AUTOMATION", to: "ERP", key: "automation" },
    { from: "ERP", to: "ECOMMERCE", key: "ecommerce" },
    { from: "ERP", to: "MARKETING", key: "marketing" },
    { from: "ECOMMERCE", to: "MARKETING", key: "ecommerce" },
  ];

  return (
    <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)]/30 pb-3 z-10">
        <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase">
          CONNECTED FLOW ARCHITECTURE
        </span>
        <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
          LIVE SYSTEM MODEL
        </span>
      </div>

      {/* Center SVG Diagram */}
      <div className="flex-1 relative my-4 flex items-center justify-center rounded-xl border border-sky-500/10 bg-black/50 p-4">
        <svg className="w-full h-full min-h-[260px]" viewBox="0 0 100 90">
          {/* Connection Lines */}
          {connections.map((conn, idx) => {
            const source = nodes.find((n) => n.id === conn.from);
            const target = nodes.find((n) => n.id === conn.to);
            const isActive = activeNode === conn.key;

            return (
              <line
                key={idx}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={isActive ? "#38bdf8" : "rgba(51, 65, 85, 0.4)"}
                strokeWidth={isActive ? "0.8" : "0.4"}
                strokeDasharray={isActive ? "none" : "1 1"}
                className="transition-colors duration-500"
              />
            );
          })}

          {/* Node Dots & Labels */}
          {nodes.map((node) => {
            const isActive = activeNode === node.key;
            return (
              <g key={node.id} className="transition-all duration-300">
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isActive ? "2.5" : "1.8"}
                  className={`transition-colors duration-300 ${
                    isActive ? "fill-sky-400" : "fill-slate-600"
                  }`}
                />
                {isActive && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="0.3"
                    className="animate-ping opacity-50"
                  />
                )}
                <text
                  x={node.x}
                  y={node.y + 4.5}
                  textAnchor="middle"
                  className={`text-[3.2px] font-mono transition-colors duration-300 ${
                    isActive
                      ? "fill-sky-300 font-semibold tracking-wider"
                      : "fill-slate-500 tracking-normal"
                  }`}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Flow Sequence Banner */}
      <div className="pt-2 border-t border-[var(--border-subtle)]/30 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
        <span>PEOPLE → PROCESS → DATA → AUTOMATION</span>
        <span className="text-sky-400 font-medium uppercase">
          {activeNode} ACTIVE
        </span>
      </div>
    </div>
  );
}

export default function Solutions() {
  const [activeSolutionId, setActiveSolutionId] = useState("01");
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal animation
      gsap.fromTo(
        ".solutions-reveal",
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

  const activeSolution =
    SOLUTIONS_LIST.find((s) => s.id === activeSolutionId) || SOLUTIONS_LIST[0];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Header: Eyebrow, Main Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-6">
          <div className="solutions-reveal flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              04
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              SOLUTIONS
            </span>
          </div>

          <h2 className="solutions-reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light tracking-tight text-white leading-[1.08]">
            Technology should make business simpler.
          </h2>

          <p className="solutions-reveal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-2xl">
            We connect software, data and workflows to help businesses operate more
            efficiently, serve customers better and create room to grow.
          </p>
        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-[var(--border-subtle)]/40" />

        {/* Desktop & Mobile Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Solution List */}
          <div className="lg:col-span-7 xl:col-span-7 divide-y divide-[var(--border-subtle)]/40">
            {SOLUTIONS_LIST.map((sol) => {
              const isActive = sol.id === activeSolutionId;
              return (
                <div
                  key={sol.id}
                  onMouseEnter={() => setActiveSolutionId(sol.id)}
                  className={`group py-6 sm:py-8 transition-colors duration-300 cursor-pointer ${
                    isActive ? "bg-sky-500/[0.03]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      {/* Number, Title & Flow Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xs font-mono font-medium transition-colors duration-300 ${
                              isActive ? "text-sky-400" : "text-[var(--text-muted)]"
                            }`}
                          >
                            {sol.id}
                          </span>
                          <h3
                            className={`text-lg sm:text-2xl font-light tracking-tight transition-colors duration-300 font-sans ${
                              isActive
                                ? "text-white font-normal"
                                : "text-slate-300 group-hover:text-white"
                            }`}
                          >
                            {sol.title}
                          </h3>
                        </div>

                        {/* Flow Tag Badge */}
                        <span
                          className={`text-xs font-mono transition-colors duration-300 px-2.5 py-1 rounded border ${
                            isActive
                              ? "text-sky-300 border-sky-500/40 bg-sky-500/10"
                              : "text-slate-500 border-slate-800 bg-slate-900/40"
                          }`}
                        >
                          {sol.flowTag}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-xs sm:text-sm leading-relaxed transition-all duration-300 font-sans max-w-xl ${
                          isActive
                            ? "text-slate-300 opacity-100 pt-1"
                            : "text-[var(--text-secondary)] opacity-80"
                        }`}
                      >
                        {sol.description}
                      </p>

                      {/* Supporting Concept Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {sol.supportingConcepts.map((concept, i) => (
                          <span
                            key={i}
                            className={`text-[11px] font-mono tracking-wide px-2 py-0.5 rounded transition-colors duration-300 ${
                              isActive
                                ? "text-slate-300 bg-slate-800/60 border border-slate-700/50"
                                : "text-slate-500 bg-slate-900/30 border border-slate-800/30"
                            }`}
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <span
                      className={`text-lg sm:text-xl transition-all duration-300 transform self-start mt-1 ${
                        isActive
                          ? "text-sky-400 translate-x-1"
                          : "text-[var(--text-muted)] group-hover:text-white group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Sticky System Preview */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 sticky top-32">
            <div className="w-full h-[440px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/50 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <SolutionSystemDiagram activeNode={activeSolution.nodeType} />
            </div>
          </div>
        </div>

        {/* Section Footer Link / CTA */}
        <div className="pt-6 border-t border-[var(--border-subtle)]/30 flex items-center justify-between">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-3 text-sm font-mono tracking-wider text-sky-400 hover:text-sky-300 transition-colors duration-300"
          >
            <span>Explore our solutions</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
