"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function FinalCta() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal items in controlled sequence
      gsap.fromTo(
        ".cta-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Orbital trajectory SVG subtle draw
      gsap.fromTo(
        ".cta-orbital-path",
        { strokeDashoffset: 1000, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 0.25,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      aria-labelledby="contact-heading"
      className="relative z-10 w-full min-h-[80vh] bg-[#030712] text-[#F5F5F5] py-28 lg:py-40 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(56,189,248,0.06),transparent)] pointer-events-none" />

      {/* Cosmic Faint Orbital Line SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-full max-w-4xl h-[400px] opacity-25"
          viewBox="0 0 800 400"
          fill="none"
        >
          <ellipse
            cx="400"
            cy="200"
            rx="380"
            ry="140"
            stroke="url(#cta-orbit-gradient)"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            className="cta-orbital-path"
          />
          <defs>
            <linearGradient id="cta-orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-10 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="cta-reveal flex items-center gap-3">
          <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
            08
          </span>
          <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
            START SOMETHING
          </span>
        </div>

        {/* Main Heading */}
        <h2
          id="contact-heading"
          className="cta-reveal font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]"
        >
          Have something worth building?
        </h2>

        {/* Supporting Copy */}
        <p className="cta-reveal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-xl">
          Tell us what you're trying to solve. We'll help turn it into a digital product,
          business system or experience that works.
        </p>

        {/* CTA Buttons & Actions */}
        <div className="cta-reveal flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Link
            href="/request-a-proposal"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sky-400 text-slate-950 font-medium font-sans text-sm sm:text-base hover:bg-sky-300 transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]"
          >
            <span>Request a Proposal</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-mono tracking-wider text-sky-400 hover:text-sky-300 transition-colors duration-300 py-2 px-4"
          >
            <span>Talk to Us</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Verified Contact Detail */}
        <div className="cta-reveal pt-6 border-t border-[var(--border-subtle)]/30 w-full max-w-xs text-center">
          <a
            href="mailto:hello@technomantra.in"
            className="text-xs font-mono text-[var(--text-muted)] hover:text-sky-400 transition-colors duration-300 tracking-wider flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            hello@technomantra.in
          </a>
        </div>
      </div>
    </section>
  );
}
