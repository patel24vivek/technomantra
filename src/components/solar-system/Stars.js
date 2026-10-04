"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars as DreiStars } from "@react-three/drei";
import * as THREE from "three";

const textureCache = new Map();
let globalTextureLoader = null;

function getCachedTexture(path) {
  if (typeof window === "undefined" || !path) return null;
  if (textureCache.has(path)) {
    return textureCache.get(path);
  }
  if (!globalTextureLoader) {
    globalTextureLoader = new THREE.TextureLoader();
  }
  const texture = globalTextureLoader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(path, texture);
  return texture;
}

export default function Stars() {
  const groupRef = useRef();
  const starSkyTexture = useMemo(() => getCachedTexture("/textures/8k_stars.jpg"), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.008;
      groupRef.current.rotation.x += delta * 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Deep Space Cosmic Skybox Sphere */}
      {starSkyTexture && (
        <mesh>
          <sphereGeometry args={[95, 32, 32]} />
          <meshBasicMaterial
            map={starSkyTexture}
            side={THREE.BackSide}
            toneMapped={false}
            transparent={true}
            opacity={0.45}
            color={new THREE.Color(0.9, 0.95, 1.1)}
          />
        </mesh>
      )}

      {/* 2. Dynamic Scintillating 3D Star Particles */}
      <DreiStars
        radius={70}
        depth={40}
        count={2200}
        factor={6.0}
        saturation={0.3}
        fade
        speed={1.0}
      />
    </group>
  );
}
