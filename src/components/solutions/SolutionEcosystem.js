"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

const ECOSYSTEM_STAGES = [
  { id: "core", label: "BUSINESS CORE", desc: "Central operational hub", x: 50, y: 50 },
  { id: "customers", label: "CUSTOMERS", desc: "Acquisition & Touchpoints", x: 50, y: 15 },
  { id: "crm", label: "CRM", desc: "Relationships & Pipelines", x: 18, y: 38 },
  { id: "erp", label: "ERP", desc: "Operations & Inventory", x: 82, y: 38 },
  { id: "automation", label: "AUTOMATION", desc: "Intelligent Workflows", x: 50, y: 70 },
  { id: "ecommerce", label: "ECOMMERCE", desc: "Digital Storefronts", x: 20, y: 85 },
  { id: "marketing", label: "MARKETING", desc: "Lifecycle & Funnels", x: 80, y: 85 },
  { id: "data", label: "DATA & ANALYTICS", desc: "Single Source of Truth", x: 50, y: 92 },
];

export default function SolutionEcosystem() {
  const sectionRef = useRef(null);
  const [activeStage, setActiveStage] = useState(7); // default all on static/mobile

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Staggered header reveal
      gsap.fromTo(
        ".eco-reveal",
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

      // 2. Progressive scroll-triggered line draw and node reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".eco-canvas-container",
          start: "top 65%",
          end: "bottom 85%",
          scrub: 1,
        },
      });

      tl.fromTo(".eco-path-1", { strokeDashoffset: 300, strokeDasharray: 300 }, { strokeDashoffset: 0, duration: 1 })
        .fromTo(".eco-node-crm", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.5")
        .fromTo(".eco-path-2", { strokeDashoffset: 300, strokeDasharray: 300 }, { strokeDashoffset: 0, duration: 1 })
        .fromTo(".eco-node-erp", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.5")
        .fromTo(".eco-path-3", { strokeDashoffset: 300, strokeDasharray: 300 }, { strokeDashoffset: 0, duration: 1 })
        .fromTo(".eco-node-auto", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.5")
        .fromTo(".eco-path-4", { strokeDashoffset: 300, strokeDasharray: 300 }, { strokeDashoffset: 0, duration: 1 })
        .fromTo(".eco-node-ecom", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.5")
        .fromTo(".eco-path-5", { strokeDashoffset: 300, strokeDasharray: 300 }, { strokeDashoffset: 0, duration: 1 })
        .fromTo(".eco-node-mkt", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.5")
        .fromTo(".eco-path-6", { strokeDashoffset: 300, strokeDasharray: 300 }, { strokeDashoffset: 0, duration: 1 })
        .fromTo(".eco-node-data", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="solution-ecosystem-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(14,165,233,0.05),transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20 relative z-10">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="eco-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>OUR SOLUTIONS ARCHITECTURE</span>
          </div>

          <h2
            id="solution-ecosystem-title"
            className="eco-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Connect the parts <br />
            that keep your business moving.
          </h2>

          <p className="eco-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Our solutions bring software, workflows, customer data and digital experiences together so
            different parts of the business can work as one system.
          </p>
        </div>

        {/* Central Visual System Diagram Canvas */}
        <div className="eco-canvas-container max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 relative">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center select-none">
            {/* SVG Dynamic Connection Grid */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 600 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric subtle guide arcs */}
              <circle cx="300" cy="225" r="120" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="300" cy="225" r="190" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 8" />

              {/* Path 1: Customers -> Business Core */}
              <path
                className="eco-path-1"
                d="M 300 70 L 300 185"
                stroke="#0ea5e9"
                strokeWidth="1.8"
                strokeDasharray="4 4"
              />

              {/* Path 2: CRM <-> Business Core <-> ERP */}
              <path className="eco-path-2" d="M 130 180 L 230 225" stroke="#0ea5e9" strokeWidth="1.8" />
              <path className="eco-path-2" d="M 470 180 L 370 225" stroke="#0ea5e9" strokeWidth="1.8" />

              {/* Path 3: Business Core -> Automation */}
              <path className="eco-path-3" d="M 300 265 L 300 320" stroke="#0ea5e9" strokeWidth="1.8" />

              {/* Path 4: Automation -> Ecommerce & Marketing */}
              <path className="eco-path-4" d="M 255 335 L 140 380" stroke="#94a3b8" strokeWidth="1.5" />
              <path className="eco-path-5" d="M 345 335 L 460 380" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Path 6: Ecommerce / Marketing -> Data */}
              <path
                className="eco-path-6"
                d="M 140 405 L 245 425 M 460 405 L 355 425"
                stroke="#cbd5e1"
                strokeWidth="1.2"
                strokeDasharray="2 4"
              />
            </svg>

            {/* Central Node: BUSINESS CORE */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="px-5 py-3 rounded-2xl bg-slate-900 text-white border border-slate-700 shadow-xl shadow-slate-900/20 text-center scale-105">
                <span className="block text-[9px] font-mono tracking-[0.2em] text-sky-400 font-semibold uppercase">
                  TECHNOMANTRA
                </span>
                <span className="text-sm font-display font-bold tracking-tight">BUSINESS CORE</span>
              </div>
            </div>

            {/* Top Node: CUSTOMERS */}
            <div className="absolute left-1/2 top-[12%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 shadow-sm text-xs font-mono font-bold text-slate-800">
                CUSTOMERS & AUDIENCE
              </div>
            </div>

            {/* Left Node: CRM */}
            <div className="eco-node-crm absolute left-[18%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-3.5 py-2 rounded-xl bg-sky-50 border border-sky-300 shadow-sm text-xs font-mono font-bold text-sky-900">
                CRM SOLUTIONS
              </div>
            </div>

            {/* Right Node: ERP */}
            <div className="eco-node-erp absolute right-[18%] top-[40%] transform translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-3.5 py-2 rounded-xl bg-sky-50 border border-sky-300 shadow-sm text-xs font-mono font-bold text-sky-900">
                ERP SOLUTIONS
              </div>
            </div>

            {/* Bottom-Center Node: AUTOMATION */}
            <div className="eco-node-auto absolute left-1/2 top-[74%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-300 shadow-sm text-xs font-mono font-bold text-slate-800">
                BUSINESS AUTOMATION
              </div>
            </div>

            {/* Bottom-Left Node: ECOMMERCE */}
            <div className="eco-node-ecom absolute left-[18%] bottom-[8%] transform -translate-x-1/2 translate-y-1/2 z-10">
              <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono font-medium text-slate-700">
                ECOMMERCE
              </div>
            </div>

            {/* Bottom-Right Node: MARKETING */}
            <div className="eco-node-mkt absolute right-[18%] bottom-[8%] transform translate-x-1/2 translate-y-1/2 z-10">
              <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono font-medium text-slate-700">
                MARKETING AUTO
              </div>
            </div>

            {/* Bottom-most: DATA & UNIFIED TRUTH */}
            <div className="eco-node-data absolute left-1/2 bottom-[3%] transform -translate-x-1/2 translate-y-1/2 z-10">
              <div className="px-3 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-500">
                SINGLE SOURCE OF TRUTH (DATA)
              </div>
            </div>
          </div>

          {/* Bottom Banner Status Tag */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>ARCHITECTURE: UNIFIED DIGITAL SYSTEM</span>
            <span className="font-semibold text-sky-600">ONE CONNECTED BUSINESS SYSTEM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
