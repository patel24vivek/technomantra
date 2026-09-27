# TechnoMantra About Page — Hero Section Specification

## 1. Purpose

Build the **About Page Hero** for the TechnoMantra Next.js website.

The hero should immediately communicate:

> **Technology built around the way businesses work.**

This is an About-page introduction, not a second copy of the homepage Hero.

The visual language should feel connected to the existing TechnoMantra brand and its space/solar-system concept, while remaining significantly lighter and simpler than the homepage's full 3D Hero.

### Core design direction

- Premium
- Professional
- Minimal
- Editorial
- Modern B2B technology
- Strong typography
- Generous whitespace
- Sophisticated space-inspired visual
- Restrained animation
- No generic SaaS-template appearance
- No cyberpunk/gaming aesthetic
- No excessive glassmorphism
- No unnecessary particles
- No heavy 3D scene

---

# 2. Important Existing Project Rules

Before implementation:

- Project uses **Next.js**
- Use **JavaScript / JSX only**
- Do NOT create `.ts` or `.tsx` files
- Do NOT introduce TypeScript
- Reuse the existing design system
- Reuse existing fonts if already configured
- Reuse existing colors and spacing where possible
- Reuse the existing navbar
- Reuse the existing global Footer
- Do not create a duplicate navbar
- Do not create a duplicate Footer

## Critical Hero Rule

The homepage Hero already contains the completed Three.js solar-system experience.

**DO NOT MODIFY IT.**

This About-page Hero must be an independent section/component.

Do not import or reuse the homepage Hero's Three.js scene unless the existing architecture explicitly supports a safe visual-only reuse.

Prefer a lightweight DOM/CSS/SVG visual for this page.

---

# 3. Recommended Component

Create:

```text
components/about/AboutHero.jsx
```

If the project already has a different About-page component structure, follow that convention.

The component should remain self-contained.

Suggested structure:

```text
components/
└── about/
    └── AboutHero.jsx
```

---

# 4. Hero Content

## Eyebrow

```text
ABOUT TECHNOMANTRA
```

Style:

- Small
- Uppercase
- Letter spacing
- Medium weight
- Subtle contrast
- Positioned above the main heading

---

# 5. Main Heading

Use:

```text
Technology built
around the way
businesses work.
```

Desktop should preferably appear as:

```text
Technology built
around the way
businesses work.
```

Do not force this exact line break on every screen.

Use responsive typography and allow the browser to determine appropriate wrapping.

### Heading characteristics

- Large editorial typography
- Strong weight
- Tight line height
- High contrast
- Maximum width controlled carefully
- No text shadow
- No glowing text

The heading should be the dominant textual element.

---

# 6. Supporting Copy

Use:

```text
We design and develop digital products, business software
and technology solutions that help businesses work smarter,
serve customers better and grow with confidence.
```

The copy should have a readable maximum width.

Desktop:

```text
max-width: 520px;
```

approximately.

Mobile:

```text
width: 100%;
```

with comfortable side padding.

Do not make the paragraph too large.

The heading communicates the idea.

The paragraph explains it.

---

# 7. Scroll Indicator

Add a subtle scroll indicator below the introductory content.

Example:

```text
↓
Scroll to explore
```

or:

```text
↓  Scroll to explore
```

The arrow can have a very subtle vertical animation.

Animation must be:

- Slow
- Small
- Elegant
- Non-distracting

Do not make it bounce aggressively.

---

# 8. Hero Visual

The right side of the Hero should contain a **large abstract planetary/orbital visual**.

The purpose is to connect the About page to TechnoMantra's space concept.

However:

## Do NOT recreate the homepage solar system.

The About Hero should feel calmer.

### Recommended visual

Use:

- Large partial planet
- Thin orbital rings
- Very subtle stars
- Soft atmospheric lighting
- Small distant orbital object
- Minimal abstract data/technology details

The planet should partially extend beyond the right edge of the viewport.

This creates depth without requiring a huge 3D scene.

---

# 9. Planet Visual Composition

Desktop composition:

```text
 -------------------------------------------------------------
|                                                             |
|  ABOUT TECHNOMANTRA                         _________       |
|                                             /         \      |
|  Technology built                          /           \     |
|  around the way                         planet          |
|  businesses work.                         \             |   |
|                                             \_________/    |
|                 Supporting copy                  \         |
|                                                  \        |
|  ↓ Scroll to explore                            \        |
|                                                             |
 -------------------------------------------------------------
```

The planet should not sit directly beside the heading like a two-column card.

It should feel like it is **floating behind the composition**.

---

# 10. Visual Style

The planetary visual should use a restrained palette.

Suggested:

- Deep navy / near-black
- Cool blue-gray
- White
- Very subtle warm highlight if consistent with the existing brand

Do not use:

- Bright neon blue
- Neon purple
- Cyberpunk pink
- Rainbow gradients
- Excessive glow

The visual should feel like a premium technology editorial image.

---

# 11. Orbital Ring

Add 1–3 thin orbital curves around the planet.

