# TechnoMantra — Solutions Page
## Complete Light-Theme + Scroll-Animated + Image-Rich Design Specification

---

# 01. Page Purpose

The Solutions page should answer a different question from the Services page.

### Services asks:

> What can TechnoMantra do?

### Solutions asks:

> What business problem can TechnoMantra help us solve?

This distinction must remain clear.

The page should present TechnoMantra as a technology partner that connects software, data, workflows, automation and digital experiences around business needs.

The visual direction should continue the existing TechnoMantra design language:

- Premium
- Light theme
- Editorial
- Minimal
- Professional
- Technology-focused
- Scroll-driven
- Sophisticated but restrained
- Image-rich
- Meaningful animation

The page should NOT become another list of service cards.

---

# 02. Core Concept

## Visual concept: "From complexity to connection"

The entire page should tell a visual story:

```text
BUSINESS CHALLENGE
        ↓
UNDERSTAND
        ↓
CONNECT
        ↓
BUILD
        ↓
AUTOMATE
        ↓
IMPROVE
        ↓
BETTER BUSINESS
```

The visual language should use:

- Realistic business/technology imagery
- Editorial image compositions
- Thin connecting lines
- Abstract system diagrams
- Large typography
- Subtle image movement
- Scroll-triggered transitions

The page should feel like a combination of:

```text
Technology company
+
Digital product studio
+
Business systems partner
```

---

# 03. Important Project Rules

The project uses:

- Next.js
- JavaScript
- JSX
- GSAP
- ScrollTrigger
- Lenis
- Existing responsive design system

Strict requirements:

- JavaScript only
- JSX only
- No TypeScript
- No `.ts`
- No `.tsx`
- Reuse existing Navbar
- Reuse existing Footer
- Reuse existing Lenis
- Reuse existing GSAP setup
- Do not install unnecessary packages

---

# 04. Homepage Protection

The homepage Hero is already complete.

It contains the major Three.js solar-system experience.

Do NOT modify:

- Homepage Hero
- Homepage 3D environment
- Homepage camera system
- Homepage planets
- Homepage Sun
- Homepage orbital system

The Solutions page should not introduce another heavy WebGL experience.

Use:

- Images
- SVG
- CSS
- DOM
- GSAP
- ScrollTrigger

---

# 05. Overall Page Structure

```text
01 Solutions Hero
        ↓
02 Business Problems
        ↓
03 Solution Ecosystem
        ↓
04 CRM Solutions
        ↓
05 ERP Solutions
        ↓
06 Business Automation
        ↓
07 Ecommerce Solutions
        ↓
08 Marketing Automation
        ↓
09 Connected Business System
        ↓
10 Why Connected Solutions
        ↓
11 Solution Finder
        ↓
12 Final CTA
        ↓
13 Footer
```

---

# 06. Visual Theme

Use the same premium light theme as the Services page.

Suggested visual palette:

```text
Warm White
White
Very Light Gray
Near Black
Soft Gray
TechnoMantra Accent
```

Do not introduce a completely different color system.

The Solutions page should feel like the next chapter of the same website.

---

# 07. Image Strategy

Images are important on this page.

Unlike the Services page, Solutions should use more photographic and product-oriented visuals.

Use approximately:

```text
5–8 meaningful images
```

Do not fill every section with an image.

Every image should explain something.

Preferred image categories:

- Business teams working with software
- Modern manufacturing/business operations
- CRM interface context
- ERP/business operations
- Ecommerce experience
- Automation/workflow concept
- Marketing/data visualization
- Connected systems

Avoid generic corporate stock photography whenever possible.

Do not use:

- Handshake photos
- Random people smiling at laptops
- Generic office meeting images
- Fake dashboard screenshots
- Fake analytics metrics
- Images containing unreadable text
- Overly staged corporate photography

---

# 08. Image Treatment

Images should feel integrated into the design.

Use:

- Large editorial crops
- Rounded corners only where consistent with the existing system
- Subtle clipping
- Slight parallax
- Image masking
- Slow scale from `1` to approximately `1.03`
- Grayscale-to-color transitions only if they suit the existing visual system

Do not use:

- Huge shadows
- Excessive blur
- Floating image cards everywhere
- Aggressive zooming

---

# 09. Image Asset Recommendations

Recommended asset naming:

```text
public/
└── images/
    └── solutions/
        ├── solutions-hero.webp
        ├── crm-solutions.webp
        ├── erp-solutions.webp
        ├── automation.webp
        ├── ecommerce-solutions.webp
        ├── marketing-automation.webp
        ├── connected-business.webp
        └── solutions-cta.webp
```

