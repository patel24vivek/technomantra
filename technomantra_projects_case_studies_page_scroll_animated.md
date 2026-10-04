# TechnoMantra Projects / Case Studies Page
## Premium Interactive Editorial Experience

**Route:** `/projects`  
**Stack:** Next.js App Router, JavaScript/JSX only, Tailwind CSS v4, GSAP, ScrollTrigger, existing Lenis  
**Theme:** Premium light editorial + subtle technology aesthetic

---

## 1. Purpose

This is one of the most important pages on the TechnoMantra website.

The visitor should leave thinking:

> **“These people actually build serious digital products for real businesses.”**

Do not build a normal portfolio grid. The page should feel like an interactive case-study experience.

The core concept is:

> **Projects in Motion**

Each project should communicate:

`BUSINESS CONTEXT → CHALLENGE → SOLUTION → BUILD → OUTCOME`

The user should feel like they are exploring how the project was built, not simply scrolling past screenshots.

---

# 2. Page Story

```text
PROJECTS HERO
      ↓
PROJECT INDEX
      ↓
FEATURED PROJECT EXPERIENCE
      ↓
PROJECT STORY
      ↓
WHAT WE BUILT
      ↓
MORE PROJECTS
      ↓
PROJECT ARCHIVE
      ↓
HOW WE BUILD
      ↓
PROJECT FINDER
      ↓
FINAL CTA
      ↓
FOOTER
```

---

# 3. Visual Direction

Use the same visual language as the rest of the website.

### Background

- `#F7F7F4`
- white surfaces
- subtle warm-gray sections

### Text

- near-black primary
- muted gray secondary

### Borders

Very subtle 1px borders.

### Style

- premium
- editorial
- clean
- cinematic
- restrained
- interactive
- spacious

Avoid:

- neon
- cyberpunk
- excessive glassmorphism
- giant 3D objects
- particle effects
- generic SaaS cards
- random decorative animation

The interaction should communicate something. Humanity has enough websites where every button has an existential crisis when hovered.

---

# 4. Projects Hero

Eyebrow:

```text
SELECTED WORK
```

Heading:

```text
Built for real businesses.
Designed to make a difference.
```

Supporting text:

```text
Explore websites, business systems, digital products and experiences
we've built around real-world business needs.
```

## Hero visual

Create a layered project canvas rather than a normal hero card.

Use 3–4 project screenshots positioned at different depths.

Mouse movement produces extremely subtle parallax:

- background layer: 0.25x
- middle layer: 0.5x
- foreground layer: 1x

Do not make it float aggressively.

---

# 5. Project Index

Create an editorial horizontal index:

```text
01  Manufacturing
02  Ecommerce
03  Business Systems
04  Digital Experience
05  Custom Software
```

On hover:

- number expands slightly
- title shifts
- category appears
- small project thumbnail follows cursor
- underline animates

Clicking a project should smoothly scroll to its featured section.

This is not a normal tab UI.

---

# 6. Featured Project Stage

This is the main attraction.

Create a long GSAP ScrollTrigger section, approximately:

```text
300vh–500vh
```

depending on content.

Pin the project visual while the story changes.

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  01 / MANUFACTURING        PROJECT VISUAL          01       │
│                                                             │
│  Manufacturing ERP         ┌─────────────────┐       ●      │
│                            │                 │       │      │
│  Challenge                 │   UI / PRODUCT  │       02     │
│                            │     VISUAL      │       │      │
│  What We Built             │                 │       03     │
│                            └─────────────────┘       │      │
│  Technology                                         04     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

The visual remains dominant.

---

# 7. Featured Project Scroll Timeline

### Stage 01: Context

Display:

```text
01
MANUFACTURING

Connected systems for
production and operations.
```

Image enters:

```text
scale: 0.86 → 1
opacity: 0 → 1
y: 50px → 0
```

---

### Stage 02: Challenge

Image subtly zooms.

Text:

```text
THE CHALLENGE

Disconnected workflows.
Manual processes.
Limited visibility.
```

Do not invent metrics.

---

### Stage 03: Solution

Layer several real screenshots:

