# TechnoMantra Services Page — Full Scroll-Animated Specification

## 01. Purpose

The Services page is one of the most important pages on the TechnoMantra website.

It should not be a simple grid of 11 service cards.

Its purpose is to help visitors understand:

- What TechnoMantra offers
- What each service solves
- What is included
- How services connect
- Which service may fit their requirement
- How to start a project

Core concept:

> **Explore the system.**

The visitor scrolls through an interactive service catalogue while the active service, navigation, description and visual system change together.

---

# 02. Page Role

| Page | Purpose |
|---|---|
| Home | Impress + introduce |
| About | Explain who TechnoMantra is |
| **Services** | **Explain exactly what TechnoMantra can do** |
| Solutions | Explain business problems and connected solutions |
| Industries | Show industry understanding |
| Projects | Provide proof |
| Contact / Proposal | Convert |

Do not make the Services page repeat the entire Home or About page.

---

# 03. Technical Rules

- Next.js
- JavaScript / JSX only
- No TypeScript
- No `.ts`
- No `.tsx`
- GSAP
- ScrollTrigger
- Existing Lenis
- Existing design system
- Existing Navbar
- Existing Footer

Do not install unnecessary dependencies.

## Critical Homepage Rule

The completed homepage Three.js Hero must not be modified.

Do not create another heavy Three.js scene here.

Use:

- DOM
- CSS
- SVG
- GSAP
- ScrollTrigger
- optimized images

---

# 04. Visual Direction

The Services page should use the same premium **light theme** as the rest of the new site.

Use:

- Warm white
- White
- Very light gray
- Near-black typography
- Soft gray secondary text
- Existing TechnoMantra accent
- Fine borders
- Minimal shadows
- Generous whitespace

Avoid:

- Neon
- Cyberpunk
- Gaming aesthetics
- Excessive glassmorphism
- Heavy gradients
- Strong glow
- Particle systems
- Generic SaaS card grids

The page should feel like an interactive editorial catalogue.

---

# 05. Overall Structure

```text
01 Services Hero
        ↓
02 Service Ecosystem
        ↓
03 Interactive 11-Service Explorer
        ↓
04 Service Connections
        ↓
05 How We Deliver
        ↓
06 Which Service Do You Need?
        ↓
07 Final CTA
        ↓
08 Footer
```

---

# 06. Motion Philosophy

This is a scroll-animated website.

Use motion to communicate:

- progression
- transformation
- connection
- hierarchy
- emphasis

Do not animate every element.

The strongest interaction should be the **11-Service Explorer**.

Suggested motion levels:

```text
Hero                 Medium
Ecosystem            Medium
Service Explorer     Strong
Connections          Medium
How We Deliver       Strong
Service Finder       Subtle
CTA                  Subtle
```

Use:

- GSAP
- ScrollTrigger
- existing Lenis
- CSS transforms
- opacity
- SVG drawing
- clip-path

Avoid:

- React state on every scroll frame
- duplicate Lenis
- unnecessary global scroll listeners
- excessive parallax
- huge scale effects

---

# 07. SECTION 01 — SERVICES HERO

## Eyebrow

```text
OUR SERVICES
```

## Heading

```text
Technology for every
stage of your business.
```

## Supporting copy

```text
From websites and business software to automation, marketing and creative services, we bring the technology and expertise businesses need to build, operate and grow.
```

## Visual

Create a lightweight service ecosystem:

```text
                    WEBSITE
                       │
                       ↓
CRM ───────────── BUSINESS ───────────── ERP
                       │
                       ↓
                  AUTOMATION
                    ↙     ↘
               MARKETING  CREATIVE
```

Use SVG/CSS.

Use thin lines, small nodes and subtle accent color.

No Three.js.

## Animation

Entrance:

1. Eyebrow
2. Heading
3. Supporting copy
4. Lines
5. Nodes
6. Scroll indicator

On scroll, the ecosystem drifts slightly into the next section.

---

# 08. SECTION 02 — SERVICE ECOSYSTEM

## Heading

```text
Everything connects.
```

## Supporting copy

```text
Modern digital projects rarely depend on a single capability. Development, business systems, automation, marketing and creative work often come together to solve a larger business problem.
```

Show a connected system:

```text
DIGITAL PRODUCTS
        ↓
BUSINESS SYSTEMS
        ↓
AUTOMATION
        ↓
GROWTH
        ↓
BUSINESS IMPACT
```

## Category grouping

### DIGITAL PRODUCTS

