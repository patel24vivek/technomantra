"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function ConnectionPoint() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animate SVG Connecting Lines
      gsap.fromTo(
        ".convergence-path",
        { strokeDashoffset: 600 },
        {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // 2. Animate Outer Nodes
      gsap.fromTo(
        ".convergence-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // 3. Animate Central Collaboration Hub
      gsap.fromTo(
        ".convergence-center-reveal",
        { opacity: 0, scale: 0.9, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
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
      aria-label="Connection Point Signature Convergence"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden text-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08),transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.06),transparent_65%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
          <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
            SIGNATURE CONVERGENCE PIPELINE
          </span>
          <span className="text-slate-300 font-mono text-xs">/</span>
          <span className="text-[11px] font-mono tracking-wider text-emerald-700 uppercase font-semibold">
            FROM IDEA TO SUCCESS
          </span>
        </div>

        {/* Large Architectural SVG Composition */}
        <div className="relative w-full max-w-3xl mx-auto min-h-[340px] sm:min-h-[400px] flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 400"
            fill="none"
          >
            <defs>
              {/* Glow / Drop Shadow Filter for nodes */}
              <filter id="node-light-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" floodColor="#0f172a" />
              </filter>

              {/* Path Gradients */}
              <linearGradient id="west-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
              </linearGradient>

              <linearGradient id="north-line" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
              </linearGradient>

              <linearGradient id="south-line" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
              </linearGradient>

              <linearGradient id="east-success-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Background dashed orbit trajectory */}
            <ellipse
              cx="400"
              cy="200"
              rx="330"
              ry="150"
              stroke="rgba(15,23,42,0.12)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            {/* 1. Left (West): IDEA -> CENTER Line */}
            <path
              className="convergence-path"
              d="M 120 200 L 400 200"
              stroke="url(#west-line)"
              strokeWidth="2.5"
              strokeDasharray="600"
            />

            {/* 2. Top (North): START -> CENTER Line */}
            <path
              className="convergence-path"
              d="M 400 45 L 400 200"
              stroke="url(#north-line)"
              strokeWidth="2.5"
              strokeDasharray="600"
            />

            {/* 3. Bottom (South): BUILD -> CENTER Line */}
            <path
              className="convergence-path"
              d="M 400 355 L 400 200"
              stroke="url(#south-line)"
              strokeWidth="2.5"
              strokeDasharray="600"
            />

            {/* 4. Right (East): CENTER -> SUCCESS LINE (Completed Pipeline) */}
            <path
              className="convergence-path"
              d="M 400 200 L 680 200"
              stroke="url(#east-success-line)"
              strokeWidth="3.5"
              strokeDasharray="600"
            />

            {/* Success Arrow Pulse Head */}
            <polygon
              points="675,193 692,200 675,207"
              fill="#059669"
              className="animate-pulse"
            />

            {/* 1. West Node: IDEA */}
            <circle
              className="convergence-node"
              cx="120"
              cy="200"
              r="8"
              fill="#0284c7"
              stroke="#ffffff"
              strokeWidth="3"
              filter="url(#node-light-shadow)"
            />

            {/* 2. North Node: START */}
            <circle
              className="convergence-node"
              cx="400"
              cy="45"
              r="8"
              fill="#d97706"
              stroke="#ffffff"
              strokeWidth="3"
              filter="url(#node-light-shadow)"
            />

            {/* 3. South Node: BUILD */}
            <circle
              className="convergence-node"
              cx="400"
              cy="355"
              r="8"
              fill="#7e22ce"
              stroke="#ffffff"
              strokeWidth="3"
              filter="url(#node-light-shadow)"
            />

            {/* 4. East Node: SUCCESS */}
            <circle
              className="convergence-node"
              cx="680"
              cy="200"
              r="9"
              fill="#059669"
              stroke="#ffffff"
              strokeWidth="3"
              filter="url(#node-light-shadow)"
            />
          </svg>

          {/* HTML Overlay Badges for Crystal-Clear Typography & Spacing */}
          {/* Left Node: IDEA */}
          <div className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-300 text-sky-800 font-mono text-[11px] sm:text-xs font-bold shadow-md shadow-sky-500/10">
              01 • IDEA
            </span>
          </div>

          {/* Top Node: START */}
          <div className="absolute top-0 sm:top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-amber-800 font-mono text-[11px] sm:text-xs font-bold shadow-md shadow-amber-500/10">
              02 • START
            </span>
          </div>

          {/* Bottom Node: BUILD */}
          <div className="absolute bottom-0 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-300 text-purple-800 font-mono text-[11px] sm:text-xs font-bold shadow-md shadow-purple-500/10">
              03 • BUILD
            </span>
          </div>

          {/* Right Node: SUCCESS & BUSINESS OUTCOME */}
          <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-emerald-50/95 backdrop-blur-md border border-emerald-400 text-emerald-800 font-mono text-[11px] sm:text-xs font-bold shadow-md shadow-emerald-500/15 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>04 • SUCCESS</span>
            </span>
          </div>

          {/* Center Hub Box: LET'S CONNECT */}
          <div className="convergence-center-reveal p-6 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl shadow-slate-300/40 text-center space-y-2 relative z-20 max-w-xs sm:max-w-sm">
            <span className="text-[10px] font-mono text-sky-700 uppercase tracking-widest font-bold block">
              TECHNOMANTRA COLLABORATION HUB
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-light text-slate-900 tracking-tight">
              LET’S CONNECT
            </h3>
            <p className="text-[11px] font-sans text-slate-500">
              Where technical architecture meets business execution.
            </p>
          </div>
        </div>

        {/* Narrative Call to Action */}
        <div className="space-y-4 max-w-xl mx-auto pt-4">
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            From the initial spark to full-scale digital deployment, we unite design, engineering, and business strategy into one connected, measurable success engine.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-sans font-semibold text-xs tracking-wide hover:bg-sky-600 transition-all shadow-lg shadow-slate-900/15 group"
            >
              <span>Initiate Project Brief</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-sans text-xs font-medium border border-slate-200 transition-colors shadow-sm"
            >
              <span>Explore Verified Outcomes</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
