"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 1. High-Resolution Procedural Surface Texture Generator (1024x512)
function createAdvancedPlanetTexture(baseColorHex, secondaryColorHex, accentColorHex, surfaceType) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Base background fill
  ctx.fillStyle = baseColorHex;
  ctx.fillRect(0, 0, 1024, 512);

  if (surfaceType === "terrestrial") {
    // Ocean depth background
    ctx.fillStyle = "#0284c7";
    ctx.fillRect(0, 0, 1024, 512);

    // Realistic continent landmasses (Green/Brown topography)
    ctx.fillStyle = "#15803d";
    for (let i = 0; i < 16; i++) {
      const cx = Math.random() * 1024;
      const cy = Math.random() * 320 + 96;
      const rx = Math.random() * 160 + 70;
      const ry = Math.random() * 90 + 35;

      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();

      // Wrap-around for seamless 3D sphere mapping
      ctx.beginPath();
      ctx.ellipse(cx - 1024, cy, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    // Mountain ranges & desert highlands
    ctx.fillStyle = "#78350f";
    for (let i = 0; i < 10; i++) {
      const cx = Math.random() * 1024;
      const cy = Math.random() * 260 + 126;
      const rx = Math.random() * 80 + 30;
      const ry = Math.random() * 40 + 15;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Polar ice caps
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = 0.9;
    ctx.fillRect(0, 0, 1024, 45); // North pole
    ctx.fillRect(0, 467, 1024, 45); // South pole
  } else if (surfaceType === "gas-giant") {
    // Jovian atmospheric bands & swirling storms
    for (let y = 0; y < 512; y += 16) {
      ctx.fillStyle = (y % 32 === 0) ? secondaryColorHex : baseColorHex;
      ctx.globalAlpha = Math.random() * 0.4 + 0.6;
      ctx.fillRect(0, y, 1024, 16 + Math.sin(y * 0.04) * 8);
    }
    // Great oval storm spot (Jupiter Red Spot style)
    ctx.fillStyle = accentColorHex;
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.ellipse(680, 310, 95, 48, -0.15, 0, Math.PI * 2);
    ctx.fill();
  } else if (surfaceType === "canyon") {
    // Mars-style basalt craters & iron canyons
    ctx.fillStyle = secondaryColorHex;
    for (let i = 0; i < 110; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const r = Math.random() * 26 + 5;
      ctx.globalAlpha = Math.random() * 0.45 + 0.15;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    // Valles Marineris canyon fissure
    ctx.strokeStyle = accentColorHex;
    ctx.lineWidth = 16;
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.moveTo(180, 220);
    ctx.bezierCurveTo(400, 300, 620, 240, 840, 320);
    ctx.stroke();
  } else if (surfaceType === "industrial") {
    // Titanium slate seams & tech grid
    ctx.strokeStyle = secondaryColorHex;
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.5;
    for (let x = 0; x < 1024; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
    for (let y = 0; y < 512; y += 48) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }
  } else if (surfaceType === "crystal") {
    // Ice world fractures & glacier veins
    ctx.strokeStyle = secondaryColorHex;
    ctx.lineWidth = 5;
    ctx.globalAlpha = 0.6;
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.random() * 140 - 70, y + Math.random() * 140 - 70);
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1.0;
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// 2. Cloud Texture Generator for Atmosphere Layer
function createCloudTexture(cloudColorHex) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.fillRect(0, 0, 512, 256);

  ctx.fillStyle = cloudColorHex;
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 256;
    const rx = Math.random() * 80 + 25;
    const ry = Math.random() * 28 + 8;
    ctx.globalAlpha = Math.random() * 0.4 + 0.15;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, Math.random() * 0.4 - 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// 3. Ring System Radial Texture Generator (Saturn Style Concentric Bands)
function createRingTexture(ringColorHex) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(128, 128, 30, 128, 128, 128);
  gradient.addColorStop(0.0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(0.25, ringColorHex);
  gradient.addColorStop(0.45, "rgba(0, 0, 0, 0.1)");
  gradient.addColorStop(0.65, ringColorHex);
  gradient.addColorStop(0.85, "rgba(255, 255, 255, 0.7)");
  gradient.addColorStop(1.0, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function Planet({ data, position, scale = 1 }) {
  const planetRef = useRef();
  const cloudRef = useRef();

  // Create high-res textures cleanly on client
  const [surfaceTexture, cloudTexture, ringTexture] = useMemo(() => {
    if (typeof window === "undefined") return [null, null, null];
    const surface = createAdvancedPlanetTexture(
      data.baseColor,
      data.secondaryColor,
      data.accentColor,
      data.surfaceType
    );
    const cloud = data.hasClouds ? createCloudTexture(data.cloudColor || "#ffffff") : null;
    const ring = data.hasRings ? createRingTexture(data.ringColor || "#94a3b8") : null;
    return [surface, cloud, ring];
  }, [data]);

  // Self-axis rotations (Planet & Cloud layer)
  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.12;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.18;
    }
  });

  const scaledSize = data.size * scale;

  return (
    <group position={position}>
      {/* 1. Primary 3D Planet Sphere Illuminated by Central Sun Light */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[scaledSize, 64, 64]} />
        <meshStandardMaterial
          map={surfaceTexture}
          bumpMap={surfaceTexture}
          bumpScale={0.06}
          roughness={data.roughness ?? 0.55}
          metalness={data.metalness ?? 0.15}
        />
      </mesh>

      {/* 2. Rotating Atmospheric Cloud Shell Layer */}
      {data.hasClouds && cloudTexture && (
        <mesh ref={cloudRef} scale={1.015}>
          <sphereGeometry args={[scaledSize, 48, 48]} />
          <meshStandardMaterial
            map={cloudTexture}
            transparent={true}
            opacity={0.55}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* 3. 3D Planetary Ring System (Saturn Style) */}
      {data.hasRings && ringTexture && (
        <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
          <ringGeometry args={[scaledSize * 1.35, scaledSize * 2.2, 64]} />
          <meshStandardMaterial
            map={ringTexture}
            transparent={true}
            opacity={0.8}
            side={THREE.DoubleSide}
            depthWrite={false}
            roughness={0.3}
          />
        </mesh>
      )}
    </group>
  );
}
