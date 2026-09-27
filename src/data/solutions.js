/**
 * TechnoMantra Solutions Architecture Data
 */

export const BUSINESS_PROBLEMS = [
  {
    number: "01",
    title: "Disconnected Data",
    description: "Important information lives across different systems, creating information silos and delays.",
    tag: "DATA ISOLATION",
  },
  {
    number: "02",
    title: "Manual Workflows",
    description: "Repetitive processes consume time, drain team energy and create avoidable operational friction.",
    tag: "EFFICIENCY LOSS",
  },
  {
    number: "03",
    title: "Limited Visibility",
    description: "Leadership and operational teams struggle to see a single source of truth across operations.",
    tag: "REPORTING GAP",
  },
  {
    number: "04",
    title: "Customer Fragmentation",
    description: "Customer history, conversations and orders become scattered across multiple disconnected tools.",
    tag: "EXPERIENCE GAP",
  },
  {
    number: "05",
    title: "Growth Complexity",
    description: "Systems that worked well at a smaller scale become bottlenecked and unmanageable as the business grows.",
    tag: "SCALE BOTTLENECK",
  },
];

export const SOLUTIONS_LIST = [
  {
    id: "crm-solutions",
    number: "01",
    slug: "crm",
    eyebrow: "01 / CRM SOLUTIONS",
    title: "CRM Solutions",
    headline: "Bring customer relationships into one connected system.",
    description:
      "Bring customer data, sales activity, pipeline tracking and client relationships into a unified system built around how your team actually sells.",
    image: "/images/solutions/crm-solutions.jpg",
    alt: "TechnoMantra CRM Solutions Platform",
    capabilities: [
      "Lead Management & Qualification",
      "Unified Customer Records & History",
      "Sales Pipelines & Deal Stages",
      "Automated Follow-up Tasks",
      "Communication History & Notes",
      "Real-time Executive Reporting",
    ],
    flow: ["LEAD", "CUSTOMER", "SALES", "FOLLOW-UP", "RELATIONSHIP"],
    href: "/solutions/crm",
    ctaText: "Explore CRM Architecture",
  },
  {
    id: "erp-solutions",
    number: "02",
    slug: "erp",
    eyebrow: "02 / ERP SOLUTIONS",
    title: "ERP Solutions",
    headline: "Connect the workflows behind your business.",
    description:
      "Connect the workflows, inventory, purchasing, logistics and financial data that keep your operational machinery moving synchronously.",
    image: "/images/solutions/erp-solutions.jpg",
    alt: "TechnoMantra ERP Enterprise Operations Platform",
    capabilities: [
      "End-to-End Operations Control",
      "Real-time Inventory & Warehouse Management",
      "Procurement & Vendor PO Workflows",
      "Order Fulfillment & Tracking",
      "Financial Accounting & GST Ledgers",
      "Custom Operational Workflow Management",
    ],
    flow: ["OPERATIONS", "INVENTORY", "PURCHASING", "SALES", "FINANCE", "REPORTING"],
    href: "/solutions/erp",
    ctaText: "Explore Custom ERP",
  },
  {
    id: "business-automation",
    number: "03",
    slug: "business-automation",
    eyebrow: "03 / BUSINESS AUTOMATION",
    title: "Business Automation",
    headline: "Replace repetitive work with connected workflows.",
    description:
      "Replace repetitive manual copy-pasting, multi-app data entry and manual approvals with intelligent automated workflows tailored to your business rules.",
    image: "/images/solutions/automation.jpg",
    alt: "TechnoMantra Business Automation Workflow",
    capabilities: [
      "Automated Cross-Platform Sync",
      "Real-time Alerts & Notifications",
      "Multi-stage Approval Pipelines",
      "Bi-directional API Data Ingestion",
      "System & Database Integrations",
      "Repetitive Task & Report Automation",
    ],
    flow: ["TRIGGER", "PROCESS", "APPROVAL", "ACTION", "RESULT"],
    href: "/solutions/business-automation",
    ctaText: "Explore Automation Systems",
  },
  {
    id: "ecommerce-solutions",
    number: "04",
    slug: "ecommerce",
    eyebrow: "04 / ECOMMERCE SOLUTIONS",
    title: "Ecommerce Solutions",
    headline: "Connect products, customers and operations.",
    description:
      "Create high-conversion digital commerce storefronts that link catalog discovery, checkout, payment gateways, orders and backend fulfillment in real-time.",
    image: "/images/solutions/ecommerce-solutions.jpg",
    alt: "TechnoMantra Omnichannel Ecommerce Solutions",
    capabilities: [
      "Scalable Product Catalog Management",
      "High-Performance Custom Storefronts",
      "Real-time Order & Stock Sync",
      "Frictionless Checkout & Payments",
      "Customer Account & Loyalty Portals",
      "Warehouse & Logistics Integrations",
    ],
    flow: ["PRODUCT", "CUSTOMER", "ORDER", "PAYMENT", "FULFILLMENT"],
    href: "/solutions/ecommerce",
    ctaText: "Explore Ecommerce Platforms",
  },
  {
    id: "marketing-automation",
    number: "05",
    slug: "marketing-automation",
    eyebrow: "05 / MARKETING AUTOMATION",
    title: "Marketing Automation",
    headline: "Connect campaigns with customer journeys.",
    description:
      "Connect acquisition campaigns, lifecycle email sequences and customer engagement data so revenue growth and audience retention become predictable.",
    image: "/images/solutions/marketing-automation.jpg",
    alt: "TechnoMantra Marketing Automation Architecture",
    capabilities: [
      "Automated Multi-Touch Campaigns",
      "Lifecycle & Nurture Email Sequences",
      "Behavior-Triggered Engagement",
      "Dynamic Audience Segmentation",
      "Customer Journey Mapping",
      "Attribution & ROI Analytics",
    ],
    flow: ["AUDIENCE", "CAMPAIGN", "MESSAGE", "ENGAGEMENT", "JOURNEY"],
    href: "/solutions/marketing-automation",
    ctaText: "Explore Marketing Systems",
  },
];

