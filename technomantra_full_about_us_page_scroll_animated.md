# TechnoMantra About Us Page — Full Scroll-Animated Specification

## 01. Purpose

Build a premium, light-theme About Us page for TechnoMantra.

The page must feel like a continuation of the existing scroll-animated website, not a generic corporate template.

Core direction:

- Light premium theme
- Editorial layout
- Strong typography
- Generous whitespace
- Professional B2B technology aesthetic
- Meaningful GSAP/ScrollTrigger motion
- Existing Lenis smooth scrolling
- Restrained visual effects
- No excessive cards
- No neon/cyberpunk styling
- No heavy glassmorphism
- No fake statistics or claims

The page should answer:

```text
Who is TechnoMantra?
        ↓
What do we believe?
        ↓
What do we do?
        ↓
How do we work?
        ↓
What capabilities do we have?
        ↓
Why TechnoMantra?
        ↓
Who do we work with?
        ↓
What have we built?
        ↓
What should the visitor do next?
```

---

# 02. Important Project Rules

- Next.js
- JavaScript / JSX only
- NO TypeScript
- NO `.ts`
- NO `.tsx`
- Reuse existing Navbar
- Reuse existing Footer
- Reuse existing typography/design tokens
- Reuse existing Lenis integration
- Reuse existing GSAP/ScrollTrigger setup
- Do not install unnecessary dependencies

## Critical Homepage Rule

The homepage Hero is already complete.

It contains the existing Three.js solar-system experience, Sun, planets, orbital motion, hover detection, parallax, cinematic camera, Lenis and ScrollTrigger.

**Do not modify the Homepage Hero.**

Do not create a duplicate heavy Three.js scene for About.

About-page visuals should primarily use:

- DOM
- CSS
- SVG
- optimized images
- GSAP
- ScrollTrigger

---

# 03. Page Structure

```text
01 About Hero
02 Who We Are
03 What We Believe
04 What We Do
05 How We Work
06 Capabilities
07 Why TechnoMantra
08 Industries
09 Selected Work
10 Final CTA
11 Footer
```

---

# 04. Global Light Theme

The About page should be light.

Use:

- Warm white
- White
- Very light gray
- Near-black typography
- Soft gray secondary text
- Existing TechnoMantra accent color
- Fine gray borders
- Minimal shadows

Suggested rhythm:

```text
Hero       → space-inspired
Who We Are → warm white
Beliefs    → very light gray
What We Do → white
How We Work → warm white
Capabilities → white
Why Us    → very light gray
Industries → white
Work      → warm white
CTA       → white
```

Do not use:

- Black section backgrounds
- Neon
- Cyberpunk
- Heavy gradients
- Strong glow
- Excessive glass
- Particle systems
- Decorative clutter

---

# 05. Motion Philosophy

This is a scroll-animated website, so animation is important.

However:

> Every animation should communicate something.

Use motion for:

- progression
- transformation
- hierarchy
- connection
- emphasis

Do not animate everything simply because GSAP exists.

Preferred:

- GSAP
- ScrollTrigger
- existing Lenis
- CSS transforms
- opacity
- SVG line drawing
- clip-path reveals

Avoid:

- React state updates on every scroll frame
- duplicate Lenis instances
- global scroll listeners
- unnecessary WebGL
- excessive parallax
- huge scale effects

---

# 06. SECTION 01 — ABOUT HERO

## Content

Eyebrow:

```text
ABOUT TECHNOMANTRA
```

Heading:

```text
Technology built
around the way
businesses work.
```

Supporting copy:

```text
We design and develop digital products, business software and technology solutions that help businesses work smarter, serve customers better and grow with confidence.
```

Scroll indicator:

```text
↓ Scroll to explore
```

## Visual

Create a lightweight space-inspired composition:

- Large partial planet
- Thin orbital rings
- Subtle stars
- Soft atmosphere
- Minimal labels

Do NOT recreate the homepage Three.js scene.

## Animation

Entrance:

1. Eyebrow reveal
2. Heading reveal
3. Copy reveal
4. Planet reveal
5. Orbital lines reveal
6. Scroll indicator

On scroll:

- Text moves upward slightly
- Planet has subtle parallax
- Orbital lines drift slightly

No long pinning sequence.

---

# 07. SECTION 02 — WHO WE ARE

## Content

Eyebrow:

```text
WHO WE ARE
```

Heading:

```text
We build technology
with a purpose.
```

Main copy:

```text
TechnoMantra is a technology and digital solutions company focused on building websites, business software, automation systems and digital experiences for modern businesses.
```

Supporting copy:

```text
We work with businesses to understand how they operate, what their customers need and where technology can make a meaningful difference. From digital products to connected business systems, we focus on creating solutions that are practical, useful and built around the way the business actually works.
```

## Layout

Editorial two-column layout.

Left:

```text
WHO WE ARE

We build technology
with a purpose.
```

Right:

Main paragraph + supporting paragraph.

No card grid.

## Visual

Create a subtle SVG/CSS system:

```text
PEOPLE
   ↓
BUSINESS
 ↙ ↓ ↘
DATA WORK USERS
 ↘ ↓ ↙
TECHNOLOGY
```

## Animation

On scroll:

- Eyebrow reveals
- Heading moves upward
- Copy fades/reveals
- SVG connections draw

Keep it subtle.

---

# 08. SECTION 03 — WHAT WE BELIEVE

## Content

Eyebrow:

```text
WHAT WE BELIEVE
```

Heading:

```text
Good technology
should feel simple.
```

Intro:

```text
We believe technology should remove complexity, not add to it. Our decisions, our design and our development are guided by a simple set of principles that keep your business at the center.
```

## Principles

### 01 — Understand First

```text
We start by understanding the business, its users and the problem before choosing the technology.
```

### 02 — Build With Purpose

```text
Every feature should have a reason to exist and contribute to the larger business goal.
```

### 03 — Keep It Useful

```text
We focus on practical experiences that people can understand and use every day.
```

### 04 — Build To Evolve

```text
Technology should be able to grow as the business changes.
```

## Main Scroll Interaction

This is one of the main animated sections.

Desktop:

- Briefly pin section
- Heading remains stable
- Principles activate sequentially
- Only one principle is visually active
- Active number uses the existing accent
- Active title becomes stronger
- Thin line expands
- Description becomes visible
- Previous item becomes muted

Sequence:

```text
01 Understand First
        ↓
02 Build With Purpose
        ↓
03 Keep It Useful
        ↓
04 Build To Evolve
```

Optional thin progress line.

No glow.

## Mobile

Do not aggressively pin.

Use normal vertical sequence with reveal animations.

All four principles must remain visible.

---

# 09. SECTION 04 — WHAT WE DO

## Content

Eyebrow:

```text
WHAT WE DO
```

Heading:

```text
Three areas.
One connected approach.
```

Supporting copy:

```text
We bring technology, business systems and digital growth together to create solutions that work across the different parts of a modern business.
```

## 01 DIGITAL PRODUCTS

```text
Websites, web applications and ecommerce experiences built around your brand, users and business goals.
```

Related:

```text
Website Development
Web Applications
Ecommerce
```

## 02 BUSINESS SYSTEMS

```text
Connected software that helps businesses manage operations, customers, data and everyday workflows.
```

Related:

```text
ERP
CRM
Accounting Software
Business Automation
```

## 03 GROWTH & CREATIVE

```text
Digital marketing and creative services that help businesses communicate clearly and reach the right audience.
```

Related:

```text
SEO
Digital Marketing
Email Marketing
Graphic Design
Packaging Design
Corporate Video
```

## Layout

Use an editorial numbered list, NOT three generic cards.

```text
01 DIGITAL PRODUCTS
────────────────────

02 BUSINESS SYSTEMS
────────────────────

03 GROWTH & CREATIVE
────────────────────
```

Hover/active state:

