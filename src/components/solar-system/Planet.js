"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { calculateOrbitalWorldPosition } from "./orbitMath";

// ============================================================================
// PROCEDURAL PLANETARY TEXTURE ENGINES (6 DISTINCT MATHEMATICAL STRUCTURES)
// ============================================================================

// 1. TERRESTRIAL WORLD (Large Coherent Continents, Oceans & Polar Caps)
function generateTerrestrialTexture(ctx, baseColor, secondaryColor, accentColor) {
  // Deep Ocean Base
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 512);

  // Coherent Continent Landmasses (Low-frequency noise simulation)
  ctx.fillStyle = secondaryColor;
  for (let i = 0; i < 18; i++) {
    const cx = Math.random() * 1024;
    const cy = Math.random() * 320 + 96;
    const rx = Math.random() * 180 + 70;
    const ry = Math.random() * 95 + 35;

    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();

    // Wrap-around for seamless 3D sphere mapping
    ctx.beginPath();
    ctx.ellipse(cx - 1024, cy, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  // Mountain Ranges & Desert Highlands (Medium-frequency noise)
  ctx.fillStyle = accentColor;
  for (let i = 0; i < 12; i++) {
    const cx = Math.random() * 1024;
    const cy = Math.random() * 260 + 126;
    const rx = Math.random() * 85 + 30;
    const ry = Math.random() * 40 + 15;
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Polar Ice Caps (North & South)
  ctx.fillStyle = "#ffffff";
  ctx.globalAlpha = 0.9;
  ctx.fillRect(0, 0, 1024, 45);
  ctx.fillRect(0, 467, 1024, 45);
  ctx.globalAlpha = 1.0;
}

// 2. ROCKY / CRATERED WORLD (Impact Craters, Central Peaks & Ejecta Rays)
function generateRockyTexture(ctx, baseColor, secondaryColor, accentColor) {
  // Charcoal / Warm Brown Base Crust
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 512);

  // Rugged Terrain Noise
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const r = Math.random() * 12 + 2;
    ctx.fillStyle = Math.random() > 0.5 ? secondaryColor : accentColor;
    ctx.globalAlpha = Math.random() * 0.3 + 0.1;
    ctx.fillRect(x, y, r, r);
  }

  // Procedural Impact Craters (Rim + Depressed Pit + Central Peak + Ejecta Rays)
  ctx.globalAlpha = 1.0;
  for (let i = 0; i < 65; i++) {
    const cx = Math.random() * 1024;
    const cy = Math.random() * 512;
    const r = Math.random() * 32 + 8;

    // Ejecta Ray Lines
    ctx.strokeStyle = "rgba(217, 119, 6, 0.25)";
    ctx.lineWidth = 1.5;
    for (let a = 0; a < 6; a++) {
      const angle = Math.random() * Math.PI * 2;
      const len = r * (Math.random() * 2.5 + 1.2);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
      ctx.stroke();
    }

    // Outer Raised Crater Rim
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();

    // Inner Depressed Crater Pit (Dark Shadow)
    ctx.fillStyle = "#171717";
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.75, 0, Math.PI * 2);
    ctx.fill();

    // Central Peak Inside Large Craters
    if (r > 18) {
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

// 3. GAS / ICE GIANT (Distorted Atmospheric Bands & Cyclonic Storm Vortex)
function generateGasTexture(ctx, baseColor, secondaryColor, accentColor) {
  // Deep Blue Base
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 512);

  // Turbulent Wave-Distorted Atmospheric Bands
  for (let y = 0; y < 512; y += 4) {
    const wave = Math.sin(y * 0.03) * 20 + Math.sin(y * 0.08) * 10;
    const opacity = (Math.sin(y * 0.05) + 1) * 0.35 + 0.15;

    ctx.fillStyle = (y % 16 < 8) ? secondaryColor : accentColor;
    ctx.globalAlpha = opacity;
    ctx.fillRect(0, y + wave * 0.2, 1024, 6);
  }

  // Cyclonic Great Oval Storm Spiral
  ctx.globalAlpha = 0.85;
  const stormX = 700;
  const stormY = 320;
  const grad = ctx.createRadialGradient(stormX, stormY, 0, stormX, stormY, 90);
  grad.addColorStop(0.0, accentColor);
  grad.addColorStop(0.5, secondaryColor);
  grad.addColorStop(1.0, "rgba(30, 58, 138, 0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(stormX, stormY, 110, 55, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1.0;
}

// 4. VOLCANIC WORLD (Dark Basalt Crust & Glowing Lava Fissure Networks)
function generateVolcanicTexture(ctx, baseColor, secondaryColor, accentColor) {
  // Dark Basalt Volcanic Crust (80%+ dark)
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 512);

  // Irregular Dark Magma Basalt Regions
  ctx.fillStyle = secondaryColor;
  for (let i = 0; i < 30; i++) {
    const cx = Math.random() * 1024;
    const cy = Math.random() * 512;
    const r = Math.random() * 70 + 20;
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Connected Branching Lava Fissures (Magma Channels)
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.9;
  for (let i = 0; i < 28; i++) {
    let x = Math.random() * 1024;
    let y = Math.random() * 512;
    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let step = 0; step < 6; step++) {
      x += (Math.random() - 0.5) * 80;
      y += (Math.random() - 0.5) * 60;
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Hotspots along lava channels
    ctx.fillStyle = "#ffedd5";
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1.0;
}

// 5. DARK INDUSTRIAL ROCKY WORLD (Rugged Mountain Blocks & Geological Rifts)
function generateDarkRockTexture(ctx, baseColor, secondaryColor, accentColor) {
  // Slate Charcoal Base
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 512);

  // Deep Geological Rifts & Fault Lines
  ctx.strokeStyle = secondaryColor;
  ctx.lineWidth = 8;
  ctx.globalAlpha = 0.6;
  for (let i = 0; i < 18; i++) {
    const x1 = Math.random() * 1024;
    const y1 = Math.random() * 512;
    const x2 = x1 + (Math.random() - 0.5) * 300;
    const y2 = y1 + (Math.random() - 0.5) * 300;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  // Rugged Mineral Block Highlights
  ctx.fillStyle = accentColor;
  ctx.globalAlpha = 0.25;
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const w = Math.random() * 30 + 10;
    const h = Math.random() * 20 + 8;
    ctx.fillRect(x, y, w, h);
  }
  ctx.globalAlpha = 1.0;
}

// 6. ICE / MINERAL WORLD (Voronoi Ice Plates & Glacier Fractures)
function generateIceTexture(ctx, baseColor, secondaryColor, accentColor) {
  // Pale Silver-Blue Base
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 512);

  // Voronoi Tectonic Ice Plate Boundaries
  ctx.strokeStyle = secondaryColor;
  ctx.lineWidth = 5;
  ctx.globalAlpha = 0.65;

  const points = [];
  for (let i = 0; i < 45; i++) {
    points.push({ x: Math.random() * 1024, y: Math.random() * 512 });
  }

  // Draw Tectonic Fractures connecting Ice Plates
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  // Translucent Glacier Crystalline Highlights
  ctx.fillStyle = accentColor;
  ctx.globalAlpha = 0.35;
  for (let i = 0; i < points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, 18, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1.0;
}

// Master Dispatcher selecting the appropriate procedural engine
function createPlanetProceduralTexture(data) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  switch (data.surfaceType) {
    case "terrestrial":
      generateTerrestrialTexture(ctx, data.baseColor, data.secondaryColor, data.accentColor);
      break;
    case "rocky":
      generateRockyTexture(ctx, data.baseColor, data.secondaryColor, data.accentColor);
      break;
    case "gas":
      generateGasTexture(ctx, data.baseColor, data.secondaryColor, data.accentColor);
      break;
    case "volcanic":
      generateVolcanicTexture(ctx, data.baseColor, data.secondaryColor, data.accentColor);
      break;
    case "darkRock":
      generateDarkRockTexture(ctx, data.baseColor, data.secondaryColor, data.accentColor);
      break;
    case "ice":
      generateIceTexture(ctx, data.baseColor, data.secondaryColor, data.accentColor);
      break;
    default:
      generateTerrestrialTexture(ctx, data.baseColor, data.secondaryColor, data.accentColor);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Cloud Texture Generator
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
    ctx.globalAlpha = Math.random() * 0.38 + 0.12;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, Math.random() * 0.4 - 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Saturn-Style Concentric Planetary Ring Texture Generator
function createRingTexture(ringColorHex) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(128, 128, 30, 128, 128, 128);
  gradient.addColorStop(0.0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(0.25, ringColorHex);
  gradient.addColorStop(0.45, "rgba(0, 0, 0, 0.15)");
  gradient.addColorStop(0.65, ringColorHex);
  gradient.addColorStop(0.85, "rgba(255, 255, 255, 0.7)");
  gradient.addColorStop(1.0, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  return new THREE.CanvasTexture(canvas);
}

export default function Planet({
  data,
  orbitConfig,
  sunPosition = [2.0, 0, 0],
  scale = 1,
  isHovered = false,
  onPlanetHover,
  onPlanetLeave,
}) {
  const groupRef = useRef();
  const planetRef = useRef();
  const cloudRef = useRef();
  const planetMaterialRef = useRef();
  const atmosphereMaterialRef = useRef();
  const angleRef = useRef(data.initialAngle ?? 0);

  // Mutable refs for smooth frame-rate independent lerp transitions without React state re-renders
  const hoverScaleRef = useRef(1.0);
  const hoverEmissiveRef = useRef(data.emissiveLava ? 1.2 : 0.0);
  const hoverAtmosphereRef = useRef(0.15);

  // Pre-allocate vector and Euler rotation to prevent per-frame garbage collection allocations in useFrame
  const tempVec = useMemo(() => new THREE.Vector3(), []);
  const euler = useMemo(() => {
    const [rx, ry, rz] = orbitConfig?.rotation || [0, 0, 0];
    return new THREE.Euler(rx, ry, rz, "XYZ");
  }, [orbitConfig?.rotation]);

  // Initial 3D world position calculation for immediate mounting without frame-0 flash
  const initialPosition = useMemo(() => {
    const radius = orbitConfig?.radius || 3;
    return calculateOrbitalWorldPosition(
      radius,
      angleRef.current,
      orbitConfig?.rotation,
      sunPosition,
      scale,
      new THREE.Vector3(),
      euler
    ).toArray();
  }, [orbitConfig, sunPosition, scale, euler]);

  // Create procedural textures cleanly on client
  const [surfaceTexture, cloudTexture, ringTexture] = useMemo(() => {
    if (typeof window === "undefined") return [null, null, null];
    const surface = createPlanetProceduralTexture(data);
    const cloud = data.hasClouds ? createCloudTexture(data.cloudColor || "#ffffff") : null;
    const ring = data.hasRings ? createRingTexture(data.ringColor || "#94a3b8") : null;
    return [surface, cloud, ring];
  }, [data]);

  // Clean up WebGL texture memory on unmount
  useMemo(() => {
    return () => {
      if (surfaceTexture) surfaceTexture.dispose();
      if (cloudTexture) cloudTexture.dispose();
      if (ringTexture) ringTexture.dispose();
    };
  }, [surfaceTexture, cloudTexture, ringTexture]);

  // Continuous frame-rate independent real 3D orbital motion, self-rotation & smooth hover transitions
  useFrame((_, delta) => {
    // 1. Advance orbital angle smoothly over delta time
    const orbitSpeed = data.orbitSpeed ?? 0.05;
    angleRef.current += orbitSpeed * delta;

    // 2. Update 3D orbital world position respecting orbit inclination
    if (groupRef.current) {
      calculateOrbitalWorldPosition(
        orbitConfig?.radius || 3,
        angleRef.current,
        orbitConfig?.rotation,
        sunPosition,
        scale,
        tempVec,
        euler
      );
      groupRef.current.position.copy(tempVec);

      // Smooth hover scale transition (1.00x -> 1.08x)
      const targetScaleMultiplier = isHovered ? 1.08 : 1.0;
      hoverScaleRef.current = THREE.MathUtils.lerp(
        hoverScaleRef.current,
        targetScaleMultiplier,
        delta * 8.0
      );
      groupRef.current.scale.setScalar(hoverScaleRef.current);
    }

    // 3. Planet self-rotation around axis
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * (data.selfRotationSpeed ?? 0.1);
    }

    // 4. Cloud shell self-rotation
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * ((data.selfRotationSpeed ?? 0.1) * 1.3);
    }

    // 5. Smooth material surface emissive/brightness boost on hover
    if (planetMaterialRef.current) {
      const baseEmissive = data.emissiveLava ? 1.2 : 0.0;
      const targetEmissive = isHovered ? (data.emissiveLava ? 1.8 : 0.45) : baseEmissive;
      hoverEmissiveRef.current = THREE.MathUtils.lerp(
        hoverEmissiveRef.current,
        targetEmissive,
        delta * 8.0
      );
      planetMaterialRef.current.emissiveIntensity = hoverEmissiveRef.current;
    }

    // 6. Smooth atmospheric Fresnel glow shell opacity on hover
    if (atmosphereMaterialRef.current) {
      const targetAtmosphereOpacity = isHovered ? 0.65 : 0.15;
      hoverAtmosphereRef.current = THREE.MathUtils.lerp(
        hoverAtmosphereRef.current,
        targetAtmosphereOpacity,
        delta * 8.0
      );
      atmosphereMaterialRef.current.opacity = hoverAtmosphereRef.current;
    }
  });

  // Pointer interaction handlers with cursor feedback
  const handlePointerEnter = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
    if (onPlanetHover) {
      onPlanetHover(data.id);
    }
  };

  const handlePointerLeave = (e) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
    if (onPlanetLeave) {
      onPlanetLeave();
    }
  };

  const scaledSize = data.size * scale;
  const bumpScaleValue = data.surfaceType === "rocky" ? 0.10 : data.surfaceType === "darkRock" ? 0.08 : 0.04;
  const atmosphereGlowColor = data.atmosphereColor || data.accentColor || "#38bdf8";

  return (
    <group
      ref={groupRef}
      position={initialPosition}
      userData={{ planetId: data.id, planetName: data.name }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* 1. Primary 3D Planet Sphere Illuminated by Sun Light */}
      <mesh
        ref={planetRef}
        userData={{ planetId: data.id }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <sphereGeometry args={[scaledSize, 36, 36]} />
        <meshStandardMaterial
          ref={planetMaterialRef}
          map={surfaceTexture}
          bumpMap={surfaceTexture}
          bumpScale={bumpScaleValue}
          roughness={data.roughness ?? 0.55}
          metalness={data.metalness ?? 0.15}
          emissive={data.emissiveLava ? "#b91c1c" : atmosphereGlowColor}
          emissiveMap={data.emissiveLava ? surfaceTexture : null}
          emissiveIntensity={data.emissiveLava ? 1.2 : 0.0}
        />
      </mesh>

      {/* 2. Atmospheric Fresnel Rim Glow Shell */}
      <mesh scale={1.04}>
        <sphereGeometry args={[scaledSize, 24, 24]} />
        <meshStandardMaterial
          ref={atmosphereMaterialRef}
          color={atmosphereGlowColor}
          emissive={atmosphereGlowColor}
          emissiveIntensity={0.8}
          transparent={true}
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Rotating Atmospheric Cloud Shell Layer */}
      {data.hasClouds && cloudTexture && (
        <mesh
          ref={cloudRef}
          scale={1.015}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <sphereGeometry args={[scaledSize, 24, 24]} />
          <meshStandardMaterial
            map={cloudTexture}
            transparent={true}
            opacity={0.55}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* 4. 3D Planetary Ring System (Saturn / Ice Ring Style) */}
      {data.hasRings && ringTexture && (
        <mesh
          rotation={[Math.PI / 2.3, 0.2, 0]}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
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
