/**
 * TechnoMantra 11-Service Catalogue Data Architecture
 */

export const SERVICES_DATA = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    category: "DIGITAL PRODUCTS",
    shortDescription:
      "High-performance websites designed around your brand, users and business goals.",
    problem:
      "A website should do more than look good. It should communicate clearly, perform well and support the business behind it.",
    capabilities: [
      "Corporate Websites",
      "Business Websites",
      "Ecommerce Platforms",
      "Web Applications",
      "Responsive Development",
      "CMS Integration",
      "API Integration",
    ],
    outcome:
      "A fast, responsive digital presence built around the way your business operates.",
    visualType: "responsive",
    visualFlow: ["DESKTOP", "TABLET", "MOBILE"],
    ctaText: "Discuss a Website Project",
    href: "/services/website-development",
  },
  {
    id: "erp-development",
    number: "02",
    title: "Custom ERP Development",
    category: "BUSINESS SYSTEMS",
    shortDescription:
      "Tailored business systems that connect operations, workflows, data and decision-making.",
    problem:
      "Disconnected tools and manual processes can make everyday operations harder to manage and track.",
    capabilities: [
      "Operations Management",
      "Inventory & Stock Control",
      "Purchasing & Procurement",
      "Sales & Order Fulfillment",
      "Financial Management",
      "Executive Reporting",
      "Custom Workflow Automation",
    ],
    outcome:
      "A connected business system designed around your actual workflows and operational realities.",
    visualType: "erp-flow",
    visualFlow: ["SALES", "INVENTORY", "PURCHASE", "FINANCE", "REPORTING", "ERP"],
    ctaText: "Discuss Custom ERP",
    href: "/services/erp-development",
  },
  {
    id: "crm-development",
    number: "03",
    title: "CRM Development",
    category: "BUSINESS SYSTEMS",
    shortDescription:
      "Customer management platforms that bring sales, relationships and business data together.",
    problem:
      "Customer information spread across disconnected tools makes follow-up and relationship management harder.",
    capabilities: [
      "Lead Capture & Scoring",
      "Customer Records & Profiles",
      "Sales Pipelines & Stages",
      "Automated Follow-ups",
      "Activity Tracking",
      "Customer History & Insights",
      "Sales Forecasting",
    ],
    outcome:
      "A connected view of customers, relationships and sales activity across the entire organization.",
    visualType: "crm-pipeline",
    visualFlow: ["LEAD", "CUSTOMER", "SALES", "FOLLOW-UP", "RELATIONSHIP"],
    ctaText: "Discuss CRM Solutions",
    href: "/services/crm-development",
  },
  {
    id: "accounting-software",
    number: "04",
    title: "Accounting Software",
    category: "BUSINESS SYSTEMS",
    shortDescription:
      "Practical accounting systems built around your financial workflows and reporting needs.",
    problem:
      "Financial information should be organized around the way the business actually works, not rigid spreadsheets.",
    capabilities: [
      "Automated Transaction Logging",
      "General Ledger & Accounts",
      "Tax & Compliance Calculations",
      "Invoice Generation & Billing",
      "Financial Statements & Reports",
      "Audit Trails & Records",
    ],
    outcome:
      "A structured financial system that makes business information and ledger visibility easier to manage.",
    visualType: "accounting-ledger",
    visualFlow: ["TRANSACTIONS", "ACCOUNTS", "REPORTS", "BUSINESS VISIBILITY"],
    ctaText: "Discuss Accounting Software",
    href: "/services/accounting-software",
  },
  {
    id: "email-marketing",
    number: "05",
    title: "Email Marketing",
    category: "GROWTH & CREATIVE",
    shortDescription:
      "Targeted email campaigns and systems designed to strengthen engagement and customer relationships.",
    problem:
      "Consistent communication becomes difficult when campaigns and customer data are disconnected.",
    capabilities: [
      "Targeted Campaigns",
      "Audience Segmentation",
      "Automated Drip Workflows",
      "Customer Lifecycle Emails",
      "Lead Nurturing Sequences",
      "Analytics & Conversion Tracking",
    ],
    outcome:
      "More structured, automated and useful customer communication that builds long-term retention.",
    visualType: "email-automation",
    visualFlow: ["AUDIENCE", "CAMPAIGN", "AUTOMATION", "ENGAGEMENT"],
    ctaText: "Discuss Email Marketing",
    href: "/services/email-marketing",
  },
  {
    id: "seo-services",
    number: "06",
    title: "SEO Services",
    category: "GROWTH & CREATIVE",
    shortDescription:
      "Search strategies focused on improving visibility, relevant traffic and long-term organic growth.",
    problem:
      "A strong website needs to be discoverable by the people actively searching for what the business provides.",
    capabilities: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Content & Keyword Strategy",
      "Search Intent Mapping",
      "Core Web Vitals Optimization",
      "Performance & Rank Monitoring",
    ],
    outcome:
      "A stronger search presence built around relevant high-intent users and long-term organic visibility.",
    visualType: "seo-rank",
    visualFlow: ["SEARCH", "VISIBILITY", "RELEVANT TRAFFIC", "OPPORTUNITY"],
    ctaText: "Discuss SEO Strategy",
    href: "/services/seo-services",
  },
  {
    id: "digital-marketing",
    number: "07",
    title: "Digital Marketing",
    category: "GROWTH & CREATIVE",
    shortDescription:
      "Data-informed digital campaigns designed to connect your business with the right audience.",
    problem:
      "Marketing works better when strategy, audience targeting, creative assets and measurement are connected.",
    capabilities: [
      "Multi-Channel Campaign Strategy",
      "Paid Search & Social Advertising",
      "Content Marketing & Copywriting",
      "Audience Targeting & Retargeting",
      "Conversion Rate Optimization",
      "Full-Funnel Analytics",
    ],
    outcome:
      "A more connected digital marketing approach built around measurable business goals and conversions.",
    visualType: "marketing-funnel",
    visualFlow: ["STRATEGY", "CAMPAIGN", "AUDIENCE", "ENGAGEMENT", "GROWTH"],
    ctaText: "Discuss Digital Marketing",
    href: "/services/digital-marketing",
  },
  {
    id: "graphic-design",
    number: "08",
    title: "Graphic Design",
    category: "GROWTH & CREATIVE",
    shortDescription:
      "Clear and consistent visual communication for brands, products, campaigns and business materials.",
    problem:
      "Strong businesses need visual communication that is as clear, modern and precise as the ideas behind them.",
    capabilities: [
      "Brand Identity & Style Guides",
      "Marketing & Sales Collateral",
      "Corporate Decks & Presentations",
      "Digital Marketing Visuals",
      "Social Media Asset Systems",
      "Vector Illustrations & Iconography",
    ],
    outcome:
      "A clearer, highly recognizable and consistent visual presence across all digital and print touchpoints.",
    visualType: "design-system",
    visualFlow: ["IDEA", "VISUAL LANGUAGE", "BRAND", "COMMUNICATION"],
    ctaText: "Discuss Graphic Design",
    href: "/services/graphic-design",
  },
  {
    id: "packaging-design",
    number: "09",
    title: "Packaging Design",
    category: "GROWTH & CREATIVE",
    shortDescription:
      "Packaging concepts that balance brand identity, usability, structural integrity and shelf presence.",
    problem:
      "Packaging has to communicate product value clearly while functioning seamlessly in real-world retail and shipping.",
    capabilities: [
      "Packaging Concept Design",
      "Structural Box & Label Design",
      "Print-Ready Artwork & Dielines",
      "Materials & Finish Specification",
      "Regulatory & Barcode Placement",
      "Brand Shelf Consistency",
    ],
    outcome:
      "Packaging engineered to connect product quality, brand identity and memorable customer unboxing.",
    visualType: "packaging-box",
    visualFlow: ["BRAND", "PRODUCT", "PACKAGING", "CUSTOMER"],
    ctaText: "Discuss Packaging Design",
    href: "/services/packaging-design",
  },
  {
    id: "corporate-video",
    number: "10",
    title: "Corporate Video",
    category: "GROWTH & CREATIVE",
    shortDescription:
      "Professional video content for brands, products, teams, presentations and business communication.",
    problem:
      "Complex business ideas and product features often need a clear, engaging visual story to be understood.",
    capabilities: [
      "Corporate Brand Films",
      "Product & Feature Showcases",
      "Explainer & Animated Demos",
      "Customer Testimonial Videos",
      "Executive & Investor Presentations",
      "Social & Campaign Video Ads",
    ],
    outcome:
      "Cinematic visual storytelling that makes your message easier to understand, share and remember.",
    visualType: "video-frame",
    visualFlow: ["STORY", "VISUAL", "MESSAGE", "AUDIENCE"],
    ctaText: "Discuss Corporate Video",
    href: "/services/corporate-video",
  },
  {
    id: "dedicated-developers",
    number: "11",
    title: "Dedicated Developers",
    category: "BUSINESS SYSTEMS",
    shortDescription:
      "Skilled developers who extend your team for focused projects, ongoing development or specialized engineering.",
    problem:
      "Growing teams often need on-demand engineering capacity without the friction of lengthy hiring cycles.",
    capabilities: [
      "Frontend Engineers (React, Next.js)",
      "Backend Developers (Node.js, Python, APIs)",
      "Full-Stack Software Engineers",
      "Database & Cloud Architects",
      "Dedicated Project Engineering",
      "Long-Term Codebase Maintenance",
    ],
    outcome:
      "Reliable on-demand development capacity seamlessly integrated into your workflow and team culture.",
    visualType: "team-extension",
    visualFlow: ["YOUR TEAM", "TECHNOMANTRA", "EXTENDED TEAM", "PROJECT"],
    ctaText: "Hire Dedicated Developers",
    href: "/services/dedicated-developers",
  },
];

