# TechnoMantra — Industries Page
## Complete Light-Theme + Image-Rich + Scroll-Animated Design Specification

## 01. Page Purpose

The Industries page should answer one important question:

> **Does TechnoMantra understand the way our business works?**

The page should demonstrate that TechnoMantra does not simply sell generic technology. Different industries have different workflows, customers, operational challenges, data requirements, sales processes and business models.

The page should communicate that TechnoMantra adapts technology around the business behind it.

The page should feel:

- Premium
- Light
- Editorial
- Image-rich
- Interactive
- Professional
- Intelligent
- Modern
- Scroll-driven

It must continue the same visual language established by the Home, About, Services and Solutions pages.

---

# 02. Page Role Within the Website

```text
HOME
"What is TechnoMantra?"
        ↓
ABOUT
"Who is TechnoMantra?"
        ↓
SERVICES
"What can TechnoMantra do?"
        ↓
SOLUTIONS
"What business problems can TechnoMantra solve?"
        ↓
INDUSTRIES
"Does TechnoMantra understand businesses like mine?"
        ↓
PROJECTS
"Has TechnoMantra built real things?"
        ↓
CONTACT / PROPOSAL
"Let's start a conversation."
```

Do not repeat the Services page. The Industries page should focus on **business context**.

---

# 03. Technical Rules

The project uses:

- Next.js
- JavaScript
- JSX
- GSAP
- ScrollTrigger
- Lenis
- Existing responsive design system

Strict rules:

- JavaScript only
- JSX only
- No TypeScript
- No `.ts`
- No `.tsx`
- Reuse existing Navbar
- Reuse existing Footer
- Reuse existing Lenis
- Reuse existing GSAP
- Do not install unnecessary packages

---

# 04. Homepage Protection

The Homepage Hero is already complete.

Do NOT modify:

- Homepage Hero
- Three.js scene
- Procedural Sun
- Planet system
- Orbital system
- Camera journey
- Existing Hero interactions

The Industries page should not create another large Three.js scene.

Use:

- Images
- SVG
- CSS
- DOM
- GSAP
- ScrollTrigger

---

# 05. Core Creative Concept

## "Different industries. Different realities."

The page should visually communicate that the same technology can be adapted to different business environments.

Main concept:

```text
INDUSTRY
    ↓
BUSINESS REALITY
    ↓
CHALLENGES
    ↓
WORKFLOWS
    ↓
TECHNOLOGY
    ↓
CONNECTED SOLUTION
```

The central interaction should be a large **Industry Explorer**.

The visitor scrolls through industries and the page transforms:

```text
MANUFACTURING
      ↓
TRADING
      ↓
ECOMMERCE
      ↓
HEALTHCARE
      ↓
FINANCE
      ↓
EDUCATION
      ↓
REAL ESTATE
      ↓
EXPORT & IMPORT
      ↓
HOSPITALITY
      ↓
NON-PROFIT
```

The visual, description, business challenges and relevant technology change with the active industry.

---

# 06. Overall Page Structure

```text
01 Industries Hero
        ↓
02 Industry Universe
        ↓
03 Interactive Industry Explorer
        ↓
04 Industry + Technology Connections
        ↓
05 How We Adapt
        ↓
06 Industry Challenges
        ↓
07 Selected Industry Work
        ↓
08 Industry Finder
        ↓
09 Final CTA
        ↓
10 Footer
```

---

# 07. Visual Theme

Use the same premium light theme.

Base:

```text
Warm White
White
Very Light Gray
Near Black
Soft Gray
Existing TechnoMantra Accent
```

Use images as the main source of visual richness.

Do not introduce a new color palette for every industry.

Each industry can have a very subtle visual accent, but it must remain within the overall brand system.

---

# 08. Image Strategy

Images are important on this page.

Use approximately:

```text
8–12 meaningful images
```

Not every section needs a new image.

The Industry Explorer should have a large visual that changes based on the active industry.

