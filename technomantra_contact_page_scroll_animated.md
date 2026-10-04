# TechnoMantra Contact Page
## Premium Interactive Contact Experience

**Route:** `/contact`  
**Stack:** Next.js App Router, JavaScript / JSX only, Tailwind CSS v4, GSAP, ScrollTrigger, existing Lenis  
**Theme:** Premium light editorial + subtle technology aesthetic

---

## 1. Page Purpose

The Contact page should not feel like a generic:

```text
Contact Us
Name
Email
Message
Submit
```

form.

This is the moment where a potential client decides whether TechnoMantra feels like a company they can trust with their business.

The page should communicate:

- clarity
- professionalism
- accessibility
- confidence
- human connection
- technical capability

Core idea:

> **Let's build something that works.**

The experience should be interactive, but the actual contact process must remain extremely simple.

---

## 2. Page Story

```text
CONTACT HERO
      ↓
START A CONVERSATION
      ↓
WHAT ARE YOU LOOKING FOR?
      ↓
CONTACT FORM
      ↓
WHAT HAPPENS NEXT
      ↓
CONTACT DETAILS
      ↓
LOCATION / PRESENCE
      ↓
FINAL CTA
      ↓
FOOTER
```

---

## 3. Design Direction

Use the existing TechnoMantra design system.

Primary background: `#F7F7F4`  
White: `#FFFFFF`  
Soft section: `#F0F0EC`  
Primary text: `#111111`  
Secondary text: `#61645F`  
Borders: `rgba(17,17,17,0.10)`

Use the existing brand accent. Do not introduce random colors.

Avoid:
- generic contact templates
- excessive glassmorphism
- neon/cyberpunk styling
- giant decorative 3D scenes
- heavy particle effects

---

## 4. Contact Hero

Eyebrow:

```text
CONTACT
```

Heading:

```text
Let's build something
that works.
```

Supporting copy:

```text
Tell us what you're trying to build, improve or solve.
We'll help you find the right digital approach.
```

Primary CTA:

```text
Start a Conversation →
```

Secondary contact detail should only show a verified business email.

---

## 5. Hero Visual: Connection Field

Create an interactive connection field instead of a stock image.

Concept:

```text
                       ●
                      /
             ●───────●
            /         \\
           ●           ●
            \\         /
             ●───────●
                    \\
                     ●
```

Nodes represent:

```text
IDEA
BUSINESS
DESIGN
TECHNOLOGY
PEOPLE
PRODUCT
GROWTH
```

Center node:

```text
TECHNOMANTRA
```

Implementation:

- SVG / CSS only
- no Three.js
- subtle pointer response
- very restrained movement
- no neon network aesthetic
- simplified static version on mobile

As the user scrolls, the graphic scales down and transitions into the next section.

---

## 6. Start a Conversation

Eyebrow:

```text
START A CONVERSATION
```

Heading:

```text
Every good project starts
with a clear conversation.
```

Supporting:

```text
Whether you already have a detailed requirement
or only have an idea, tell us what you're thinking.
```

Then introduce the contact form.

---

## 7. Contact Form

Do not put the entire form inside a giant generic rounded card.

Use an editorial form with generous spacing and subtle lines.

Desktop structure:

```text
YOUR NAME
[_______________________________________________]

WORK EMAIL
[_______________________________________________]

COMPANY
[_______________________________________________]

WHAT DO YOU NEED?
[ Website ] [ Software ] [ ERP ] [ CRM ] [ Marketing ]

TELL US ABOUT IT
[                                                    ]
[                                                    ]

                                  Send Inquiry →
```

Required:
- Name
- Email
- Message

Optional:
- Company
- Phone

---

## 8. Service Selector

Use interactive text/pill buttons instead of a boring select box.

Options:

```text
Website Development
Custom ERP
CRM
Accounting Software
Ecommerce
Business Automation
Digital Marketing
SEO
Graphic Design
Packaging Design
Corporate Video
Dedicated Developers
Other
```

Allow multiple selections.

On selection:
- active state becomes obvious
- tiny check indicator appears
- surrounding options remain quiet
- transition is subtle

Do not over-animate.

---

## 9. Message Input

Placeholder:

```text
Tell us what you're trying to build, improve or solve...
```

Minimum height:

```text
150px
```

The textarea may expand naturally as the user types.

---

## 10. Submission States

Button:

```text
Send Inquiry →
```

Loading:

```text
Sending...
```

Success:

```text
Message received.

Thanks for reaching out. We'll review your requirement
and get back to you.
```

Error:

```text
Something went wrong while sending your message.
Please try again.
```

Never expose raw backend errors.

---

## 11. Validation

