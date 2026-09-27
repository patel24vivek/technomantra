"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function ServiceConnections() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal header text
      gsap.fromTo(
        ".conn-reveal",
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

      // SVG wire strokes drawing
      gsap.fromTo(
        ".conn-svg-wire",
        { strokeDashoffset: 500, strokeDasharray: 500 },
        {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power1.inOut",
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
      aria-labelledby="service-connections-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="conn-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              CONNECTED SERVICES
            </span>
          </div>

          <h2
            id="service-connections-title"
            className="conn-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            The right solution rarely <br />
            comes from one service alone.
          </h2>

          <p className="conn-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Modern businesses often need connected technology. We bring development, business systems,
            automation, marketing and creative capabilities together when the problem requires it.
          </p>
        </div>

        {/* Connected Ecosystem Interactive Architecture Canvas Card */}
        <div className="conn-reveal p-8 sm:p-12 rounded-3xl bg-[#FAF9F6] border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-10 py-4">
            {/* Top Node: Website & Frontend */}
            <div className="px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <span className="text-[10px] font-mono text-sky-600 font-bold block">01 DIGITAL FRONTEND</span>
              <span className="text-base font-display font-semibold text-slate-900">
                Websites & Web Applications
              </span>
            </div>

            {/* Middle Row: SEO <-> BUSINESS OPERATIONS <-> CRM & ERP */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[10px] font-mono text-sky-600 font-bold block">GROWTH ENGINE</span>
                <span className="text-sm font-semibold text-slate-800">SEO & Marketing</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl scale-105 border border-slate-800">
                <span className="text-[10px] font-mono text-sky-400 font-bold tracking-widest uppercase block mb-1">
                  CORE HUB
                </span>
                <span className="text-lg font-display font-bold">Connected Business</span>
                <p className="text-[11px] text-slate-400 mt-1">Unified Data & Operations</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[10px] font-mono text-sky-600 font-bold block">BUSINESS SYSTEMS</span>
                <span className="text-sm font-semibold text-slate-800">Custom ERP & CRM</span>
              </div>
            </div>

            {/* Bottom Row: Automation & Multi-Channel Scale */}
            <div className="px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <span className="text-[10px] font-mono text-sky-600 font-bold block">SCALE & VALUE</span>
              <span className="text-base font-display font-semibold text-slate-900">
                Business Automation & Sustainable Growth
              </span>
            </div>
          </div>

          {/* SVG Connecting Background Architecture Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0"
            viewBox="0 0 900 400"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              className="conn-svg-wire"
              d="M 450,75 L 450,150 M 230,200 L 370,200 M 530,200 L 670,200 M 450,250 L 450,320"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