Recommended image categories:

```text
Manufacturing
Factories
Production
Industrial operations

Trading
Warehouses
Supply chains
Commercial operations

Ecommerce
Products
Online commerce
Fulfillment

Healthcare
Healthcare technology
Medical operations
Patient-facing systems

Finance
Financial technology
Business finance
Data

Education
Learning environments
Education technology
Administration

Real Estate
Property
Construction
Property management

Export & Import
Logistics
Shipping
Warehousing
International trade

Hospitality
Hotels
Guest services
Hospitality operations

Non-profit
Community
Organizations
Social impact
```

---

# 09. Image Rules

Avoid generic corporate stock photography.

Do not use:

- forced handshakes
- fake boardroom meetings
- random smiling employees
- generic laptop photos
- staged corporate portraits
- fake dashboards
- fake statistics

Prefer:

- authentic-looking environments
- real operational contexts
- architecture
- machinery
- products
- people naturally working
- technology integrated into real environments

The visitor should be able to identify the industry from the image.

---

# 10. Image Asset Structure

Recommended:

```text
public/
└── images/
    └── industries/
        ├── industries-hero.webp
        ├── manufacturing.webp
        ├── trading.webp
        ├── ecommerce.webp
        ├── healthcare.webp
        ├── finance.webp
        ├── education.webp
        ├── real-estate.webp
        ├── export-import.webp
        ├── hospitality.webp
        └── nonprofit.webp
```

Use WebP or AVIF where practical. Use Next.js `Image`.

---

# 11. SECTION 01 — INDUSTRIES HERO

## Eyebrow

```text
INDUSTRIES
```

## Heading

```text
Built around the way
your industry works.
```

## Supporting copy

```text
Every business has different workflows, customers and challenges. We build digital solutions around the realities of the industry behind them.
```

---

# 12. Hero Visual

Use a large image composition.

Recommended concept:

A wide editorial composition showing several business environments without making four equal stock-photo tiles.

Use:

- one dominant industry image
- two smaller cropped images
- subtle connecting line
- small industry labels

Keep it premium and uncluttered.

Add a subtle line:

```text
10 INDUSTRIES
ONE TECHNOLOGY PARTNER
```

---

# 13. Hero Animation

On entrance:

1. Eyebrow reveals
2. Heading line reveal
3. Supporting copy
4. Main image clip reveal
5. Secondary images reveal
6. Industry labels fade in

On scroll:

- image moves slightly slower than text
- image scale `1 → 1.03`
- secondary images drift slightly
- transition into Industry Universe

Do not overanimate.

---

# 14. SECTION 02 — INDUSTRY UNIVERSE

## Eyebrow

```text
THE INDUSTRIES WE WORK WITH
```

## Heading

```text
Different industries.
Different realities.
```

## Supporting copy

```text
Technology becomes useful when it understands the business behind it. We adapt digital products, business systems and automation around the workflows that matter to each industry.
```

Create a large editorial ecosystem visual.

Center:

```text
TECHNOMANTRA
```

Around it:

```text
MANUFACTURING
TRADING
ECOMMERCE
HEALTHCARE
FINANCE
EDUCATION
REAL ESTATE
EXPORT & IMPORT
HOSPITALITY
NON-PROFIT
```

Use thin SVG connection lines. It should feel like a business ecosystem, not an organizational chart.

---

# 15. Universe Animation

On scroll:

1. TechnoMantra node appears.
2. First industry appears.
3. Connection line draws.
4. Other industries appear progressively.
5. Complete ecosystem becomes visible.

Final state:

```text
                  MANUFACTURING

        TRADING                 HEALTHCARE

   ECOMMERCE       TECHNOMANTRA        FINANCE

        EDUCATION             REAL ESTATE

       EXPORT / IMPORT       HOSPITALITY

                    NON-PROFIT
```

Keep nodes simple.

---

