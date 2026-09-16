"use client";

import { useMemo } from "react";
import * as THREE from "three";

// Export orbit configurations so Step 7 (Planets) can position service planets on specific paths
export const ORBIT_CONFIGS = [
  { id: "orbit-1", radius: 2.5, rotation: [0.35, 0.1, 0.05], opacity: 0.18, color: "#ffffff" },
  { id: "orbit-2", radius: 3.7, rotation: [0.42, -0.15, 0.1], opacity: 0.14, color: "#e2e8f0" },
  { id: "orbit-3", radius: 5.0, rotation: [0.28, 0.2, -0.05], opacity: 0.16, color: "#d6a85f" },
  { id: "orbit-4", radius: 6.3, rotation: [0.48, -0.22, 0.15], opacity: 0.12, color: "#e2e8f0" },
  { id: "orbit-5", radius: 7.7, rotation: [0.38, 0.25, -0.1], opacity: 0.10, color: "#ffffff" },
];

function OrbitLine({ radius, rotation, opacity, color }) {
  const geometry = useMemo(() => {
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  return (
    <lineLoop geometry={geometry} rotation={rotation}>
      <lineBasicMaterial
        color={color}
        transparent={true}
        opacity={opacity}
        depthWrite={false}
        linewidth={1}
      />
    </lineLoop>
  );
}

export default function Orbits({ sunPosition = [2.0, 0, 0], scale = 1 }) {
  return (
    <group position={sunPosition} scale={scale}>
      {ORBIT_CONFIGS.map((config) => (
        <OrbitLine
          key={config.id}
          radius={config.radius}
          rotation={config.rotation}
          opacity={config.opacity}
          color={config.color}
        />
      ))}
    </group>
  );
}