```text
Website Development
```

Concepts:

```text
Websites
Web Applications
Ecommerce
```

### BUSINESS SYSTEMS

```text
Custom ERP Development
CRM Development
Accounting Software
Dedicated Developers
```

Concepts:

```text
Operations
Customers
Data
Workflows
Teams
```

### GROWTH & CREATIVE

```text
Email Marketing
SEO Services
Digital Marketing
Graphic Design
Packaging Design
Corporate Video
```

Concepts:

```text
Visibility
Communication
Brand
Audience
Growth
```

These categories explain the ecosystem. They do not replace the individual services.

---

# 09. SECTION 03 — INTERACTIVE 11-SERVICE EXPLORER

This is the core section.

Services:

```text
01 Website Development
02 Custom ERP Development
03 CRM Development
04 Accounting Software
05 Email Marketing
06 SEO Services
07 Digital Marketing
08 Graphic Design
09 Packaging Design
10 Corporate Video
11 Dedicated Developers
```

## Desktop Layout

Use a persistent editorial navigation.

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
11

             ACTIVE SERVICE

             WEBSITE DEVELOPMENT

             High-performance websites designed
             around your brand, users and business goals.

             WHAT WE BUILD

             Corporate Websites
             Business Websites
             Ecommerce
             Web Applications

                         [Visual System]
```

The left service index stays visible while the right content changes.

---

# 10. Service Navigation

Display:

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
11
```

Active number:

- existing TechnoMantra accent
- slightly larger
- small active marker

Inactive numbers:

- muted
- lighter weight

Each number must be clickable.

Clicking a number should smoothly scroll to the corresponding service.

Accessible labels should identify the service, for example:

```text
Go to Website Development
```

---

# 11. Service Explorer Scroll Behavior

On desktop, pin the explorer for a controlled amount of scroll.

The layout remains stable while the content transforms.

```text
01 Website Development
        ↓
02 Custom ERP Development
        ↓
03 CRM Development
        ↓
04 Accounting Software
        ↓
...
11 Dedicated Developers
```

For every transition:

- active number changes
- title changes
- description changes
- capabilities change
- visual metaphor changes
- progress advances

The transition should feel like one continuous system.

Do not make each service look like a separate page.

---

# 12. Service Data Architecture

Create a reusable data structure.

Recommended:

```text
data/services.js
```

Example:

```js
const services = [
  {
    number: "01",
    title: "Website Development",
    shortDescription: "...",
    problem: "...",
    capabilities: [],
    outcome: "...",
    visualType: "responsive"
  }
];

export default services;
```

The data should drive:

- service navigation
- active service
- service content
- service visuals
- service finder

---

# 13. SERVICE 01 — WEBSITE DEVELOPMENT

Description:

```text
High-performance websites designed around your brand, users and business goals.
```

Problem:

```text
A website should do more than look good. It should communicate clearly, perform well and support the business behind it.
```

Capabilities:

```text
Corporate Websites
Business Websites
Ecommerce
Web Applications
Responsive Development
CMS Integration
API Integration
```

Outcome:

```text
A fast, responsive digital presence built around the way your business operates.
```

Visual:

```text
DESKTOP → TABLET → MOBILE
```

Show the interface responsively transforming.

CTA:

```text
Discuss this service →
```

---

# 14. SERVICE 02 — CUSTOM ERP DEVELOPMENT

Description:

```text
Tailored business systems that connect operations, workflows, data and decision-making.
```

Problem:

```text
Disconnected tools and manual processes can make everyday operations harder to manage.
```

Capabilities:

```text
Operations
Inventory
Purchasing
Sales
Finance
Reporting
Workflow Management
```

Outcome:

```text
A connected business system designed around your actual workflows.
```

Visual:

```text
SALES
  ↓
INVENTORY
  ↓
PURCHASE
  ↓
FINANCE
  ↓
REPORTING
       ↓
      ERP
```

---

# 15. SERVICE 03 — CRM DEVELOPMENT

Description:

```text
Customer management platforms that bring sales, relationships and business data together.
```

Problem:

```text
Customer information spread across disconnected tools makes follow-up and relationship management harder.
```

Capabilities:

```text
Lead Management
Customer Records
Sales Pipelines
Follow-ups
Reporting
Customer History
```

Outcome:

```text
A connected view of customers, relationships and sales activity.
```

Visual:

```text
LEAD → CUSTOMER → SALES → FOLLOW-UP → RELATIONSHIP
```

---

# 16. SERVICE 04 — ACCOUNTING SOFTWARE

