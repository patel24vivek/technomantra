"use client";

import { useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import Stars from "./Stars";
import Sun from "./Sun";
import Orbits from "./Orbits";
import Planets from "./Planets";
import AsteroidBelt from "./AsteroidBelt";
import MouseParallax from "./MouseParallax";
import CinematicCamera from "./CinematicCamera";

export default function SpaceScene({ hoveredPlanetId, onPlanetHover, onPlanetLeave }) {
  const [deviceMode, setDeviceMode] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceMode("mobile");
      } else if (width < 1024) {
        setDeviceMode("tablet");
      } else {
        setDeviceMode("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Position & Scale Sun, Orbits, Planets, and Asteroid Belt intentionally per device tier
  const sunPosition =
    deviceMode === "mobile"
      ? [0, -1.2, -0.8]
      : deviceMode === "tablet"
      ? [1.2, -0.6, -0.5]
      : [3.1, 0.1, 0];

  const sunScale =
    deviceMode === "mobile"
      ? 0.48
      : deviceMode === "tablet"
      ? 0.58
      : 0.72;

  return (
    <>
      {/* Scroll-Driven Cinematic 3D Camera Controller */}
      <CinematicCamera />

      {/* Mouse Drag & Rotation Interaction */}
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.8}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.6}
      />

      {/* Soft Light Atmospheric Fog */}
      <fogExp2 attach="fog" color="#030712" density={0.005} />

      {/* Ambient Fill Light illuminating space shadows */}
      <ambientLight intensity={0.65} color="#e2e8f0" />
      <directionalLight position={[-10, -5, -10]} intensity={0.35} color="#38bdf8" />

      {/* Subtle Cinematic 3D Mouse Parallax Controller */}
      <MouseParallax intensityX={0.45} intensityY={0.25} damping={4.0}>
        {/* Central Sun & Primary Light Source */}
        <Sun position={sunPosition} scale={sunScale} />

        {/* 3D Service Planets sitting on Orbital Paths */}
        <Planets
          sunPosition={sunPosition}
          scale={sunScale}
          hoveredPlanetId={hoveredPlanetId}
          onPlanetHover={onPlanetHover}
          onPlanetLeave={onPlanetLeave}
        />

        {/* Ultra-Realistic 3D Instanced Asteroid Belt */}
        <AsteroidBelt sunPosition={sunPosition} scale={sunScale} count={650} />

        {/* 3D Orbital Path Rings Centered on Sun */}
        <Orbits sunPosition={sunPosition} scale={sunScale} hoveredPlanetId={hoveredPlanetId} />
      </MouseParallax>

      {/* Glowing Starfield Background */}
      <Stars />
    </>
  );
}
