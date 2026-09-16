"use client";

import { useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import Stars from "./Stars";
import Sun from "./Sun";
import Orbits from "./Orbits";
import Planets from "./Planets";

export default function SpaceScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Position Sun, Orbits, and Planets on right side for desktop, slightly lower/scaled on mobile
  const sunPosition = isMobile ? [0, -0.8, -1] : [1.8, 0, 0];
  const sunScale = isMobile ? 0.85 : 1.1;

  return (
    <>
      {/* Mouse Drag & Rotation Interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.6}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.6}
      />

      {/* Soft Light Atmospheric Fog */}
      <fogExp2 attach="fog" color="#030712" density={0.005} />

      {/* Ambient Fill Light illuminating space shadows */}
      <ambientLight intensity={0.65} color="#e2e8f0" />
      <directionalLight position={[-10, -5, -10]} intensity={0.35} color="#38bdf8" />

      {/* Central Sun & Primary Light Source */}
      <Sun position={sunPosition} scale={sunScale} />

      {/* 3D Service Planets sitting on Orbital Paths */}
      <Planets sunPosition={sunPosition} scale={sunScale} />

      {/* 3D Orbital Path Rings Centered on Sun */}
      <Orbits sunPosition={sunPosition} scale={sunScale} />

      {/* Glowing Starfield Background */}
      <Stars />
    </>
  );
}
