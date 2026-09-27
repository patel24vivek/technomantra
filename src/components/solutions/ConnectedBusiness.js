"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export default function ConnectedBusiness() {
  const sectionRef = useRef(null);
  const visualWrapperRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.fromTo(
        ".conn-reveal",
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

      // SVG lines drawing and nodes sequence on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visualWrapperRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      tl.fromTo(".conn-svg-path", { strokeDashoffset: 400, strokeDasharray: 400 }, { strokeDashoffset: 0, stagger: 0.1 })
        .fromTo(".conn-badge-node", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.08 }, "-=0.5")
        .fromTo(".conn-final-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="connected-business"
      ref={sectionRef}
      aria-labelledby="connected-business-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-14 lg:space-y-20">
        {/* Header Title Narrative */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="conn-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>CONNECTED BUSINESS ARCHITECTURE</span>
          </div>

          <h2
            id="connected-business-title"
            className="conn-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            The value is in the connection.
          </h2>

          <p className="conn-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            The strongest digital systems are not isolated tools. They connect people, processes, customers
            and data so the business can operate as one system.
          </p>
        </div>

        {/* Large Wide Panoramic Architectural Image with Overlaid System Nodes */}
        <div
          ref={visualWrapperRef}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-300/40 bg-slate-900 select-none"
        >
          {/* Background Image */}
          <Image
            src="/images/solutions/connected-business.jpg"
            alt="TechnoMantra Connected Enterprise Architecture Environment"
            fill
            sizes="(max-width: 1440px) 100vw, 1300px"
            className="object-cover object-center opacity-85"
          />

          {/* Dark Glass Overlay Vignette */}
          <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[1px] pointer-events-none" />

          {/* SVG Interconnected Geometry Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75"
            viewBox="0 0 800 450"
            fill="none"
          >
            {/* Connection Paths */}
            <path className="conn-svg-path" d="M 400 90 L 400 200" stroke="#38bdf8" strokeWidth="2" />
            <path className="conn-svg-path" d="M 180 225 L 340 225" stroke="#38bdf8" strokeWidth="2" />
            <path className="conn-svg-path" d="M 620 225 L 460 225" stroke="#38bdf8" strokeWidth="2" />
            <path className="conn-svg-path" d="M 400 250 L 300 330" stroke="#38bdf8" strokeWidth="1.8" />
            <path className="conn-svg-path" d="M 400 250 L 500 330" stroke="#38bdf8" strokeWidth="1.8" />
            <path className="conn-svg-path" d="M 300 355 L 400 400 M 500 355 L 400 400" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>

          {/* System Nodes Placed Over Image */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
            {/* Top Node: PEOPLE */}
            <div className="conn-badge-node self-center px-4 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 font-mono text-xs font-bold border border-white/50 shadow-lg">
              PEOPLE & TEAMS
            </div>

            {/* Middle Row: CUSTOMERS <-> BUSINESS CORE <-> OPERATIONS */}
            <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-2">
              <div className="conn-badge-node px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 font-mono text-xs font-bold border border-white/50 shadow-lg">
                CUSTOMERS
              </div>

              <div className="conn-badge-node px-5 py-3 rounded-2xl bg-sky-500 text-white font-display font-bold text-sm sm:text-base tracking-tight shadow-xl shadow-sky-500/30 scale-110">
                BUSINESS CORE
              </div>

              <div className="conn-badge-node px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 font-mono text-xs font-bold border border-white/50 shadow-lg">
                OPERATIONS
              </div>
            </div>

            {/* Bottom Row: DATA & AUTOMATION -> GROWTH */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center gap-6 sm:gap-12">
                <span className="conn-badge-node px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-slate-800 font-mono text-[11px] font-semibold">
                  DATA & REPORTING
                </span>
                <span className="conn-badge-node px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-slate-800 font-mono text-[11px] font-semibold">
                  AUTOMATION & AI
                </span>
              </div>

              <div className="conn-final-text pt-2 flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-sky-400 uppercase">
                  OUTCOME:
                </span>
                <span className="px-3 py-1 rounded-md bg-emerald-500/90 backdrop-blur-md text-white font-mono text-xs font-bold shadow-md">
                  SUSTAINABLE BUSINESS GROWTH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
