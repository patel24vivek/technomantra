"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Stars, Text } from "@react-three/drei";

function InteractiveShape() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.3 : hovered ? 1.15 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color={hovered ? "#818cf8" : "#6366f1"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={clicked}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#c7d2fe" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#38bdf8" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1.5} />
      
      <InteractiveShape />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
      />
    </>
  );
}
