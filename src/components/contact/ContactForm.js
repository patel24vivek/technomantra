"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ServiceSelector from "./ServiceSelector";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams?.get("service");
  const prefilledProject = searchParams?.get("project");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [],
    message: "",
    honeypot: "", // Hidden spam field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [serverMessage, setServerMessage] = useState("");
  const textareaRef = useRef(null);

  // Auto-fill from query params if present
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, prefilledService])),
        message: prev.message || `Inquiring about ${prefilledService} architecture.`,
      }));
    } else if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inquiring about a system similar to project: ${prefilledProject}.`,
      }));
    }
  }, [prefilledService, prefilledProject]);

  // Handle service selection toggle
  const handleToggleService = (serviceLabel) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceLabel);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceLabel)
          : [...prev.services, serviceLabel],
      };
    });
  };

  // Auto-expand textarea height as user types
  const handleMessageChange = (e) => {
    setFormData((prev) => ({ ...prev, message: e.target.value }));
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: null }));
    }
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.max(150, textareaRef.current.scrollHeight)}px`;
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  // Client-side validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project or inquiry.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Please provide a bit more detail (at least 5 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message || "Message received. Thanks for reaching out.");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          services: [],
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setServerMessage(data.error || "Something went wrong while sending your message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setServerMessage("Unable to reach the server. Please check your internet connection or email us directly at hello@technomantra.in.");
    }
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="relative w-full bg-white text-[#0F172A] py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Form Title & Context */}
        <div className="space-y-3 pb-6 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.25em] text-sky-700 uppercase font-semibold">
              PROJECT INQUIRY FORM
            </span>
            <span className="text-slate-300 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              CONFIDENTIAL & DIRECT
            </span>
          </div>

          <h2
            id="contact-form-heading"
            className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight"
          >
            Tell us about your project.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Fill out the form below and an engineer will review your requirements within 24 business hours.
          </p>
        </div>

        {/* Success State View */}
        {status === "success" ? (
          <div
            role="status"
            aria-live="polite"
            className="p-8 sm:p-12 rounded-3xl bg-emerald-50/80 border border-emerald-200 shadow-xl space-y-6 text-center animate-in zoom-in-95 duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-500/20">
              ✓
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-2xl font-display font-medium text-slate-900">
                Message received.
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                {serverMessage}
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-200/80 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-medium transition-colors"
              >
                Send Another Inquiry
              </button>

              <a
                href="mailto:hello@technomantra.in"
                className="text-xs font-mono text-emerald-800 hover:text-emerald-950 underline"
              >
                Or email directly: hello@technomantra.in
              </a>
            </div>
          </div>
        ) : (
          /* Main Interactive Form */
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Honeypot Spam Shield (Hidden from real users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Leave this field blank</label>
              <input
                id="website_hp"
                type="text"
                name="website_hp"
                tabIndex="-1"
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) => handleInputChange("honeypot", e.target.value)}
              />
            </div>

            {/* Error Banner if any */}
            {status === "error" && (
              <div
                role="alert"
                className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-800 flex items-start gap-3 animate-in fade-in"
              >
                <span className="text-rose-600 font-bold shrink-0 mt-0.5">⚠</span>
                <p>{serverMessage}</p>
              </div>
            )}

            {/* Input Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 flex items-center justify-between"
                >
                  <span>YOUR NAME *</span>
                  {errors.name && (
                    <span className="text-rose-600 normal-case font-sans font-normal text-[11px]">
                      {errors.name}
                    </span>
                  )}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-5 py-3.5 rounded-2xl bg-[#FAF9F6] border text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all shadow-xs ${
                    errors.name
                      ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      : "border-slate-200/90 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15"
                  }`}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 flex items-center justify-between"
                >
                  <span>WORK EMAIL *</span>
                  {errors.email && (
                    <span className="text-rose-600 normal-case font-sans font-normal text-[11px]">
                      {errors.email}
                    </span>
                  )}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="alex@company.com"
                  className={`w-full px-5 py-3.5 rounded-2xl bg-[#FAF9F6] border text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all shadow-xs ${
                    errors.email
                      ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                      : "border-slate-200/90 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15"
                  }`}
                />
              </div>
            </div>

            {/* Input Row 2: Company & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-company"
                  className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 flex items-center gap-2"
                >
                  <span>COMPANY / ORGANIZATION</span>
                  <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Acme Industrial Ltd."
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF9F6] border border-slate-200/90 text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-all shadow-xs"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 flex items-center gap-2"
                >
                  <span>PHONE / WHATSAPP</span>
                  <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91 (0) 98765 43210"
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF9F6] border border-slate-200/90 text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Service Selector Component */}
            <div className="pt-2">
              <ServiceSelector
                selectedServices={formData.services}
                onToggleService={handleToggleService}
              />
            </div>

            {/* Message Area */}
            <div className="space-y-2 pt-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 flex items-center justify-between"
              >
                <span>TELL US ABOUT YOUR PROJECT *</span>
                {errors.message && (
                  <span className="text-rose-600 normal-case font-sans font-normal text-[11px]">
                    {errors.message}
                  </span>
                )}
              </label>
              <textarea
                id="contact-message"
                ref={textareaRef}
                required
                rows={5}
                value={formData.message}
                onChange={handleMessageChange}
                placeholder="Tell us what you're trying to build, improve or solve. Include any timelines, specific challenges, or integrations needed..."
                className={`w-full px-5 py-4 rounded-3xl bg-[#FAF9F6] border text-sm font-sans text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all shadow-xs resize-none ${
                  errors.message
                    ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
                    : "border-slate-200/90 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15"
                }`}
              />
            </div>

            {/* Submit Button & Privacy Assurance */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400 text-center sm:text-left">
                🔒 Strictly confidential. No spam or unsolicited marketing.
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-slate-900 hover:bg-sky-600 text-white text-sm font-mono font-semibold transition-all duration-200 shadow-lg shadow-slate-900/10 disabled:opacity-50 cursor-pointer group"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <span className="transform group-hover:translate-x-1 transition-transform font-sans">
                      →
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