Use WebP or AVIF where practical.

All images should be optimized.

Use `next/image`.

Do not load unnecessarily huge images.

---

# 10. SECTION 01 — SOLUTIONS HERO

## Eyebrow

```text
SOLUTIONS
```

## Heading

```text
Technology that
solves real business problems.
```

## Supporting copy

```text
We connect software, data and workflows to help businesses operate more efficiently, serve customers better and create room to grow.
```

---

# 11. Hero Layout

Use an editorial split layout.

```text
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  SOLUTIONS                         [Large Image]            │
│                                                            │
│  Technology that                    image of a modern       │
│  solves real                        business / technology   │
│  business problems.                 environment             │
│                                                            │
│  Supporting copy                                           │
│                                                            │
│  Explore solutions →                                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

The image should be large and visually important.

Do NOT put the image inside a small generic card.

---

# 12. Hero Image Concept

Recommended visual:

A sophisticated modern business environment where:

- people
- technology
- screens
- operations

are visually connected.

Alternative:

A premium abstract visualization showing:

```text
People
   ↓
Processes
   ↓
Data
   ↓
Systems
   ↓
Automation
```

The image should communicate **connected business technology**.

---

# 13. Hero Animation

On page load:

1. Eyebrow reveal
2. Heading line reveal
3. Supporting copy
4. CTA
5. Image clip-path reveal
6. Small image parallax

On scroll:

- image moves slightly slower than text
- heading moves upward
- image scales approximately `1 → 1.03`
- Hero transitions into Business Problems

Keep motion restrained.

---

# 14. SECTION 02 — BUSINESS PROBLEMS

## Eyebrow

```text
THE PROBLEM
```

## Heading

```text
Business gets complicated
when systems stop working together.
```

## Supporting copy

```text
As businesses grow, information, customers and workflows often become spread across different tools. The result can be repetitive work, disconnected data and processes that are harder to manage.
```

---

# 15. Problem Visual

Create an animated fragmented system:

```text
CUSTOMERS
     \
      CRM

SALES ───── DATA ───── FINANCE

INVENTORY
      \
       OPERATIONS
```

The elements should appear disconnected.

Then during scroll:

```text
CRM
ERP
DATA
OPERATIONS
MARKETING
        ↓
     CONNECT
```

The lines connect.

This becomes the transition into the Solutions section.

Use SVG + GSAP.

---

# 16. Problem Points

Use five concise problem statements.

### 01 Disconnected Data

```text
Important information lives across different systems.
```

### 02 Manual Workflows

```text
Repetitive processes consume time and create avoidable work.
```

### 03 Limited Visibility

```text
Teams struggle to see what is happening across the business.
```

### 04 Customer Fragmentation

```text
Customer information can become scattered across tools and teams.
```

### 05 Growth Complexity

```text
Systems that worked at a smaller scale can become difficult to manage as the business grows.
```

Use an editorial numbered list, not cards.

---

# 17. SECTION 03 — SOLUTION ECOSYSTEM

## Eyebrow

```text
OUR SOLUTIONS
```

## Heading

```text
Connect the parts
that keep your business moving.
```

## Supporting copy

```text
Our solutions bring software, workflows, customer data and digital experiences together so different parts of the business can work as one system.
```

---

# 18. Solution Ecosystem Visual

Create a large central SVG system.

```text
                         CUSTOMERS
                             │
                             ↓
CRM ─────────────── BUSINESS CORE ─────────────── ERP
                             │
                             ↓
                       AUTOMATION
                        ↙       ↘
                 ECOMMERCE    MARKETING
                             │
                             ↓
                           DATA
