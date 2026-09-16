"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("./SceneCanvas"), { ssr: false });
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function CanvasContainer({ className = "h-full w-full" }) {
  return (
    <SceneCanvas className={className}>
      <HeroScene />
    </SceneCanvas>
  );
}
