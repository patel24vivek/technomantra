"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

// Coordinated 600 x 540 Constellation Geometry for balanced, harmonious composition
export const CONSTELLATION_NODES = [
  // 1. Central Operational Business Core
  {
    id: "business-core",
    label: "BUSINESS CORE",
    sublabel: "TECHNOMANTRA",
    type: "core",
    x: 50, // 300px
    y: 47, // 254px
    badge: "HUB",
    category: "OPERATIONAL FOUNDATION",
    title: "Connected Business Core",
    description: "The central intelligence hub connecting all software, workflows, data pipelines and customer touchpoints.",
    href: "#service-explorer",
    connections: ["website", "erp", "crm", "automation"],
  },

  // 2. Primary Core Capability Nodes (Top, Left, Right, Bottom)
  {
    id: "website",
    label: "WEBSITE",
    type: "primary",
    x: 50, // 300px
    y: 11, // 60px
    badge: "01",
    category: "DIGITAL PRODUCTS",
    title: "Website & Web Platforms",
    description: "High-performance digital experiences engineered around conversion, brand authority and speed.",
    href: "/services/website-development",
    connections: ["business-core", "design", "developers"],
  },
  {
    id: "crm",
    label: "CRM",
    type: "primary",
    x: 20, // 120px
    y: 38, // 205px
    badge: "03",
    category: "BUSINESS SYSTEMS",
    title: "CRM Development",
    description: "Centralized lead pipelines, customer lifecycle management and unified communication history.",
    href: "/services/crm-development",
    connections: ["business-core", "design", "email", "marketing"],
  },
  {
    id: "erp",
    label: "CUSTOM ERP",
    type: "primary",
    x: 80, // 480px
    y: 38, // 205px
    badge: "02",
    category: "BUSINESS SYSTEMS",
    title: "Custom ERP Systems",
    description: "Tailored operations, inventory control, automated procurement, invoicing and executive analytics.",
    href: "/services/erp-development",
    connections: ["business-core", "developers", "accounting"],
  },
  {
    id: "automation",
    label: "AUTOMATION",
    type: "primary",
    x: 50, // 300px
    y: 75, // 405px
    badge: "05",
    category: "INTELLIGENT SYSTEMS",
    title: "Workflow & AI Automation",
    description: "Cross-platform data synchronization, automated pipelines and elimination of repetitive manual tasks.",
    href: "/services/automation-ai",
    connections: ["business-core", "marketing", "packaging", "seo", "video"],
  },

  // 3. Secondary Specialized Service Nodes (Distributed Harmoniously)
  {
    id: "design",
    label: "DESIGN",
    type: "secondary",
    x: 23, // 138px
    y: 17, // 92px
    badge: "08",
    category: "CREATIVE & BRAND",
    title: "Graphic & UI/UX Design",
    description: "Brand identities, scalable design systems and high-impact digital collateral.",
    href: "/services/graphic-design",
    connections: ["website", "crm"],
  },
  {
    id: "developers",
    label: "DEDICATED DEVS",
    type: "secondary",
    x: 77, // 462px
    y: 17, // 92px
    badge: "11",
    category: "TALENT & SCALE",
    title: "Dedicated Developers",
    description: "Full-stack engineers embedded seamlessly into your product and tech roadmap.",
    href: "/services/dedicated-developers",
    connections: ["website", "erp"],
  },
  {
    id: "email",
    label: "EMAIL",
    type: "secondary",
    x: 10, // 60px
    y: 57, // 308px
    badge: "06",
    category: "LIFECYCLE MARKETING",
    title: "Email Marketing & Retention",
    description: "Automated nurture sequences, subscriber segmentation and retention revenue.",
    href: "/services/email-marketing",
    connections: ["crm", "marketing"],
  },
  {
    id: "accounting",
    label: "ACCOUNTING",
    type: "secondary",
    x: 90, // 540px
    y: 57, // 308px
    badge: "04",
    category: "FINANCIAL OPERATIONS",
    title: "Accounting Software",
    description: "Compliant invoicing, automated ledgers, GST tracking and real-time financial reporting.",
    href: "/services/accounting-software",
    connections: ["erp"],
  },
  {
    id: "marketing",
    label: "MARKETING",
    type: "secondary",
    x: 27, // 162px
    y: 69, // 372px
    badge: "07",
    category: "PERFORMANCE GROWTH",
    title: "Digital Marketing",
    description: "Performance campaigns, multi-channel customer acquisition and ROI tracking.",
    href: "/services/digital-marketing",
    connections: ["automation", "crm", "email", "seo"],
  },
  {
    id: "packaging",
    label: "PACKAGING",
    type: "secondary",
    x: 73, // 438px
    y: 69, // 372px
    badge: "09",
    category: "PHYSICAL & BRAND",
    title: "Packaging Design",
    description: "Structural packaging, print production engineering and retail unboxing design.",
    href: "/services/packaging-design",
    connections: ["automation", "video"],
  },
  {
    id: "seo",
    label: "SEO",
    type: "secondary",
    x: 22, // 132px
    y: 89, // 480px
    badge: "10",
    category: "SEARCH VISIBILITY",
    title: "Search Engine Optimization",
    description: "Technical SEO audits, high-intent ranking strategies and sustainable organic growth.",
    href: "/services/seo",
    connections: ["marketing", "automation"],
  },
  {
    id: "video",
    label: "VIDEO",
    type: "secondary",
    x: 78, // 468px
    y: 89, // 480px
    badge: "12",
    category: "MEDIA PRODUCTION",
    title: "Corporate Video & Media",
    description: "High-end brand films, 3D product animations and visual executive explainers.",
    href: "/services/corporate-video",
    connections: ["packaging", "automation"],
  },
];