```

This visual becomes the primary visual language of the page.

---

# 19. Scroll Interaction

As the visitor scrolls:

### Stage 1

Only Business Core appears.

### Stage 2

CRM connects.

### Stage 3

ERP connects.

### Stage 4

Automation connects.

### Stage 5

Ecommerce connects.

### Stage 6

Marketing connects.

### Stage 7

Data completes the system.

The result:

```text
ONE CONNECTED BUSINESS SYSTEM
```

Use SVG path drawing with GSAP.

No WebGL.

---

# 20. SECTION 04 — CRM SOLUTIONS

## Eyebrow

```text
01 / CRM SOLUTIONS
```

## Heading

```text
Bring customer relationships
into one connected system.
```

## Description

```text
Bring customer data, sales activity and relationships into one connected system.
```

---

# 21. CRM Image

Use:

```text
crm-solutions.webp
```

Recommended visual:

A realistic, premium CRM/product-management environment showing:

- customer profiles
- sales pipeline
- communication
- follow-up workflow

Avoid fake readable metrics.

If a UI mockup is used, make it clearly conceptual and avoid fabricated business claims.

---

# 22. CRM Capabilities

```text
Lead Management
Customer Records
Sales Pipelines
Follow-ups
Customer History
Reporting
```

---

# 23. CRM Visual Animation

Desktop:

Image occupies approximately 50–55%.

Text occupies approximately 45–50%.

On scroll:

- image clip reveals
- UI/image shifts slightly
- CRM nodes connect
- title reveals
- capability list appears sequentially

Optional visual flow:

```text
LEAD
 ↓
CUSTOMER
 ↓
SALES
 ↓
FOLLOW-UP
 ↓
RELATIONSHIP
```

---

# 24. SECTION 05 — ERP SOLUTIONS

## Eyebrow

```text
02 / ERP SOLUTIONS
```

## Heading

```text
Connect the workflows
behind your business.
```

## Description

```text
Connect the workflows, operations and data that keep your business moving.
```

---

# 25. ERP Image

Use:

```text
erp-solutions.webp
```

Recommended visual:

A modern operational environment showing a combination of:

- inventory
- production
- logistics
- business software

The image should communicate **operations + technology**.

---

# 26. ERP Capabilities

```text
Operations
Inventory
Purchasing
Sales
Finance
Reporting
Workflow Management
```

---

# 27. ERP Animation

Use a split composition.

During scroll:

```text
OPERATIONS
      ↓
INVENTORY
      ↓
PURCHASING
      ↓
SALES
      ↓
FINANCE
      ↓
REPORTING
```

Lines progressively connect.

Image moves subtly in the opposite direction to the text.

---

# 28. SECTION 06 — BUSINESS AUTOMATION

## Eyebrow

```text
03 / BUSINESS AUTOMATION
```

## Heading

```text
Replace repetitive work
with connected workflows.
```

## Description

```text
Replace repetitive manual processes with connected workflows built around your business.
```

---

# 29. Automation Image

Use:

```text
automation.webp
```

Visual concept:

A workflow environment showing:

```text
TRIGGER
   ↓
PROCESS
   ↓
APPROVAL
   ↓
ACTION
   ↓
NOTIFICATION
```

Could be represented through:

- abstract workflow image
- modern office/operations photograph
- conceptual automation visualization

Prefer a clean conceptual visual if a suitable real photograph is not available.

---

# 30. Automation Capabilities

```text
Workflow Automation
Notifications
Approvals
Data Synchronization
System Integrations
Task Automation
```

---

# 31. Automation Scroll Interaction

Use a vertical workflow.

As the user scrolls:

```text
TRIGGER
   ↓
PROCESS
   ↓
APPROVAL
   ↓
ACTION
   ↓
RESULT
```

The active stage gets the accent color.

The image can slowly move behind the workflow.

---

# 32. SECTION 07 — ECOMMERCE SOLUTIONS

## Eyebrow

```text
04 / ECOMMERCE SOLUTIONS
```

## Heading

```text
Connect products,
customers and operations.
```

## Description

```text
Create commerce experiences that connect products, customers, orders and operations.
```

---

# 33. Ecommerce Image

Use:

```text
ecommerce-solutions.webp
```

Recommended visual:

A premium ecommerce environment showing:

- product discovery
- product imagery
- shopping experience
- order flow

Avoid generic shopping-cart stock photography.

A high-quality conceptual ecommerce interface image is preferred.

---

# 34. Ecommerce Capabilities

```text
Product Management
Ecommerce Storefronts
Orders
Customer Experience
Payments
Integrations
```

---

# 35. Ecommerce Animation

Create a flow:

```text
PRODUCT
   ↓
CUSTOMER
   ↓
ORDER
   ↓
PAYMENT
   ↓
FULFILLMENT
```

During scroll:

- image subtly pans
- flow line draws
- each stage activates

---

# 36. SECTION 08 — MARKETING AUTOMATION

## Eyebrow

```text
05 / MARKETING AUTOMATION
```

## Heading

```text
Connect campaigns
with customer journeys.
```

## Description

```text
Connect campaigns, customer journeys and marketing data so growth becomes easier to manage.
```

---

# 37. Marketing Image

Use:

```text
marketing-automation.webp
```

Visual concept:

A sophisticated marketing environment showing:

```text
AUDIENCE
   ↓
