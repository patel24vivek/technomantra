"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
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
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  textureCache.set(path, texture);
  return texture;
}

// Generate smooth, edge-free radial solar corona aura with zero-alpha boundary
function createSoftSolarGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0.0, "rgba(255, 255, 235, 1.0)");   // Brilliant white-hot core
  gradient.addColorStop(0.18, "rgba(255, 195, 45, 0.85)");  // Radiant golden flare
  gradient.addColorStop(0.42, "rgba(245, 120, 10, 0.35)");  // Warm solar corona
  gradient.addColorStop(0.72, "rgba(214, 85, 10, 0.08)");   // Soft cosmic fade
  gradient.addColorStop(1.0, "rgba(0, 0, 0, 0.0)");         // True 100% transparent edge

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function Sun({ position = [2.0, 0, 0], scale = 0.95 }) {
  const sunRef = useRef();
  const innerCoronaRef = useRef();

  const sunTexture = useMemo(() => getCachedTexture("/textures/sun.jpg"), []);
  const glowTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    return createSoftSolarGlowTexture();
  }, []);

  useMemo(() => {
    return () => {
      if (glowTexture) glowTexture.dispose();
    };
  }, [glowTexture]);

  useFrame((_, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.04;
    }
    if (innerCoronaRef.current) {
      innerCoronaRef.current.rotation.y -= delta * 0.015;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* 1. Central Golden Solar Corona Flare Sprite (Zero-alpha border, no square artifact) */}
      {glowTexture && (
        <sprite scale={[5.6, 5.6, 1]}>
          <spriteMaterial
            map={glowTexture}
            transparent={true}
            opacity={0.90}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            fog={false}
          />
        </sprite>
      )}

      {/* 2. Soft Outer Ambient Cosmic Solar Corona */}
      {glowTexture && (
        <sprite scale={[9.6, 9.6, 1]}>
          <spriteMaterial
            map={glowTexture}
            transparent={true}
            opacity={0.42}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            fog={false}
          />
        </sprite>
      )}

      {/* 3. Photorealistic 3D Sun Photosphere Sphere (64x64 Geometry) */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[1.28, 64, 64]} />
        <meshBasicMaterial
          map={sunTexture}
          toneMapped={false}
          color={new THREE.Color(1.35, 1.2, 0.95)}
        />
      </mesh>

      {/* 4. Radiant Solar Atmospheric Halo Shell */}
      <mesh scale={1.045} ref={innerCoronaRef}>
        <sphereGeometry args={[1.28, 32, 32]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent={true}
          opacity={0.25}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* 5. Primary Scene Omnidirectional Light Source */}
      <pointLight
        color="#fff5e6"
        intensity={10.0}
        distance={90}
        decay={1.2}
      />
    </group>
  );
}
