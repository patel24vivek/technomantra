"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SpaceScene from "./SpaceScene";

export default function SolarSystem({ className = "h-full w-full" }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SpaceScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