CAMPAIGN
   ↓
EMAIL
   ↓
ENGAGEMENT
   ↓
CUSTOMER JOURNEY
```

Use a conceptual marketing image or an authentic company-owned visual.

Avoid fake analytics claims.

---

# 38. Marketing Capabilities

```text
Campaign Workflows
Email Automation
Lead Nurturing
Customer Journeys
Audience Segmentation
Reporting
```

---

# 39. Marketing Animation

On scroll:

```text
AUDIENCE
   ↓
CAMPAIGN
   ↓
MESSAGE
   ↓
ENGAGEMENT
   ↓
JOURNEY
```

The active stage becomes accent-colored.

The image receives subtle parallax.

---

# 40. SECTION 09 — CONNECTED BUSINESS SYSTEM

This is one of the most important sections.

## Eyebrow

```text
CONNECTED BUSINESS
```

## Heading

```text
The value is in the connection.
```

## Supporting copy

```text
The strongest digital systems are not isolated tools. They connect people, processes, customers and data so the business can operate as one system.
```

---

# 41. Large Image

Use:

```text
connected-business.webp
```

This should be the strongest image on the page.

Recommended concept:

A sophisticated wide image combining:

- business operations
- technology
- people
- data
- digital interfaces

It should feel like a visual representation of a connected company.

---

# 42. Connected System Diagram

Overlay a subtle SVG:

```text
              PEOPLE
                 │
                 ↓
CUSTOMERS → BUSINESS CORE ← OPERATIONS
                 │
             ┌───┴───┐
             ↓       ↓
           DATA   AUTOMATION
             │       │
             └───┬───┘
                 ↓
               GROWTH
```

The lines should animate during scroll.

---

# 43. Main Scroll Effect

Pin this section briefly on desktop.

As the user scrolls:

1. Image reveals.
2. People node appears.
3. Customer node appears.
4. Operations appears.
5. Data appears.
6. Automation appears.
7. Connections draw.
8. Final word appears:

```text
CONNECTED
```

Then:

```text
BUSINESS
```

The entire system becomes visible.

Keep the pin duration controlled.

Do not create a long cinematic sequence.

---

# 44. SECTION 10 — WHY CONNECTED SOLUTIONS

## Eyebrow

```text
WHY IT MATTERS
```

## Heading

```text
Better connections create
better visibility.
```

## Supporting copy

```text
When systems communicate with each other, teams can spend less time moving information between tools and more time using that information to make decisions.
```

---

# 45. Three Outcomes

Do not make these generic cards.

Use a horizontal editorial structure.

### 01 Clarity

```text
A clearer view of information across the business.
```

### 02 Efficiency

```text
Less repetitive work and more connected workflows.
```

### 03 Scale

```text
Systems that can evolve as the business grows.
```

Animation:

- each point enters sequentially
- thin connecting line grows
- active outcome uses accent

---

# 46. SECTION 11 — SOLUTION FINDER

This should be useful, but simpler than the Services page's Service Finder.

## Eyebrow

```text
WHERE SHOULD WE START?
```

## Heading

```text
What are you trying to improve?
```

## Supporting copy

```text
Choose the area you're working on and explore the solution that may fit.
```

---

# 47. Finder Options

```text
Manage customers better
Connect business operations
Automate repetitive work
Sell online
Improve marketing workflows
Connect business data
```

When selected, show:

```text
POSSIBLE SOLUTION

CRM Solutions

Bring customer data, sales activity
and relationships into one system.

Explore CRM Solutions →
```

Another:

```text
POSSIBLE SOLUTION

ERP Solutions

Connect operations, workflows
and business data.

Explore ERP Solutions →
```

Another:

```text
POSSIBLE SOLUTION

Business Automation

Replace repetitive manual processes
with connected workflows.

Explore Business Automation →
```

Use:

> "Possible solution"

not a definitive automated diagnosis.

---

# 48. SECTION 12 — FINAL CTA

## Eyebrow

```text
LET'S SOLVE SOMETHING
```

## Heading

```text
Have a business problem
worth solving?
```

## Supporting copy

```text
Tell us what is slowing your business down, what you want to improve or what you want to build. We'll help explore the right digital solution.
```

Primary CTA:

```text
Request a Proposal →
```

Secondary:

```text
Talk to Us →
```

Routes:

```text
/request-a-proposal
/contact
```

---

# 49. Final CTA Visual

Use:

```text
solutions-cta.webp
```

Optional visual:

- subtle orbital curve
- abstract connected nodes
- thin SVG trajectory
- image crop

Do not introduce another Three.js scene.

---

# 50. FOOTER

Use the existing global Footer.

Do not duplicate the Footer design.

---

# 51. Image Loading

Use Next.js Image:

```jsx
import Image from "next/image";
```

Prefer:

```jsx
<Image
  src="/images/solutions/crm-solutions.webp"
  alt="..."
  fill
  sizes="..."