Use SVG or CSS.

The orbital lines should be:

- Extremely thin
- Low opacity
- Smooth
- Elegant

They can slowly rotate or drift.

Do not create a giant animated system.

The motion should barely be noticeable.

---

# 12. Optional Small Labels

You can add very small floating labels around the visual if they improve the composition.

Possible labels:

```text
IDEAS
TECHNOLOGY
PEOPLE
A BETTER TOMORROW
```

These are decorative only.

They should not look like navigation.

Keep them subtle.

If they make the Hero feel cluttered, omit them.

---

# 13. Background

The background should connect with the site's overall visual system.

Recommended:

```text
dark background
+
subtle radial atmosphere
+
very sparse stars
+
large planetary form
```

Avoid:

- Dense star fields
- Particle explosions
- Moving galaxy effects
- Large animated gradients
- Excessive noise

The background should support the content rather than compete with it.

---

# 14. Layout

## Desktop

Use a full-width Hero.

Recommended structure:

```text
Hero
├── Container
│   ├── Left content
│   │   ├── Eyebrow
│   │   ├── Heading
│   │   ├── Supporting copy
│   │   └── Scroll indicator
│   │
│   └── Right visual
│       ├── Planet
│       ├── Orbital rings
│       └── Decorative details
```

The left content should occupy approximately 45–50% of the composition.

The visual can occupy approximately 50–60%.

Do not create rigid card boundaries.

---

# 15. Vertical Spacing

The Hero should have generous breathing room.

Suggested desktop:

```text
min-height: 80vh;
```

or:

```text
min-height: 720px;
```

depending on the existing site architecture.

Do not blindly use `100vh` if it creates unnecessary whitespace on large displays.

The next section should begin naturally after the Hero.

---

# 16. Mobile Layout

On mobile, the composition should become:

```text
ABOUT TECHNOMANTRA

Technology built
around the way
businesses work.

Supporting copy

↓ Scroll to explore

        Planet
     / orbital ring /
```

The planet can move below or partially behind the content.

Important:

- No horizontal overflow
- No tiny unreadable text
- No visual collision with the heading
- No giant planet covering the copy
- Maintain sufficient top and bottom padding

The visual can be cropped aggressively on mobile.

That is intentional.

---

# 17. Animation

Use subtle motion only.

Preferred tools:

- CSS transitions
- CSS keyframes
- GSAP only if the project already uses it for page reveals

Do not introduce another animation library.

## Entrance animation

On page load:

1. Eyebrow fades in and moves upward slightly.
2. Heading reveals upward.
3. Supporting copy fades in.
4. Scroll indicator appears.
5. Planet slowly fades/reveals.
6. Orbital ring becomes visible.

Use staggered timing.

Example conceptual timing:

```text
Eyebrow        0.0s
Heading        0.1s
Copy           0.25s
Scroll         0.4s
Planet         0.2s
Orbit          0.5s
```

Do not make the animation slow enough that the user waits for the page.

---

# 18. Planet Motion

If animated:

```text
slow continuous rotation
```

or:

```text
very subtle floating movement
```

Avoid both heavy rotation and floating at the same time if it becomes distracting.

A tiny orbital drift is enough.

---

# 19. Scroll Effect

As the user scrolls away from the Hero:

- Heading can move upward slightly.
- Planet can move at a slightly different speed.
- Orbital line can drift subtly.
- Content should not remain pinned.
- Do not create a long pinned cinematic sequence.

The About page should transition into the next section naturally.

Suggested parallax range:

```text
20px – 60px
```

depending on viewport size.

Keep the movement subtle.

---

# 20. Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- Remove planet animation.
- Remove parallax.
- Remove animated orbital movement.
- Keep simple opacity/instant presentation.
- Keep all content visible.

Accessibility is more important than decorative motion.

---

# 21. Interaction

The Hero does not require complicated interaction.

Optional:

- Slight mouse parallax on desktop
- Planet moves a few pixels based on pointer position
- Orbital lines react slightly

If implemented, ensure:

- It is subtle
- It does not affect layout
- It does not run on touch devices
- It does not cause performance problems

---

# 22. Typography

Use the existing TechnoMantra typography.

If no typography system exists yet:

### Eyebrow

```text
12–14px
uppercase
letter spacing: 0.12em
```

### Heading

Desktop:

```text
clamp(3.5rem, 6vw, 6.5rem)
```

Use the existing font weight system.

### Paragraph

Desktop:

```text
18–20px
line-height: 1.6
```

Mobile:

```text
16–18px
line-height: 1.6
```

Do not make the paragraph visually compete with the heading.

---

# 23. Container

Use the existing site's container utility if available.

Otherwise use something approximately like:

```css
max-width: 1440px;
margin: 0 auto;
padding-inline: clamp(24px, 5vw, 80px);
```

Do not hardcode a single fixed width.

---

# 24. Responsive Breakpoints

The section should be tested at:

### Desktop

```text
1440 × 900
1920 × 1080
```

