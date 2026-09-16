"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// 1. Generate realistic solar surface texture with soft granulation & sunspots
function createSolarSurfaceTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Rich fiery orange/amber plasma base
  const baseGrad = ctx.createLinearGradient(0, 0, 512, 512);
  baseGrad.addColorStop(0, "#ff8800");
  baseGrad.addColorStop(0.5, "#ea580c");
  baseGrad.addColorStop(1, "#d97706");
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 512, 512);

  // Soft plasma cloud base
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 90 + 40;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(255, 200, 50, 0.25)");
    g.addColorStop(1, "rgba(234, 88, 12, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 512);
  }

  // Controlled, subtle, soft-faded solar granulation & sunspots (~220 soft spots)
  for (let i = 0; i < 220; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 8 + 2;
    const val = Math.random();

    const g = ctx.createRadialGradient(x, y, 0, x, y, r);

    if (val > 0.88) {
      // Intense bright solar flare spot
      g.addColorStop(0, "rgba(255, 255, 230, 0.7)");
      g.addColorStop(0.5, "rgba(255, 200, 50, 0.3)");
      g.addColorStop(1, "rgba(255, 140, 0, 0)");
    } else if (val > 0.4) {
      // Warm golden convection cell
      g.addColorStop(0, "rgba(255, 180, 40, 0.4)");
      g.addColorStop(1, "rgba(234, 88, 12, 0)");
    } else {
      // Subtle sunspot / cooler magnetic loop
      g.addColorStop(0, "rgba(140, 25, 0, 0.35)");
      g.addColorStop(1, "rgba(200, 50, 0, 0)");
    }

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 2. Generate smooth, edge-free radial atmospheric glow texture
function createSoftGlowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0.0, "rgba(255, 255, 240, 1.0)");   // Radiant white core
  gradient.addColorStop(0.15, "rgba(255, 200, 50, 0.85)");  // Glowing golden aura
  gradient.addColorStop(0.4, "rgba(245, 130, 10, 0.40)");   // Warm solar corona
  gradient.addColorStop(0.7, "rgba(214, 110, 20, 0.12)");   // Muted atmospheric halo
  gradient.addColorStop(1.0, "rgba(3, 7, 18, 0.0)");       // Completely invisible at edges

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  return new THREE.CanvasTexture(canvas);
}

export default function Sun({ position = [2.0, 0, 0], scale = 0.95 }) {
  const sunRef = useRef();
  const surfaceTextureRef = useRef();

  // Create procedural textures cleanly on client
  const [surfaceTexture, glowTexture] = useMemo(() => {
    if (typeof window === "undefined") return [null, null];
    const surface = createSolarSurfaceTexture();
    const glow = createSoftGlowTexture();
    surfaceTextureRef.current = surface;
    return [surface, glow];
  }, []);

  // Clean up WebGL texture memory on unmount
  useMemo(() => {
    return () => {
      if (surfaceTexture) surfaceTexture.dispose();
      if (glowTexture) glowTexture.dispose();
    };
  }, [surfaceTexture, glowTexture]);

  useFrame((_, delta) => {
    if (sunRef.current) {
      // Smooth continuous Y-axis rotation
      sunRef.current.rotation.y += delta * 0.035;
    }
    if (surfaceTextureRef.current) {
      // Dynamic scrolling surface plasma motion
      surfaceTextureRef.current.offset.x += delta * 0.005;
      surfaceTextureRef.current.offset.y += delta * 0.003;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* 1. Core Intense Glowing Flare Sprite */}
      <sprite scale={[4.5, 4.5, 1]}>
        <spriteMaterial
          map={glowTexture}
          transparent={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fog={false}
        />
      </sprite>

      {/* 2. Outer Volumetric Atmosphere Corona Sprite */}
      <sprite scale={[8.5, 8.5, 1]}>
        <spriteMaterial
          map={glowTexture}
          transparent={true}
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fog={false}
        />
      </sprite>

      {/* 3D Realistic Glowing Organic Solar Core */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[1.28, 48, 48]} />
        <MeshDistortMaterial
          map={surfaceTexture}
          emissiveMap={surfaceTexture}
          emissive="#ff9900"
          emissiveIntensity={5.0}
          bumpMap={surfaceTexture}
          bumpScale={0.07}
          roughness={0.2}
          metalness={0.1}
          distort={0.14}
          speed={1.6}
        />
      </mesh>

      {/* Primary Light Source Illuminating Space */}
      <pointLight
        color="#fff6d6"
        intensity={9.0}
        distance={75}
        decay={1.6}
      />
    </group>
  );
}
