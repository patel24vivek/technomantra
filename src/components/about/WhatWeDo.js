"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const SERVICES_AREAS = [
  {
    number: "01",
    title: "DIGITAL PRODUCTS",
    summary:
      "Websites, web applications and ecommerce experiences built around your brand, users and business goals.",
    items: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Web Applications", href: "/services/website-development" },
      { name: "Ecommerce Solutions", href: "/solutions/ecommerce" },
    ],
    flow: ["DESKTOP", "TABLET", "MOBILE"],
  },
  {
    number: "02",
    title: "BUSINESS SYSTEMS",
    summary:
      "Connected software that helps businesses manage operations, customers, data and everyday workflows.",
    items: [
      { name: "Custom ERP", href: "/services/erp-development" },
      { name: "CRM Development", href: "/services/crm-development" },
      { name: "Accounting Software", href: "/services/accounting-software" },
      { name: "Business Automation", href: "/solutions/business-automation" },
    ],
    flow: ["CRM", "ERP", "DATA", "AUTOMATION"],
  },
  {
    number: "03",
    title: "GROWTH & CREATIVE",
    summary:
      "Digital marketing and creative services that help businesses communicate clearly and reach the right audience.",
    items: [
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "Packaging Design", href: "/services/packaging-design" },
      { name: "Corporate Video", href: "/services/corporate-video" },
    ],
    flow: ["CONTENT", "AUDIENCE", "CAMPAIGN", "GROWTH"],
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".wedo-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      aria-labelledby="what-we-do-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="wedo-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              WHAT WE DO
            </span>
          </div>

          <h2
            id="what-we-do-title"
            className="wedo-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.15]"
          >
            Three areas. <br />
            One connected approach.
          </h2>

          <p className="wedo-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We bring technology, business systems and digital growth together to create solutions that work
            across the different parts of a modern business.
          </p>
        </div>

        {/* Editorial Numbered Rows */}
        <div className="space-y-4">
          {SERVICES_AREAS.map((area, idx) => {
            const isActive = hoveredIdx === idx;

            return (
              <div
                key={area.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`wedo-reveal group p-8 sm:p-10 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-2xl"
                    : "bg-[#FAFAFA] border-slate-200/80 text-slate-900 hover:border-slate-300"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Number & Area Title */}
                  <div className="lg:col-span-4 space-y-2">
                    <span
                      className={`font-mono text-sm font-bold tracking-wider ${
                        isActive ? "text-sky-400" : "text-sky-600"
                      }`}
                    >
                      AREA {area.number}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl font-display font-medium leading-snug ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {area.title}
                    </h3>
                  </div>

                  {/* Center: Summary & Tags */}
                  <div className="lg:col-span-5 space-y-6">
                    <p
                      className={`text-base font-sans leading-relaxed ${
                        isActive ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {area.summary}
                    </p>

                    {/* Related Services Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {area.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                            isActive
                              ? "bg-slate-800 text-sky-300 hover:bg-sky-500 hover:text-white"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600"
                          }`}
                        >
                          {item.name} →
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right: Abstract Connected Flow */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full pt-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3">
                      WORKFLOW ECOSYSTEM
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {area.flow.map((step, i) => (
                        <div key={step} className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-mono px-2 py-1 rounded ${
                              isActive
                                ? "bg-slate-800 text-slate-200 border border-slate-700"
                                : "bg-slate-200/60 text-slate-700"
                            }`}
                          >
                            {step}
                          </span>
                          {i < area.flow.length - 1 && (
                            <span className={isActive ? "text-sky-400 text-xs" : "text-slate-400 text-xs"}>
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
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