```text
WEBSITE
+
DASHBOARD
+
DATA
+
WORKFLOW
```

Text:

```text
THE SOLUTION

A connected digital system
built around the business workflow.
```

---

### Stage 04: Build

Reveal technology labels:

```text
CUSTOM SOFTWARE
ERP
AUTOMATION
CRM
WEB DEVELOPMENT
```

Use subtle connector lines.

---

### Stage 05: Outcome

Return to one clean dominant project visual.

Text:

```text
THE RESULT

A clearer, more connected
way to run the business.
```

Only include measurable outcomes when verified.

---

# 8. Signature Project Lens Interaction

Add a distinctive desktop interaction.

When hovering the main project visual, a subtle lens follows the pointer.

Default:

```text
normal project screenshot
```

Hover:

```text
cursor
   ↓
┌──────────────┐
│ enlarged UI  │
│ detail       │
└──────────────┘
```

Implementation:

- duplicate image
- CSS `clip-path` or mask
- pointer coordinates
- GSAP `quickTo()`

The effect should feel like inspecting a real interface.

Disable on mobile and reduced-motion mode.

---

# 9. Project Transition

Do not simply fade Project 01 into Project 02.

Use a visual handoff:

```text
Project 01
   ↓
image expands
   ↓
metadata moves away
   ↓
new project image enters
   ↓
Project 02
```

The outgoing visual becomes part of the transition.

This should make the projects feel connected.

---

# 10. Project Story Section

After the main pinned sequence, slow the page down.

Eyebrow:

```text
THE STORY
```

Heading:

```text
Every project starts with
a business problem.
```

Supporting copy:

```text
We work backward from the problem
to create the right digital system.
```

Process:

```text
01 UNDERSTAND
02 DESIGN
03 BUILD
04 CONNECT
05 EVOLVE
```

Reveal each stage as the user scrolls.

---

# 11. What We Built

Create a horizontal scrolling capability strip.

```text
WEBSITE DEVELOPMENT
      →
CUSTOM SOFTWARE
      →
ERP
      →
CRM
      →
AUTOMATION
      →
ECOMMERCE
```

As each capability becomes active:

- title becomes stronger
- related description appears
- project visual/detail changes

Do not turn these into six cards.

Use GSAP ScrollTrigger.

---

# 12. More Projects

Create an alternating editorial project list.

Project 01:

```text
┌──────────────────────────────────────────────┐
│                                              │
│                 PROJECT IMAGE                │
│                                              │
└──────────────────────────────────────────────┘

Project Name
Industry
Services
View Case Study →
```

Project 02 reverses the layout.

Continue:

```text
LEFT
RIGHT
LEFT
RIGHT
```

This gives the page visual rhythm.

---

# 13. Project Hover

On hover:

- image scale `1 → 1.035`
- image shifts slightly
- title moves 6–12px
- arrow rotates
- metadata becomes more visible
- subtle border appears

Use approximately:

```text
duration: 0.45
ease: power3.out
```

Keep it restrained.

---

# 14. Cursor Project Preview

Desktop only.

When hovering a project title, display a small floating project thumbnail near the cursor.

Animation:

```text
opacity: 0 → 1
scale: 0.92 → 1
```

Follow the pointer using GSAP `quickTo()`.

Use slight lag.

Disable on:

- touch
- mobile
- reduced motion

---

# 15. Project Archive

Use an editorial table instead of another card grid.

```text
YEAR     PROJECT              INDUSTRY          TYPE
2026     Project Name         Manufacturing     ERP
2026     Project Name         Ecommerce         Website
2025     Project Name         Trading           CRM
2025     Project Name         Healthcare        Software
```

Hovering a row:

- row expands slightly
- preview image appears
- metadata shifts
- arrow appears

This should feel like a serious design studio archive.

---

# 16. How We Build

Heading:

```text
Good projects are not accidents.
```

Supporting:

```text
We combine business understanding,
design thinking and engineering to
build systems that work in the real world.
```

Process:

```text
01 DISCOVER
02 DEFINE
03 DESIGN
04 DEVELOP
05 CONNECT
06 IMPROVE
```

Use a horizontal progress line that updates with scroll.

---

# 17. Project Finder

