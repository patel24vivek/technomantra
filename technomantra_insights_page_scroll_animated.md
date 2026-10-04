# TechnoMantra Insights / Blog Page
## Clean, Premium Editorial Experience

**Route:** `/insights`  
**Article route:** `/insights/[slug]`  
**Stack:** Next.js App Router, JavaScript / JSX only, Tailwind CSS v4, GSAP, ScrollTrigger, existing Lenis  
**Theme:** Premium light editorial, minimal, intelligent and content-first

---

# 1. Page Purpose

The Insights page should establish TechnoMantra as a company that understands more than just development.

It should communicate:

- technical knowledge
- business understanding
- practical thinking
- design awareness
- digital strategy
- credibility

This page should be intentionally calmer than the Projects page.

The Projects page is highly interactive.

The Insights page should be:

> **Clean. Quiet. Editorial. Easy to read.**

Do not turn it into another animation showcase.

The content is the product here.

---

# 2. Core Creative Direction

## Concept: “Ideas Worth Reading”

The page should feel closer to a premium technology publication than a generic corporate blog.

Visual references in spirit:

```text
editorial magazine
+
technology journal
+
premium agency insights
```

Avoid:

```text
generic blog card grid
+
huge colorful thumbnails
+
excessive gradients
+
social-media-style UI
```

The overall experience should feel mature and trustworthy.

---

# 3. Page Story

```text
INSIGHTS HERO
      ↓
FEATURED ARTICLE
      ↓
LATEST INSIGHTS
      ↓
TOPICS / FILTER
      ↓
EDITORIAL ARTICLE LIST
      ↓
WHY WE WRITE
      ↓
NEWSLETTER / CONTACT CTA
      ↓
FOOTER
```

---

# 4. Visual System

Use the existing TechnoMantra design language.

### Background

```text
#F7F7F4
```

White:

```text
#FFFFFF
```

Soft surface:

```text
#F0F0EC
```

Primary text:

```text
#111111
```

Secondary:

```text
#62645F
```

Borders:

```text
rgba(17,17,17,0.10)
```

Use the existing brand accent.

Do not introduce a separate visual identity for Insights.

---

# 5. Insights Hero

Eyebrow:

```text
INSIGHTS
```

Heading:

```text
Ideas, perspectives and
practical knowledge.
```

Supporting:

```text
Thoughts on technology, digital products,
business systems, marketing and the work
behind building better digital experiences.
```

Keep the hero relatively compact.

Do not create a huge cinematic hero.

---

# 6. Hero Visual

Use a subtle editorial composition.

Possible visual:

```text
        INSIGHTS

     ┌───────────────┐
     │               │
     │   FEATURED    │
     │   ARTICLE     │
     │               │
     └───────────────┘

     small typography
     lines / metadata
```

Alternatively use one strong editorial image.

The visual should support the content, not compete with it.

Use:

- subtle image reveal
- slight image scale
- typography fade

No Three.js.

No canvas.

No particle effects.

---

# 7. Featured Article

This should be the main content block.

Layout:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  FEATURED                                                    │
│                                                              │
│  ┌──────────────────────────┐   TECHNOLOGY                   │
│  │                          │                                 │
│  │                          │   Article Title                 │
│  │      ARTICLE IMAGE       │                                 │
│  │                          │   Short article summary...      │
│  │                          │                                 │
│  └──────────────────────────┘   READ ARTICLE →               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

Use an editorial two-column layout.

Do not use a card with excessive border radius.

---

# 8. Featured Article Metadata

Show:

```text
CATEGORY
DATE
READ TIME
```

Example:

```text
TECHNOLOGY · OCTOBER 2026 · 6 MIN READ
```

Only use actual article dates.

Do not fabricate dates.

---

# 9. Featured Article Hover

On desktop:

- image scales slightly
- image crop shifts subtly
- title moves a few pixels
- arrow moves
- category remains stable

Suggested:

```text
scale: 1 → 1.025
duration: 0.45
ease: power3.out
```

Keep it subtle.

---

# 10. Latest Insights

Heading:

```text
LATEST INSIGHTS
```

Supporting:

```text
Practical ideas from the work we do
across technology, business and digital growth.
```

Do NOT create a 3-card grid.

Instead use an editorial list.

Example:

```text
01
How to choose the right technology
for a growing business

TECHNOLOGY
6 MIN READ
2026

→
```

Then:

```text
02
When should a business build
custom software?

BUSINESS SYSTEMS
7 MIN READ
2026

→
```

Use separators.

---

# 11. Editorial Article Rows

Each row should contain:

```text
NUMBER
CATEGORY
TITLE
SHORT SUMMARY
DATE
READ TIME
ARROW
```

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│ 01  TECHNOLOGY                              6 MIN             │
│                                                             │
│     How to choose the right technology                      │
│     for a growing business                         →        │
│                                                             │
│     A practical guide to evaluating technology...           │
│                                                             │
│     OCT 2026                                                 │
└──────────────────────────────────────────────────────────────┘
```

Mobile:

```text
01
TECHNOLOGY

How to choose the right technology
for a growing business

Short summary...

OCT 2026 · 6 MIN READ
                         →
```

---

# 12. Article Row Hover

On hover:

- row background changes very slightly
- number moves 4–6px
- title shifts slightly
- arrow moves right
- optional small thumbnail appears

Do not create large floating cursor effects here.

Insights should remain calmer than Projects.

---

# 13. Optional Article Thumbnail

Desktop only.

When hovering an article row:

A small thumbnail can appear near the right side.

Animation:

```text
opacity: 0 → 1
scale: 0.96 → 1
```

Keep it small.

Disable on mobile.

This gives the page some character without turning it into a circus.

---

# 14. Topics / Filters

Create a simple topic navigation.

Example:

```text
ALL
TECHNOLOGY
BUSINESS SYSTEMS
WEB DEVELOPMENT
MARKETING
DESIGN
AUTOMATION
DIGITAL STRATEGY
```

The filter should be simple.

Do not create a complex dashboard.

---

# 15. Filter Interaction

When selecting a topic:

- active topic gets accent/underline
- article list updates
- use a subtle fade/slide transition
- preserve layout stability

Avoid heavy page transitions.

If there are no articles:

```text
More insights coming soon.
```

Do not display fake placeholder articles as real content.

---

# 16. Search

A search field is optional.

If implemented:

```text
Search insights...
```

Use a minimal inline search control.

Search should filter actual article data.

Do not create a large search panel.

If the site has only a small number of articles, omit search entirely.

---

# 17. Article Categories

Recommended categories:

```text
Technology
Business Systems
Web Development
ERP & CRM
Automation
Ecommerce
Digital Marketing
Design
Strategy
```

Only display categories that actually contain published content.

---

# 18. Article Data Architecture

Create:

```text
src/data/insights.js
```

Example:

```js
export const insights = [
  {
    slug: "verified-article-slug",
    title: "Verified Article Title",
    excerpt: "Verified article summary.",
    category: "Technology",
    date: "2026-10-04",
    readTime: "6 min read",
    featured: true,
    image: "/images/insights/article-01.webp",
    content: {
      // article content source
    }
  }
];
```

Keep article content separate from UI components.

---

# 19. Critical Content Rule

Do not invent:

- article titles presented as published content
- fake statistics
- fake case studies
- fake authors
- fake publication dates
- fake quotes
- fake client stories
- fake research
- fake business results

If real content is not available yet, use clearly marked content placeholders during development.

Example:

```text
[ARTICLE TITLE]
[ARTICLE SUMMARY]
[ARTICLE IMAGE]
```

Do not ship placeholders to production.

---

# 20. Article Detail Page

Route:

```text
/insights/[slug]
```

The article page should be much simpler.

Structure:

```text
ARTICLE HERO
      ↓