Validate client-side for usability and server-side for security.

Name: required.  
Email: required and valid.  
Message: required.  
Company: optional.  
Phone: optional.

Show inline errors near the relevant field.

---

## 12. Backend Integration

Do not fake submission.

If the current project already has a backend/API, use it.

Recommended abstraction:

```text
POST /api/contact
```

Payload:

```js
{
  name,
  email,
  company,
  phone,
  services,
  message
}
```

Create `src/lib/contactApi.js` only if appropriate for the existing architecture.

Never expose secrets in client code.

---

## 13. Spam Protection

Prefer a simple hidden honeypot plus server-side validation/rate limiting where available.

Use CAPTCHA only if genuinely required.

Do not make legitimate clients solve puzzles designed to prove they are not robots.

---

## 14. What Are You Looking For?

Heading:

```text
What are you looking to build?
```

Options:

```text
A Website
Business Software
ERP / CRM
Ecommerce
Automation
Digital Marketing
Creative Services
Something Else
```

When selected, show a short contextual explanation.

Example:

**Website**  
We can help plan, design and develop a website around your business goals.

**Business Software**  
We build custom systems around your actual business workflows.

**Automation**  
We connect repetitive processes and systems to reduce manual work.

Keep the copy concise.

---

## 15. What Happens Next

Eyebrow:

```text
WHAT HAPPENS NEXT
```

Heading:

```text
A simple process from
conversation to execution.
```

Four steps:

```text
01 YOU REACH OUT
Tell us what you're working on.

02 WE UNDERSTAND
We review the requirement and ask the important questions.

03 WE PROPOSE
We suggest the right approach, scope and next steps.

04 WE BUILD
Once aligned, we move into design, development and delivery.
```

Use a scroll-progress line:

```text
●────────────●────────────●────────────●
YOU          UNDERSTAND   PROPOSE      BUILD
```

Mobile becomes vertical.

---

## 16. Direct Contact

Create a clean editorial contact details section.

Only show verified information:

```text
EMAIL
[Verified business email]

PHONE
[Verified business phone]

ADDRESS
[Verified business address]

BUSINESS HOURS
[Verified business hours]
```

Possible actions:
- email → `mailto:`
- phone → `tel:`
- address → verified map link

Never guess an address or phone number.

---

## 17. Contact Detail Hover

Desktop:

Email hover can reveal `Copy`.  
Phone can reveal `Call →`.  
Address can reveal `Open Map →`.

After copying:

```text
Copied
```

Keep these interactions subtle.

---

## 18. Location / Presence

Only render this section if a verified physical office location exists.

Example structure:

```text
WHERE WE ARE

[Verified City], [Verified State]
India

View on Google Maps →
```

Do not guess an address.

Do not use a giant embedded map by default.

---

## 19. Signature Visual: Connection Point

Create a large SVG/typographic composition:

```text
                    START
                      ●
                     /
                    /
       IDEA ●──────●──────● BUSINESS
                    \\
                     \\
                      ●
                   BUILD
```

Center:

```text
LET'S CONNECT
```

As the user scrolls:
- SVG paths draw
- nodes appear
- center text fades in
- CTA appears

This is the Contact page's signature visual.

---

## 20. Final CTA

Eyebrow:

```text
READY WHEN YOU ARE
```

Heading:

```text
Let's turn the idea
into something real.
```

Supporting:

```text
Start with a conversation.
We'll take it from there.
```

Buttons:

```text
Send an Inquiry →
View Our Work →
```

`View Our Work →` routes to `/projects`.

`Send an Inquiry →` scrolls to the form.

---

## 21. Navigation and Footer

Use the existing global navbar exactly:

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

Contact should have the existing active-state treatment.

Use the existing global footer. Do not create another footer system.

---

## 22. Recommended Components

```text
src/components/contact/
├── ContactHero.jsx
├── ContactConnectionField.jsx
├── ContactIntro.jsx
├── ContactForm.jsx
├── ServiceSelector.jsx
├── ContactProcess.jsx
├── ContactDetails.jsx
├── ContactLocation.jsx
├── ConnectionPoint.jsx
└── ContactCTA.jsx
```

Only create components that improve maintainability.

---

## 23. GSAP

Use the existing:

```text
GSAP
ScrollTrigger
Lenis
```

Do not add another animation library.

Use:
- opacity
- transform
- scale
- clip-path
- SVG path drawing
- restrained parallax

Clean up GSAP contexts and ScrollTriggers on unmount.

---

## 24. Responsive Behavior

### Desktop
- two-column hero
- connection field
- editorial form
- horizontal process
- interactive service selector
- hover interactions

