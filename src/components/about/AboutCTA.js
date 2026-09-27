"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { gsap } from "@/lib/gsap";

export default function AboutCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-reveal",
        { opacity: 0, y: 30 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-cta-title"
      className="relative w-full bg-white text-[#0F172A] py-24 lg:py-36 px-4 sm:px-8 lg:px-16 xl:px-20 overflow-hidden"
    >
      {/* Background Decorative SVG Orbital Ring */}
      <svg
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-15 pointer-events-none"
        viewBox="0 0 800 400"
        fill="none"
      >
        <ellipse cx="400" cy="200" rx="360" ry="140" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="400" cy="200" r="180" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="0.8" />
      </svg>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Eyebrow */}
        <div className="cta-reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200">
          <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
          <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
            LET'S BUILD
          </span>
        </div>

        {/* Heading */}
        <h2
          id="about-cta-title"
          className="cta-reveal text-4xl sm:text-6xl lg:text-7xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
        >
          Have a problem <br />
          worth solving?
        </h2>

        {/* Supporting Copy */}
        <p className="cta-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
          Tell us what you're trying to solve. We'll help turn it into a digital product, business system
          or experience that works.
        </p>

        {/* Action Buttons */}
        <div className="cta-reveal pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/request-a-proposal" variant="primary" className="text-sm px-8 py-3.5 shadow-lg shadow-sky-500/20">
            Request a Proposal <span className="ml-1">→</span>
          </Button>

          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-medium text-slate-700 border border-slate-300 hover:border-slate-900 hover:text-slate-900 transition-all duration-300"
          >
            Talk to Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