- stronger title
- accent number
- expanding separator
- arrow movement
- optional visual change

Optional lightweight visual:

```text
Digital Products:
DESKTOP → TABLET → MOBILE

Business Systems:
CRM → ERP → DATA → AUTOMATION

Growth & Creative:
CONTENT → AUDIENCE → CAMPAIGN → GROWTH
```

---

# 10. SECTION 05 — HOW WE WORK

## Content

Eyebrow:

```text
HOW WE WORK
```

Heading:

```text
From idea
to working product.
```

Supporting copy:

```text
Good digital work starts with understanding the problem. We move from discovery to execution through a process designed to keep business goals, users and technology aligned.
```

## Five stages

### 01 Understand

```text
We learn about your business, users, workflows and goals.
```

### 02 Plan

```text
We define the right structure, features and technology.
```

### 03 Design

```text
We create an experience that is clear, useful and aligned with your brand.
```

### 04 Build

```text
We develop, integrate and test the product.
```

### 05 Improve

```text
We refine the experience as your business and users evolve.
```

## Scroll Effect

Create a horizontal process line on desktop:

```text
01 ───── 02 ───── 03 ───── 04 ───── 05
Understand Plan Design Build Improve
```

As the user scrolls:

- line progressively draws
- current stage becomes active
- number changes to accent
- description appears
- previous stages become muted

Optional abstract transformation:

```text
IDEA
 ↓
STRUCTURE
 ↓
DESIGN
 ↓
PRODUCT
 ↓
IMPROVEMENT
```

No Three.js.

## Mobile

Convert to vertical timeline.

---

# 11. SECTION 06 — CAPABILITIES

## Content

Eyebrow:

```text
CAPABILITIES
```

Heading:

```text
The technology behind the work.
```

Supporting:

```text
We combine development, business technology, automation and digital growth to create connected solutions for modern businesses.
```

## Groups

### FRONTEND

```text
HTML
CSS
JavaScript
React
Next.js
```

### BACKEND

```text
Node.js
Express
APIs
Database Systems
```

### BUSINESS TECHNOLOGY

```text
ERP
CRM
Accounting
Automation
Ecommerce
```

### DIGITAL GROWTH

```text
SEO
Digital Marketing
Email Marketing
Analytics
```

Only include technologies the company actually wants to publicly represent.

## Design

Do NOT make a giant logo wall.

Use four editorial columns/rows with thin separators.

Animation:

- heading reveal
- groups stagger in
- lines expand
- text fades upward

---

# 12. SECTION 07 — WHY TECHNOMANTRA

## Content

Eyebrow:

```text
WHY TECHNOMANTRA
```

Heading:

```text
Technology and execution,
working together.
```

Supporting:

```text
We combine business understanding, design, development and digital growth to create solutions that work in the real world.
```

## Four points

### Business-first thinking

```text
Technology decisions start with the actual business problem.
```

### One connected team

```text
Development, design, automation and digital growth can work together.
```

### Built around your workflow

```text
Solutions can be adapted to the way the business actually operates.
```

### Long-term thinking

```text
Build systems that can evolve instead of solving only today's problem.
```

## Visual

Use:

```text
BUSINESS
   ↓
DESIGN
   ↓
TECHNOLOGY
   ↓
EXECUTION
   ↓
GROWTH
```

Scroll activates each step.

Keep it subtle.

---

# 13. SECTION 08 — INDUSTRIES

## Content

Eyebrow:

```text
INDUSTRIES
```

Heading:

```text
Different industries.
Different challenges.
```

Supporting:

```text
Every business has different workflows, customers and challenges. We build digital solutions around the realities of the industry behind them.
```

Industries:

```text
01 Manufacturing
02 Trading
03 Ecommerce
04 Healthcare
05 Finance
06 Education
07 Real Estate
08 Exporters and Importers
09 Hospitality
10 Non-profit Organisations
```

## Interaction

Use a large editorial list.

Active industry:

- stronger title
- accent number
- short description
- optional image/abstract visual

Example:

