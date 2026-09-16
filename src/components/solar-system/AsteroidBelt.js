"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Generate rich, cyan mineral texture for ice-diamond asteroids
function createAsteroidTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  // Cool slate cyan-blue base
  const baseGrad = ctx.createLinearGradient(0, 0, 256, 256);
  baseGrad.addColorStop(0, "#0f172a");
  baseGrad.addColorStop(0.5, "#1e293b");
  baseGrad.addColorStop(1, "#334155");
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 256, 256);

  // Irregular electric cyan mineral crystal highlights & crater details
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const r = Math.random() * 6 + 1;
    ctx.fillStyle = Math.random() > 0.4 ? "#7dd3fc" : "#0284c7";
    ctx.globalAlpha = Math.random() * 0.45 + 0.15;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Generate glowing diamond dust particle texture
function createParticleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
  grad.addColorStop(0.3, "rgba(56, 189, 248, 0.85)");
  grad.addColorStop(0.7, "rgba(2, 132, 199, 0.2)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  return new THREE.CanvasTexture(canvas);
}

export default function AsteroidBelt({
  count = 750,
  innerRadius = 4.1,
  outerRadius = 4.7,
  sunPosition = [3.2, 0.2, 0],
  scale = 0.65,
}) {
  const meshRef = useRef();
  const dustRef = useRef();

  // Create procedural textures cleanly on client
  const [rockTexture, particleTexture] = useMemo(() => {
    if (typeof window === "undefined") return [null, null];
    return [createAsteroidTexture(), createParticleTexture()];
  }, []);

  // Clean up WebGL texture memory on unmount
  useMemo(() => {
    return () => {
      if (rockTexture) rockTexture.dispose();
      if (particleTexture) particleTexture.dispose();
    };
  }, [rockTexture, particleTexture]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const euler = useMemo(() => new THREE.Euler(0.38, -0.1, 0.08, "XYZ"), []);

  // Precompute random 3D asteroid transform data
  const asteroidsData = useMemo(() => {
    const data = [];

    for (let i = 0; i < count; i++) {
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 0.55;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const tempEuler = new THREE.Euler(0.38, -0.1, 0.08, "XYZ");
      const pos = new THREE.Vector3(x, height, z).applyEuler(tempEuler);

      const scaleVal = Math.random() * 0.048 + 0.015;
      const rotSpeedX = (Math.random() - 0.5) * 0.9;
      const rotSpeedY = (Math.random() - 0.5) * 0.9;

      data.push({
        pos,
        angle,
        radius,
        height,
        scale: scaleVal,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotSpeedX,
        rotSpeedY,
        orbitSpeed: (0.045 + Math.random() * 0.02) * (1 / Math.sqrt(radius)),
      });
    }
    return data;
  }, [count, innerRadius, outerRadius]);

  // Precompute glowing diamond dust particles floating along the belt
  const dustPositions = useMemo(() => {
    const dustCount = 450;
    const positions = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      const radius = innerRadius - 0.2 + Math.random() * (outerRadius - innerRadius + 0.4);
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 0.7;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const tempEuler = new THREE.Euler(0.38, -0.1, 0.08, "XYZ");
      const pos = new THREE.Vector3(x, height, z).applyEuler(tempEuler);

      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
    }
    return positions;
  }, [innerRadius, outerRadius]);

  // Create rugged deformed asteroid geometry (icosahedron with jittered noise)
  const asteroidGeometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 1);
    const posAttr = geo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      const vz = posAttr.getZ(i);

      const noise = (Math.random() - 0.5) * 0.3;
      posAttr.setXYZ(i, vx + vx * noise, vy + vy * noise, vz + vz * noise);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Continuous frame animation: revolve belt around Sun & spin individual asteroids
  useFrame((_, delta) => {
    if (meshRef.current) {
      for (let i = 0; i < count; i++) {
        const ast = asteroidsData[i];

        ast.angle += ast.orbitSpeed * delta * 0.4;
        ast.rotX += ast.rotSpeedX * delta;
        ast.rotY += ast.rotSpeedY * delta;

        const x = Math.cos(ast.angle) * ast.radius;
        const z = Math.sin(ast.angle) * ast.radius;

        ast.pos.set(x, ast.height, z).applyEuler(euler);

        dummy.position.copy(ast.pos);
        dummy.rotation.set(ast.rotX, ast.rotY, 0);
        dummy.scale.set(ast.scale, ast.scale * 0.85, ast.scale);
        dummy.updateMatrix();

        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }

    // Slow ambient rotation of diamond dust particle ring
    if (dustRef.current) {
      dustRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group position={sunPosition} scale={scale}>
      {/* 1. Luminous Cyan Crystal Asteroids */}
      <instancedMesh
        ref={meshRef}
        args={[asteroidGeometry, null, count]}
      >
        <meshStandardMaterial
          map={rockTexture}
          bumpMap={rockTexture}
          bumpScale={0.14}
          roughness={0.45}
          metalness={0.65}
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.35}
          emissiveMap={rockTexture}
        />
      </instancedMesh>

      {/* 2. Radiant Diamond Dust & Micro-Glow Particle Halo */}
      {particleTexture && (
        <points ref={dustRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={dustPositions.length / 3}
              array={dustPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            map={particleTexture}
            size={0.12}
            transparent={true}
            opacity={0.75}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>
      )}
    </group>
  );
}