# 16. SECTION 03 — INTERACTIVE INDUSTRY EXPLORER

This is the signature section of the page.

Use a scroll-driven layout.

Desktop:

```text
┌────────────────────────────────────────────────────────────┐
│                                                            │
│ 01                 MANUFACTURING                            │
│ 02                                                         │
│ 03                 Connected systems for production,        │
│ 04                 inventory, operations and visibility.    │
│ 05                                                         │
│ 06                 ERP                                     │
│ 07                 Automation                              │
│ 08                 Inventory                               │
│ 09                 CRM                                     │
│ 10                                                         │
│                                                            │
│                         [Large Industry Image]              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

Left: industry index. Right: active industry content and large image.

---

# 17. Industry Navigation

Show:

```text
01
02
03
04
05
06
07
08
09
10
```

Active item:

- accent
- larger typography
- small marker

Inactive:

- muted

Clickable and keyboard accessible.

Accessible labels:

```text
Go to Manufacturing
Go to Trading
Go to Ecommerce
...
```

---

# 18. Industry Explorer Behavior

The main layout remains stable while the content transforms.

Sequence:

```text
01 Manufacturing
        ↓
02 Trading
        ↓
03 Ecommerce
        ↓
04 Healthcare
        ↓
05 Finance
        ↓
06 Education
        ↓
07 Real Estate
        ↓
08 Export & Import
        ↓
09 Hospitality
        ↓
10 Non-profit
```

Each transition changes:

- heading
- description
- image
- challenge
- relevant solutions
- industry tags

---

# 19. INDUSTRY 01 — MANUFACTURING

Description:

```text
Connected systems for production, inventory, operations and business visibility.
```

Business Areas:

```text
Production
Inventory
Purchasing
Sales
Operations
Reporting
```

Relevant Technology:

```text
ERP
Business Automation
Inventory Systems
CRM
Custom Software
```

Image:

```text
/images/industries/manufacturing.webp
```

Use a modern production environment with machinery, operations or industrial technology.

---

# 20. INDUSTRY 02 — TRADING

Description:

```text
Digital tools that connect products, customers, suppliers and everyday operations.
```

Business Areas:

```text
Products
Suppliers
Customers
Sales
Inventory
Operations
```

Relevant Technology:

```text
CRM
ERP
Ecommerce
Business Automation
```

Image:

```text
/images/industries/trading.webp
```

Use a commercial or supply-chain environment.

---

# 21. INDUSTRY 03 — ECOMMERCE

Description:

```text
Commerce experiences and systems designed around products, customers and orders.
```

Business Areas:

```text
Products
Customers
Orders
Payments
Marketing
Fulfillment
```

Relevant Technology:

```text
Ecommerce
CRM
Marketing Automation
Business Automation
Custom Software
```

Image:

```text
/images/industries/ecommerce.webp
```

Use a premium product/ecommerce environment.

---

# 22. INDUSTRY 04 — HEALTHCARE

Description:

```text
Digital systems that help organize information, workflows and customer interactions.
```

Business Areas:

```text
Information
Appointments
Communication
Operations
Customer Management
Workflows
```

Relevant Technology:

```text
CRM
Business Automation
Custom Software
Data Systems
```

Image:

```text
/images/industries/healthcare.webp
```

Avoid showing sensitive patient information.

---

# 23. INDUSTRY 05 — FINANCE

Description:

```text
Structured software and automation for data, workflows, reporting and customer management.
```

Business Areas:

```text
Financial Data
Reporting
Customers
Workflows
Operations
Records
```

Relevant Technology:

```text
Accounting Software
CRM
Business Automation
Custom Software
```

Image:

```text
/images/industries/finance.webp
```

Use a sophisticated finance/business environment.

---

# 24. INDUSTRY 06 — EDUCATION

Description:

```text
Digital platforms that simplify administration, communication and learning workflows.
```

Business Areas:

```text
Administration
Students
Communication
Records
Learning
Operations
```

Relevant Technology:

```text
CRM
Business Automation
Custom Software
Web Applications
```

Image:

```text
/images/industries/education.webp
```

Use a modern educational environment.

---

# 25. INDUSTRY 07 — REAL ESTATE

Description:

```text
Connected tools for property information, leads, customers and business operations.
```

Business Areas:

```text
Properties
Leads
Customers
Sales
Communication
Operations
```

Relevant Technology:

```text
CRM
Marketing Automation
Business Automation
Custom Software
```

Image:

```text
/images/industries/real-estate.webp
```

Use architecture/property imagery rather than generic agent portraits.

---

# 26. INDUSTRY 08 — EXPORTERS & IMPORTERS

Description:

```text
Systems that help manage products, customers, documentation and operational workflows.
```

Business Areas:

```text
Products
Suppliers
Customers
Documentation
Logistics
Operations
```

Relevant Technology:

```text
ERP
CRM
Business Automation
Ecommerce
Custom Software
```

Image:

```text
/images/industries/export-import.webp
```

Use shipping, containers, warehouse, logistics or international-trade imagery.

---

# 27. INDUSTRY 09 — HOSPITALITY

Description:

```text
Digital experiences and business systems designed around guests, operations and service.
```

Business Areas:

```text
Guests
Reservations
Communication
Operations
Service
Customer Experience
```

Relevant Technology:

```text
CRM
Ecommerce
Business Automation
Custom Software
Marketing Automation
```

Image:

```text
/images/industries/hospitality.webp
```

Use an elegant hospitality environment.

---

# 28. INDUSTRY 10 — NON-PROFIT ORGANISATIONS

Description:

```text
Practical digital tools for communication, operations, fundraising and engagement.
```

Business Areas:

```text
Communication
Supporters
Fundraising
Operations
Campaigns
Engagement
```

Relevant Technology:

```text
CRM
Marketing Automation
Custom Software
Business Automation
```

Image:

```text
/images/industries/nonprofit.webp
```

Use authentic community or organization imagery. Avoid overly emotional charity stock imagery.

---

# 29. Industry Image Transition

When changing industries, transition the active image elegantly.

Preferred:

```text
current image
      ↓
