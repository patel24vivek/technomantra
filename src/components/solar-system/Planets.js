"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { PLANET_DATA } from "./planetData";
import { ORBIT_CONFIGS } from "./Orbits";
import Planet from "./Planet";

export default function Planets({ sunPosition = [2.0, 0, 0], scale = 1 }) {
  // Calculate 3D mathematical positions for each planet sitting ON its assigned tilted orbit line
  const planetPositions = useMemo(() => {
    return PLANET_DATA.map((planet) => {
      const orbitConfig = ORBIT_CONFIGS[planet.orbitIndex] || ORBIT_CONFIGS[0];
      const radius = orbitConfig.radius;
      const angle = planet.initialAngle;

      // 1. Unrotated 2D circle position on orbital plane
      const localPos = new THREE.Vector3(
        radius * Math.cos(angle),
        0,
        radius * Math.sin(angle)
      );

      // 2. Apply orbit 3D inclination rotation matching OrbitLine
      const [rx, ry, rz] = orbitConfig.rotation;
      const euler = new THREE.Euler(rx, ry, rz, "XYZ");
      localPos.applyEuler(euler);

      // 3. Translate to world space centered on Sun
      return [
        sunPosition[0] + localPos.x * scale,
        sunPosition[1] + localPos.y * scale,
        sunPosition[2] + localPos.z * scale,
      ];
    });
  }, [sunPosition, scale]);

  return (
    <group>
      {PLANET_DATA.map((planet, index) => (
        <Planet
          key={planet.id}
          data={planet}
          position={planetPositions[index]}
          scale={scale}
        />
      ))}
    </group>
  );
}
