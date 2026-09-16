"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function CanvasLoader() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function SceneCanvas({ children, className = "h-full w-full", camera = { position: [0, 0, 5], fov: 60 } }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={camera}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