clip-path
      ↓
new image
```

Alternative:

```text
current image
opacity 1 → 0
      ↓
new image
opacity 0 → 1
```

Use subtle scale:

```text
1.03 → 1
```

Do not use aggressive 3D rotations.

---

# 30. Industry Metadata

Under each industry heading, show small tags.

Example:

```text
ERP
AUTOMATION
INVENTORY
CRM
```

Tags should support the explanation, not become another card system.

---

# 31. Industry Explorer Scroll Pinning

Desktop:

Use a moderate ScrollTrigger pin.

The user should have enough scroll distance to understand each industry.

Do not create an excessively long sequence.

Use approximately:

```text
1 industry = 1 controlled scroll stage
```

Adapt duration to viewport and content.

---

# 32. Mobile Industry Explorer

Do NOT force the desktop pinned system onto mobile.

Use a vertical editorial layout:

```text
01
MANUFACTURING

IMAGE

Connected systems for production,
inventory, operations and visibility.

ERP
Automation
Inventory
CRM
```

Then:

```text
02
TRADING
...
```

All 10 industries must remain accessible.

Optional:

- small sticky industry number
- simple fade transitions

No hover dependency.

---

# 33. SECTION 04 — INDUSTRY + TECHNOLOGY CONNECTIONS

## Eyebrow

```text
BUILT AROUND YOUR BUSINESS
```

## Heading

```text
Technology changes
when the business changes.
```

## Supporting copy

```text
The right technology depends on how a business operates. We adapt systems, workflows and digital experiences around the processes that matter most.
```

Create:

```text
INDUSTRY
   ↓
BUSINESS MODEL
   ↓
WORKFLOW
   ↓
