"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function AboutHero() {
  const sectionRef = useRef(null);
  const planetRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered reveal for text content
      gsap.fromTo(
        ".about-hero-reveal",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
        }
      );

      // Planet visual smooth reveal
      gsap.fromTo(
        ".about-hero-planet",
        { opacity: 0, scale: 0.9, x: 40 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    // Mouse Parallax for Desktop
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-hero-title"
      className="relative z-10 w-full min-h-[80vh] lg:min-h-[680px] bg-[#030712] text-[#F5F5F5] pt-12 pb-16 lg:pt-20 lg:pb-28 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-[var(--border-subtle)]/30 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle Background Atmosphere & Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_35%,rgba(56,189,248,0.07),transparent)] pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-8 max-w-2xl">
          {/* Eyebrow */}
          <div className="about-hero-reveal flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase font-semibold">
              ABOUT TECHNOMANTRA
            </span>
          </div>

          {/* Main Heading */}
          <h1
            id="about-hero-title"
            className="about-hero-reveal font-display text-4xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-light tracking-tight text-white leading-[1.06]"
          >
            Technology built <br className="hidden sm:inline" />
            around the way <br className="hidden sm:inline" />
            businesses work.
          </h1>

          {/* Supporting Copy */}
          <p className="about-hero-reveal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-[520px]">
            We design and develop digital products, business software and technology solutions that
            help businesses work smarter, serve customers better and grow with confidence.
          </p>

          {/* Scroll Indicator */}
          <div className="about-hero-reveal pt-4 flex items-center gap-3 text-xs font-mono text-slate-400 tracking-wider">
            <span className="text-sky-400 text-sm animate-bounce">↓</span>
            <span>Scroll to explore</span>
          </div>
        </div>

        {/* Right Column: Planetary Visual & Orbital Rings */}
        <div
          aria-hidden="true"
          className="about-hero-planet lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] pointer-events-none"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            transition: "transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)",
          }}
        >
          {/* SVG Orbital Ring Curves */}
          <svg
            className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] opacity-35"
            viewBox="0 0 500 500"
            fill="none"
          >
            <ellipse
              cx="250"
              cy="250"
              rx="220"
              ry="90"
              stroke="#38bdf8"
              strokeWidth="0.8"
              strokeDasharray="4 4"
              transform="rotate(-20 250 250)"
            />
            <ellipse
              cx="250"
              cy="250"
              rx="240"
              ry="110"
              stroke="rgba(148, 163, 184, 0.4)"
              strokeWidth="0.5"
              transform="rotate(-10 250 250)"
            />
          </svg>

          {/* Spherical Partial Planet Element */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-slate-800 via-[#0a1526] to-[#020617] border border-sky-500/20 shadow-[inset_-35px_-35px_70px_rgba(0,0,0,0.95),0_0_80px_rgba(56,189,248,0.15)] flex items-center justify-center overflow-hidden">
            {/* Atmospheric Surface Detail Lines */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.4), transparent 60%), repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(56, 189, 248, 0.05) 15px, rgba(56, 189, 248, 0.05) 30px)",
              }}
            />

            {/* Glowing Horizon Accent */}
            <div className="absolute -top-4 -left-4 w-3/4 h-3/4 rounded-full bg-sky-400/20 blur-2xl" />
          </div>

          {/* Decorative Floating Label */}
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded border border-slate-800 bg-slate-950/80 backdrop-blur text-[10px] font-mono text-sky-400 tracking-widest uppercase">
            TECHNOLOGY & PURPOSE
          </div>
        </div>
      </div>
    </section>
  );
}