/>
```

Use meaningful alt text.

Decorative images should use:

```text
alt=""
```

when appropriate.

---

# 52. Image Aspect Ratios

Recommended:

## Hero

```text
16:10
```

## CRM

```text
4:3
```

## ERP

```text
4:3
```

## Automation

```text
4:3
```

## Ecommerce

```text
4:3
```

## Marketing

```text
4:3
```

## Connected Business

```text
16:9
```

## CTA

```text
3:2
```

Use responsive cropping.

---

# 53. Image Animation System

All major images should use one consistent animation language.

Entrance:

```text
clip-path reveal
+
opacity
+
small vertical movement
```

Scroll:

```text
translateY
+
scale 1 → 1.03
```

Hover:

```text
scale 1 → 1.02
```

Keep animation subtle.

---

# 54. Scroll Story

The complete page should feel like:

```text
BUSINESS COMPLEXITY
        ↓
PROBLEMS
        ↓
CONNECTED SOLUTIONS
        ↓
CRM
        ↓
ERP
        ↓
AUTOMATION
        ↓
ECOMMERCE
        ↓
MARKETING AUTOMATION
        ↓
CONNECTED BUSINESS
        ↓
BUSINESS OUTCOMES
        ↓
FIND YOUR SOLUTION
        ↓
START A PROJECT
```

---

# 55. Responsive Design

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

- No horizontal overflow
- No clipped headings
- No image distortion
- No text collision
- No hover dependency
- No broken pinning
- No excessive mobile animation

---

# 56. Mobile Structure

Desktop split layouts become vertical.

Example:

```text
01 / CRM SOLUTIONS

IMAGE

Heading

Description

Capabilities

Explore →
```

Do not force desktop layouts onto mobile.

For connected-system diagrams:

- simplify the number of visible nodes
- keep the main relationship understandable
- remove unnecessary decorative lines

---

# 57. Mobile Scroll Animation

On mobile:

- reduce parallax
- reduce image scale
- disable long pinning
- use normal vertical flow
- use staggered reveal
- keep diagrams simple

The content should never depend on the animation to make sense.

---

# 58. Accessibility

Use semantic HTML.

Structure:

```jsx
<h1>
<h2>
<h3>
```

Use:

```jsx
<section aria-labelledby="...">
```

Interactive elements must use:

```jsx
<Link>
<a>
<button>
```

Do not use clickable divs.

All solution finder controls must be keyboard accessible.

Use visible focus states.

---

# 59. Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

- image parallax
- complex SVG drawing
- long pinning
- large transformations
- moving decorative elements

Keep simple reveal or no animation.

All content remains visible.

---

# 60. GSAP Rules

Use existing GSAP installation.

Prefer:

```jsx
useGSAP(() => {
  // animation
}, { scope: containerRef });
```

Use component-scoped selectors.

Create reusable image reveal utilities where practical.

Clean up:

- ScrollTriggers
- timelines
- event listeners

Do not create another Lenis instance.

---

# 61. Recommended Component Structure

```text
app/
└── solutions/
    └── page.jsx

components/
└── solutions/
    ├── SolutionsHero.jsx
    ├── BusinessProblems.jsx
    ├── SolutionEcosystem.jsx
    ├── CRMSolutions.jsx
    ├── ERPSolutions.jsx
    ├── BusinessAutomation.jsx
    ├── EcommerceSolutions.jsx
    ├── MarketingAutomation.jsx
    ├── ConnectedBusiness.jsx
    ├── WhyConnectedSolutions.jsx
    ├── SolutionFinder.jsx
    └── SolutionsCTA.jsx
```

Follow the existing architecture if it already has a better organization.

---

# 62. Data Structure

Recommended:

```text
data/
└── solutions.js
```

Example:

```js
const solutions = [
  {
    number: "01",
    slug: "crm",
    title: "CRM Solutions",
    description: "...",
    capabilities: [],
    image: "/images/solutions/crm-solutions.webp"
  },
  {
    number: "02",
    slug: "erp",
    title: "ERP Solutions",
    description: "...",
    capabilities: [],
    image: "/images/solutions/erp-solutions.webp"
  }
];