Description:

```text
Practical accounting systems built around your financial workflows and reporting needs.
```

Problem:

```text
Financial information should be organized around the way the business actually works.
```

Capabilities:

```text
Transactions
Accounts
Reports
Financial Workflows
Business Records
Data Management
```

Outcome:

```text
A structured financial system that makes business information easier to manage.
```

Visual:

```text
TRANSACTIONS → ACCOUNTS → REPORTS → BUSINESS VISIBILITY
```

---

# 17. SERVICE 05 — EMAIL MARKETING

Description:

```text
Targeted email campaigns and systems designed to strengthen engagement and customer relationships.
```

Problem:

```text
Consistent communication becomes difficult when campaigns and customer data are disconnected.
```

Capabilities:

```text
Campaigns
Audience Segmentation
Email Automation
Customer Communication
Lead Nurturing
Reporting
```

Outcome:

```text
More structured and useful customer communication.
```

Visual:

```text
AUDIENCE → CAMPAIGN → AUTOMATION → ENGAGEMENT
```

---

# 18. SERVICE 06 — SEO SERVICES

Description:

```text
Search strategies focused on improving visibility, relevant traffic and long-term organic growth.
```

Problem:

```text
A strong website needs to be discoverable by the people searching for what the business provides.
```

Capabilities:

```text
Technical SEO
On-page SEO
Content Strategy
Keyword Research
Search Visibility
Performance Monitoring
```

Outcome:

```text
A stronger search presence built around relevant users and long-term visibility.
```

Visual:

```text
SEARCH → VISIBILITY → RELEVANT TRAFFIC → OPPORTUNITY
```

---

# 19. SERVICE 07 — DIGITAL MARKETING

Description:

```text
Data-informed digital campaigns designed to connect your business with the right audience.
```

Problem:

```text
Marketing works better when strategy, audience, creative and measurement are connected.
```

Capabilities:

```text
Campaign Strategy
Paid Advertising
Content
Social Media
Audience Targeting
Analytics
```

Outcome:

```text
A more connected digital marketing approach built around business goals.
```

Visual:

```text
STRATEGY → CAMPAIGN → AUDIENCE → ENGAGEMENT → GROWTH
```

---

# 20. SERVICE 08 — GRAPHIC DESIGN

Description:

```text
Clear and consistent visual communication for brands, products, campaigns and business materials.
```

Problem:

```text
Strong businesses need visual communication that is as clear as the ideas behind them.
```

Capabilities:

```text
Branding
Marketing Materials
Business Graphics
Campaign Design
Digital Assets
Visual Systems
```

Outcome:

```text
A clearer and more consistent visual presence.
```

Visual:

```text
IDEA → VISUAL LANGUAGE → BRAND → COMMUNICATION
```

---

# 21. SERVICE 09 — PACKAGING DESIGN

Description:

```text
Packaging concepts that balance brand identity, usability and visual presence.
```

Problem:

```text
Packaging has to communicate the product while working in the real world.
```

Capabilities:

```text
Packaging Concepts
Visual Identity
Product Presentation
Label Design
Print-ready Artwork
Brand Consistency
```

Outcome:

```text
Packaging designed to connect product, brand and customer experience.
```

Visual:

```text
BRAND → PRODUCT → PACKAGING → CUSTOMER
```

---

# 22. SERVICE 10 — CORPORATE VIDEO

Description:

```text
Professional video content for brands, products, teams, presentations and business communication.
```

Problem:

```text
Complex ideas often need a clear visual story to become easier to understand.
```

Capabilities:

```text
Corporate Films
Product Videos
Brand Videos
Explainer Content
Presentation Videos
Business Communication
```

Outcome:

```text
Visual communication that makes your message easier to understand and remember.
```

Visual:

```text
STORY → VISUAL → MESSAGE → AUDIENCE
```

---

# 23. SERVICE 11 — DEDICATED DEVELOPERS

Description:

```text
Skilled developers who extend your team for focused projects, ongoing development or specialized technology work.
```

Problem:

```text
Teams sometimes need additional development capacity without changing their entire internal structure.
```

Capabilities:

```text
Frontend Development
Backend Development
Full-stack Development
Project Support
Ongoing Development
Specialized Technology
```

Outcome:

```text
Additional development capability aligned with your project and team.
```

Visual:

```text
YOUR TEAM
     +
TECHNOMANTRA
     ↓
EXTENDED TEAM
     ↓
PROJECT
```

---

