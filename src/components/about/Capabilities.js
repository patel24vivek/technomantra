"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const CAPABILITY_GROUPS = [
  {
    category: "FRONTEND",
    description: "Responsive, high-speed user interfaces & web applications.",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "BACKEND",
    description: "Secure server architecture, APIs & data infrastructure.",
    items: ["Node.js", "Express", "REST & GraphQL APIs", "Database Systems"],
  },
  {
    category: "BUSINESS TECHNOLOGY",
    description: "Connected enterprise software & workflow platforms.",
    items: ["Custom ERP", "CRM Systems", "Accounting Software", "Business Automation", "Ecommerce"],
  },
  {
    category: "DIGITAL GROWTH",
    description: "Data-driven marketing, search optimization & analytics.",
    items: ["SEO", "Digital Marketing", "Email Marketing", "Analytics & Insights"],
  },
];

export default function Capabilities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal text
      gsap.fromTo(
        ".cap-reveal",
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

      // Stagger column items reveal
      gsap.fromTo(
        ".cap-column",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      aria-labelledby="capabilities-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="cap-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              CAPABILITIES
            </span>
          </div>

          <h2
            id="capabilities-title"
            className="cap-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            The technology <br />
            behind the work.
          </h2>

          <p className="cap-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We combine development, business technology, automation and digital growth to create connected
            solutions for modern businesses.
          </p>
        </div>

        {/* 4 Editorial Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-4">
          {CAPABILITY_GROUPS.map((group, idx) => (
            <div
              key={group.category}
              className="cap-column group p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-sky-600">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">TECHNOLOGY</span>
                </div>

                <h3 className="text-lg font-display font-semibold text-slate-900 tracking-wide">
                  {group.category}
                </h3>

                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  {group.description}
                </p>

                {/* Tech Pills */}
                <div className="pt-4 space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-mono text-slate-700 font-medium group-hover:border-sky-500/30 group-hover:text-slate-900 transition-colors flex items-center justify-between"
                    >
                      <span>{item}</span>
                      <span className="text-sky-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