Create a small deterministic interactive tool.

Heading:

```text
Looking for something specific?
```

Controls:

```text
I need
[ a website ▾ ]

for
[ my business ▾ ]

with
[ automation ▾ ]
```

Then dynamically show:

```text
Recommended capability

Website Development
+
Business Automation
+
CRM
```

CTA:

```text
Explore Services →
```

This is not an AI chatbot.

Use simple JavaScript mappings.

---

# 18. Final CTA

Eyebrow:

```text
START A PROJECT
```

Heading:

```text
Have something worth building?
```

Supporting:

```text
Tell us what you're trying to solve.
We'll help turn it into a digital product,
business system or experience that works.
```

Buttons:

```text
Request a Proposal →
Talk to Us →
```

Add only a subtle animated line.

No new 3D scene.

---

# 19. Project Data

Create:

```text
src/data/projects.js
```

Use a central data structure:

```js
export const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Verified Project Name",
    industry: "Manufacturing",
    type: "ERP",
    services: [
      "Custom ERP Development",
      "Business Automation"
    ],
    summary: "Verified project summary.",
    challenge: ["Verified challenge"],
    solution: ["Verified solution"],
    technologies: ["Verified technology"],
    images: {
      hero: "/images/projects/project-01/hero.webp",
      detail: "/images/projects/project-01/detail.webp",
      secondary: "/images/projects/project-01/secondary.webp"
    },
    href: "/projects/project-01"
  }
];
```

Do not hardcode portfolio content into visual components.

---

# 20. Critical Content Rule

**Never invent:**

- client names
- project results
- revenue figures
- productivity percentages
- customer counts
- performance statistics
- business outcomes

If verified content is unavailable, use obvious placeholders.

Possible real project names can only be used after verification from existing project content or approved source material.

---

# 21. Recommended Components

Create:

```text
src/components/projects/
```

Suggested components:

```text
ProjectsHero.jsx
ProjectIndex.jsx
FeaturedProjectStage.jsx
ProjectStageVisual.jsx
ProjectLens.jsx
ProjectProgress.jsx
ProjectStory.jsx
ProjectCapabilities.jsx
ProjectList.jsx
ProjectCard.jsx
ProjectCursorPreview.jsx
ProjectArchive.jsx
ProjectProcess.jsx
ProjectFinder.jsx
ProjectsCTA.jsx
```

Do not create tiny components without a real reason.

---

# 22. GSAP / ScrollTrigger

Use the existing GSAP setup.

Do not create a second smooth-scroll system.

The featured section should use a pinned timeline.

Concept:

```js
ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: "bottom bottom",
  pin: stage
});
```

Timeline:

```text
0.00 → context
0.20 → challenge
0.45 → solution
0.70 → build
0.90 → outcome
1.00 → transition
```

Use:

- opacity
- transform
- scale
- clip-path
- subtle parallax

Avoid excessive bounce.

---

# 23. Image Reveals

Use masked image reveals such as:

```text
clip-path: inset(100% 0 0 0)
```

to:

```text
clip-path: inset(0% 0 0 0)
```

Use:

```text
power3.out
```

---

# 24. Image Performance

Use `next/image`.

Requirements:

- WebP / AVIF where appropriate
- responsive sizes
- lazy loading below the fold
- priority only for the first major visual
- avoid loading many huge screenshots simultaneously
- reserve image dimensions to prevent layout shift

---

# 25. Responsive Behavior

## Desktop

Use the full experience:

- pinned featured stage
- project lens
- cursor previews
- hover interactions
- horizontal capability animation

## Tablet

Reduce:

- pointer effects
- layered depth
- complex pinning where needed

Keep:

- scroll reveals
- project transitions
- editorial project layout

## Mobile

Do not force desktop pinning onto mobile.

Use:

```text
Project
↓
Image
↓
Challenge
↓
Solution
↓
Technology
↓
Outcome
↓
Next Project
```

Disable:

- cursor preview
- cursor lens
- heavy parallax

Keep subtle:

- image reveals
- scale
- opacity
- text transitions

---

# 26. Accessibility

Respect:

```text
prefers-reduced-motion
```