TECHNOLOGY
   ↓
SOLUTION
```

Then show examples:

```text
MANUFACTURING → ERP + AUTOMATION
TRADING → CRM + ERP
ECOMMERCE → ECOMMERCE + CRM
HEALTHCARE → CRM + AUTOMATION
FINANCE → ACCOUNTING + CRM
...
```

Use SVG lines and restrained animation.

---

# 34. SECTION 05 — HOW WE ADAPT

## Eyebrow

```text
OUR APPROACH
```

## Heading

```text
We don't start with the software.
We start with the business.
```

## Supporting copy

```text
Before choosing a technology or building a system, we understand the processes, people and goals behind the requirement.
```

## Four principles

### 01 Understand

```text
Learn how the business actually operates.
```

### 02 Map

```text
Identify workflows, systems, users and information.
```

### 03 Build

```text
Create the technology around those requirements.
```

### 04 Evolve

```text
Improve the solution as the business changes.
```

Use an editorial process line:

```text
UNDERSTAND → MAP → BUILD → EVOLVE
```

On scroll:

- line draws
- active stage changes
- description appears
- subtle image detail moves

No giant cards.

---

# 35. SECTION 06 — INDUSTRY CHALLENGES

## Eyebrow

```text
COMMON CHALLENGES
```

## Heading

```text
Different industries.
Some familiar problems.
```

## Supporting copy

```text
While every business is different, many organizations face similar technology challenges as they grow.
```

Editorial list:

```text
01 Disconnected systems
02 Manual processes
03 Scattered customer information
04 Limited visibility
05 Slow communication
06 Difficult reporting
07 Growing operational complexity
08 Technology that does not scale with the business
```

Do not turn these into cards.

Use:

- large number
- title
- one-line explanation
- thin divider

As the user scrolls:

- number activates
- divider expands
- description reveals
- previous challenge becomes muted

---

# 36. SECTION 07 — SELECTED INDUSTRY WORK

## Eyebrow

```text
SELECTED WORK
```

## Heading

```text
Technology built for real businesses.
```

## Supporting copy

```text
Explore selected projects where digital products, business systems and technology were built around real business requirements.
```

Use only verified TechnoMantra projects.

Potential examples:

```text
Riopak Engineers
Keyan Corporation
```

Only display these if confirmed as portfolio entries.

Do not invent:

- industry
- project result
- revenue
- conversion rate
- customer count
- project metrics

---

# 37. Project Layout

Do not use a three-card grid.

Use editorial project presentation:

```text
┌─────────────────────────────────────────────┐
│                                             │
│             LARGE PROJECT IMAGE             │
│                                             │
└─────────────────────────────────────────────┘

MANUFACTURING

PROJECT NAME

Short verified description.

View Case Study →
```

A second project can follow with a different image alignment.

Image animation:

- clip reveal
- scale `1 → 1.03`
- metadata reveal
- title reveal
- arrow moves slightly

Hover:

```text
scale 1.02
```

---

# 38. SECTION 08 — INDUSTRY FINDER

## Eyebrow

```text
FIND YOUR INDUSTRY
```

## Heading

```text
Where does your business fit?
```

## Supporting copy

```text
Choose your industry to explore the areas where our digital solutions may support your business.
```

Show a compact list:

```text
Manufacturing
Trading
Ecommerce
Healthcare
Finance
Education
Real Estate
Export & Import
Hospitality
Non-profit
```

When selected:

```text
MANUFACTURING

Relevant areas:

ERP
Automation
Inventory
CRM
Custom Software

Explore Manufacturing →
```

The result should be informative, not an automated diagnosis.

---

# 39. SECTION 09 — FINAL CTA

## Eyebrow

```text
BUILD FOR YOUR BUSINESS
```

## Heading

```text
Your industry is different.
Your technology should be too.
```

## Supporting copy

```text
Tell us how your business works, what you are trying to improve and where technology could help. We'll explore the right approach with you.
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

