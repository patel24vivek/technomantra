# Technomantra — System Design & Architecture Overview

This document provides a comprehensive technical overview of the **Technomantra** web application, detailing its business domain, technology stack, system design, directory hierarchy, 3D WebGL architecture, animation pipeline, and routing structure for engineers and AI coding assistants.

---

## 1. Executive Summary & Brand Identity

- **Brand**: **Technomantra**
- **Domain**: Premium full-cycle digital transformation, custom enterprise software engineering, SaaS cloud architecture, enterprise ERP integrations, and bespoke brand experiences.
- **Visual Aesthetic**: Cosmic dark mode (`#030712`), obsidian glassmorphism, luminous celestial accents (gold `#d6a85f`, electric cyan `#38bdf8`, azure `#60a5fa`), silky smooth 60fps micro-animations, and interactive 3D WebGL scenes.

---

## 2. Core Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.3.5` | Modern server-side rendering, routing, static optimization |
| **UI Library** | React | `19.2.8` | Component-driven UI architecture & concurrent rendering |
| **Styling** | Tailwind CSS & CSS Variables | `v4.0` | Atomic styling, design tokens, cosmic radial themes |
| **3D Engine** | Three.js | `0.186.0` | WebGL rendering, PBR shaders, texture pipelines |
| **3D React Layer** | `@react-three/fiber` | `9.7.0` | Declarative Three.js scene graph in React |
| **3D Helpers** | `@react-three/drei` | `10.7.8` | Camera controls, stars, helpers, orbit managers |
| **Smooth Scrolling**| Lenis | `1.3.26` | Hardware-accelerated inertial smooth scroll |
| **Motion & Scroll** | GSAP (GreenSock) + ScrollTrigger | `3.15.0` | Frame-accurate cinematic scroll animations |

---

## 3. Architecture & Directory Structure

```
technomantra-site/
├── public/
│   ├── favicon.ico
│   └── textures/                     # Photorealistic 8K celestial maps
│       ├── 8k_earth.jpg / earth.jpg   # Earth surface & ocean specular maps
│       ├── 8k_stars.jpg / stars.jpg   # Deep-space cosmic starry skybox
│       ├── 8k_sun.jpg / sun.jpg       # Solar photosphere textures
│       ├── jupiter.jpg                # Gas giant bands & Great Red Spot
│       ├── mars.jpg                   # Martian iron-oxide topography
│       ├── mercury.jpg                # Cratered silicate regolith
│       ├── neptune.jpg                # Azure methane stormy atmosphere
│       ├── saturn.jpg                 # Saturn golden atmosphere
│       ├── saturn_ring.png            # High-resolution Cassini ring transparency map
│       ├── uranus.jpg                 # Cyan ice giant atmosphere
│       └── venus.jpg                  # Dense reflective sulfuric cloud cover
│
├── src/
│   ├── app/                           # Next.js App Router Pages
│   │   ├── layout.js                  # Root Layout (Font configs, Lenis, Theme wrapper)
│   │   ├── page.js                    # Homepage (Hero 3D, What We Do, Services, etc.)
│   │   ├── globals.css                # Global CSS tokens, custom utilities, radial gradients
│   │   ├── about/page.js              # Full About Us Page
│   │   ├── services/page.js           # Services Matrix Page
│   │   ├── solutions/page.js          # Enterprise Solutions Page
│   │   ├── industries/page.js         # Dedicated Industry Sectors Page
│   │   ├── projects/page.js           # Selected Work & Case Studies Page
│   │   ├── insights/                  # Blog & Engineering Insights
│   │   │   ├── page.js                # Insights Hub Page
│   │   │   └── [slug]/page.js         # Dynamic Insight Article Page
│   │   └── contact/page.js            # Contact & Project Inquiries Page
│   │
│   └── components/                    # Modular Component System
│       ├── layout/                    # Global Layout (Navbar, Mobile Menu, Footer)
│       ├── hero/                      # Hero Section, Titles, Actions, Scroll Button
│       ├── solar-system/              # Photorealistic 3D Solar System Engine
│       │   ├── SolarSystem.js         # Canvas host with WebGL fallback & Suspense
│       │   ├── SpaceScene.js          # Master 3D scene (Sun, Planets, Belt, Orbits, Fog)
│       │   ├── Planet.js              # PBR Planet mesh + Rings + Atmospheric Rim Glow
│       │   ├── Planets.js             # 8-planet declarative manager
│       │   ├── planetData.js          # Planetary astronomical & PBR configurations
│       │   ├── Sun.js                 # Solar photosphere + corona flares + pointLight
│       │   ├── AsteroidBelt.js        # Instanced 3D asteroid field (750+ bodies)
│       │   ├── Orbits.js              # 3D elliptical planetary orbit lines
│       │   ├── orbitMath.js           # 3D inclination & orbital motion trigonometry
│       │   ├── Stars.js               # 8K cosmic skybox + scintillating 3D particles
│       │   ├── MouseParallax.js       # Inertial mouse cursor parallax controller
│       │   └── CinematicCamera.js     # Scroll-driven 3D camera controller
│       │
│       ├── scroll/                    # GSAP ScrollTrigger Controllers & Smooth Scroll
│       ├── what-we-do/                # Section 02: Value proposition & core philosophy
│       ├── services/                  # Section 03: Service cards & capabilities
│       ├── responsive/                # Section: Responsive by design showcase
│       ├── solutions/                 # Section 04: SaaS, Enterprise, API architecture
│       ├── industries/                # Section 05: Healthcare, Finance, Logistics, etc.
│       ├── projects/                  # Section 06: Selected case studies
│       └── insights/                  # Section 07: Featured blog posts & research
```