export default solutions;
```

Keep content separate from presentation.

---

# 63. Performance

Avoid:

- Three.js
- WebGL
- particle systems
- background videos
- huge unoptimized images
- expensive blur
- continuous React state updates
- unnecessary scroll listeners

Prefer:

- Next/Image
- WebP/AVIF
- SVG
- CSS transforms
- opacity
- clip-path
- GSAP

Use lazy loading for below-the-fold images where appropriate.

Hero image can be prioritized.

---

# 64. Image Content Rules

Do not invent company-specific photographs.

If actual TechnoMantra project screenshots are available, use them where appropriate.

For generic solution concepts, use professionally selected imagery or designed conceptual visuals.

Do not fabricate:

- customer names
- business results
- revenue numbers
- user counts
- conversion rates
- operational savings
- fake dashboards with fake KPIs

If an interface is conceptual, treat it visually as a concept and do not present fabricated metrics as real.

---

# 65. Final Quality Checklist

## Design

- [ ] Light theme
- [ ] Same visual language as Home, About and Services
- [ ] Premium typography
- [ ] Strong editorial spacing
- [ ] Real/meaningful imagery
- [ ] No generic card grid
- [ ] No excessive glassmorphism
- [ ] No neon
- [ ] No cyberpunk
- [ ] No visual clutter

## Images

- [ ] Hero image
- [ ] CRM image
- [ ] ERP image
- [ ] Automation image
- [ ] Ecommerce image
- [ ] Marketing image
- [ ] Connected business image
- [ ] CTA image
- [ ] Optimized formats
- [ ] Correct alt text

## Animation

- [ ] Hero image reveal
- [ ] Problem fragmentation animation
- [ ] Solution ecosystem connection animation
- [ ] CRM image reveal
- [ ] ERP image reveal
- [ ] Automation workflow animation
- [ ] Ecommerce flow animation
- [ ] Marketing flow animation
- [ ] Connected Business scroll sequence
- [ ] Outcome reveal
- [ ] Finder interaction
- [ ] CTA reveal

## Technical

- [ ] JavaScript / JSX only
- [ ] No TypeScript
- [ ] Existing Lenis reused
- [ ] Existing GSAP reused
- [ ] No duplicate Three.js
- [ ] No duplicate Navbar
- [ ] No duplicate Footer
- [ ] ScrollTriggers cleaned up
- [ ] No hydration errors
- [ ] No console errors

## Responsive

- [ ] Desktop
- [ ] Laptop
- [ ] Tablet
- [ ] Mobile
- [ ] No horizontal overflow
- [ ] No broken images
- [ ] No overlapping diagrams
- [ ] Mobile pinning simplified

## Accessibility

- [ ] Semantic headings
- [ ] Keyboard navigation
- [ ] Visible focus
- [ ] Good contrast
- [ ] Reduced-motion support
- [ ] No hover-only information
- [ ] Meaningful image alt text

---

# 66. Final Experience

The Solutions page should feel like a deeper layer of the TechnoMantra website.

The visitor starts with:

> **Something in our business is complicated.**

Then sees:

```text
Disconnected data
Manual workflows
Customer fragmentation
Limited visibility
Growth complexity
```

Then TechnoMantra introduces:

```text
CRM
ERP
AUTOMATION
ECOMMERCE
MARKETING AUTOMATION
```

Then those systems become connected:

```text
CUSTOMERS
     ↓
BUSINESS
     ↓
DATA
     ↓
SYSTEMS
     ↓
AUTOMATION
     ↓
GROWTH
```

The visitor finishes understanding:

> **TechnoMantra does not only provide technology services. It can connect technology around the way a business actually operates.**

---

# 67. Final Design Principle

The Services page says:

> **Here is what we can do.**

The Solutions page should say:

> **Here is what we can help you solve.**

The page should therefore prioritize:

```text
Problem
    ↓
Understanding
    ↓
Solution
    ↓
Connection
    ↓
Outcome
    ↓
Action
```

The final aesthetic:

```text
Light
Editorial
Image-rich
Interactive
Professional
Connected
Premium
Useful
```

Avoid:

```text
Generic
Template-like
Card-heavy
Over-animated
Fake
Cluttered
```

The page should feel like a sophisticated technology partner explaining how business systems can work together, not a software company listing product features.
