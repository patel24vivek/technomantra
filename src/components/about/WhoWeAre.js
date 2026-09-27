"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function WhoWeAre() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal text elements
      gsap.fromTo(
        ".who-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // SVG Connections stroke animation
      gsap.fromTo(
        ".who-svg-path",
        { strokeDashoffset: 400, strokeDasharray: 400 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
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
      aria-labelledby="who-we-are-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Eyebrow + Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="who-reveal flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
              <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
                WHO WE ARE
              </span>
            </div>
            <h2
              id="who-we-are-title"
              className="who-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
            >
              We build technology <br />
              with a purpose.
            </h2>
          </div>

          {/* Right Column: Editorial Body Copy */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 font-sans leading-relaxed pt-2">
            <p className="who-reveal text-slate-900 font-medium text-lg sm:text-xl leading-relaxed">
              TechnoMantra is a technology and digital solutions company focused on building websites,
              business software, automation systems and digital experiences for modern businesses.
            </p>
            <p className="who-reveal">
              We work with businesses to understand how they operate, what their customers need and
              where technology can make a meaningful difference. From digital products to connected
              business systems, we focus on creating solutions that are practical, useful and built
              around the way the business actually works.
            </p>
          </div>
        </div>

        {/* Subtle Visual Diagram: Connection System */}
        <div
          aria-hidden="true"
          className="who-reveal w-full pt-8 pb-4 border-t border-slate-200/60"
        >
          <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-8">
            CONNECTED ECOSYSTEM ARCHITECTURE
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center relative z-10">
              {/* Node 1: People */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-mono text-sky-600 font-bold block mb-1">01</span>
                <span className="text-sm font-semibold text-slate-900">PEOPLE & USERS</span>
                <p className="text-[11px] text-slate-500 mt-1">Customers, teams & stakeholders</p>
              </div>

              {/* Node 2: Business */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-mono text-sky-600 font-bold block mb-1">02</span>
                <span className="text-sm font-semibold text-slate-900">BUSINESS GOALS</span>
                <p className="text-[11px] text-slate-500 mt-1">Growth, efficiency & vision</p>
              </div>

              {/* Node 3: Systems */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-mono text-sky-600 font-bold block mb-1">03</span>
                <span className="text-sm font-semibold text-slate-900">DATA & WORKFLOWS</span>
                <p className="text-[11px] text-slate-500 mt-1">Operations & intelligence</p>
              </div>

              {/* Node 4: Technology */}
              <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30">
                <span className="text-xs font-mono text-sky-600 font-bold block mb-1">04</span>
                <span className="text-sm font-semibold text-sky-900">TECHNOLOGY</span>
                <p className="text-[11px] text-sky-700 mt-1">Scalable digital products</p>
              </div>
            </div>

            {/* Connecting SVG lines */}
            <svg
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
              viewBox="0 0 800 120"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                className="who-svg-path"
                d="M 180,60 L 250,60 M 380,60 L 450,60 M 580,60 L 650,60"
                stroke="#0ea5e9"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