---

## 4. 3D WebGL Solar System Architecture

The homepage hero features an astronomically accurate, interactive 3D Solar System simulation built with Three.js and React Three Fiber.

### 4.1 Planetary Configuration & PBR Specifications

All 8 planets are arranged in true astronomical sequence outward from the Sun:

| # | Celestial Body | Orbit Radius | Size | Speed | Texture Map | PBR Roughness / Metalness | Optical Feature |
|:-:|:---|:---:|:---:|:---:|:---|:---:|:---|
| ☀️ | **Sun** | `0.0` | `1.28` | - | `sun.jpg` | - | Emissive corona flares & omnidirectional point light |
| 1 | **Mercury** | `2.2` | `0.22` | `0.16` | `mercury.jpg` | `1.00` / `0.02` | Cratered non-reflective regolith |
| 2 | **Venus** | `3.0` | `0.30` | `0.11` | `venus.jpg` | `0.60` / `0.05` | Dense golden sulfuric cloud atmosphere |
| 3 | **Earth** | `3.9` | `0.34` | `0.085`| `earth.jpg` | `0.50` / `0.01` | Ocean specularity + Fresnel atmosphere rim |
| 4 | **Mars** | `4.8` | `0.26` | `0.065`| `mars.jpg` | `0.75` / `0.02` | Oxidized iron-oxide terrain & polar caps |
| 🌌 | **Asteroid Belt**| `5.3 - 5.9` | `0.03` | Dynamic| Procedural | `0.45` / `0.65` | 750 instanced deformed asteroids |
| 5 | **Jupiter** | `6.5` | `0.52` | `0.042`| `jupiter.jpg` | `0.90` / `0.00` | Gas giant bands & Great Red Spot |
| 6 | **Saturn** | `8.0` | `0.44` | `0.030`| `saturn.jpg` | `0.90` / `0.00` | Wide photorealistic Cassini ring disk (`saturn_ring.png`) |
| 7 | **Uranus** | `9.4` | `0.35` | `0.022`| `uranus.jpg` | `0.85` / `0.00` | Cyan/aquamarine methane ice giant |
| 8 | **Neptune** | `10.8` | `0.35` | `0.016`| `neptune.jpg` | `0.85` / `0.00` | Deep azure blue supersonic storm giant |

