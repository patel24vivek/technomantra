"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const CAPABILITIES = [
  {
    number: "01",
    title: "DIGITAL PRODUCTS",
    description:
      "Websites, web applications and ecommerce experiences built to be fast, intuitive and ready to grow.",
    items: ["Website Development", "Web Applications", "Ecommerce"],
  },
  {
    number: "02",
    title: "BUSINESS SYSTEMS",
    description:
      "Connected software that helps businesses manage operations, customers, data and everyday workflows.",
    items: ["ERP", "CRM", "Accounting Software", "Business Automation"],
  },
  {
    number: "03",
    title: "GROWTH & CREATIVE",
    description:
      "Digital marketing and creative services that help businesses communicate clearly and reach the right audience.",
    items: [
      "SEO",
      "Digital Marketing",
      "Email Marketing",
      "Graphic Design",
      "Packaging Design",
      "Corporate Video",
    ],
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Restrained scroll reveal animation
      gsap.fromTo(
        ".reveal-element",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      id="about"
      className="relative z-10 w-full min-h-screen bg-[#030712] text-[#F5F5F5] py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-t border-[var(--border-subtle)]/30 flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Header Section: Eyebrow, Main Statement & Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Eyebrow + Primary Heading */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            <div className="reveal-element flex items-center gap-3">
              <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
                01
              </span>
              <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
                WHAT WE DO
              </span>
            </div>

            <h2 className="reveal-element font-display text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light tracking-tight text-white leading-[1.08] max-w-3xl">
              We turn complex ideas into useful digital products.
            </h2>
          </div>

          {/* Right Column: Supporting Copy */}
          <div className="lg:col-span-5 xl:col-span-5 lg:pt-12">
            <p className="reveal-element text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans max-w-xl">
              TechnoMantra builds websites, business software, automation systems and digital
              experiences designed around how modern businesses actually work.
            </p>
          </div>
        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-[var(--border-subtle)]/40" />

        {/* Capability Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              className="reveal-element group/cap relative p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)]/40 bg-[var(--surface)]/30 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/30 hover:bg-[var(--surface)]/60 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)]/30 pb-4">
                  <span className="text-xs font-mono text-sky-400/80 font-medium">
                    {cap.number}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase group-hover/cap:text-sky-300 transition-colors">
                    CAPABILITY
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-white group-hover/cap:text-sky-200 transition-colors font-sans">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              {/* Items List */}
              <div className="pt-4 border-t border-[var(--border-subtle)]/20 space-y-2">
                {cap.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-300 group-hover/cap:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-400/70" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