// Connection lines pairs between nodes
export const CONSTELLATION_LINKS = [
  // Primary Cardinal Radial Spokes from Business Core
  { id: "core-web", from: "business-core", to: "website", strength: "primary", pulseDur: "4s" },
  { id: "core-crm", from: "business-core", to: "crm", strength: "primary", pulseDur: "4.4s" },
  { id: "core-erp", from: "business-core", to: "erp", strength: "primary", pulseDur: "4.8s" },
  { id: "core-auto", from: "business-core", to: "automation", strength: "primary", pulseDur: "5.2s" },

  // Top Wings (Website -> Design & Devs)
  { id: "web-des", from: "website", to: "design", strength: "secondary", pulseDur: "5.5s" },
  { id: "web-dev", from: "website", to: "developers", strength: "secondary", pulseDur: "5.7s" },
  { id: "des-crm", from: "design", to: "crm", strength: "tertiary" },
  { id: "dev-erp", from: "developers", to: "erp", strength: "tertiary" },

  // Mid & Lower Wings
  { id: "crm-em", from: "crm", to: "email", strength: "secondary", pulseDur: "6s" },
  { id: "erp-acc", from: "erp", to: "accounting", strength: "secondary", pulseDur: "6.2s" },
  { id: "em-mkt", from: "email", to: "marketing", strength: "tertiary" },
  { id: "crm-mkt", from: "crm", to: "marketing", strength: "tertiary" },

  // Bottom Systems (Automation -> Marketing, Packaging, SEO, Video)
  { id: "auto-mkt", from: "automation", to: "marketing", strength: "secondary", pulseDur: "5.4s" },
  { id: "auto-pkg", from: "automation", to: "packaging", strength: "secondary", pulseDur: "5.6s" },
  { id: "mkt-seo", from: "marketing", to: "seo", strength: "secondary", pulseDur: "6.5s" },
  { id: "pkg-vid", from: "packaging", to: "video", strength: "secondary", pulseDur: "6.8s" },
];

