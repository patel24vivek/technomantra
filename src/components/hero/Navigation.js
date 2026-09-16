"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

const SERVICES_DATA = [
  {
    category: "Software & Web",
    items: [
      { label: "Website Development", href: "#website-development", desc: "Custom, high-speed & responsive web apps" },
      { label: "Custom ERP Development", href: "#erp-development", desc: "Tailored enterprise resource management" },
      { label: "CRM Development", href: "#crm-development", desc: "Custom customer relationship systems" },
      { label: "Accounting Software", href: "#accounting-software", desc: "Automated financial & ledger solutions" },
      { label: "Dedicated Developers", href: "#dedicated-developers", desc: "On-demand expert engineering talent" },
    ],
  },
  {
    category: "Digital Growth",
    items: [
      { label: "Digital Marketing", href: "#digital-marketing", desc: "Data-driven multi-channel growth" },
      { label: "SEO Services", href: "#seo-services", desc: "Top rank organic search optimization" },
      { label: "Email Marketing", href: "#email-marketing", desc: "High-converting lifecycle campaigns" },
    ],
  },
  {
    category: "Design & Media",
    items: [
      { label: "Graphic Design", href: "#graphic-design", desc: "Premium visual branding & assets" },
      { label: "Packaging Design", href: "#packaging-design", desc: "Standout product box & print design" },
      { label: "Corporate Video", href: "#corporate-video", desc: "Cinematic commercial & brand films" },
    ],
  },
];

const SOLUTIONS_DATA = [
  { label: "CRM Solutions", href: "#crm-solutions", desc: "Streamline sales, leads & customer lifecycles" },
  { label: "ERP Solutions", href: "#erp-solutions", desc: "Unify operations, inventory & financials" },
  { label: "Business Automation", href: "#business-automation", desc: "Eliminate repetitive tasks with AI workflows" },
  { label: "Ecommerce Solutions", href: "#ecommerce-solutions", desc: "High-scale online store platforms" },
  { label: "Marketing Automation", href: "#marketing-automation", desc: "Automated multi-touch nurture funnels" },
];

