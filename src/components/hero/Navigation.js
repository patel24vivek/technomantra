"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

const SERVICES_DATA = [
  {
    category: "Software & Web",
    items: [
      { label: "Website Development", href: "/services/website-development", desc: "Custom, high-speed & responsive web apps" },
      { label: "Custom ERP Development", href: "/services/erp-development", desc: "Tailored enterprise resource management" },
      { label: "CRM Development", href: "/services/crm-development", desc: "Custom customer relationship systems" },
      { label: "Accounting Software", href: "/services/accounting-software", desc: "Automated financial & ledger solutions" },
      { label: "Dedicated Developers", href: "/services/dedicated-developers", desc: "On-demand expert engineering talent" },
    ],
  },
  {
    category: "Digital Growth",
    items: [
      { label: "Digital Marketing", href: "/services/digital-marketing", desc: "Data-driven multi-channel growth" },
      { label: "SEO Services", href: "/services/seo-services", desc: "Top rank organic search optimization" },
      { label: "Email Marketing", href: "/services/email-marketing", desc: "High-converting lifecycle campaigns" },
    ],
  },
  {
    category: "Design & Media",
    items: [
      { label: "Graphic Design", href: "/services/graphic-design", desc: "Premium visual branding & assets" },
      { label: "Packaging Design", href: "/services/packaging-design", desc: "Standout product box & print design" },
      { label: "Corporate Video", href: "/services/corporate-video", desc: "Cinematic commercial & brand films" },
    ],
  },
];

const SOLUTIONS_DATA = [
  { label: "CRM Solutions", href: "/solutions#crm-solutions", desc: "Streamline sales, leads & customer lifecycles" },
  { label: "ERP Solutions", href: "/solutions#erp-solutions", desc: "Unify operations, inventory & financials" },
  { label: "Business Automation", href: "/solutions#business-automation", desc: "Eliminate repetitive tasks with AI workflows" },
  { label: "Ecommerce Solutions", href: "/solutions#ecommerce-solutions", desc: "High-scale online store platforms" },
  { label: "Marketing Automation", href: "/solutions#marketing-automation", desc: "Automated multi-touch nurture funnels" },
];

const INDUSTRIES_DATA = [
  { label: "Manufacturing", href: "/industries#industry-manufacturing" },
  { label: "Trading", href: "/industries#industry-trading" },
  { label: "Ecommerce", href: "/industries#industry-ecommerce" },
  { label: "Healthcare", href: "/industries#industry-healthcare" },
  { label: "Finance", href: "/industries#industry-finance" },
  { label: "Education", href: "/industries#industry-education" },
  { label: "Real Estate", href: "/industries#industry-real-estate" },
  { label: "Exporters & Importers", href: "/industries#industry-export-import" },
  { label: "Hospitality", href: "/industries#industry-hospitality" },
  { label: "Non-profit Organisations", href: "/industries#industry-non-profit" },
];

