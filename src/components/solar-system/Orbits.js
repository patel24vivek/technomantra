"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PLANET_DATA } from "./planetData";

// Export orbit configurations so Planets can position service planets on specific paths
export const ORBIT_CONFIGS = [
  { id: "orbit-1", radius: 2.5, rotation: [0.35, 0.1, 0.05], opacity: 0.18, color: "#ffffff" },
  { id: "orbit-2", radius: 3.7, rotation: [0.42, -0.15, 0.1], opacity: 0.14, color: "#e2e8f0" },
  { id: "orbit-3", radius: 5.0, rotation: [0.28, 0.2, -0.05], opacity: 0.16, color: "#d6a85f" },
  { id: "orbit-4", radius: 6.3, rotation: [0.48, -0.22, 0.15], opacity: 0.12, color: "#e2e8f0" },
  { id: "orbit-5", radius: 7.7, rotation: [0.38, 0.25, -0.1], opacity: 0.10, color: "#ffffff" },
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

  // Smooth lerp transition for orbit emphasis when associated planet is hovered
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
  // Find orbit index of currently hovered planet
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
