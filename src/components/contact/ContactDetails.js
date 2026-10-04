"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { VERIFIED_CONTACT_DETAILS } from "@/data/contact";

export default function ContactDetails() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".details-card-reveal",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(VERIFIED_CONTACT_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact-details"
      ref={sectionRef}
      aria-labelledby="contact-details-title"
      className="relative w-full bg-[#FAF9F6] text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="details-card-reveal flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              DIRECT CHANNELS
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              VERIFIED CONTACT INFO
            </span>
          </div>

          <h2
            id="contact-details-title"
            className="details-card-reveal text-3xl sm:text-4xl lg:text-5xl font-display font-light text-slate-900 leading-[1.08] tracking-tight"
          >
            Direct communication. <br className="hidden sm:inline" />
            Zero friction.
          </h2>

          <p className="details-card-reveal text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Reach out through our verified business channels. Every inquiry is handled directly by senior leadership and technical architects.
          </p>
        </div>

        {/* 3 Editorial Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Official Business Email */}
          <div className="details-card-reveal p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-6 flex flex-col justify-between hover:border-sky-400 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                  PRIMARY INQUIRIES
                </span>
                <span className="text-[9px] font-mono font-bold bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full border border-sky-200">
                  {VERIFIED_CONTACT_DETAILS.responseWindow}
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold text-slate-900">
                Official Business Email
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Send project briefs, RFPs, technical specifications, or business inquiries.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="font-mono text-sm font-bold text-sky-700 select-all">
                {VERIFIED_CONTACT_DETAILS.email}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-emerald-700 font-semibold">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${VERIFIED_CONTACT_DETAILS.email}`}
                  className="py-2 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-mono transition-colors flex items-center justify-center"
                >
                  Mail →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Operating Hours & Availability */}
          <div className="details-card-reveal p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-6 flex flex-col justify-between hover:border-amber-400 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                  SCHEDULE & HOURS
                </span>
                <span className="text-[9px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  ACTIVE
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold text-slate-900">
                Operating Schedule
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Our core engineering and leadership teams are active across standard business hours for live video calls and sprint reviews.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <div className="text-xs font-mono font-bold text-slate-800">
                {VERIFIED_CONTACT_DETAILS.businessHours}
              </div>
              <p className="text-[11px] font-sans text-slate-500">
                Live consultations available worldwide via Google Meet & Zoom.
              </p>
            </div>
          </div>

          {/* Card 3: Studio Location & Global Reach */}
          <div className="details-card-reveal p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-6 flex flex-col justify-between hover:border-sky-400 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                  HEADQUARTERS
                </span>
                <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
                  GLOBAL CLIENTS
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold text-slate-900">
                Studio Location
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Operating from Gujarat, India, delivering enterprise platforms and digital products to clients across Asia, the Middle East, Europe, and North America.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <div className="text-xs font-mono font-bold text-slate-900">
                {VERIFIED_CONTACT_DETAILS.headquarters.city}, {VERIFIED_CONTACT_DETAILS.headquarters.state} ({VERIFIED_CONTACT_DETAILS.headquarters.country})
              </div>
              <p className="text-[11px] font-sans text-slate-500">
                {VERIFIED_CONTACT_DETAILS.headquarters.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