# 24. Service Visual System

Do not create 11 unrelated visual styles.

Use one consistent visual language:

- thin lines
- geometric nodes
- typography
- simple device frames
- minimal icons
- existing accent color
- subtle transitions

Each service changes the visual metaphor while keeping the same design system.

---

# 25. Service Explorer Progress

Add a subtle vertical progress indicator.

Example:

```text
●
│
│
│
●
```

It represents the visitor's position across the 11 services.

Keep it minimal.

---

# 26. Service CTA

Every service gets a small action:

```text
Discuss this service →
```

Use:

```text
/contact
```

or:

```text
/request-a-proposal
```

according to the actual project routes.

Do not use giant CTA buttons for every service.

---

# 27. SECTION 04 — SERVICE CONNECTIONS

## Eyebrow

```text
CONNECTED SERVICES
```

## Heading

```text
The right solution rarely comes from one service alone.
```

## Supporting copy

```text
Modern businesses often need connected technology. We bring development, business systems, automation, marketing and creative capabilities together when the problem requires it.
```

## Visual

```text
                    WEBSITE
                       │
                       ↓
CRM ───────────── BUSINESS ───────────── ERP
                       │
                       ↓
                   AUTOMATION
                   ↙         ↘
             MARKETING     CREATIVE
                   ↘         ↙
                     GROWTH
```

Scroll animation:

1. Business node appears.
2. Service nodes appear.
3. Lines draw.
4. Categories activate.
5. Complete system becomes visible.

Use SVG/CSS only.

---

# 28. SECTION 05 — HOW WE DELIVER

## Eyebrow

```text
HOW WE DELIVER
```

## Heading

```text
From requirement
to working solution.
```

## Supporting copy

```text
We move from understanding the problem to building and improving the solution through a clear, collaborative process.
```

## Five stages

### 01 Discover

```text
Understand your business, users and goals.
```

### 02 Define

```text
Clarify requirements, scope and priorities.
```

### 03 Design

```text
Create the right structure and experience.
```

### 04 Build

```text
Develop, integrate and test the solution.
```

### 05 Improve

```text
Refine the product as the business evolves.
```

---

# 29. How We Deliver — Scroll Interaction

Desktop:

```text
01 ───── 02 ───── 03 ───── 04 ───── 05
Discover Define Design Build Improve
```

During scroll:

- progress line draws
- active stage changes
- number becomes accent
- description appears
- previous stage becomes muted

Mobile:

```text
01
│
Discover
│
02
│
Define
│
03
│
Design
│
04
│
Build
│
05
│
Improve
```

Do not aggressively pin this on mobile.

---

# 30. SECTION 06 — WHICH SERVICE DO YOU NEED?

This section makes the Services page practically useful.

## Eyebrow

```text
NOT SURE WHERE TO START?
```

## Heading

```text
Tell us what you're trying to achieve.
```

## Supporting copy

```text
Choose the outcome you're working toward and we'll help identify the services that may fit.
```

## Options

```text
Build a new website
Improve an existing website
Automate business processes
Manage customers and sales
Build business software
Grow online
Create a brand or visual identity
Add developers to our team
```

After selection, show:

```text
SERVICES THAT MAY FIT
```

Example:

```text
Website Development
+
SEO Services
+
Digital Marketing
```

Another:

```text
Custom ERP Development
+
Business Automation
+
CRM Development
```

Another:

```text
Graphic Design
+
Packaging Design
+
Corporate Video
```

Use language such as **"may fit"**, not definitive automated business advice.

---

# 31. Service Finder Interaction

Keep it short.

```text
Step 1
What are you trying to achieve?

        ↓

Step 2
Services that may fit

        ↓

Step 3
Explore / Discuss
```

Do not create a long form.

---

# 32. SECTION 07 — FINAL CTA

## Eyebrow

```text
LET'S BUILD
```

## Heading

```text
Know what you need?
Let's build it.
```

## Supporting copy

```text
Tell us about your project, business challenge or idea and we'll help you find the right way forward.
```

Buttons:

```text
Request a Proposal →
Talk to Us →
```

Routes:

```text
/request-a-proposal
/contact
```

## Visual

Use:

- subtle orbital curve
- fine circle
- small accent node
- generous whitespace

No additional 3D.

---

# 33. SECTION 08 — FOOTER

Use the existing global Footer.

Do not create a duplicate.

Use the established premium footer structure.

---

# 34. Typography

Use existing site typography.

Suggested:

Eyebrow:

```text
12–14px
uppercase
letter-spacing: 0.12em
```

Large headings:

```text
clamp(2.8rem, 5vw, 6rem)
```

Body:

```text
17–20px
line-height: 1.6
```

Service titles:

```text
28–48px
```

Adjust according to the existing design system.

---

# 35. Spacing

Use generous spacing:

```text
padding-block: clamp(100px, 12vw, 180px)
```

The main Service Explorer will naturally require more vertical scroll distance.

Do not make every section artificially tall.

---

# 36. Responsive Design

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
- no clipped service names
- no overlapping visuals
- no tiny text
- no hover dependency
- no broken pinning
- no excessive mobile animation

---

# 37. Mobile Service Explorer

Do not force the desktop pinned experience onto mobile.

Use a simpler vertical structure:

```text
01
Website Development
Description
Capabilities
Discuss this service →

02
Custom ERP Development
Description
Capabilities
Discuss this service →

03
CRM Development
...
```

A small sticky service indicator is optional.

All 11 services must remain easy to read.

---

# 38. Accessibility

Use semantic HTML.

Hero:

```jsx
<h1>
```

Sections:

```jsx
<h2>
```

Service titles:

```jsx
<h3>
```

Use:

```jsx
<section aria-labelledby="...">
```

Navigation must use actual:

```jsx
<Link>
<a>
<button>
```

Do not use clickable `<div>` elements.

Service index buttons need accessible labels.

Support:

- keyboard navigation
- visible focus
- proper contrast
- screen readers
- reduced motion

---

# 39. Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- disable pinned Service Explorer
- disable large transformations
- disable animated SVG drawing
- disable parallax
- show all service content normally

The full catalogue must remain usable without animation.

---

# 40. GSAP Rules

Use the existing GSAP setup.

Prefer:

```jsx
useGSAP(() => {
  // animations
}, { scope: containerRef });
```

For the Service Explorer, prefer one coordinated master timeline rather than dozens of independent animations.

Clean up:

- timelines
- ScrollTriggers
- listeners

Do not initialize a second Lenis instance.

---

# 41. Performance

Avoid:

- Three.js
- WebGL
- particles
- huge background videos
- unoptimized images
- expensive blur
- continuous React state updates
- unnecessary scroll listeners

Prefer:

- SVG
- CSS
- transforms
- opacity
- clip-path
- optimized images

---

# 42. Recommended File Structure

```text
app/
└── services/
    └── page.jsx

components/
└── services/
    ├── ServicesHero.jsx
    ├── ServiceEcosystem.jsx
    ├── ServiceExplorer.jsx
    ├── ServiceConnections.jsx
    ├── HowWeDeliver.jsx
    ├── ServiceFinder.jsx
    └── ServicesCTA.jsx

data/
└── services.js
```

Follow the existing project architecture if different.

---

# 43. Implementation Order

Build one section at a time:

```text
Step 1
Services Hero

Step 2
Service Ecosystem

Step 3
Service Explorer

Step 4
Service Connections

Step 5
How We Deliver

Step 6
Service Finder

Step 7
Final CTA

Step 8
Footer integration
```

The **Service Explorer** is the main milestone.

---

# 44. Content Integrity

Do not invent:

- client results
- revenue
- conversion percentages
- project counts
- employee counts
- awards
- certifications
- testimonials
- guarantees
- performance claims

Keep descriptions factual and service-oriented.

---

# 45. Final Experience

The visitor should naturally experience:

```text
UNDERSTAND THE SERVICE ECOSYSTEM
            ↓
EXPLORE SERVICES
            ↓
UNDERSTAND EACH SERVICE
            ↓
SEE HOW SERVICES CONNECT
            ↓
UNDERSTAND THE PROCESS
            ↓
FIND THE RIGHT SERVICE
            ↓
START A PROJECT
```

The page should feel like a **guided interactive catalogue**, not 11 cards stacked down a page.

---

# 46. Final Design Principle

The Services page should be:

> **Useful first. Impressive second.**

The strongest visual moment should be the service transformation during scrolling.

The strongest functional feature should be the service navigation and Service Finder.

The strongest message should be:

> **TechnoMantra connects technology, business systems, automation, marketing and creative capabilities around the needs of a real business.**

Final visual character:

```text
Light
Editorial
Interactive
Professional
Useful
Premium
Fast
```

Avoid:

```text
Generic
Cluttered
Over-animated
Neon
Card-heavy
Template-like
```

The page should make visitors understand the services before asking them to contact TechnoMantra.
