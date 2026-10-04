"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const STORY_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Listen deeply to the operational bottlenecks, customer touchpoints, and business constraints.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Architect the user experience, database relations, system integrations, and clear wireframes.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Develop robust, high-speed custom software, ERP modules, and modern web applications.",
  },
  {
    num: "04",
    title: "Connect",
    desc: "Unify data silos, payment gateways, automated notifications, and third-party APIs.",
  },
  {
    num: "05",
    title: "Evolve",
    desc: "Deploy seamlessly, support teams through adoption, and continuously scale capabilities.",
  },
];

export default function ProjectStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-header-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".story-step-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="project-story-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5">
          <div className="story-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              THE STORY
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              DELIVERY PHILOSOPHY
            </span>
          </div>

          <h2
            id="project-story-title"
            className="story-header-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Every project starts with <br className="hidden sm:inline" />
            a business problem.
          </h2>

          <p className="story-header-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We work backward from the problem to create the right digital system—aligning technology directly around the people, workflows, and goals behind it.
          </p>
        </div>

        {/* 5-Step Editorial Story Process Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STORY_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="story-step-card p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-2xl font-mono font-light text-slate-300 group-hover:text-sky-600 transition-colors">
                  {step.num}
                </span>
                <h3 className="text-lg font-display font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                STEP {idx + 1} OF 5
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
