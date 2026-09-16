"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars as DreiStars } from "@react-three/drei";

export default function Stars() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.012;
      groupRef.current.rotation.x += delta * 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <DreiStars
        radius={100}
        depth={60}
        count={2400}
        factor={7.0}
        saturation={0.3}
        fade
        speed={1.2}
      />
    </group>
  );
}