### 4.2 Mathematical Orbital Trigonometry
Orbital positions are computed in `orbitMath.js` using inclination matrices:
```javascript
export function calculateOrbitalWorldPosition(radius, angle, rotationEuler, sunPos, scale, targetVec, euler) {
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  targetVec.set(x, 0, z).applyEuler(euler).multiplyScalar(scale).add(sunPos);
  return targetVec;
}
```

### 4.3 High-Fidelity Saturn Ring Rendering
Saturn's rings utilize radial UV coordinate remapping on `THREE.RingGeometry`:
- Radial distance $r = \sqrt{x^2 + y^2}$ maps normalized $u \in [0, 1]$ directly to the 2048px NASA Cassini ring texture cross-section.
- Tilted at a cinematic $\approx 55^\circ$ angle (`[Math.PI / 3.0, 0.28, -0.15]`) to display the full oval face and Cassini division gaps.

---

## 5. Routing & Page Architecture

1. **Homepage (`/`)**:
   - Section 01: Interactive 3D Solar System Hero + Scroll-down CTA
   - Section 02: What We Do (Engineering philosophy)
   - Section 03: Core Services Grid
   - Section 04: Responsive by Design Showcase
   - Section 05: Enterprise Solutions (SaaS, ERP, Cloud)
   - Section 06: Industries Matrix
   - Section 07: Selected Client Work & Case Studies
   - Section 08: Insights & Research
   - Footer: Comprehensive multi-column navigation & social links

2. **About Us (`/about`)**:
   - Company Mission, Vision, Values, Leadership & Technical Capabilities.

3. **Services (`/services`)**:
   - Detailed breakdown of Custom Software, Web Apps, Cloud Architecture, Native Apps, and ERP Systems.

4. **Solutions (`/solutions`)**:
   - Enterprise Modernization, Microservices, Real-time APIs, and Scalable Infrastructure.

5. **Industries (`/industries`)**:
   - Tailored technical solutions for Manufacturing, Finance, Healthcare, Logistics, Education, and Retail.

6. **Projects (`/projects`)**:
   - Detailed client case studies, technical stacks used, problem-solution summaries, and measurable results.

7. **Insights (`/insights` & `/insights/[slug]`)**:
   - Tech blog hub with dynamic article slug routing for engineering deep-dives and architectural research.

8. **Contact (`/contact`)**:
   - Project inquiry forms, office details, interactive communication channels.

---

## 6. Design System & Global Styles

- **Color Tokens**:
  - `--background`: `#030712` (Deep Cosmic Dark)
  - `--foreground`: `#f8fafc` (Slate Crisp White)
  - `--accent-gold`: `#d6a85f` (Warm Celestial Gold)
  - `--accent-cyan`: `#38bdf8` (Electric Cyan)
  - `--accent-blue`: `#60a5fa` (Azure Light)
  - `--surface-glass`: `rgba(15, 23, 42, 0.75)` (Glassmorphism backdrop)
  - `--border-subtle`: `rgba(255, 255, 255, 0.08)`
- **Interactive Cursor States**:
  - Hover states on 3D planets trigger cursor changes, scale lerping ($1.00\times \to 1.08\times$), and atmospheric Fresnel glow brightness boosts.
- **Responsive Viewports**:
  - Automatic tier adaptation (Mobile `<768px`, Tablet `768px-1024px`, Desktop `>1024px`) adjusting sun positions, camera FOV, and orbit scaling dynamically.

---

## 7. Developer Instructions

- **Local Development**: `npm run dev` (Runs Next.js hot-reloading dev server on port 3000).
- **Asset Placement**: All static 3D textures must reside in `/public/textures/` and be referenced with absolute web paths (e.g., `/textures/earth.jpg`).
- **Dependencies**: React 19 and Three.js 0.186. Avoid altering package versions without testing React 19 hook compatibility.