ARTICLE METADATA
      ↓
FEATURED IMAGE
      ↓
ARTICLE CONTENT
      ↓
RELATED INSIGHTS
      ↓
CTA
      ↓
FOOTER
```

---

# 21. Article Detail Hero

Show:

```text
CATEGORY

Article Title

Short article introduction.

DATE · READ TIME
```

Use a large but restrained heading.

Do not use a giant full-screen hero.

---

# 22. Article Content Layout

Desktop:

```text
          ┌─────────────────────────────┐
          │                             │
          │        ARTICLE CONTENT      │
          │                             │
          │        max-width ~760px     │
          │                             │
          └─────────────────────────────┘
```

Use comfortable reading width.

Typography should prioritize readability.

Suggested content hierarchy:

```text
H1
H2
H3
paragraph
blockquote
image
caption
list
```

---

# 23. Article Reading Experience

Use:

- generous line height
- readable font size
- strong heading hierarchy
- comfortable paragraph spacing
- subtle image captions
- clear links

Do not animate text while the user is reading.

Reading should be boring in the best possible way.

---

# 24. Article Progress Indicator

Desktop only.

A tiny reading progress indicator can sit near the edge.

Example:

```text
─────────────── 42%
```

Use a thin line.

It should update based on article scroll position.

Do not create a giant progress widget.

---

# 25. Related Insights

At the end of each article:

```text
KEEP READING
```

Show 2–3 related articles.

Use a clean editorial list rather than cards.

Example:

```text
01  Technology
    Article title → 

02  Business Systems
    Article title →
```

---

# 26. Why We Write

On the main Insights page, include a short editorial section.

Eyebrow:

```text
WHY WE WRITE
```

Heading:

```text
Technology changes quickly.
Good thinking lasts longer.
```

Supporting:

```text
We share practical ideas from the problems,
projects and technologies we work with every day.
```

Keep it short.

---

# 27. Final CTA

Eyebrow:

```text
HAVE A PROJECT IN MIND?
```

Heading:

```text
Turn an idea into something useful.
```

Supporting:

```text
If you're working on a digital product,
business system or website, let's talk about it.
```

Buttons:

```text
Start a Conversation →
View Our Work →
```

Routes:

```text
/contact
/projects
```

No large decorative animation.

---

# 28. GSAP / ScrollTrigger

Use GSAP only where it improves the experience.

Hero:

```text
opacity
y
clip-path
```

Featured article:

```text
image reveal
subtle scale
```

Article list:

```text
staggered reveal
```

Why We Write:

```text
simple text reveal
```

Do not pin the page.

Do not create cinematic scrolling.

Do not animate every section.

---

# 29. Lenis

Use the existing Lenis implementation.

Do not create another smooth scrolling system.

GSAP ScrollTrigger should remain synchronized with the existing Lenis setup.

---

# 30. Responsive Design

## Desktop

Use:

- editorial two-column featured article
- horizontal topic navigation
- article rows
- subtle hover previews

## Tablet

Reduce:

- image size
- hover effects
- spacing

Keep editorial hierarchy.

## Mobile

Structure:

```text
Hero
↓
Featured Article
↓
Topics
↓
Latest Insights
↓
Why We Write
↓
CTA
```

Article rows become vertical.

Disable:

- cursor previews
- hover-only images
- unnecessary parallax

Keep subtle reveal animations.

---

# 31. Accessibility

Requirements:

- semantic article markup
- keyboard-accessible filters
- visible focus states
- accessible article links
- meaningful image alt text
- sufficient contrast
- reduced-motion support

Filters should use actual buttons.

Do not make clickable `<div>` elements.

---

# 32. Reduced Motion

When:

```text
prefers-reduced-motion: reduce
```

Disable:

- image parallax
- hover movement
- stagger-heavy animation
- floating thumbnails

Keep:

- content
- navigation
- filtering
- article links
- simple opacity transitions if appropriate

---

# 33. Performance

Use:

```text
Next/Image
```

Requirements:

- WebP / AVIF
- responsive image sizes
- lazy loading below fold
- priority for featured article image only
- avoid loading article images that are not visible
- avoid unnecessary JavaScript

The page should be content-first and fast.

---

# 34. SEO

Main page title:

```text
Insights | TechnoMantra
```

Description:

```text
Explore TechnoMantra insights on technology,
business systems, web development, automation,
digital marketing and digital strategy.
```

Article pages should generate metadata from article data.

Use:

- semantic headings
- article schema where appropriate
- canonical URLs
- Open Graph metadata
- Twitter/X card metadata if used by the project

Do not hardcode the same metadata for every article.

---

# 35. File Structure

```text
src/
├── app/
│   └── insights/
│       ├── page.jsx
│       └── [slug]/
│           └── page.jsx
│
├── components/
│   └── insights/
│       ├── InsightsHero.jsx
│       ├── FeaturedInsight.jsx
│       ├── InsightFilters.jsx
│       ├── InsightList.jsx
│       ├── InsightRow.jsx
│       ├── InsightThumbnail.jsx
│       ├── WhyWeWrite.jsx
│       ├── InsightsCTA.jsx
│       ├── ArticleHero.jsx
│       ├── ArticleContent.jsx
│       ├── ArticleProgress.jsx
│       └── RelatedInsights.jsx
│
├── data/
│   └── insights.js
│
└── public/
    └── images/
        └── insights/
            ├── article-01.webp
            ├── article-02.webp
            └── ...
