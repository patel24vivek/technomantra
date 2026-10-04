"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function ProjectsHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textColRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Staggered text reveal
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".proj-hero-reveal",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          clearProps: "transform",
        }
      );

      // 2. Layered Canvas entrance
      if (canvasRef.current) {
        gsap.fromTo(
          ".hero-layer-bg",
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 0.8, scale: 1, y: 0, duration: 1.1, delay: 0.2, ease: "power2.out" }
        );
        gsap.fromTo(
          ".hero-layer-mid",
          { opacity: 0, scale: 0.94, y: 50 },
          { opacity: 0.9, scale: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          ".hero-layer-front",
          { opacity: 0, scale: 0.96, y: 60 },
          { opacity: 1, scale: 1, y: 0, duration: 1.3, delay: 0.4, ease: "power2.out" }
        );

        // Subtle mouse parallax
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const xPos = (clientX / innerWidth - 0.5) * 2;
          const yPos = (clientY / innerHeight - 0.5) * 2;

          gsap.to(".hero-layer-bg", { x: xPos * 10, y: yPos * 10, duration: 0.8, ease: "power1.out" });
          gsap.to(".hero-layer-mid", { x: xPos * 20, y: yPos * 20, duration: 0.8, ease: "power1.out" });
          gsap.to(".hero-layer-front", { x: xPos * 35, y: yPos * 35, duration: 0.8, ease: "power1.out" });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="projects-hero-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background ambient radial gradients */}
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
        {/* Left Column: Narrative Headline */}
        <div ref={textColRef} className="lg:col-span-6 space-y-6 sm:space-y-8">
          {/* Eyebrow */}
          <div className="proj-hero-reveal flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              SELECTED WORK
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              PROVEN CASE STUDIES
            </span>
          </div>

          {/* Heading */}
          <h1
            id="projects-hero-title"
            className="proj-hero-reveal text-[2.75rem] sm:text-5xl lg:text-[3.65rem] xl:text-[4.25rem] font-display font-light text-slate-900 leading-[1.02] sm:leading-[0.98] tracking-[-0.035em]"
          >
            Built for real businesses. <br className="hidden sm:inline" />
            Designed to make <br className="hidden sm:inline" />
            a difference.
          </h1>

          {/* Supporting Text */}
          <p className="proj-hero-reveal text-base sm:text-[1.125rem] text-slate-600 font-sans leading-relaxed max-w-xl">
            Explore websites, business systems, digital products and experiences we’ve built around real-world business needs.
          </p>

          {/* Strategic Micro-Card */}
          <div className="proj-hero-reveal pt-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2.5 max-w-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  EXPERIENCE PARADIGM
                </span>
                <span className="text-[10px] font-mono font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  PROJECTS IN MOTION
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-snug">
                Every project represents a full lifecycle: Business Problem → Challenge → Solution Architecture → Build → Real-World Result.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="proj-hero-reveal pt-2 flex items-center gap-3 sm:gap-4 flex-wrap">
            <Link
              href="#projects-grid"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-sm transition-all duration-200 shadow-md shadow-slate-900/10 group"
            >
              <span>Explore 3D Bento Grid</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
            </Link>

            <Link
              href="#featured-project-stage"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200/90 font-sans font-medium text-sm transition-all duration-200 shadow-xs group"
            >
              <span>Featured Case Study</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>

            <Link
              href="#project-archive"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-sky-600 font-mono text-xs transition-colors px-2 py-2"
            >
              <span>Studio Archive</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Layered Multi-Depth Project Canvas */}
        <div ref={canvasRef} className="lg:col-span-6 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-center">
          {/* Layer 1: Background Depth Card */}
          <div className="hero-layer-bg absolute w-[78%] aspect-[16/10] -top-2 -left-2 rounded-2xl overflow-hidden border border-slate-300/80 shadow-lg bg-slate-100 transform -rotate-3 transition-transform will-change-transform">
            <Image
              src="/images/industries/keyan-corp.jpg"
              alt="Keyan Corporation Commercial Trading Hub"
              fill
              sizes="400px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px]" />
          </div>

          {/* Layer 2: Middle Depth Card */}
          <div className="hero-layer-mid absolute w-[82%] aspect-[16/10] top-8 -right-2 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 transform rotate-2 transition-transform will-change-transform">
            <Image
              src="/images/projects/project_ecommerce.jpg"
              alt="Aura Luxe Headless Retail Platform"
              fill
              sizes="450px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/10" />
          </div>

          {/* Layer 3: Foreground Dominant Card */}
          <div className="hero-layer-front relative w-[90%] aspect-[16/10] rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-white z-10 transform will-change-transform group">
            <Image
              src="/images/industries/riopak-engineers.jpg"
              alt="Riopak Engineers Manufacturing ERP Platform"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom floating badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold text-slate-900">
                  FEATURED: RIOPAK ERP
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                MANUFACTURING • REAL-TIME
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
