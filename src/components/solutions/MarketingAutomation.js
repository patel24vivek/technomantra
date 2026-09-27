"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function MarketingAutomation() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image reveal & parallax
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { clipPath: "inset(8% 0% 8% 0% round 1.5rem)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );

        gsap.to(imgRef.current.querySelector("img"), {
          y: 25,
          scale: 1.03,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Text reveal
      gsap.fromTo(
        ".mkt-reveal",
        { opacity: 0, y: 25 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="marketing-automation"
      ref={sectionRef}
      aria-labelledby="marketing-automation-title"
      className="relative w-full bg-white text-[#0F172A] py-20 lg:py-32 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with Architecture Overlay */}
        <div className="lg:col-span-6 relative order-2 lg:order-1">
          <div
            ref={imgRef}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-200/50 bg-slate-100"
          >
            <Image
              src="/images/solutions/marketing-automation.jpg"
              alt="TechnoMantra Marketing Automation Solutions"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-center transform scale-100 will-change-transform"
            />
          </div>
        </div>

        {/* Right Column: Editorial Text & Capabilities */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2">
          <div className="mkt-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-600 uppercase font-semibold">
              05 / MARKETING AUTOMATION
            </span>
          </div>

          <h2
            id="marketing-automation-title"
            className="mkt-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Connect campaigns <br />
            with customer journeys.
          </h2>

          <p className="mkt-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Connect acquisition campaigns, lifecycle email sequences and customer engagement data so revenue
            growth and audience retention become predictable and scalable.
          </p>

          {/* Journey Flow */}
          <div className="mkt-reveal pt-2">
            <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-2">
              CUSTOMER JOURNEY FLOW
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs font-mono text-slate-700">
              {["AUDIENCE", "CAMPAIGN", "MESSAGE", "ENGAGEMENT", "JOURNEY"].map((step, idx) => (
                <div key={step} className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 font-semibold shadow-2xs">
                    {step}
                  </span>
                  {idx < 4 && <span className="text-sky-500">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mkt-reveal pt-2 border-t border-slate-100">
            <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-3">
              KEY CAPABILITIES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "Automated Multi-Touch Campaigns",
                "Lifecycle & Drip Email Funnels",
                "Behavioral Trigger Workflows",
                "Dynamic Audience Segments",
                "Conversion Funnel Tracking",
                "Full-Funnel Attribution Reports",
              ].map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-xs sm:text-sm font-sans text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="mkt-reveal pt-4">
            <Link
              href="/services/email-marketing"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-slate-900 hover:text-sky-600 transition-colors group"
            >
              <span>Explore Marketing Systems</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