const INDUSTRIES_DATA = [
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Trading", href: "#trading" },
  { label: "Ecommerce", href: "#ecommerce" },
  { label: "Healthcare", href: "#healthcare" },
  { label: "Finance", href: "#finance" },
  { label: "Education", href: "#education" },
  { label: "Real Estate", href: "#real-estate" },
  { label: "Exporters & Importers", href: "#exporters-importers" },
  { label: "Hospitality", href: "#hospitality" },
  { label: "Non-profit Organisations", href: "#non-profit" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const toggleMobileAccordion = (key) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="relative z-50 w-full py-5 sm:py-6 border-b border-[var(--border-subtle)]/40 pointer-events-none">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between pointer-events-auto">
        {/* Left: Company Logo */}
        <Link href="/" className="flex items-center gap-3 group text-decoration-none shrink-0">
          <div className="relative flex items-center">
            <Image
              src="/Techno-Mantra-logo.png"
              alt="Techno Mantra Logo"
              width={300}
              height={233}
              className="h-11 sm:h-13 lg:h-15 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]/80 backdrop-blur-xl shadow-2xl">
          {/* Home */}
          <Link
            href="/"
            className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-white bg-white/10 hover:bg-white/15 transition-all duration-300 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors duration-200 flex items-center gap-1">
              About
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <Link
                  href="#about"
                  className="block px-3 py-2 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-sky-500/10 transition-colors"
                >
                  <div className="font-semibold text-white">About TechnoMantra</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Empowering digital evolution</div>
                </Link>
              </div>
            )}
          </div>

          {/* Services Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors duration-200 flex items-center gap-1">
              Services
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-full -left-20 mt-2 w-[680px] rounded-2xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="grid grid-cols-3 gap-6">
                  {SERVICES_DATA.map((cat) => (
                    <div key={cat.category} className="space-y-3">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 border-b border-sky-500/20 pb-1.5">
                        {cat.category}
                      </div>
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="group/item block p-2 rounded-lg hover:bg-sky-500/10 transition-colors"
                          >
                            <div className="text-xs font-medium text-slate-200 group-hover/item:text-sky-300 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[10px] text-slate-400 group-hover/item:text-slate-300 transition-colors line-clamp-1">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors duration-200 flex items-center gap-1">
              Solutions
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "solutions" && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="space-y-1">
                  {SOLUTIONS_DATA.map((sol) => (
                    <Link
                      key={sol.label}
                      href={sol.href}
                      className="group/sol block p-2.5 rounded-xl hover:bg-sky-500/10 transition-colors"
                    >
                      <div className="text-xs font-medium text-slate-200 group-hover/sol:text-sky-300 transition-colors">
                        {sol.label}
                      </div>
                      <div className="text-[10px] text-slate-400 group-hover/sol:text-slate-300 transition-colors">
                        {sol.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors duration-200 flex items-center gap-1">
              Industries
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "industries" && (
              <div className="absolute top-full -left-28 mt-2 w-96 rounded-2xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 border-b border-sky-500/20 pb-2 mb-2">
                  Tailored Industry Expertise
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {INDUSTRIES_DATA.map((ind) => (
                    <Link
                      key={ind.label}
                      href={ind.href}
                      className="px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-sky-500/10 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Projects / Case Studies */}
          <Link
            href="#projects"
            className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            Projects
          </Link>

          {/* Insights / Blog */}
          <Link
            href="#insights"
            className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors duration-200 whitespace-nowrap"
          >
            Insights
          </Link>

          {/* Contact */}
          <Link
            href="#contact"
            className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Request a Proposal CTA */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <Button href="#proposal" variant="primary" className="text-xs px-5 py-2.5 whitespace-nowrap">
            Request a Proposal <span className="text-xs ml-1">→</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[#F5F5F5] focus:outline-none bg-slate-900/60 backdrop-blur-md"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#070B14]/98 backdrop-blur-2xl border-b border-[var(--border-subtle)] py-6 px-6 max-h-[80vh] overflow-y-auto z-50 pointer-events-auto space-y-4 shadow-2xl">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider text-white py-2 border-b border-slate-800/60"
          >
            Home
          </Link>

          {/* About Accordion */}
          <div className="border-b border-slate-800/60 py-2">
            <button
              onClick={() => toggleMobileAccordion("about")}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-200"
            >
              <span>About</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded.about ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded.about && (
              <div className="mt-2 pl-4 space-y-2">
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-sky-400 py-1"
                >
                  About TechnoMantra
                </Link>
              </div>
            )}
          </div>

          {/* Services Accordion */}
          <div className="border-b border-slate-800/60 py-2">
            <button
              onClick={() => toggleMobileAccordion("services")}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-200"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded.services ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded.services && (
              <div className="mt-2 pl-4 space-y-3">
                {SERVICES_DATA.map((cat) => (
                  <div key={cat.category} className="space-y-1">
                    <div className="text-[10px] font-bold uppercase text-sky-400 tracking-wider">
                      {cat.category}
                    </div>
                    {cat.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-slate-300 hover:text-white py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Accordion */}
          <div className="border-b border-slate-800/60 py-2">
            <button
              onClick={() => toggleMobileAccordion("solutions")}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-200"
            >
              <span>Solutions</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded.solutions ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded.solutions && (
              <div className="mt-2 pl-4 space-y-2">
                {SOLUTIONS_DATA.map((sol) => (
                  <Link
                    key={sol.label}
                    href={sol.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-300 hover:text-white py-1"
                  >
                    {sol.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Accordion */}
          <div className="border-b border-slate-800/60 py-2">
            <button
              onClick={() => toggleMobileAccordion("industries")}
              className="w-full flex items-center justify-between text-sm font-semibold text-slate-200"
            >
              <span>Industries</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded.industries ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpanded.industries && (
              <div className="mt-2 pl-4 grid grid-cols-2 gap-2">
                {INDUSTRIES_DATA.map((ind) => (
                  <Link
                    key={ind.label}
                    href={ind.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-300 hover:text-white py-1"
                  >
                    {ind.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Projects */}
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider text-slate-200 py-2 border-b border-slate-800/60"
          >
            Projects / Case Studies
          </Link>

          {/* Insights */}
          <Link
            href="#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider text-slate-200 py-2 border-b border-slate-800/60"
          >
            Insights / Blog
          </Link>

          {/* Contact */}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider text-slate-200 py-2 border-b border-slate-800/60"
          >
            Contact
          </Link>

          {/* CTA */}
          <div className="pt-2">
            <Button
              href="#proposal"
              variant="primary"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-xs justify-center py-3"
            >
              Request a Proposal <span className="text-xs ml-1">→</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
