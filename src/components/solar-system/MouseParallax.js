"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * MouseParallax - Subtle 3D Scene Parallax Controller
 * Adds cinematic depth-oriented parallax movement to solar system elements responding to user pointer position.
 * Respects viewport size (disabled on mobile) and prefers-reduced-motion accessibility.
 */
export default function MouseParallax({
  children,
  intensityX = 0.25,
  intensityY = 0.15,
  damping = 3.0,
}) {
  const groupRef = useRef();
  const currentOffsetRef = useRef({ x: 0, y: 0 });
  const isMobileOrReducedMotionRef = useRef(false);

  useEffect(() => {
    const checkViewportAndMotion = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      isMobileOrReducedMotionRef.current = isMobile || prefersReducedMotion;
    };

    checkViewportAndMotion();
    window.addEventListener("resize", checkViewportAndMotion);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e) => {
      isMobileOrReducedMotionRef.current = window.innerWidth < 768 || e.matches;
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionChange);
    }

    return () => {
      window.removeEventListener("resize", checkViewportAndMotion);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionChange);
      }
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Disable parallax on mobile viewports or when prefers-reduced-motion is set
    if (isMobileOrReducedMotionRef.current) {
      if (
        Math.abs(currentOffsetRef.current.x) > 0.001 ||
        Math.abs(currentOffsetRef.current.y) > 0.001
      ) {
        currentOffsetRef.current.x = THREE.MathUtils.lerp(
          currentOffsetRef.current.x,
          0,
          delta * damping
        );
        currentOffsetRef.current.y = THREE.MathUtils.lerp(
          currentOffsetRef.current.y,
          0,
          delta * damping
        );
        groupRef.current.position.x = currentOffsetRef.current.x;
        groupRef.current.position.y = currentOffsetRef.current.y;
      }
      return;
    }

    // Normalized pointer coordinates provided natively by R3F: -1 to +1
    const targetX = state.pointer.x * intensityX;
    const targetY = state.pointer.y * intensityY;

    // Frame-rate independent smooth lerp damping without React state updates
    currentOffsetRef.current.x = THREE.MathUtils.lerp(
      currentOffsetRef.current.x,
      targetX,
      delta * damping
    );
    currentOffsetRef.current.y = THREE.MathUtils.lerp(
      currentOffsetRef.current.y,
      targetY,
      delta * damping
    );

    // Apply parallax offset to scene group
    groupRef.current.position.x = currentOffsetRef.current.x;
    groupRef.current.position.y = currentOffsetRef.current.y;
  });

  return <group ref={groupRef}>{children}</group>;
}
