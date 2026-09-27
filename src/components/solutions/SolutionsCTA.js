"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function SolutionsCTA() {
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
      id="solutions-cta"
      ref={sectionRef}
      aria-labelledby="solutions-cta-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-200/50 bg-slate-900 select-none">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/solutions/solutions-cta.jpg"
              alt="TechnoMantra Innovation Pavilion"
              fill
              sizes="(max-width: 1440px) 100vw, 1200px"
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-6 sm:space-y-8 text-white">
            <div className="cta-reveal flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase font-semibold">
                LET&apos;S SOLVE SOMETHING
              </span>
            </div>

            <h2
              id="solutions-cta-title"
              className="cta-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white leading-[1.08] tracking-tight"
            >
              Have a business problem <br />
              worth solving?
            </h2>

            <p className="cta-reveal text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Tell us what is slowing your business down, what you want to improve or what you want to build.
              We&apos;ll help explore the right digital solution.
            </p>

            {/* Action Buttons */}
            <div className="cta-reveal pt-2 flex items-center gap-4 sm:gap-6 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-sans font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 group"
              >
                <span>Request a Proposal</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-medium text-sm backdrop-blur-sm transition-colors"
              >
                <span>Talk to Us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
