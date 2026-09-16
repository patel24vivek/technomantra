"use client";

import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollProgressRef } from "@/lib/scrollState";

/**
 * Multi-Stage Camera Path Keyframes
 * Stage 1 (0.00 -> 0.25): Initial Hero View (x: 0, y: 0, z: 8.8 -> target: [3.1, 0.1, 0])
 * Stage 2 (0.25 -> 0.50): Enter Digital Universe (x: 0.8, y: 0.4, z: 7.2 -> target: [3.0, 0.2, 0])
 * Stage 3 (0.50 -> 0.75): Deep Service Planet Exploration (x: 1.4, y: 0.6, z: 5.8 -> target: [2.6, 0.1, 0])
 * Stage 4 (0.75 -> 1.00): Transition to Next Section (x: 0.8, y: -0.8, z: 6.8 -> target: [1.5, -1.0, 0])
 */
const DESKTOP_CAMERA_STAGES = [
  { progress: 0.00, pos: [0.0, 0.0, 8.8], target: [3.1, 0.1, 0.0] },
  { progress: 0.25, pos: [0.8, 0.4, 7.0], target: [3.0, 0.2, 0.0] },
  { progress: 0.50, pos: [1.8, 0.8, 5.0], target: [2.8, 0.1, 0.0] },
  { progress: 0.75, pos: [2.2, 0.6, 4.2], target: [2.4, 0.0, 0.0] },
  { progress: 1.00, pos: [1.0, -1.2, 6.2], target: [1.5, -1.0, 0.0] },
];

const TABLET_CAMERA_STAGES = [
  { progress: 0.00, pos: [0.0, 0.0, 9.6], target: [1.2, -0.4, 0.0] },
  { progress: 0.50, pos: [0.8, 0.4, 7.5], target: [1.2, -0.2, 0.0] },
  { progress: 1.00, pos: [0.4, -0.8, 8.0], target: [0.8, -0.8, 0.0] },
];

export default function CinematicCamera() {
  const { camera, controls } = useThree();
  const targetPosRef = useRef(new THREE.Vector3(0, 0, 8.8));
  const targetLookRef = useRef(new THREE.Vector3(3.1, 0.1, 0));
  const currentLookRef = useRef(new THREE.Vector3(3.1, 0.1, 0));
  const deviceModeRef = useRef("desktop");
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    const checkViewportAndMotion = () => {
      const width = window.innerWidth;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      prefersReducedMotionRef.current = prefersReducedMotion;

      if (width < 768) {
        deviceModeRef.current = "mobile";
      } else if (width < 1024) {
        deviceModeRef.current = "tablet";
      } else {
        deviceModeRef.current = "desktop";
      }
    };

    checkViewportAndMotion();
    window.addEventListener("resize", checkViewportAndMotion);
    return () => window.removeEventListener("resize", checkViewportAndMotion);
  }, []);

  useFrame((_, delta) => {
    const rawProgress = scrollProgressRef.current || 0;
    const p = Math.max(0, Math.min(1, rawProgress));

    if (prefersReducedMotionRef.current) {
      // Reduced motion: static subtle look-at without camera travel
      targetPosRef.current.set(0, 0, 8.8);
      targetLookRef.current.set(3.1, 0.1, 0);
    } else if (deviceModeRef.current === "mobile") {
      // Simplified portrait-optimized camera framing for mobile
      targetPosRef.current.set(0, -1.0 - p * 0.4, 10.5 - p * 0.8);
      targetLookRef.current.set(0, -1.0 - p * 0.3, 0);
    } else {
      // Use desktop or tablet camera stage arrays
      const stages =
        deviceModeRef.current === "tablet" ? TABLET_CAMERA_STAGES : DESKTOP_CAMERA_STAGES;

      let stageIndex = 0;
      for (let i = 0; i < stages.length - 1; i++) {
        if (p >= stages[i].progress && p <= stages[i + 1].progress) {
          stageIndex = i;
          break;
        }
      }

      const s1 = stages[stageIndex];
      const s2 = stages[stageIndex + 1] || s1;
      const stageRange = s2.progress - s1.progress || 1;
      const localFactor = (p - s1.progress) / stageRange;
      const easedFactor = THREE.MathUtils.smoothstep(localFactor, 0, 1);

      // Lerp Position
      targetPosRef.current.set(
        THREE.MathUtils.lerp(s1.pos[0], s2.pos[0], easedFactor),
        THREE.MathUtils.lerp(s1.pos[1], s2.pos[1], easedFactor),
        THREE.MathUtils.lerp(s1.pos[2], s2.pos[2], easedFactor)
      );

      // Lerp Look-At Target
      targetLookRef.current.set(
        THREE.MathUtils.lerp(s1.target[0], s2.target[0], easedFactor),
        THREE.MathUtils.lerp(s1.target[1], s2.target[1], easedFactor),
        THREE.MathUtils.lerp(s1.target[2], s2.target[2], easedFactor)
      );
    }

    // Check if user is actively interacting/dragging OrbitControls
    const isUserDragging = controls && controls.state !== -1;

    if (!isUserDragging) {
      // Frame-rate independent smooth camera interpolation (damping = 4.5)
      const damp = Math.min(1, delta * 4.5);
      camera.position.lerp(targetPosRef.current, damp);
      currentLookRef.current.lerp(targetLookRef.current, damp);

      if (controls) {
        controls.target.copy(currentLookRef.current);
        controls.update();
      } else {
        camera.lookAt(currentLookRef.current);
      }
    }
  });

  return null;
}