CTA visual:

- subtle image or abstract industry composition
- connected lines
- light background
- no additional 3D

---

# 40. FOOTER

Use the existing global Footer.

Do not duplicate or redesign the Footer inside this page.

---

# 41. Typography

Use the existing website typography.

Suggested:

Eyebrow:

```text
12–14px
uppercase
letter-spacing: 0.12em
```

Hero heading:

```text
clamp(3.5rem, 6vw, 7rem)
```

Section headings:

```text
clamp(2.5rem, 5vw, 5.5rem)
```

Body:

```text
17–20px
line-height: 1.6
```

Industry titles:

```text
32–56px
```

Adjust to match the existing design system.

---

# 42. Spacing

Use generous whitespace.

Suggested:

```text
padding-block: clamp(100px, 12vw, 190px)
```

Do not make every section artificially huge. The Industry Explorer naturally creates a longer page.

---

# 43. Image Animation System

Use a consistent animation language.

Image entrance:

```text
clip-path reveal
+
opacity
+
small translateY
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

Industry transitions:

```text
old image
    ↓
clip / opacity
    ↓
new image
```

Keep motion refined.

---

# 44. GSAP Rules

Use existing GSAP.

Prefer:

```jsx
useGSAP(() => {
  // animations
}, { scope: containerRef });
```

Use component-scoped selectors.

For the Industry Explorer:

- use a controlled master timeline where practical
- avoid dozens of unnecessary ScrollTriggers
- clean up all triggers and timelines

Do not create a second Lenis instance.

---

# 45. Performance

Avoid:

- Three.js
- WebGL
- particles
- background videos
- oversized images
- expensive blur
- continuous React state updates
- unnecessary scroll listeners

Prefer:

- Next/Image
- WebP/AVIF
- SVG
- CSS
- transform
- opacity
- clip-path
- GSAP

Prioritize the Hero image. Lazy-load below-the-fold images.

---

# 46. Accessibility

Use semantic HTML:

```jsx
<h1>
<h2>
<h3>
```

Sections:

```jsx
<section aria-labelledby="...">
```

Industry navigation must use accessible buttons/links.

Example:

```jsx
<button aria-label="View Manufacturing industry">
```

Do not use clickable divs.

Support:

- keyboard navigation
- visible focus
- screen readers
- proper contrast
- reduced motion

Hover cannot be the only way to access information.

---

# 47. Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

- large parallax
- long pinning
- complex image transitions
- animated SVG drawing
- floating decorative elements

Keep content, images, navigation and descriptions fully available.

---

# 48. Responsive Design

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

Check:

- no horizontal overflow
- no image cropping that destroys meaning
- no text collision
- no clipped industry names
- no broken pinning
- no hover dependency

---

# 49. Recommended Component Structure

```text
app/
└── industries/
    └── page.jsx

components/
└── industries/
    ├── IndustriesHero.jsx
    ├── IndustryUniverse.jsx
    ├── IndustryExplorer.jsx
    ├── IndustryConnections.jsx
    ├── HowWeAdapt.jsx
    ├── IndustryChallenges.jsx
    ├── SelectedIndustryWork.jsx
    ├── IndustryFinder.jsx
    └── IndustriesCTA.jsx
```

Follow the existing architecture if it already has suitable patterns.

---

# 50. Data Structure

Recommended:

```text
data/
└── industries.js
```

Example:

```js
const industries = [
  {
    number: "01",
    slug: "manufacturing",
    title: "Manufacturing",
    description: "...",
    businessAreas: [],
    technologies: [],
    image: "/images/industries/manufacturing.webp"
  }
];