### Laptop

```text
1366 × 768
```

### Tablet

```text
1024 × 1366
768 × 1024
```

### Mobile

```text
390 × 844
375 × 812
```

Also test intermediate widths.

---

# 25. Accessibility

Use semantic HTML.

Example:

```jsx
<section aria-labelledby="about-hero-title">
```

Heading:

```jsx
<h1 id="about-hero-title">
```

Decorative visual:

```jsx
aria-hidden="true"
```

Scroll indicator should not be the only way to understand the page.

Maintain:

- Keyboard accessibility
- Proper contrast
- Screen-reader-friendly content
- Reduced-motion support

---

# 26. Performance

The About Hero should remain lightweight.

Prefer:

- CSS
- SVG
- Optimized image assets
- Transform/opacity animations

Avoid:

- Heavy WebGL
- Large particle systems
- Multiple canvas elements
- Continuous expensive React state updates

If using an image for the planet:

- Use an optimized local asset.
- Use Next.js Image where appropriate.
- Do not load unnecessarily huge assets.

---

# 27. Do Not Add

Do NOT add these to the Hero:

- Testimonials
- Statistics
- Client logos
- Pricing
- Contact forms
- Service cards
- Team members
- Fake awards
- Fake certifications
- Fake company numbers
- Giant CTA panels
- Multiple buttons
- Chat widgets

The Hero has one job:

**Introduce TechnoMantra and establish the visual language of the About page.**

---

# 28. CTA Decision

Do not add a large CTA button in the About Hero.

The global navbar already contains:

```text
Request a Proposal →
```

The Hero should remain editorial.

If an additional action is needed, use only:

```text
Scroll to explore ↓
```

---

# 29. Next Section Transition

The section after the Hero should begin with:

```text
WHO WE ARE
```

and the heading:

```text
We build technology with a purpose.
```

The transition should feel intentional.

Recommended behavior:

- Hero background gradually changes from dark to the next section's background.
- Planet disappears naturally.
- Next section content begins with a simple reveal.
- No dramatic wipe transition.

---

# 30. Code Quality

Before implementation:

1. Inspect the current project structure.
2. Inspect existing global styles.
3. Inspect the existing Navbar.
4. Inspect the existing Footer.
5. Inspect existing animation utilities.
6. Inspect existing fonts and colors.
7. Inspect existing route structure.
8. Follow existing conventions.

Do not rewrite existing architecture unnecessarily.

Keep the component clean and maintainable.

Avoid putting the entire page in one giant JSX component.

---

# 31. Suggested JSX Structure

Conceptually:

```jsx
<section className="about-hero" aria-labelledby="about-hero-title">
  <div className="about-hero__container">

    <div className="about-hero__content">
      <span className="about-hero__eyebrow">
        ABOUT TECHNOMANTRA
      </span>

      <h1 id="about-hero-title">
        Technology built around the way businesses work.
      </h1>

      <p>
        We design and develop digital products, business software
        and technology solutions that help businesses work smarter,
        serve customers better and grow with confidence.
      </p>

      <div className="about-hero__scroll">
        <span>↓</span>
        <span>Scroll to explore</span>
      </div>
    </div>

    <div
      className="about-hero__visual"
      aria-hidden="true"
    >
      {/* Planet */}
      {/* Orbital rings */}
      {/* Subtle decorative elements */}
    </div>

  </div>
</section>
```

The exact class naming can follow the project's existing convention.

---

# 32. Quality Target

The finished section should feel like:

> A premium technology company introducing what it stands for.

It should NOT feel like:

> A generic website template with a space background.

The space visual is a **metaphor**, not the content.

The typography and message remain the primary focus.

---

# 33. Final Acceptance Checklist

Before considering the About Hero complete:

- [ ] Hero component exists in the appropriate About-page directory.
- [ ] JavaScript/JSX only.
- [ ] No TypeScript.
- [ ] No `.ts` or `.tsx` files added.
- [ ] Existing homepage Hero untouched.
- [ ] Existing homepage 3D system untouched.
- [ ] Existing Navbar reused.
- [ ] Existing Footer reused.
- [ ] Correct eyebrow used.
- [ ] Correct heading used.
- [ ] Correct supporting copy used.
- [ ] Planetary visual is lightweight.
- [ ] No second heavy Three.js scene.
- [ ] Desktop layout is balanced.
- [ ] Mobile layout is polished.
- [ ] No horizontal overflow.
- [ ] Animations are restrained.
- [ ] Reduced-motion mode works.
- [ ] No fake statistics or claims.
- [ ] No fake contact information.
- [ ] No console errors.
- [ ] No hydration errors.
- [ ] No unnecessary dependencies.
- [ ] Next section transitions naturally.
- [ ] Overall result matches TechnoMantra's premium B2B visual direction.

---

# Final Design Principle

The About Hero should communicate three things within a few seconds:

**Who:** TechnoMantra

**What:** Technology and digital solutions

**How:** Built around real business needs

Everything else belongs lower on the About page.