export const CONNECTED_OUTCOMES = [
  {
    number: "01",
    title: "Clarity",
    subtitle: "A single, dependable view of information across the enterprise.",
    description:
      "When software tools talk directly to one another, leadership and cross-functional teams work from live, unified data rather than fragmented spreadsheets.",
    badge: "UNIFIED TRUTH",
  },
  {
    number: "02",
    title: "Efficiency",
    subtitle: "Less repetitive manual work and faster operational velocity.",
    description:
      "Routine tasks, data transfers and approval checkpoints happen automatically in the background, freeing your team to focus on high-value business initiatives.",
    badge: "WORKFLOW VELOCITY",
  },
  {
    number: "03",
    title: "Scale",
    subtitle: "Systems engineered to expand seamlessly as your volume compounds.",
    description:
      "Modular, API-driven architecture allows your business to introduce new product lines, international locations and bigger transaction volumes without breaking existing operations.",
    badge: "FUTURE-PROOF",
  },
];

export const SOLUTION_FINDER_DATA = [
  {
    id: "customers",
    goal: "Manage customers & sales better",
    category: "CUSTOMER & PIPELINES",
    solutionTitle: "CRM Solutions",
    description:
      "Bring customer records, sales pipelines, communication history and follow-up activities into one connected system.",
    benefits: ["Centralized deal stages", "Team activity tracking", "No lost leads"],
    href: "/solutions/crm",
    cta: "Explore CRM Solutions",
  },
  {
    id: "operations",
    goal: "Connect business operations & inventory",
    category: "ENTERPRISE SYSTEMS",
    solutionTitle: "Custom ERP Solutions",
    description:
      "Unify inventory, procurement, production workflows, sales fulfillment and financial ledgers under a single custom dashboard.",
    benefits: ["Real-time inventory sync", "Vendor procurement automation", "Executive financial visibility"],
    href: "/solutions/erp",
    cta: "Explore ERP Solutions",
  },
  {
    id: "automation",
    goal: "Automate repetitive manual work",
    category: "INTELLIGENT WORKFLOWS",
    solutionTitle: "Business Automation & AI",
    description:
      "Eliminate manual data entry, file moving and manual status checks by connecting your disparate tools with intelligent triggers.",
    benefits: ["Zero duplicate data entry", "Instant cross-app sync", "Faster response times"],
    href: "/solutions/business-automation",
    cta: "Explore Automation Systems",
  },
  {
    id: "ecommerce",
    goal: "Sell online & scale digital commerce",
    category: "DIGITAL COMMERCE",
    solutionTitle: "Ecommerce Solutions",
    description:
      "Build custom storefronts and omnichannel platforms tightly linked with your warehouse, payment gateways and delivery logistics.",
    benefits: ["Lightning fast checkout", "Automated stock tracking", "Custom checkout workflows"],
    href: "/solutions/ecommerce",
    cta: "Explore Ecommerce Solutions",
  },
  {
    id: "marketing",
    goal: "Improve marketing & retention workflows",
    category: "GROWTH & RETENTION",
    solutionTitle: "Marketing Automation",
    description:
      "Trigger personalized email sequences, SMS alerts and segmented nurture flows based on real customer behavioral events.",
    benefits: ["Automated onboarding funnels", "Higher customer lifetime value", "Attribution clarity"],
    href: "/solutions/marketing-automation",
    cta: "Explore Marketing Automation",
  },
  {
    id: "ecosystem",
    goal: "Connect all business software into one system",
    category: "CONNECTED ENTERPRISE",
    solutionTitle: "Connected Business Architecture",
    description:
      "Architect a cohesive digital ecosystem where your website, CRM, ERP, automation and data operate as one synchronized engine.",
    benefits: ["Unified company-wide architecture", "Custom API middleware", "End-to-end operational visibility"],
    href: "/solutions/erp",
    cta: "Schedule Architecture Session",
  },
];
