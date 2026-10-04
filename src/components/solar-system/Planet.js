"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { calculateOrbitalWorldPosition } from "./orbitMath";

// Global Texture Cache for instantaneous asset reuse across renders & zero memory leaks
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
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  textureCache.set(path, texture);
  return texture;
}

// Generates radial UV-mapped ring geometry for authentic concentric Saturn ring structure
function createRadialRingGeometry(innerRadius, outerRadius, thetaSegments = 128) {
  const geometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, 16);
  const pos = geometry.attributes.position;
  const uv = geometry.attributes.uv;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const r = Math.sqrt(x * x + y * y);
    const u = Math.min(Math.max((r - innerRadius) / (outerRadius - innerRadius), 0), 1);
    uv.setXY(i, u, 0.5);
  }
  uv.needsUpdate = true;
  return geometry;
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
  const planetMaterialRef = useRef();
  const atmosphereMaterialRef = useRef();
  const angleRef = useRef(data.initialAngle ?? 0);

  // Mutable refs for smooth frame-rate independent lerp transitions
  const hoverScaleRef = useRef(1.0);
  const hoverEmissiveRef = useRef(0.0);
  const hoverAtmosphereRef = useRef(0.12);

  // Pre-allocate vector and Euler rotation to prevent per-frame garbage collection
  const tempVec = useMemo(() => new THREE.Vector3(), []);
  const euler = useMemo(() => {
    const [rx, ry, rz] = orbitConfig?.rotation || [0, 0, 0];
    return new THREE.Euler(rx, ry, rz, "XYZ");
  }, [orbitConfig?.rotation]);

  // Initial 3D world position calculation for immediate mount
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

  // Load high-resolution photographic celestial surface & ring textures
  const surfaceTexture = useMemo(() => {
    return getCachedTexture(data.texture);
  }, [data.texture]);

  const ringTexture = useMemo(() => {
    return data.hasRings && data.ringTexture ? getCachedTexture(data.ringTexture) : null;
  }, [data.hasRings, data.ringTexture]);

  const scaledSize = data.size * scale;

  // Build radial UV-mapped ring geometry for Saturn-style rings
  const ringGeometry = useMemo(() => {
    if (!data.hasRings) return null;
    const inner = scaledSize * (data.ringInnerRatio || 1.35);
    const outer = scaledSize * (data.ringOuterRatio || 2.75);
    return createRadialRingGeometry(inner, outer, 128);
  }, [data.hasRings, data.ringInnerRatio, data.ringOuterRatio, scaledSize]);

  // Frame-rate independent 3D orbital revolution, self-rotation & hover animation
  useFrame((_, delta) => {
    // 1. Orbital motion
    const orbitSpeed = data.orbitSpeed ?? 0.05;
    angleRef.current += orbitSpeed * delta;

    // 2. Position updates
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
      const targetScale = isHovered ? 1.08 : 1.0;
      hoverScaleRef.current = THREE.MathUtils.lerp(
        hoverScaleRef.current,
        targetScale,
        delta * 8.0
      );
      groupRef.current.scale.setScalar(hoverScaleRef.current);
    }

    // 3. Planet self-rotation around its axial tilt
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * (data.selfRotationSpeed ?? 0.1);
    }

    // 4. Smooth material surface emissive boost on hover
    if (planetMaterialRef.current) {
      const targetEmissive = isHovered ? 0.35 : 0.0;
      hoverEmissiveRef.current = THREE.MathUtils.lerp(
        hoverEmissiveRef.current,
        targetEmissive,
        delta * 8.0
      );
      planetMaterialRef.current.emissiveIntensity = hoverEmissiveRef.current;
    }

    // 5. Smooth atmospheric Fresnel rim glow on hover
    if (atmosphereMaterialRef.current) {
      const targetAtmosphereOpacity = isHovered ? 0.55 : 0.12;
      hoverAtmosphereRef.current = THREE.MathUtils.lerp(
        hoverAtmosphereRef.current,
        targetAtmosphereOpacity,
        delta * 8.0
      );
      atmosphereMaterialRef.current.opacity = hoverAtmosphereRef.current;
    }
  });

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

  const atmosphereGlowColor = data.atmosphereColor || "#38bdf8";

  return (
    <group
      ref={groupRef}
      position={initialPosition}
      userData={{ planetId: data.id, planetName: data.name }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* 1. Photorealistic 3D Planet Sphere (64x64 Tessellation + PBR Standard Material) */}
      <mesh
        ref={planetRef}
        userData={{ planetId: data.id }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[scaledSize, 64, 64]} />
        <meshStandardMaterial
          ref={planetMaterialRef}
          map={surfaceTexture}
          bumpMap={surfaceTexture}
          bumpScale={data.bumpScale || 0.015}
          roughness={data.roughness ?? 0.7}
          metalness={data.metalness ?? 0.02}
          emissive={atmosphereGlowColor}
          emissiveIntensity={0.0}
        />
      </mesh>

      {/* 2. Atmospheric Fresnel Rim Glow Shell */}
      {data.hasAtmosphere && (
        <mesh scale={1.035}>
          <sphereGeometry args={[scaledSize, 32, 32]} />
          <meshStandardMaterial
            ref={atmosphereMaterialRef}
            color={atmosphereGlowColor}
            emissive={atmosphereGlowColor}
            emissiveIntensity={0.8}
            transparent={true}
            opacity={0.12}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* 3. Photorealistic Saturn Planetary Ring System (Wide Cinematic Tilt & Concentric Mapping) */}
      {data.hasRings && ringTexture && ringGeometry && (
        <mesh
          geometry={ringGeometry}
          rotation={[Math.PI / 3.0, 0.28, -0.15]}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <meshBasicMaterial
            map={ringTexture}
            transparent={true}
            opacity={0.96}
            side={THREE.DoubleSide}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      )}
    </group>
  );
}
