"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function IndustriesHero() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textColRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Staggered text entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".ind-hero-reveal",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          clearProps: "transform",
        }
      );

      // 2. Image clip-path reveal
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          {
            clipPath: "inset(12% 0% 12% 0% round 1.5rem)",
            opacity: 0,
            scale: 0.96,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
            opacity: 1,
            scale: 1,
            duration: 1.2,
            delay: 0.25,
            ease: "power2.out",
          }
        );

        // 3. Subtle Scroll Parallax
        gsap.to(imageContainerRef.current.querySelector("img"), {
          y: 35,
          scale: 1.04,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (textColRef.current) {
        gsap.to(textColRef.current, {
          y: -30,
          opacity: 0.9,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="industries-hero-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(14,165,233,0.06),transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(214,168,95,0.04),transparent_75%)] pointer-events-none" />

      {/* Subtle micro grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center relative z-10">
        {/* Left Column: Editorial Headline & Narrative */}
        <div ref={textColRef} className="lg:col-span-6 space-y-6 sm:space-y-8">
          {/* Eyebrow with Pulsing Live Status Pip */}
          <div className="ind-hero-reveal flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              INDUSTRIES
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              TAILORED BUSINESS CONTEXT
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1
            id="industries-hero-title"
            className="ind-hero-reveal text-[2.75rem] sm:text-5xl lg:text-[3.65rem] xl:text-[4.25rem] font-display font-light text-slate-900 leading-[1.02] sm:leading-[0.98] tracking-[-0.035em]"
          >
            Built around the way <br className="hidden sm:inline" />
            your industry <br className="hidden sm:inline" />
            works.
          </h1>

          {/* Supporting Copy */}
          <p className="ind-hero-reveal text-base sm:text-[1.125rem] text-slate-600 font-sans leading-relaxed max-w-xl">
            Every business has different workflows, customers and operational challenges. We build digital solutions around the realities of the industry behind them.
          </p>

          {/* Strategic Narrative Micro-Badge */}
          <div className="ind-hero-reveal pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2.5 max-w-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  PHILOSOPHY
                </span>
                <span className="text-[10px] font-mono font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  10 INDUSTRIES • ONE TECHNOLOGY PARTNER
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-snug">
                Instead of forcing generic software templates, we engineer systems that understand your supply chains, regulation, margins, and customer behavior.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="ind-hero-reveal pt-2 flex items-center gap-4 sm:gap-6 flex-wrap">
            <Link
              href="#industry-explorer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-sm transition-all duration-200 shadow-md shadow-slate-900/10 group"
            >
              <span>Explore 10 Industries</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-sky-600 font-sans font-medium text-sm transition-colors group"
            >
              <span>Discuss Your Industry Workflows</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Large Editorial Image Composition */}
        <div className="lg:col-span-6 relative">
          <div
            ref={imageContainerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/11] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-300/40 bg-slate-100"
          >
            <Image
              src="/images/industries/industries-hero.jpg"
              alt="TechnoMantra High-Tech Industrial Operations Control Center"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
              className="object-cover object-center transform scale-100 will-change-transform"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating Architecture Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold text-slate-900">
                  SECTOR AGNOSTIC • WORKFLOW SPECIFIC
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 hidden sm:inline">
                ERP • CRM • AUTOMATION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
