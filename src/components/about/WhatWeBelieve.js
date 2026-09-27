"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const PRINCIPLES = [
  {
    number: "01",
    title: "Understand First",
    description:
      "We start by understanding the business, its users and the problem before choosing the technology.",
  },
  {
    number: "02",
    title: "Build With Purpose",
    description:
      "Every feature should have a reason to exist and contribute to the larger business goal.",
  },
  {
    number: "03",
    title: "Keep It Useful",
    description:
      "We focus on practical experiences that people can understand and use every day.",
  },
  {
    number: "04",
    title: "Build To Evolve",
    description:
      "Technology should be able to grow as the business changes.",
  },
];

export default function WhatWeBelieve() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal header text
      gsap.fromTo(
        ".believe-header-reveal",
        { opacity: 0, y: 25 },
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

      // ScrollTrigger per principle item to activate index as user scrolls down the right side
      const items = gsap.utils.toArray(".believe-item");
      items.forEach((item, idx) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="what-we-believe-title"
      className="relative w-full bg-[#F8FAFC] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: STICKY in respect to the right side */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 pt-2">
          <div className="believe-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              WHAT WE BELIEVE
            </span>
          </div>

          <h2
            id="what-we-believe-title"
            className="believe-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Good technology <br />
            should feel simple.
          </h2>

          <p className="believe-header-reveal text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-md">
            We believe technology should remove complexity, not add to it. Our decisions, our design and
            our development are guided by a simple set of principles that keep your business at the center.
          </p>

          {/* Interactive Step Indicator */}
          <div className="flex items-center gap-3 pt-6">
            {PRINCIPLES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  const items = document.querySelectorAll(".believe-item");
                  if (items[idx]) {
                    items[idx].scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
                aria-label={`Jump to principle ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-10 bg-sky-500" : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Scrolling Principles List */}
        <div className="lg:col-span-7 space-y-6">
          {PRINCIPLES.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.number}
                onClick={() => setActiveIndex(idx)}
                className={`believe-item group cursor-pointer p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-white border-sky-500/40 shadow-xl shadow-sky-500/5 -translate-y-1"
                    : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Number Accent */}
                  <span
                    className={`font-mono text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                      isActive ? "text-sky-600" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Content Block */}
                  <div className="flex-1 space-y-2">
                    <h3
                      className={`text-xl sm:text-2xl font-display font-medium transition-colors duration-300 ${
                        isActive ? "text-slate-900 font-semibold" : "text-slate-700 group-hover:text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Accent Separator Line */}
                    <div
                      className={`h-0.5 rounded-full transition-all duration-500 ${
                        isActive ? "w-16 bg-sky-500" : "w-0 bg-transparent"
                      }`}
                    />

                    <p
                      className={`text-sm sm:text-base font-sans leading-relaxed transition-all duration-300 ${
                        isActive
                          ? "text-slate-600 opacity-100 pt-2"
                          : "text-slate-500 opacity-80 pt-1"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