const PROJECTS_DATA = [
  { label: "Riopak Engineers ERP", href: "/projects#featured-project-stage", desc: "Enterprise Manufacturing & BOM Platform" },
  { label: "Keyan Corporation", href: "/projects#project-keyan-corp", desc: "Trading CRM & Multi-Location Stock Hub" },
  { label: "Aura Luxe Retail", href: "/projects#project-omnichannel-retail", desc: "Headless Omnichannel Ecommerce" },
  { label: "Nexus Global Logistics", href: "/projects#project-supply-chain-automation", desc: "Automated Supply Chain Workflow" },
  { label: "Studio Project Archive", href: "/projects#project-archive", desc: "Chronological ledger of built systems" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname?.startsWith("/services");
  const isSolutions = pathname?.startsWith("/solutions");
  const isIndustries = pathname?.startsWith("/industries");
  const isProjects = pathname?.startsWith("/projects");
  const isInsights = pathname?.startsWith("/insights");
  const isContact = pathname === "/contact";

  const toggleMobileAccordion = (key) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.start();
      }
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
              isHome
                ? "text-white bg-white/10 shadow-sm"
                : "text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            {isHome && (
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
            )}
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
              isAbout
                ? "text-white bg-white/10 shadow-sm"
                : "text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            {isAbout && (
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
            )}
            About
          </Link>

          {/* Services Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/services"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1 ${
                isServices
                  ? "text-white bg-white/10 shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {isServices && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
              )}
              Services
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {activeDropdown === "services" && (
              <div className="absolute top-full -left-20 mt-2 w-[680px] rounded-2xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                    Our Core Capabilities
                  </span>
                  <Link
                    href="/services"
                    className="text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors font-medium flex items-center gap-1"
                  >
                    Explore Full 11-Service Catalogue →
                  </Link>
                </div>
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
            <Link
              href="/solutions"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1 ${
                isSolutions
                  ? "text-white bg-white/10 shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {isSolutions && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
              )}
              Solutions
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {activeDropdown === "solutions" && (
              <div className="absolute top-full -left-10 mt-2 w-80 rounded-2xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider">
                    Connected Solutions
                  </span>
                  <Link
                    href="/solutions"
                    className="text-[11px] font-mono text-sky-400 hover:text-sky-300 transition-colors font-medium flex items-center gap-1"
                  >
                    View All →
                  </Link>
                </div>
                <div className="space-y-1">
                  {SOLUTIONS_DATA.map((sol) => (
                    <Link
                      key={sol.label}
                      href={sol.href}
                      className="group/sol block p-2 rounded-xl hover:bg-sky-500/10 transition-colors"
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
            <Link
              href="/industries"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1 ${
                isIndustries
                  ? "text-white bg-white/10 shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {isIndustries && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
              )}
              Industries
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {activeDropdown === "industries" && (
              <div className="absolute top-full -left-28 mt-2 w-96 rounded-2xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-sky-500/20">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    Tailored Industry Expertise
                  </span>
                  <Link
                    href="/industries"
                    className="text-[10px] font-mono text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    View Overview →
                  </Link>
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

          {/* Projects / Case Studies Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("projects")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/projects"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${
                isProjects
                  ? "text-white bg-white/10 shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {isProjects && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
              )}
              Projects
              <svg className="w-3 h-3 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {activeDropdown === "projects" && (
              <div className="absolute top-full -left-20 mt-2 w-96 rounded-2xl border border-[var(--border-subtle)] bg-[#0B1120]/95 backdrop-blur-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-sky-500/20">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    Selected Case Studies
                  </span>
                  <Link
                    href="/projects"
                    className="text-[10px] font-mono text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    View All Case Studies →
                  </Link>
                </div>
                <div className="space-y-1">
                  {PROJECTS_DATA.map((proj) => (
                    <Link
                      key={proj.label}
                      href={proj.href}
                      className="group/proj block p-2 rounded-xl hover:bg-sky-500/10 transition-colors"
                    >
                      <div className="text-xs font-medium text-slate-200 group-hover/proj:text-sky-300 transition-colors">
                        {proj.label}
                      </div>
                      <div className="text-[10px] text-slate-400 group-hover/proj:text-slate-300 transition-colors line-clamp-1">
                        {proj.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Insights / Blog */}
          <Link
            href="/insights"
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
              isInsights
                ? "text-white bg-white/10 shadow-sm"
                : "text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            {isInsights && (
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
            )}
            Insights
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
              isContact
                ? "text-white bg-white/10 shadow-sm"
                : "text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            {isContact && (
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
            )}
            Contact
          </Link>
        </nav>

        {/* Right: Request a Proposal CTA */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <Button href="/request-a-proposal" variant="primary" className="text-xs px-5 py-2.5 whitespace-nowrap">
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

      {/* Mobile Full-Screen Navigation Drawer (Scrolls independently with full height, body scroll locked) */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent
          className="lg:hidden fixed inset-0 z-[100] w-full h-[100dvh] bg-[#070B14]/98 backdrop-blur-3xl flex flex-col pointer-events-auto overscroll-contain animate-in fade-in duration-200"
        >
          {/* Top Bar inside Drawer with Logo & Close Button */}
          <div className="w-full px-4 sm:px-8 py-5 flex items-center justify-between border-b border-[var(--border-subtle)]/40 shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 group text-decoration-none"
            >
              <Image
                src="/Techno-Mantra-logo.png"
                alt="Techno Mantra Logo"
                width={300}
                height={233}
                className="h-11 sm:h-13 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                priority
              />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] text-slate-200 hover:text-white bg-slate-900/80 focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Nav Content with data-lenis-prevent and overscroll-contain */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto overscroll-contain px-6 py-6 pb-28 space-y-4"
          >
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-white py-2 border-b border-slate-800/60"
            >
              Home
            </Link>

            {/* About (Direct Link) */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-slate-200 py-2 border-b border-slate-800/60"
            >
              About
            </Link>

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
                <div className="flex items-center gap-2">
                  {isSolutions && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
                  )}
                  <span>Solutions</span>
                </div>
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
                  <Link
                    href="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold py-1 mb-1"
                  >
                    Explore All Solutions Architecture →
                  </Link>
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
                <div className="flex items-center gap-2">
                  {isIndustries && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
                  )}
                  <span>Industries</span>
                </div>
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
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="/industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold py-1 mb-1"
                  >
                    Explore All 10 Industries Overview →
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
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
                </div>
              )}
            </div>

            {/* Projects Accordion */}
            <div className="border-b border-slate-800/60 py-2">
              <button
                onClick={() => toggleMobileAccordion("projects")}
                className="w-full flex items-center justify-between text-sm font-semibold text-slate-200"
              >
                <div className="flex items-center gap-2">
                  {isProjects && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
                  )}
                  <span>Projects / Case Studies</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded.projects ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExpanded.projects && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold py-1 mb-1"
                  >
                    Explore All Case Studies Overview →
                  </Link>
                  {PROJECTS_DATA.map((proj) => (
                    <Link
                      key={proj.label}
                      href={proj.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-slate-300 hover:text-white py-1"
                    >
                      {proj.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Insights */}
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold tracking-wider text-slate-200 py-2 border-b border-slate-800/60"
            >
              <span>Insights / Blog</span>
              {isInsights && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-semibold tracking-wider text-slate-200 py-2 border-b border-slate-800/60"
            >
              <span>Contact</span>
              {isContact && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
              )}
            </Link>

            {/* CTA */}
            <div className="pt-2">
              <Button
                href="/request-a-proposal"
                variant="primary"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-xs justify-center py-3"
              >
                Request a Proposal <span className="text-xs ml-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