```text
MANUFACTURING

Connected systems for production,
inventory, operations and business visibility.
```

Scroll can activate one industry at a time.

Do not create a huge pinned sequence.

Mobile:

- accordion or vertical list
- no hover dependency

---

# 14. SECTION 09 — SELECTED WORK

## Content

Eyebrow:

```text
SELECTED WORK
```

Heading:

```text
Built around real business needs.
```

Supporting:

```text
A selection of digital products, business systems and experiences built around real-world requirements.
```

## Important

Use actual verified TechnoMantra projects only.

Possible project examples include:

- Riopak Engineers
- Keyan Corporation

Only use them if confirmed as portfolio entries.

Never invent:

- revenue results
- conversion percentages
- user counts
- fake project outcomes
- fake client information

## Layout

Use an editorial project presentation, not an equal card grid.

Example:

```text
Large project image

PROJECT NAME
Category
Short description

View Case Study →
```

Hover:

- image scale 1.02–1.04
- arrow moves slightly
- metadata becomes stronger

Scroll:

- image clip/reveal
- text fade
- divider expansion

---

# 15. SECTION 10 — FINAL CTA

## Content

Eyebrow:

```text
LET'S BUILD
```

Heading:

```text
Have a problem
worth solving?
```

Supporting:

```text
Tell us what you're trying to solve. We'll help turn it into a digital product, business system or experience that works.
```

Primary:

```text
Request a Proposal →
```

Route:

```text
/request-a-proposal
```

Secondary:

```text
Talk to Us →
```

Route:

```text
/contact
```

## Visual

Use a light premium composition with:

- subtle orbital line
- fine circle
- minimal trajectory
- generous whitespace

No additional Three.js.

## Animation

- eyebrow reveal
- heading rise
- copy reveal
- buttons reveal
- orbital line draws

No pinning.

---

# 16. SECTION 11 — FOOTER

Use the existing global Footer.

Do not duplicate it.

Use the previously defined premium footer structure:

- Logo
- Company
- Services
- More Services
- Solutions
- Industries
- Contact
- Verified social links
- Privacy
- Terms
- Copyright

Do not invent contact or social information.

---

# 17. RESPONSIVE SYSTEM

Test:

```text
1920 × 1080
1440 × 900
1366 × 768
1024 × 1366
768 × 1024
390 × 844
375 × 812
```

Requirements:

- no horizontal overflow
- no clipped headings
- no text collision
- no tiny text
- no hover-only information
- no broken pinned sections
- comfortable mobile spacing

Mobile is not simply a scaled desktop version.

For mobile:

- simplify pinning
- reduce parallax
- remove hover dependency
- convert horizontal sequences to vertical
- reduce animation distances

---

# 18. ACCESSIBILITY

Use semantic HTML.

Hero:

```jsx
<h1>
```

Sections:

```jsx
<h2>
```

Subsections:

```jsx
<h3>
```

Use:

```jsx
<section aria-labelledby="section-title">
```

Interactive elements must be real:

```jsx
<Link>
<a>
<button>
```

Do not use clickable divs.

Support:

- keyboard navigation
- visible focus
- proper contrast
- screen readers
- reduced motion

Decorative SVG:

```jsx
aria-hidden="true"
```

---

# 19. REDUCED MOTION

Support:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

- pinning
- parallax
- complex ScrollTrigger sequences
- SVG drawing
- large transforms

Keep content fully visible.

Simple opacity transitions are acceptable.

---

# 20. GSAP RULES

Use existing GSAP installation.

Prefer:

```jsx
useGSAP(() => {
  // animations
}, { scope: containerRef });
```

Use component-scoped selectors.

Clean up:

- timelines
- ScrollTriggers
- listeners

Do not initialize a second Lenis instance.

Do not create global animation systems inside individual sections.

---

# 21. PERFORMANCE

Avoid:

- Three.js on About page
- WebGL
- particle systems
- large background videos
- unoptimized images
- expensive blur
- continuous React state updates
- unnecessary scroll listeners