### Tablet
Reduce pointer/parallax complexity while keeping the editorial layout.

### Mobile
Use:

```text
Hero
↓
Intro
↓
Service selector
↓
Form
↓
Process
↓
Contact details
↓
Location
↓
CTA
```

Disable cursor-only effects and keep controls tap-friendly.

---

## 25. Accessibility

Required:
- semantic `<label>` elements
- keyboard navigation
- visible focus states
- clear validation messages
- `aria-live` for submission status
- meaningful button labels
- sufficient contrast
- reduced-motion support

Never rely on color alone for selected states or errors.

---

## 26. Reduced Motion

For `prefers-reduced-motion: reduce`:

Disable:
- cursor parallax
- connection field movement
- SVG path animation
- large scroll transforms
- decorative hover movement

Keep all content and controls fully usable.

---

## 27. Performance

Requirements:
- no Three.js
- no canvas
- lightweight SVG
- animate transforms/opacity
- avoid pointer-driven React state updates
- clean up GSAP/ScrollTrigger
- avoid layout shifts
- lazy-load below-fold assets

The Contact page should feel fast. A prospective client should not have to wait for a decorative SVG to finish contemplating its purpose.

---

## 28. SEO

Suggested title:

```text
Contact TechnoMantra | Let's Build Something That Works
```

Suggested description:

```text
Get in touch with TechnoMantra to discuss websites,
business software, ERP, CRM, automation, ecommerce
and digital solutions for your business.
```

Use semantic:

```text
main
section
form
label
button
address
```

---

## 29. File Structure

```text
src/
├── app/
│   └── contact/
│       └── page.jsx
│
├── components/
│   └── contact/
│       ├── ContactHero.jsx
│       ├── ContactConnectionField.jsx
│       ├── ContactIntro.jsx
│       ├── ContactForm.jsx
│       ├── ServiceSelector.jsx
│       ├── ContactProcess.jsx
│       ├── ContactDetails.jsx
│       ├── ContactLocation.jsx
│       ├── ConnectionPoint.jsx
│       └── ContactCTA.jsx
│
└── lib/
    └── contactApi.js
```

Only create `contactApi.js` when needed by the current architecture.

---

## 30. Important Constraints

### MUST
- JavaScript / JSX only
- Next.js App Router
- Tailwind CSS v4
- existing GSAP
- ScrollTrigger
- existing Lenis
- responsive
- accessible
- reduced-motion support
- real validation
- real API integration when available
- verified contact details only
- premium editorial layout

### MUST NOT
- TypeScript
- `.ts`
- `.tsx`
- fake form submission
- fake contact details
- fake address
- fake statistics
- generic contact template
- giant map iframe by default
- excessive glassmorphism
- neon effects
- cyberpunk styling
- Three.js
- heavy canvas effects
- unnecessary animation

---

## 31. Implementation Order

### Stage 1
Contact Hero + connection visual.

### Stage 2
Contact form + service selector.

### Stage 3
Form validation + backend/API integration.

### Stage 4
What Happens Next process.

### Stage 5
Contact details + verified location.

### Stage 6
Connection Point + Final CTA.

### Stage 7
Responsive behavior.

### Stage 8
Accessibility + reduced motion.

### Stage 9
Performance + SEO + final polish.

---

## 32. Final Design Target

The page should feel like:

```text
premium technology company
+
human conversation
+
editorial design
+
quiet interaction
```

Not:

```text
generic contact form
+
stock office image
+
map iframe
+
three input fields
```

The visitor should feel:

> **“These people are easy to reach, understand business problems, and have a clear process for turning an idea into something real.”**

The Contact page should be visually memorable, but the form itself should remain effortless.

---

## 33. Coding-Agent Final Instruction

Before coding:

1. Inspect the existing project structure.
2. Reuse the existing navbar, footer, typography, colors and Lenis setup.
3. Inspect existing GSAP utilities.
4. Inspect current backend/API architecture.
5. Identify verified TechnoMantra email, phone, address and business information.
6. Do not invent missing information.
7. Inspect existing contact-related components before creating duplicates.

Then implement the Contact page according to this specification.

After implementation verify:

- no TypeScript files were introduced
- no `.ts` / `.tsx` files were created
- existing Home Hero was not modified
- existing navbar/footer remain consistent
- form validation works
- API submission works if backend exists
- loading/success/error states work
- service selection works
- keyboard navigation works
- mobile form is comfortable
- reduced-motion mode works
- contact details are verified
- no secrets are exposed
- no fake information exists
- GSAP and ScrollTrigger are cleaned up correctly
- page loads quickly

The final result should feel **premium, trustworthy, interactive and human**, with the form remaining the easiest thing on the page to use.
