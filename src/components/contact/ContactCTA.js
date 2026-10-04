"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function ContactCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-cta-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
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
      aria-labelledby="contact-cta-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden text-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        {/* Eyebrow */}
        <div className="contact-cta-reveal flex items-center justify-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
            READY WHEN YOU ARE
          </span>
        </div>

        {/* Heading */}
        <h2
          id="contact-cta-title"
          className="contact-cta-reveal text-3xl sm:text-5xl lg:text-6xl font-display font-light text-slate-900 leading-[1.05] tracking-tight"
        >
          Let’s turn the idea <br />
          into something real.
        </h2>

        {/* Supporting Copy */}
        <p className="contact-cta-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-xl mx-auto">
          Start with a conversation. We’ll help turn it into a high-performing digital product, business system, or experience that works in the real world.
        </p>

        {/* Action Buttons */}
        <div className="contact-cta-reveal flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#contact-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-sm transition-all duration-200 shadow-lg shadow-slate-900/10 group"
          >
            <span>Send an Inquiry</span>
            <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200/90 font-sans font-medium text-sm transition-all duration-200 shadow-xs group"
          >
            <span>View Our Delivered Work</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