Prefer:

- transform
- opacity
- clip-path
- SVG
- optimized images
- CSS

The homepage Hero provides the heavy visual experience. The About page should provide sophistication through storytelling and motion.

---

# 22. CONTENT INTEGRITY

Do not invent:

- years of experience
- employee counts
- client counts
- project counts
- revenue
- awards
- certifications
- testimonials
- fake client logos
- fake performance metrics

Only use verified company information.

---

# 23. RECOMMENDED FILE STRUCTURE

```text
app/
└── about/
    └── page.jsx

components/
└── about/
    ├── AboutHero.jsx
    ├── WhoWeAre.jsx
    ├── WhatWeBelieve.jsx
    ├── WhatWeDo.jsx
    ├── HowWeWork.jsx
    ├── Capabilities.jsx
    ├── WhyTechnoMantra.jsx
    ├── Industries.jsx
    ├── SelectedWork.jsx
    └── AboutCTA.jsx
```

Follow the existing project architecture if different.

---

# 24. IMPLEMENTATION ORDER

Build one section at a time:

```text
1. About Hero
2. Who We Are
3. What We Believe
4. What We Do
5. How We Work
6. Capabilities
7. Why TechnoMantra
8. Industries
9. Selected Work
10. Final CTA
11. Footer integration
```

After each section:

- test desktop
- test mobile
- check console
- check scroll behavior
- check animation cleanup
- check reduced motion

Do not implement the entire page as one giant component.

---

# 25. FINAL QUALITY CHECKLIST

## Design

- [ ] Light theme throughout
- [ ] Premium typography
- [ ] Generous whitespace
- [ ] Editorial layouts
- [ ] Minimal borders
- [ ] Restrained accent color
- [ ] No generic SaaS grid
- [ ] No neon
- [ ] No cyberpunk
- [ ] No excessive glassmorphism

## Animation

- [ ] Hero has subtle parallax
- [ ] Who We Are has reveal animation
- [ ] What We Believe has main scroll sequence
- [ ] What We Do has active editorial interaction
- [ ] How We Work has process animation
- [ ] Capabilities has staggered reveal
- [ ] Why TechnoMantra has connected progression
- [ ] Industries has active-state interaction
- [ ] Selected Work has image reveal
- [ ] CTA has subtle reveal
- [ ] Motion remains restrained

## Technical

- [ ] JavaScript / JSX only
- [ ] No TypeScript
- [ ] No `.ts`
- [ ] No `.tsx`
- [ ] Existing Lenis reused
- [ ] Existing GSAP reused
- [ ] No duplicate Three.js
- [ ] No duplicate Navbar
- [ ] No duplicate Footer
- [ ] ScrollTriggers cleaned up
- [ ] No hydration errors
- [ ] No console errors

## Accessibility

- [ ] Semantic headings
- [ ] Keyboard accessible
- [ ] Focus states
- [ ] Reduced-motion support
- [ ] No hover-only content
- [ ] Good contrast

## Responsive

- [ ] Desktop
- [ ] Laptop
- [ ] Tablet
- [ ] Mobile
- [ ] No horizontal overflow
- [ ] Pinned sections simplified on mobile

---

# 26. FINAL EXPERIENCE

The About page should feel like one continuous editorial story:

```text
INTRODUCTION
      ↓
WHO WE ARE
      ↓
WHAT WE BELIEVE
      ↓
WHAT WE DO
      ↓
HOW WE WORK
      ↓
CAPABILITIES
      ↓
WHY TECHNOMANTRA
      ↓
INDUSTRIES
      ↓
PROOF
      ↓
ACTION
```

The scroll animation should connect these ideas rather than become a collection of unrelated effects.

The final experience should communicate:

> **TechnoMantra understands business, uses technology purposefully, and builds digital solutions around real-world needs.**

Design principle:

> **Light surfaces + strong typography + meaningful scroll animation + restrained visual details.**

The website should be memorable because the story and interaction are good, not because every section is trying to scream for attention.
