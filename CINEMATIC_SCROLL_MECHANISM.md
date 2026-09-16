# Cinematic 3D Scroll Camera Mechanism Guide

This guide explains the complete architecture, technical mechanism, code snippets, and implementation workflow for the **Step 14 Cinematic 3D Scroll Camera Journey**. You can use this document as a blueprint to re-enable or customize cinematic scroll-driven 3D transitions across any section or page in the future.

---

## 1. High-Level Architecture

The cinematic scroll system is built on a **four-layer decoupled pipeline** designed to run at a solid 60 FPS with zero React component re-renders:

```
┌────────────────────────────────────────────────────────┐
│ 1. Lenis Smooth Scroll Engine                          │
│    Intercepts wheel & touch events for fluid inertia   │
└───────────────────────────┬────────────────────────────┘
                            │ lenis.on('scroll', ScrollTrigger.update)
                            ▼
┌────────────────────────────────────────────────────────┐
│ 2. GSAP ScrollTrigger Controller                        │
│    Pins section & maps scroll distance to progress (0-1)│
└───────────────────────────┬────────────────────────────┘
                            │ Updates mutable ref (scrollProgressRef.current)
                            ▼
┌────────────────────────────────────────────────────────┐
│ 3. R3F Cinematic Camera Controller                     │
│    Interpolates camera position & target via useFrame  │
└───────────────────────────┬────────────────────────────┘
                            │ Additive Group Layer
                            ▼
┌────────────────────────────────────────────────────────┐
│ 4. Mouse Parallax & OrbitControls                      │
│    Independent pointer offset & mouse drag rotation    │
└────────────────────────────────────────────────────────┘
```

---

## 2. Core Components & Mechanism

### A. Normalized Scroll State (`src/lib/scrollState.js`)
To prevent React from re-rendering components on every single scroll frame, the normalized scroll progress (`0.0` to `1.0`) is stored in a lightweight mutable JS reference object.

```js
// src/lib/scrollState.js
export const scrollProgressRef = { current: 0 };

export function getScrollProgressRef() {
  return scrollProgressRef;
}
```

### B. ScrollTrigger Controller (`src/components/scroll/ScrollController.js`)
This component ties the DOM section height to GSAP `ScrollTrigger`. On desktop, it pins the section during the camera journey (`pin: true`, `end: "+=120%"`) and updates `scrollProgressRef.current` with smooth scrub dampening.

```jsx
// src/components/scroll/ScrollController.js
"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { scrollProgressRef } from "@/lib/scrollState";

export default function ScrollController({ triggerRef }) {
  useEffect(() => {
    // Respect reduced motion accessibility
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const targetElement = triggerRef?.current || document.body;
    const isMobile = window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: targetElement,
        start: "top top",
        end: isMobile ? "+=50%" : "+=120%", // Scroll distance for camera journey
        pin: !isMobile,                      // Pin hero on desktop during travel
        scrub: 1,                            // 1-second scrub dampening
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress; // Normalize 0 -> 1
        },
      });
    });

    return () => ctx.revert();
  }, [triggerRef]);

  return null;
}
```

### C. Cinematic 3D Camera Controller (`src/components/solar-system/CinematicCamera.js`)
Inside the Three.js R3F Canvas, `CinematicCamera` reads `scrollProgressRef.current` inside `useFrame` on every frame, interpolating camera position and look-at target across defined keyframe stages.