```

---

# 36. Important Constraints

## MUST

- JavaScript / JSX only
- Next.js App Router
- Tailwind CSS v4
- existing GSAP
- existing ScrollTrigger setup
- existing Lenis
- Next/Image
- responsive
- accessible
- reduced-motion support
- clean editorial layout
- real article data
- fast loading

## MUST NOT

- TypeScript
- `.ts`
- `.tsx`
- generic 3-card blog grid
- excessive animations
- neon styling
- cyberpunk styling
- Three.js
- canvas
- fake articles
- fake statistics
- fake authors
- fake publication dates
- giant hero
- intrusive newsletter popup
- autoplay video

---

# 37. Implementation Order

### Stage 1
Build Insights Hero.

### Stage 2
Build Featured Insight.

### Stage 3
Build topic filters.

### Stage 4
Build editorial article list.

### Stage 5
Build Why We Write + CTA.

### Stage 6
Build article detail route.

### Stage 7
Add related articles + reading progress.

### Stage 8
Responsive behavior.

### Stage 9
Accessibility + reduced motion.

### Stage 10
SEO + performance optimization.

---

# 38. Final Design Target

The Insights page should feel:

```text
quiet
+
intelligent
+
premium
+
editorial
+
credible
```

The Projects page says:

> **“Look at what we built.”**

The Insights page should say:

> **“Here's how we think.”**

That distinction is important.

Do not make Insights as visually loud as Projects.

The best version of this page should make the visitor want to actually read something.

---

# 39. Coding-Agent Final Instruction

Before coding:

1. Inspect the existing project structure.
2. Reuse the existing navbar, footer, typography, colors and Lenis setup.
3. Inspect existing GSAP utilities.
4. Inspect existing content/article assets.
5. Identify any verified article content already available.
6. Do not invent published content.
7. Reuse existing UI patterns where appropriate without making the page look repetitive.

Then implement the complete Insights page and article detail structure according to this specification.

After implementation verify:

- no TypeScript files were introduced
- no `.ts` / `.tsx` files were created
- Home Hero remains untouched
- navbar/footer remain consistent
- article filters work
- article links work
- article detail route works
- images load efficiently
- metadata is generated correctly
- mobile layout is clean
- reduced-motion behavior works
- keyboard navigation works
- no fake article content is presented as published content
- GSAP/ScrollTrigger cleanup is correct

Final principle:

> **Make it feel expensive, not complicated.**
