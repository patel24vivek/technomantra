"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const INDEX_ITEMS = [
  {
    num: "01",
    title: "Manufacturing & Industrial ERP",
    category: "Precision Engineering & BOM Architecture",
    image: "/images/industries/riopak-engineers.jpg",
    targetId: "featured-project-stage",
  },
  {
    num: "02",
    title: "Trading & Enterprise Distribution",
    category: "Commercial CRM & Multi-Location Stock Hub",
    image: "/images/industries/keyan-corp.jpg",
    targetId: "project-keyan-corp",
  },
  {
    num: "03",
    title: "Omnichannel Headless Ecommerce",
    category: "Sub-Second Discovery & Checkout Systems",
    image: "/images/projects/project_ecommerce.jpg",
    targetId: "project-omnichannel-retail",
  },
  {
    num: "04",
    title: "Cross-Border Logistics Automation",
    category: "Workflow Engines & API Integrations",
    image: "/images/projects/project_automation.jpg",
    targetId: "project-supply-chain-automation",
  },
  {
    num: "05",
    title: "Connected Business Capabilities",
    category: "11-Service Catalogue & Custom Software",
    image: "/images/industries/manufacturing.jpg",
    targetId: "project-capabilities",
  },
];

export default function ProjectIndex() {
  const sectionRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".index-header-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".index-item-row",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      aria-labelledby="project-index-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 flex-wrap gap-4">
          <div className="index-header-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              PROJECT INDEX
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              EDITORIAL DIRECTORY
            </span>
          </div>

          <span className="text-xs font-mono text-slate-400">
            5 CASE STUDY DOMAINS
          </span>
        </div>

        {/* Index Rows */}
        <div className="space-y-1 relative" role="list" aria-label="Project Index Directory">
          {INDEX_ITEMS.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <Link
                key={item.num}
                href={`#${item.targetId}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`index-item-row group block p-4 sm:p-6 rounded-2xl border transition-all duration-300 relative z-10 ${
                  isHovered
                    ? "bg-white border-slate-900 shadow-lg scale-[1.008]"
                    : "bg-white/60 hover:bg-white border-slate-200/80"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Number */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span
                      className={`text-2xl sm:text-3xl font-mono font-light transition-colors ${
                        isHovered ? "text-sky-600 font-normal" : "text-slate-300 group-hover:text-slate-700"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Title */}
                  <div className="md:col-span-5">
                    <h3 className="text-lg sm:text-xl font-display font-medium text-slate-900 group-hover:text-sky-900 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Category */}
                  <div className="md:col-span-4">
                    <span className="text-xs sm:text-sm font-sans text-slate-500 group-hover:text-slate-700 transition-colors">
                      {item.category}
                    </span>
                  </div>

                  {/* Action arrow */}
                  <div className="md:col-span-1 text-right">
                    <span className="text-sm text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 inline-block transition-transform">
                      ↓
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