export default industries;
```

The same data should power:

- Industry Explorer
- Industry navigation
- Industry Finder
- Industry connections

Do not duplicate content.

---

# 51. Content Integrity

Do not invent:

- years of industry experience
- number of industry clients
- industry success rates
- revenue results
- productivity improvements
- compliance certifications
- client logos
- testimonials
- project outcomes

Unless verified, use neutral language such as:

```text
Designed around
Built for
Can support
Relevant technology
Common business areas
```

---

# 52. Final Page Experience

The visitor should experience:

```text
UNDERSTAND THE IDEA
        ↓
SEE THE INDUSTRY ECOSYSTEM
        ↓
EXPLORE THEIR INDUSTRY
        ↓
SEE RELEVANT TECHNOLOGY
        ↓
UNDERSTAND THE CHALLENGES
        ↓
SEE REAL PROJECTS
        ↓
FIND THEIR INDUSTRY
        ↓
START A CONVERSATION
```

The page should communicate:

> **They understand that my business is different, and their technology can be adapted around that difference.**

---

# 53. Final Design Principle

The Industries page should communicate:

> **Technology is more useful when it understands the business behind it.**

The page should be:

```text
Image-rich
Editorial
Interactive
Light
Premium
Professional
Industry-focused
Scroll-driven
Useful
```

Avoid:

```text
Generic industry cards
Stock-photo gallery
Template-like layouts
Over-animation
Fake statistics
Heavy 3D
Neon
Cyberpunk
Clutter
```

---

# 54. Final Visual Story

```text
                  INDUSTRIES

        Different industries.
        Different realities.

                  ↓

        INDUSTRY ECOSYSTEM

                  ↓

       MANUFACTURING
              ↓
           TRADING
              ↓
          ECOMMERCE
              ↓
          HEALTHCARE
              ↓
            FINANCE
              ↓
          EDUCATION
              ↓
         REAL ESTATE
              ↓
       EXPORT / IMPORT
              ↓
         HOSPITALITY
              ↓
          NON-PROFIT

                  ↓

        BUSINESS REALITY
              ↓
           WORKFLOW
              ↓
         TECHNOLOGY
              ↓
           SOLUTION

                  ↓

         SELECTED WORK

                  ↓

        FIND YOUR INDUSTRY

                  ↓

       BUILD FOR YOUR BUSINESS
```

The page should feel like a natural continuation of the Services and Solutions pages while having its own signature interaction:

> **The active industry changes the visual world around it.**

---

# 55. Final Quality Checklist

## Design

- [ ] Light premium theme
- [ ] Same visual language as Home, About, Services and Solutions
- [ ] Strong editorial typography
- [ ] Generous whitespace
- [ ] Beautiful industry imagery
- [ ] No generic card grid
- [ ] No stock-photo gallery feeling
- [ ] No neon
- [ ] No cyberpunk
- [ ] No excessive glassmorphism

## Interaction

- [ ] Hero image reveal
- [ ] Industry Universe connection animation
- [ ] Interactive Industry Explorer
- [ ] Industry image transitions
- [ ] Industry metadata transitions
- [ ] Industry + Technology connection animation
- [ ] How We Adapt process animation
- [ ] Challenge list reveal
- [ ] Project image reveal
- [ ] Industry Finder works
- [ ] Final CTA reveal

## Technical

- [ ] JavaScript / JSX only
- [ ] No TypeScript
- [ ] Existing Lenis reused
- [ ] Existing GSAP reused
- [ ] No additional Three.js scene
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
- [ ] Visible focus states
- [ ] Good contrast
- [ ] Reduced-motion support
- [ ] No hover-only content
- [ ] Meaningful image alt text

---

# 56. Final Experience

The Services page says:

> **Here is what we can do.**

The Solutions page says:

> **Here is what we can help you solve.**

The Industries page should say:

> **Here is how we adapt that technology to the business behind it.**

The result should feel like a sophisticated technology partner explaining real business contexts, not a company displaying ten industry cards.

The signature interaction is:

> **The active industry changes the visual world around it.**

Final aesthetic:

```text
Light
Image-rich
Editorial
Interactive
Premium
Professional
Useful
Scroll-driven
```
