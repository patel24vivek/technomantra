"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import SpaceScene from "./SpaceScene";

export default function SolarSystem({
  className = "h-full w-full",
  onPlanetHover: externalHover,
  onPlanetLeave: externalLeave,
}) {
  const [hoveredPlanetId, setHoveredPlanetId] = useState(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Graceful WebGL availability check for older or restricted browsers
    try {
      const canvas = document.createElement("canvas");
      const isAvailable = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(isAvailable);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const handlePlanetHover = useCallback(
    (planetId) => {
      setHoveredPlanetId(planetId);
      if (externalHover) externalHover(planetId);
    },
    [externalHover]
  );

  const handlePlanetLeave = useCallback(() => {
    setHoveredPlanetId(null);
    if (externalLeave) externalLeave();
  }, [externalLeave]);

  if (!hasWebGL) {
    // Graceful CSS Space Backdrop fallback if WebGL is unsupported
    return (
      <div className={`relative bg-cosmic-radial ${className} flex items-center justify-center`}>
        <div className="w-48 h-48 rounded-full bg-amber-500/10 border border-amber-500/20 blur-xl animate-pulse" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      role="region"
      aria-label="Interactive 3D Solar System Visualizer"
    >
      <Canvas
        camera={{ position: [0, 0, 8.8], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SpaceScene
            hoveredPlanetId={hoveredPlanetId}
            onPlanetHover={handlePlanetHover}
            onPlanetLeave={handlePlanetLeave}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