export const SERVICE_CATEGORIES = [
  {
    name: "DIGITAL PRODUCTS",
    tagline: "High-performance web applications and digital platforms.",
    services: ["01 Website Development"],
  },
  {
    name: "BUSINESS SYSTEMS",
    tagline: "Connected operations, data management and dedicated engineering.",
    services: [
      "02 Custom ERP Development",
      "03 CRM Development",
      "04 Accounting Software",
      "11 Dedicated Developers",
    ],
  },
  {
    name: "GROWTH & CREATIVE",
    tagline: "Multi-channel marketing, search visibility and visual branding.",
    services: [
      "05 Email Marketing",
      "06 SEO Services",
      "07 Digital Marketing",
      "08 Graphic Design",
      "09 Packaging Design",
      "10 Corporate Video",
    ],
  },
];

export const SERVICE_RECOMMENDER_GOALS = [
  {
    goal: "Build a new website or web platform",
    tag: "Online Presence",
    recommended: [
      "01 Website Development",
      "06 SEO Services",
      "07 Digital Marketing",
    ],
    reason:
      "Combines a fast responsive web platform with search visibility and multi-channel launch campaigns.",
  },
  {
    goal: "Automate business workflows & internal operations",
    tag: "Efficiency",
    recommended: [
      "02 Custom ERP Development",
      "04 Accounting Software",
      "03 CRM Development",
    ],
    reason:
      "Unifies sales, inventory, accounting and operations into a single automated source of truth.",
  },
  {
    goal: "Manage customer relationships & sales pipeline",
    tag: "Sales Growth",
    recommended: [
      "03 CRM Development",
      "05 Email Marketing",
      "07 Digital Marketing",
    ],
    reason:
      "Integrates lead capture with automated lifecycle nurture funnels and pipeline tracking.",
  },
  {
    goal: "Create brand identity, packaging or media assets",
    tag: "Brand & Media",
    recommended: [
      "08 Graphic Design",
      "09 Packaging Design",
      "10 Corporate Video",
    ],
    reason:
      "Delivers a coherent visual system across physical packaging, digital branding and corporate video.",
  },
  {
    goal: "Scale engineering team with dedicated developers",
    tag: "Engineering Scale",
    recommended: [
      "11 Dedicated Developers",
      "01 Website Development",
      "02 Custom ERP Development",
    ],
    reason:
      "Provides specialized frontend and backend talent embedded directly into your product roadmap.",
  },
];

export default SERVICES_DATA;