Reduced-motion mode should:

- remove major parallax
- disable cursor preview
- disable lens
- reduce pinned transformations
- keep all content visible

All project links must be keyboard accessible.

Provide visible focus states.

Images require meaningful alt text.

Important information must never exist only inside animation.

---

# 27. Performance

Target:

```text
smooth 60fps desktop interactions
minimal layout shifts
fast initial render
```

Rules:

- animate transforms and opacity
- avoid layout-triggering animation
- use `will-change` sparingly
- clean up GSAP contexts
- kill ScrollTriggers on unmount
- avoid React state for high-frequency pointer updates
- use refs where appropriate
- avoid unnecessary duplicate image rendering
- do not use Three.js on this page

---

# 28. Interaction Philosophy

Every interaction must communicate something.

### Good

```text
Hover project → inspect project
Scroll → understand project story
Hover archive → preview project
Click index → navigate project
Lens → inspect UI detail
```

### Bad

```text
random floating objects
random particles
giant custom cursor
constant rotation
text flying everywhere
```

The goal is **interactive storytelling**, not visual noise.

---

# 29. Existing Site Constraints

Keep the established global navbar:

```text
Logo
Home
About ▾
Services ▾
Solutions ▾
Industries ▾
Projects
Insights
Contact
Request a Proposal →
```

Do not create a second navbar.

Do not modify the completed Home Hero.

Do not modify unrelated pages.

Use the existing footer.

---

# 30. File Structure

```text
src/
├── app/
│   └── projects/
│       └── page.jsx
│
├── components/
│   └── projects/
│       ├── ProjectsHero.jsx
│       ├── ProjectIndex.jsx
│       ├── FeaturedProjectStage.jsx
│       ├── ProjectStageVisual.jsx
│       ├── ProjectLens.jsx
│       ├── ProjectProgress.jsx
│       ├── ProjectStory.jsx
│       ├── ProjectCapabilities.jsx
│       ├── ProjectList.jsx
│       ├── ProjectCard.jsx
│       ├── ProjectCursorPreview.jsx
│       ├── ProjectArchive.jsx
│       ├── ProjectProcess.jsx
│       ├── ProjectFinder.jsx
│       └── ProjectsCTA.jsx
│
├── data/
│   └── projects.js
│
└── public/
    └── images/
        └── projects/
            ├── project-01/
            ├── project-02/
            ├── project-03/
            └── ...
```

---

# 31. Implementation Order

Build in stages.

### Stage 1
Page structure + Projects Hero.

### Stage 2
Pinned Featured Project Stage.

### Stage 3
Project lens + cursor preview.

### Stage 4
Alternating project list + archive.

### Stage 5
Process + Project Finder + CTA.

### Stage 6
Responsive + accessibility + reduced motion.

### Stage 7
Performance optimization + GSAP cleanup.

---

# 32. Final Quality Target

The completed page should feel like:

```text
premium digital agency
+
product studio
+
editorial case-study magazine
+
interactive technology showcase
```

It must not feel like:

```text
template portfolio
+
Dribbble clone
+
generic SaaS website
```

The final emotional experience should be:

> **“I'm not browsing a portfolio. I'm exploring how these projects were built.”**

The page should be highly interactive, but calm.

The interaction must make the projects easier to understand, not merely make the page move.

---

# 33. Coding-Agent Final Instruction

Before coding:

1. Inspect the existing project structure.
2. Reuse the existing navbar, footer, typography, colors and Lenis setup.
3. Inspect existing GSAP utilities and avoid duplication.
4. Inspect existing project/image assets.
5. Identify verified project information already available.
6. Never invent portfolio claims.

Then implement the complete Projects / Case Studies page from this specification.

After implementation verify:

- no TypeScript files were introduced
- no `.ts` / `.tsx` files were created
- Home Hero was not modified
- navbar and footer remain consistent
- animations are smooth
- mobile layout works
- reduced-motion mode works
- images do not cause layout shifts
- project links work
- no fake project claims exist
- GSAP/ScrollTrigger instances are properly cleaned up

The final result should feel **new, premium and genuinely interactive**, while remaining professional enough for a real B2B technology company.
