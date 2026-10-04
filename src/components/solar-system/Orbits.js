"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PLANET_DATA } from "./planetData";

// Orbital trajectories for all 8 planets of the Solar System
export const ORBIT_CONFIGS = [
  { id: "orbit-mercury", radius: 2.2, rotation: [0.38, 0.12, 0.05], opacity: 0.18, color: "#ffffff" },
  { id: "orbit-venus", radius: 3.0, rotation: [0.42, -0.15, 0.10], opacity: 0.16, color: "#fed7aa" },
  { id: "orbit-earth", radius: 3.9, rotation: [0.28, 0.18, -0.05], opacity: 0.18, color: "#bae6fd" },
  { id: "orbit-mars", radius: 4.8, rotation: [0.46, -0.20, 0.14], opacity: 0.14, color: "#fecaca" },
  { id: "orbit-jupiter", radius: 6.5, rotation: [0.34, 0.22, -0.08], opacity: 0.15, color: "#fde68a" },
  { id: "orbit-saturn", radius: 8.0, rotation: [0.48, -0.24, 0.12], opacity: 0.14, color: "#fef9c3" },
  { id: "orbit-uranus", radius: 9.4, rotation: [0.32, 0.16, -0.06], opacity: 0.12, color: "#a5f3fc" },
  { id: "orbit-neptune", radius: 10.8, rotation: [0.40, -0.18, 0.09], opacity: 0.10, color: "#bfdbfe" },
];

function OrbitLine({ radius, rotation, opacity, color, isHovered }) {
  const materialRef = useRef();

  const geometry = useMemo(() => {
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  // Smooth lerp transition for orbit line brightness when planet is hovered
  useFrame((_, delta) => {
    if (materialRef.current) {
      const targetOpacity = isHovered ? Math.min(opacity * 2.8, 0.45) : opacity;
      materialRef.current.opacity = THREE.MathUtils.lerp(
        materialRef.current.opacity,
        targetOpacity,
        delta * 8.0
      );
    }
  });

  return (
    <lineLoop geometry={geometry} rotation={rotation}>
      <lineBasicMaterial
        ref={materialRef}
        color={color}
        transparent={true}
        opacity={opacity}
        depthWrite={false}
        linewidth={1}
      />
    </lineLoop>
  );
}

export default function Orbits({ sunPosition = [2.0, 0, 0], scale = 1, hoveredPlanetId }) {
  const hoveredPlanet = PLANET_DATA.find((p) => p.id === hoveredPlanetId);
  const hoveredOrbitIndex = hoveredPlanet ? hoveredPlanet.orbitIndex : -1;

  return (
    <group position={sunPosition} scale={scale}>
      {ORBIT_CONFIGS.map((config, index) => (
        <OrbitLine
          key={config.id}
          radius={config.radius}
          rotation={config.rotation}
          opacity={config.opacity}
          color={config.color}
          isHovered={hoveredOrbitIndex === index}
        />
      ))}
    </group>
  );
}
