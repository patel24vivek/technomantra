"use client";

import { PLANET_DATA } from "./planetData";
import { ORBIT_CONFIGS } from "./Orbits";
import Planet from "./Planet";

export default function Planets({
  sunPosition = [2.0, 0, 0],
  scale = 1,
  hoveredPlanetId,
  onPlanetHover,
  onPlanetLeave,
}) {
  return (
    <group>
      {PLANET_DATA.map((planet) => {
        const orbitConfig = ORBIT_CONFIGS[planet.orbitIndex] || ORBIT_CONFIGS[0];
        return (
          <Planet
            key={planet.id}
            data={planet}
            orbitConfig={orbitConfig}
            sunPosition={sunPosition}
            scale={scale}
            isHovered={hoveredPlanetId === planet.id}
            onPlanetHover={onPlanetHover}
            onPlanetLeave={onPlanetLeave}
          />
        );
      })}
    </group>
  );
}
