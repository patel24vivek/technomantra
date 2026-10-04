"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CONNECTION_FIELD_NODES } from "@/data/contact";

export default function ContactConnectionField() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setActiveNode(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 flex items-center justify-center select-none"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(214,168,95,0.05),transparent_60%)] pointer-events-none" />

      {/* SVG Connecting Vector Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line-gradient-contact" x1="50%" y1="50%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d6a85f" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Orbit track ring */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="rgba(15,23,42,0.06)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />

        {/* Dynamic Connecting Lines from Center (50,50) to each Node */}
        {CONNECTION_FIELD_NODES.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <line
              key={node.id}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke={isActive ? node.color : "rgba(14,165,233,0.25)"}
              strokeWidth={isActive ? "1.2" : "0.75"}
              strokeDasharray={isActive ? "none" : "2 2"}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Outer Orbiting Nodes */}
      {CONNECTION_FIELD_NODES.map((node, i) => {
        const isActive = activeNode === node.id;
        const nodeOffsetX = offset.x * (0.3 + (i % 3) * 0.2);
        const nodeOffsetY = offset.y * (0.3 + (i % 3) * 0.2);

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: `translate(-50%, -50%) translate(${nodeOffsetX}px, ${nodeOffsetY}px)`,
              transition: "transform 0.25s ease-out, box-shadow 0.2s ease",
            }}
            className={`absolute z-20 cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all duration-200 ${
              isActive
                ? "bg-slate-900 text-white border-sky-400 shadow-lg scale-110"
                : "bg-white/95 backdrop-blur-md text-slate-700 border-slate-200/90 shadow-xs hover:border-slate-400 hover:scale-105"
            }`}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: node.color }}
            />
            <span className="text-[10px] font-mono font-bold tracking-wider">
              {node.label}
            </span>
          </div>
        );
      })}

      {/* Center Core Nucleus: TECHNOMANTRA */}
      <div
        style={{
          transform: `translate(${offset.x * 0.15}px, ${offset.y * 0.15}px)`,
          transition: "transform 0.2s ease-out",
        }}
        className="relative z-30 flex flex-col items-center justify-center p-4 rounded-3xl bg-white border-2 border-sky-500/30 shadow-2xl shadow-sky-500/15 group cursor-default"
      >
        {/* Pulsing halo ring */}
        <div className="absolute -inset-2 rounded-3xl bg-sky-500/10 animate-ping opacity-60 pointer-events-none" />

        <div className="relative w-28 h-10 flex items-center justify-center">
          <Image
            src="/Techno-Mantra-logo.png"
            alt="TechnoMantra Central Node"
            fill
            className="object-contain"
          />
        </div>

        <div className="mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
            CONNECTIVITY CORE
          </span>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
          INTERACTIVE CONNECTION FIELD
        </span>
      </div>
    </div>
  );
}
