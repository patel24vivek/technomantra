"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { INDUSTRIES_DATA } from "@/data/industries";

export default function IndustryUniverse() {
  const sectionRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".universe-header-reveal",
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

      // Center node reveal
      gsap.fromTo(
        ".universe-center-node",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // SVG lines drawing
      gsap.fromTo(
        ".universe-line",
        { strokeDashoffset: 400, strokeDasharray: 400, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 0.6,
          duration: 1.2,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Satellite nodes reveal
      gsap.fromTo(
        ".universe-node",
        { opacity: 0, scale: 0.85, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="industry-universe-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="universe-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              THE INDUSTRIES WE WORK WITH
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              CONNECTED ECOSYSTEM
            </span>
          </div>

          <h2
            id="industry-universe-title"
            className="universe-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Different industries. <br className="hidden sm:inline" />
            Different realities.
          </h2>

          <p className="universe-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Technology becomes useful when it understands the business behind it. We adapt digital products, business systems and automation around the workflows that matter to each industry.
          </p>
        </div>

        {/* Constellation Ecosystem Canvas View */}
        <div className="relative w-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/40 overflow-hidden">
          {/* Subtle Grid Lines */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Desktop Constellation View */}
          <div className="hidden lg:block relative min-h-[580px] w-full">
            {/* SVG Connecting Lines between Central Core and 10 Nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 580"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Radiating lines to all 10 positions */}
              {/* 01 Manufacturing (Top Center) */}
              <line
                x1="500"
                y1="290"
                x2="500"
                y2="55"
                stroke={activeNode === "manufacturing" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "manufacturing" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "manufacturing" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 02 Trading (Top Left-Mid) */}
              <line
                x1="500"
                y1="290"
                x2="240"
                y2="90"
                stroke={activeNode === "trading" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "trading" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "trading" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 03 Ecommerce (Left Mid) */}
              <line
                x1="500"
                y1="290"
                x2="100"
                y2="230"
                stroke={activeNode === "ecommerce" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "ecommerce" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "ecommerce" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 04 Healthcare (Top Right-Mid) */}
              <line
                x1="500"
                y1="290"
                x2="760"
                y2="90"
                stroke={activeNode === "healthcare" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "healthcare" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "healthcare" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 05 Finance (Right Mid) */}
              <line
                x1="500"
                y1="290"
                x2="900"
                y2="230"
                stroke={activeNode === "finance" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "finance" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "finance" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 06 Education (Bottom Left-Mid) */}
              <line
                x1="500"
                y1="290"
                x2="140"
                y2="420"
                stroke={activeNode === "education" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "education" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "education" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 07 Real Estate (Bottom Right-Mid) */}
              <line
                x1="500"
                y1="290"
                x2="860"
                y2="420"
                stroke={activeNode === "real-estate" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "real-estate" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "real-estate" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 08 Export & Import (Bottom Far-Left) */}
              <line
                x1="500"
                y1="290"
                x2="280"
                y2="525"
                stroke={activeNode === "export-import" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "export-import" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "export-import" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 09 Hospitality (Bottom Far-Right) */}
              <line
                x1="500"
                y1="290"
                x2="720"
                y2="525"
                stroke={activeNode === "hospitality" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "hospitality" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "hospitality" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
              {/* 10 Non-profit (Bottom Center) */}
              <line
                x1="500"
                y1="290"
                x2="500"
                y2="540"
                stroke={activeNode === "non-profit" ? "#0ea5e9" : "#cbd5e1"}
                strokeWidth={activeNode === "non-profit" ? "2.5" : "1.5"}
                strokeDasharray={activeNode === "non-profit" ? "none" : "4 4"}
                className="universe-line transition-all duration-300"
              />
            </svg>

            {/* Central Master Node */}
            <div className="universe-center-node absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-52 h-52 rounded-full bg-slate-900 border-4 border-white shadow-2xl flex flex-col items-center justify-center p-5 text-center group cursor-default transition-all duration-300 hover:scale-105 hover:shadow-sky-500/20">
                <span className="text-[9px] font-mono tracking-widest text-sky-400 uppercase font-bold mb-2">
                  ENGINEERING CORE
                </span>
                
                {/* Official Company Logo */}
                <div className="relative w-36 h-14 flex items-center justify-center">
                  <Image
                    src="/Techno-Mantra-logo.png"
                    alt="TechnoMantra Logo"
                    width={220}
                    height={70}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(56,189,248,0.25)] group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.45)] transition-all duration-300"
                    priority
                  />
                </div>

                <span className="text-[10px] font-mono tracking-wider text-slate-300 mt-2">
                  Connected Architecture
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 animate-ping" />
              </div>
            </div>

            {/* 10 Floating Industry Orbit Badges with Absolute Layout */}
            {/* 01 Manufacturing */}
            <div className="universe-node absolute top-[30px] left-1/2 -translate-x-1/2 z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[0]}
                isActive={activeNode === INDUSTRIES_DATA[0].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 02 Trading */}
            <div className="universe-node absolute top-[65px] left-[18%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[1]}
                isActive={activeNode === INDUSTRIES_DATA[1].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 03 Ecommerce */}
            <div className="universe-node absolute top-[205px] left-[2%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[2]}
                isActive={activeNode === INDUSTRIES_DATA[2].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 04 Healthcare */}
            <div className="universe-node absolute top-[65px] right-[18%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[3]}
                isActive={activeNode === INDUSTRIES_DATA[3].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 05 Finance */}
            <div className="universe-node absolute top-[205px] right-[2%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[4]}
                isActive={activeNode === INDUSTRIES_DATA[4].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 06 Education */}
            <div className="universe-node absolute bottom-[130px] left-[6%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[5]}
                isActive={activeNode === INDUSTRIES_DATA[5].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 07 Real Estate */}
            <div className="universe-node absolute bottom-[130px] right-[6%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[6]}
                isActive={activeNode === INDUSTRIES_DATA[6].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 08 Export & Import */}
            <div className="universe-node absolute bottom-[25px] left-[22%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[7]}
                isActive={activeNode === INDUSTRIES_DATA[7].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 09 Hospitality */}
            <div className="universe-node absolute bottom-[25px] right-[22%] z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[8]}
                isActive={activeNode === INDUSTRIES_DATA[8].slug}
                onHover={setActiveNode}
              />
            </div>

            {/* 10 Non-Profit */}
            <div className="universe-node absolute bottom-[10px] left-1/2 -translate-x-1/2 z-10">
              <IndustryOrbitNode
                ind={INDUSTRIES_DATA[9]}
                isActive={activeNode === INDUSTRIES_DATA[9].slug}
                onHover={setActiveNode}
              />
            </div>
          </div>

          {/* Mobile & Tablet View */}
          <div className="space-y-4 lg:hidden">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2">
              <span className="text-[9px] font-mono tracking-widest text-sky-400 uppercase font-bold">
                ENGINEERING CORE
              </span>
              <div className="relative w-32 h-10 flex items-center justify-center">
                <Image
                  src="/Techno-Mantra-logo.png"
                  alt="TechnoMantra Logo"
                  width={180}
                  height={50}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                />
              </div>
              <span className="text-[10px] font-mono text-slate-300">
                Connected Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {INDUSTRIES_DATA.map((ind) => (
              <Link
                key={ind.id}
                href={`#industry-${ind.slug}`}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-500/50 hover:bg-white transition-all duration-200 flex items-center justify-between group"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">{ind.id}</span>
                  <h3 className="text-sm font-display font-medium text-slate-900 group-hover:text-sky-600 transition-colors">
                    {ind.title}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-sky-500 transition-colors">→</span>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryOrbitNode({ ind, isActive, onHover }) {
  return (
    <Link
      href={`#industry-${ind.slug}`}
      onMouseEnter={() => onHover(ind.slug)}
      onMouseLeave={() => onHover(null)}
      className={`px-4 py-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-3 backdrop-blur-md shadow-sm group ${
        isActive
          ? "bg-slate-900 border-slate-900 text-white shadow-lg scale-105 z-30"
          : "bg-white/90 hover:bg-white border-slate-200/90 text-slate-800 hover:border-sky-400 hover:shadow-md"
      }`}
    >
      <span
        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
          isActive ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-600"
        }`}
      >
        {ind.id}
      </span>
      <span className="text-xs font-display font-medium whitespace-nowrap">{ind.shortTitle}</span>
    </Link>
  );
}
