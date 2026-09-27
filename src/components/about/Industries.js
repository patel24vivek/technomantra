"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const INDUSTRIES_LIST = [
  {
    number: "01",
    name: "Manufacturing",
    href: "/industries/manufacturing",
    desc: "Connected systems for production, inventory, operations and business visibility.",
  },
  {
    number: "02",
    name: "Trading",
    href: "/industries/trading",
    desc: "Streamlined inventory, order management, B2B procurement and supply chain tracking.",
  },
  {
    number: "03",
    name: "Ecommerce",
    href: "/industries/ecommerce",
    desc: "High-scale storefronts, automated order processing and multi-channel inventory.",
  },
  {
    number: "04",
    name: "Healthcare",
    href: "/industries/healthcare",
    desc: "Patient management portals, HIPAA-conscious data workflows and scheduling.",
  },
  {
    number: "05",
    name: "Finance",
    href: "/industries/finance",
    desc: "Secure financial dashboards, ledger systems and automated billing solutions.",
  },
  {
    number: "06",
    name: "Education",
    href: "/industries/education",
    desc: "Digital learning platforms, student management systems and portal software.",
  },
  {
    number: "07",
    name: "Real Estate",
    href: "/industries/real-estate",
    desc: "Property listing management, lead capture CRM and client communication.",
  },
  {
    number: "08",
    name: "Exporters & Importers",
    href: "/industries/exporters-importers",
    desc: "Multi-currency invoicing, compliance documentation and shipment tracking.",
  },
  {
    number: "09",
    name: "Hospitality",
    href: "/industries/hospitality",
    desc: "Reservation systems, guest management tools and customer loyalty software.",
  },
  {
    number: "10",
    name: "Non-profit Organisations",
    href: "/industries/non-profit",
    desc: "Donor management CRM, contribution tracking and public awareness portals.",
  },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal header block
      gsap.fromTo(
        ".ind-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // ScrollTrigger per industry item to update preview as user scrolls through the list
      const items = gsap.utils.toArray(".industry-item");
      items.forEach((item, idx) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setSelectedIdx(idx),
          onEnterBack: () => setSelectedIdx(idx),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="industries-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <div className="ind-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              INDUSTRIES
            </span>
          </div>

          <h2
            id="industries-title"
            className="ind-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Different industries. <br />
            Different challenges.
          </h2>

          <p className="ind-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Every business has different workflows, customers and challenges. We build digital solutions
            around the realities of the industry behind them.
          </p>
        </div>

        {/* Editorial Interactive Layout: Desktop 2 Columns / Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: 10 Industries Scrolling List */}
          <div className="lg:col-span-7 space-y-2.5">
            {INDUSTRIES_LIST.map((ind, idx) => {
              const isSelected = selectedIdx === idx;

              return (
                <div
                  key={ind.number}
                  onClick={() => setSelectedIdx(idx)}
                  onMouseEnter={() => setSelectedIdx(idx)}
                  className={`industry-item ind-reveal group cursor-pointer p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.01]"
                      : "bg-[#FAFAFA] border-slate-200/80 text-slate-800 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? "text-sky-400" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {ind.number}
                    </span>
                    <span
                      className={`text-base sm:text-lg font-display font-medium ${
                        isSelected ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {ind.name}
                    </span>
                  </div>

                  <span className={isSelected ? "text-sky-400 text-sm font-bold" : "text-slate-400 text-sm"}>
                    {isSelected ? "→" : "↘"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: STICKY Industry Detail Preview Display */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start hidden lg:block">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F6] border border-slate-200 shadow-xl space-y-6 transition-all duration-300">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-sky-600 tracking-wider">
                  INDUSTRY FOCUS — {INDUSTRIES_LIST[selectedIdx].number}
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900">
                {INDUSTRIES_LIST[selectedIdx].name}
              </h3>

              <p className="text-slate-600 text-base font-sans leading-relaxed min-h-[72px]">
                {INDUSTRIES_LIST[selectedIdx].desc}
              </p>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href={INDUSTRIES_LIST[selectedIdx].href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-sky-600 transition-colors shadow"
                >
                  Explore {INDUSTRIES_LIST[selectedIdx].name} Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