```jsx
// src/components/solar-system/CinematicCamera.js
"use client";

import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollProgressRef } from "@/lib/scrollState";

// Keyframe stages mapping scroll progress (0 -> 1) to camera position & target
const CAMERA_STAGES = [
  { progress: 0.00, pos: [0.0, 0.0, 8.8], target: [3.1, 0.1, 0.0] }, // Stage 1: Hero Overhead
  { progress: 0.25, pos: [0.8, 0.4, 7.0], target: [3.0, 0.2, 0.0] }, // Stage 2: Enter Universe
  { progress: 0.50, pos: [1.8, 0.8, 5.0], target: [2.8, 0.1, 0.0] }, // Stage 3: Deep Exploration
  { progress: 0.75, pos: [2.2, 0.6, 4.2], target: [2.4, 0.0, 0.0] }, // Stage 4: Close Planet Pass
  { progress: 1.00, pos: [1.0, -1.2, 6.2], target: [1.5, -1.0, 0.0] }, // Stage 5: Exit Transition
];

export default function CinematicCamera() {
  const { camera, controls } = useThree();
  const targetPosRef = useRef(new THREE.Vector3(0, 0, 8.8));
  const targetLookRef = useRef(new THREE.Vector3(3.1, 0.1, 0));
  const currentLookRef = useRef(new THREE.Vector3(3.1, 0.1, 0));

  useFrame((_, delta) => {
    const rawProgress = scrollProgressRef.current || 0;
    const p = Math.max(0, Math.min(1, rawProgress));

    // Find current keyframe stage segment
    let stageIndex = 0;
    for (let i = 0; i < CAMERA_STAGES.length - 1; i++) {
      if (p >= CAMERA_STAGES[i].progress && p <= CAMERA_STAGES[i + 1].progress) {
        stageIndex = i;
        break;
      }
    }

    const s1 = CAMERA_STAGES[stageIndex];
    const s2 = CAMERA_STAGES[stageIndex + 1] || s1;
    const stageRange = s2.progress - s1.progress || 1;
    const localFactor = (p - s1.progress) / stageRange;
    const easedFactor = THREE.MathUtils.smoothstep(localFactor, 0, 1);

    // Interpolate Target Camera Position
    targetPosRef.current.set(
      THREE.MathUtils.lerp(s1.pos[0], s2.pos[0], easedFactor),
      THREE.MathUtils.lerp(s1.pos[1], s2.pos[1], easedFactor),
      THREE.MathUtils.lerp(s1.pos[2], s2.pos[2], easedFactor)
    );

    // Interpolate Target Look-At Focus Point
    targetLookRef.current.set(
      THREE.MathUtils.lerp(s1.target[0], s2.target[0], easedFactor),
      THREE.MathUtils.lerp(s1.target[1], s2.target[1], easedFactor),
      THREE.MathUtils.lerp(s1.target[2], s2.target[2], easedFactor)
    );

    // Pause scroll override when user actively mouse-drags the OrbitControls
    const isUserDragging = controls && controls.state !== -1;

    if (!isUserDragging) {
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
```

---

## 3. How to Enable & Customize for Future Sections

When you want to add cinematic scroll-triggered 3D camera journeys to future sections (e.g. Services, Solutions, or Case Studies):

### Step 1: Create a Ref for the Section
Wrap the target section container with a React `useRef`:
```jsx
const sectionRef = useRef(null);

<section ref={sectionRef} className="...">
  <ScrollController triggerRef={sectionRef} />
  ...
</section>
```

### Step 2: Define Custom Keyframe Stages
Customize `CAMERA_STAGES` positions `[X, Y, Z]` and lookAt targets `[X, Y, Z]` to create custom fly-throughs:
- **`pos`**: Where the camera travels in 3D space (`z` controls zoom/distance, `x` controls left/right shift, `y` controls elevation).
- **`target`**: The exact focal point the camera points toward during that segment.

### Step 3: Adjust Scroll Distance & Pinning
In `ScrollController.js`, adjust `end`:
- `end: "+=100%"` = 1 full viewport height of scroll travel.
- `end: "+=150%"` = 1.5 viewport heights of deep cinematic travel.
- `pin: true` = Pins the section visually until the camera sequence completes.

---

## 4. Key Performance & Best Practices

1. **Zero State Re-renders**: Never update React `useState` inside `onUpdate` or `useFrame`. Always use mutable refs (`scrollProgressRef.current`).
2. **Layer Independence**: Keep 3D `MouseParallax` on a wrapper `<group>` inside the scene so mouse parallax and scroll camera travel work simultaneously without property conflicts.
3. **Mouse Interaction Handling**: Ensure `<OrbitControls makeDefault />` is used so user mouse drag gestures (`controls.state !== -1`) yield camera control smoothly.
4. **Accessibility Check**: Always check `window.matchMedia("(prefers-reduced-motion: reduce)").matches`. If active, bypass pinning and complex camera shifts to allow standard browser scrolling.

---

*File generated for Techno Mantra platform architecture.*
