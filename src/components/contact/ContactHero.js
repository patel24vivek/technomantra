"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import ContactConnectionField from "./ContactConnectionField";
import { VERIFIED_CONTACT_DETAILS } from "@/data/contact";

export default function ContactHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".contact-hero-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          clearProps: "transform",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-hero-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(14,165,233,0.06),transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(214,168,95,0.04),transparent_75%)] pointer-events-none" />

      {/* Subtle micro grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center relative z-10">
        {/* Left Column: Narrative Headline */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          {/* Eyebrow */}
          <div className="contact-hero-reveal flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              CONTACT / DIRECT CONVERSATION
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              LET’S BUILD
            </span>
          </div>

          {/* Heading */}
          <h1
            id="contact-hero-title"
            className="contact-hero-reveal text-[2.75rem] sm:text-5xl lg:text-[3.65rem] xl:text-[4.25rem] font-display font-light text-slate-900 leading-[1.02] sm:leading-[0.98] tracking-[-0.035em]"
          >
            Let’s build something <br className="hidden sm:inline" />
            that works.
          </h1>

          {/* Supporting Text */}
          <p className="contact-hero-reveal text-base sm:text-[1.125rem] text-slate-600 font-sans leading-relaxed max-w-xl">
            Tell us what you’re trying to build, improve or solve. We’ll help you find the right digital approach with clear architecture, realistic scopes, and transparent milestones.
          </p>

          {/* Direct Verified Inquiries Strip */}
          <div className="contact-hero-reveal pt-1">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 max-w-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  DIRECT INQUIRY CHANNEL
                </span>
                <span className="text-[10px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {VERIFIED_CONTACT_DETAILS.responseWindow}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${VERIFIED_CONTACT_DETAILS.email}`}
                  className="text-sm font-mono font-semibold text-sky-700 hover:text-sky-900 transition-colors"
                >
                  {VERIFIED_CONTACT_DETAILS.email}
                </a>
                <span className="text-xs text-slate-400 font-sans">
                  {VERIFIED_CONTACT_DETAILS.businessHours}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="contact-hero-reveal pt-2 flex items-center gap-4 sm:gap-6 flex-wrap">
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white hover:bg-sky-600 font-sans font-medium text-sm transition-all duration-200 shadow-md shadow-slate-900/10 group"
            >
              <span>Start a Conversation</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-sky-600 font-sans font-medium text-sm transition-colors group"
            >
              <span>Explore Our Delivered Work</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Connection Field Visual */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <ContactConnectionField />
        </div>
      </div>
    </section>
  );
}