export default function ServiceConstellation() {
  const containerRef = useRef(null);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [activeNode, setActiveNode] = useState(null);

  // Floating nodes GSAP animation + Mouse Parallax
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Staggered Entrance of Lines and Nodes
      gsap.fromTo(
        ".constellation-path",
        { strokeDashoffset: 500, strokeDasharray: 500, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        ".constellation-node-el",
        { scale: 0.75, opacity: 0, y: 12 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: {
            each: 0.05,
            from: "center",
          },
          ease: "back.out(1.4)",
          delay: 0.3,
        }
      );

      // 2. Continuous Organic Subtle Floating Animation (3px to 8px max to stay tight)
      CONSTELLATION_NODES.forEach((node, i) => {
        const el = container.querySelector(`[data-node-id="${node.id}"]`);
        if (!el) return;

        const isCore = node.type === "core";
        const floatY = isCore ? 3 : node.type === "primary" ? 5 : 7;
        const floatX = isCore ? 2 : node.type === "primary" ? 4 : 5;
        const duration = 3.6 + (i % 4) * 0.7;

        gsap.to(el, {
          y: `+=${floatY}`,
          x: `+=${floatX}`,
          duration: duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: (i % 5) * 0.3,
        });
      });

      // 3. Multi-layer Mouse Parallax
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        if (
          e.clientX < rect.left - 80 ||
          e.clientX > rect.right + 80 ||
          e.clientY < rect.top - 80 ||
          e.clientY > rect.bottom + 80
        ) {
          return;
        }

        const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const normY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

        // Subtle background grid
        gsap.to(".constellation-bg-decor", {
          x: normX * 3,
          y: normY * 3,
          duration: 0.8,
          ease: "power1.out",
          overwrite: "auto",
        });

        // Business Core
        gsap.to(".node-type-core", {
          x: normX * 2.5,
          y: normY * 2.5,
          duration: 0.7,
          ease: "power1.out",
          overwrite: "auto",
        });

        // Primary nodes
        gsap.to(".node-type-primary", {
          x: normX * 6,
          y: normY * 6,
          duration: 0.75,
          ease: "power1.out",
          overwrite: "auto",
        });

        // Secondary nodes
        gsap.to(".node-type-secondary", {
          x: normX * 9,
          y: normY * 9,
          duration: 0.85,
          ease: "power1.out",
          overwrite: "auto",
        });

        // SVG lines shift synchronously with middle layer
        gsap.to(".constellation-svg-lines", {
          x: normX * 4,
          y: normY * 4,
          duration: 0.8,
          ease: "power1.out",
          overwrite: "auto",
        });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  const handleNodeHover = (node) => {
    setActiveNodeId(node?.id || null);
    setActiveNode(node || null);
  };

  const handleNodeLeave = () => {
    setActiveNodeId(null);
    setActiveNode(null);
  };

  // Helper to map % coordinates to 600x540 SVG coordinate space
  const getNodePos = (id) => {
    const n = CONSTELLATION_NODES.find((node) => node.id === id);
    if (!n) return { x: 300, y: 254 };
    return {
      x: (n.x / 100) * 600,
      y: (n.y / 100) * 540,
    };
  };

  // Check if a link is connected to the hovered node
  const isLinkActive = (link) => {
    if (!activeNodeId) return false;
    return link.from === activeNodeId || link.to === activeNodeId;
  };

  // Check if a node is related to the hovered node
  const isNodeRelated = (node) => {
    if (!activeNodeId) return true;
    if (node.id === activeNodeId) return true;
    const active = CONSTELLATION_NODES.find((n) => n.id === activeNodeId);
    return (
      active?.connections?.includes(node.id) ||
      node.connections?.includes(activeNodeId)
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3.4] sm:aspect-[4/3.2] lg:aspect-[600/540] max-w-[620px] mx-auto select-none"
      aria-label="Interactive TechnoMantra Service Ecosystem Constellation"
    >
      {/* 1. Subtle Orbital Guide Rings & Technical Markers */}
      <div className="constellation-bg-decor absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full opacity-40"
          viewBox="0 0 600 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric orbital rings centered on Business Core (300, 254) */}
          <circle
            cx="300"
            cy="254"
            r="105"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          <circle
            cx="300"
            cy="254"
            r="185"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="2 7"
          />
          <circle
            cx="300"
            cy="254"
            r="248"
            stroke="#f1f5f9"
            strokeWidth="1"
            strokeDasharray="1 9"
          />

          {/* Micro Corner Technical Coordinate Markers */}
          <text
            x="24"
            y="28"
            fill="#94a3b8"
            fontFamily="monospace"
            fontSize="7.5"
            letterSpacing="0.16em"
          >
            SYS://ECOSYSTEM.V2
          </text>
          <text
            x="576"
            y="28"
            textAnchor="end"
            fill="#94a3b8"
            fontFamily="monospace"
            fontSize="7.5"
            letterSpacing="0.16em"
          >
            11 SERVICES CONNECTED
          </text>
          <text
            x="24"
            y="522"
            fill="#94a3b8"
            fontFamily="monospace"
            fontSize="7.5"
            letterSpacing="0.12em"
          >
            CORE: BUSINESS HUB
          </text>
          <text
            x="576"
            y="522"
            textAnchor="end"
            fill="#94a3b8"
            fontFamily="monospace"
            fontSize="7.5"
            letterSpacing="0.12em"
          >
            STATUS: SYNCHRONIZED
          </text>
        </svg>
      </div>

      {/* 2. SVG Pure Center-to-Center Clean Connection Lines & Traveling Pulses */}
      <svg
        className="constellation-svg-lines absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 600 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Smooth Gradient for Active Line Highlight */}
          <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
          </linearGradient>

          {/* Core Radial Glow Filter */}
          <radialGradient id="coreAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Core Radial Aura behind center */}
        <circle cx="300" cy="254" r="80" fill="url(#coreAura)" />

        {/* Clean, Straight Center-to-Center Connection Paths */}
        {CONSTELLATION_LINKS.map((link) => {
          const p1 = getNodePos(link.from);
          const p2 = getNodePos(link.to);
          const active = isLinkActive(link);
          const dimmed = activeNodeId && !active;
          const pathD = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;

          return (
            <g key={`link-${link.id}`}>
              {/* The Connection Path Line */}
              <path
                id={`path-${link.id}`}
                className="constellation-path transition-all duration-300"
                d={pathD}
                stroke={
                  active
                    ? "url(#activeLineGrad)"
                    : link.strength === "primary"
                    ? "#94a3b8"
                    : link.strength === "secondary"
                    ? "#cbd5e1"
                    : "#e2e8f0"
                }
                strokeWidth={
                  active
                    ? 2.2
                    : link.strength === "primary"
                    ? 1.5
                    : 1.0
                }
                strokeDasharray={
                  active
                    ? "none"
                    : link.strength === "tertiary"
                    ? "3 4"
                    : "none"
                }
                opacity={
                  dimmed
                    ? 0.15
                    : active
                    ? 1
                    : link.strength === "primary"
                    ? 0.8
                    : 0.55
                }
              />

              {/* Animated Traveling Data Packet Pulses */}
              {link.pulseDur && (
                <circle
                  r={active ? 2.5 : 1.8}
                  fill={active ? "#0284c7" : "#0ea5e9"}
                  opacity={dimmed ? 0.15 : 0.85}
                >
                  <animateMotion
                    dur={link.pulseDur}
                    repeatCount="indefinite"
                    path={pathD}
                    rotate="auto"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* 3. High-Precision DOM Nodes (Buttons with Crisp Hierarchy & Focus States) */}
      <div className="absolute inset-0 z-20">
        {CONSTELLATION_NODES.map((node) => {
          const isCore = node.type === "core";
          const isPrimary = node.type === "primary";
          const isSecondary = node.type === "secondary";
          const isHovered = activeNodeId === node.id;
          const isRelated = isNodeRelated(node);
          const dimmed = activeNodeId && !isRelated;

          return (
            <div
              key={node.id}
              data-node-id={node.id}
              className={`constellation-node-el absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                isCore ? "node-type-core z-30" : isPrimary ? "node-type-primary z-20" : "node-type-secondary z-10"
              } ${dimmed ? "opacity-30 scale-95" : "opacity-100"}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
            >
              {/* NODE BUTTON */}
              {isCore ? (
                /* CENTRAL BUSINESS CORE NODE */
                <button
                  type="button"
                  onMouseEnter={() => handleNodeHover(node)}
                  onMouseLeave={handleNodeLeave}
                  onFocus={() => handleNodeHover(node)}
                  onBlur={handleNodeLeave}
                  aria-label="TechnoMantra Business Core System"
                  className={`group relative flex flex-col items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white border ${
                    isHovered
                      ? "border-sky-500 ring-4 ring-sky-500/15 shadow-xl shadow-sky-500/10 scale-105"
                      : "border-slate-300/90 shadow-md shadow-slate-200/80 hover:border-sky-400"
                  } transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500`}
                >
                  {/* Eyebrow sublabel with pulsing indicator */}
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] font-semibold text-sky-700 uppercase">
                      {node.sublabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-display font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                      {node.label}
                    </span>
                    {/* Micro crosshair icon */}
                    <svg
                      className="w-3 h-3 text-sky-500 group-hover:rotate-90 transition-transform duration-300"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle cx="8" cy="8" r="2.5" />
                      <path
                        d="M8 1v2M8 13v2M1 8h2M13 8h2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>
              ) : isPrimary ? (
                /* PRIMARY SERVICE NODES (Website, CRM, ERP, Automation) */
                <Link
                  href={node.href}
                  onMouseEnter={() => handleNodeHover(node)}
                  onMouseLeave={handleNodeLeave}
                  onFocus={() => handleNodeHover(node)}
                  onBlur={handleNodeLeave}
                  aria-label={`${node.title} Service`}
                  className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white border ${
                    isHovered
                      ? "border-sky-500 bg-sky-50/60 shadow-md shadow-sky-500/10 scale-105 text-sky-900"
                      : "border-slate-300/85 hover:border-slate-400 shadow-sm text-slate-800"
                  } transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 whitespace-nowrap`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isHovered ? "bg-sky-500 shadow-[0_0_6px_#0ea5e9]" : "bg-slate-400 group-hover:bg-sky-500"
                    }`}
                  />
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-tight">
                    {node.label}
                  </span>
                </Link>
              ) : (
                /* SECONDARY SERVICE NODES (Compact, lightweight labels) */
                <Link
                  href={node.href}
                  onMouseEnter={() => handleNodeHover(node)}
                  onMouseLeave={handleNodeLeave}
                  onFocus={() => handleNodeHover(node)}
                  onBlur={handleNodeLeave}
                  aria-label={`${node.title} Service`}
                  className={`group relative flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-white/90 border ${
                    isHovered
                      ? "border-sky-400 bg-sky-50/50 shadow-sm scale-105 text-sky-800"
                      : "border-slate-200/90 hover:border-slate-300 text-slate-600 hover:text-slate-900 shadow-none"
                  } transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 whitespace-nowrap`}
                >
                  <span
                    className={`w-1 h-1 rounded-full transition-colors ${
                      isHovered ? "bg-sky-500" : "bg-slate-300 group-hover:bg-slate-500"
                    }`}
                  />
                  <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-tight">
                    {node.label}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Interactive Floating Contextual Tooltip Card on Hover */}
      {activeNode && (
        <div
          className={`absolute z-40 pointer-events-none transition-all duration-200 transform -translate-x-1/2 ${
            activeNode.y > 60
              ? "bottom-[102%] mb-2"
              : "top-[102%] mt-2"
          }`}
          style={{
            left: `${Math.max(24, Math.min(76, activeNode.x))}%`,
            top: activeNode.y > 60 ? undefined : `${activeNode.y}%`,
            bottom: activeNode.y > 60 ? `${100 - activeNode.y}%` : undefined,
          }}
        >
          <div className="w-56 sm:w-64 p-3 rounded-xl bg-slate-900/95 backdrop-blur-md text-white border border-slate-700 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[9px] font-mono tracking-wider uppercase text-sky-400 font-semibold">
                {activeNode.category}
              </span>
              <span className="text-[9px] font-mono text-slate-400">
                {activeNode.type === "core" ? "CORE HUB" : "CONNECTED"}
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-display font-semibold text-white tracking-tight leading-tight mb-1">
              {activeNode.title}
            </h4>
            <p className="text-[11px] text-slate-300 font-sans leading-snug">
              {activeNode.description}
            </p>
          </div>
        </div>
      )}

      {/* Mobile Streamlined Legend Indicator */}
      <div className="sm:hidden absolute -bottom-5 inset-x-0 text-center">
        <p className="text-[10px] font-mono text-slate-400">
          Tap any node to view service connections
        </p>
      </div>
    </div>
  );
}
