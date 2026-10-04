export const CONTACT_SERVICES = [
  { id: "website-development", label: "Website Development", category: "Core Development", desc: "Ultra-fast Next.js platforms, brand websites, and headless storefronts." },
  { id: "custom-erp", label: "Custom ERP", category: "Enterprise Systems", desc: "Tailored manufacturing, inventory, and resource planning operating systems." },
  { id: "crm", label: "CRM Development", category: "Enterprise Systems", desc: "Multi-branch sales pipelines, deal stages, and client relationship engines." },
  { id: "accounting-software", label: "Accounting Software", category: "Enterprise Systems", desc: "Audit-proof multi-currency ledgers and automated financial reporting." },
  { id: "ecommerce", label: "Ecommerce Solutions", category: "Core Development", desc: "Scalable digital storefronts with sub-second catalog discovery & checkout." },
  { id: "business-automation", label: "Business Automation", category: "Intelligent Workflows", desc: "Eliminating manual data entry, PDF generators, and multi-team bottlenecks." },
  { id: "digital-marketing", label: "Digital Marketing", category: "Growth & Search", desc: "Targeted performance funnels, lead generation, and acquisition campaigns." },
  { id: "seo", label: "SEO Services", category: "Growth & Search", desc: "Technical architecture optimization, semantic search, and organic authority." },
  { id: "graphic-design", label: "Graphic Design", category: "Creative & Brand", desc: "Brand identities, design systems, visual assets, and marketing collateral." },
  { id: "packaging-design", label: "Packaging Design", category: "Creative & Brand", desc: "Industrial & consumer packaging design engineered for shelf presence." },
  { id: "corporate-video", label: "Corporate Video", category: "Creative & Brand", desc: "High-production brand documentaries, product launches, and operational reels." },
  { id: "dedicated-developers", label: "Dedicated Developers", category: "Staff Augmentation", desc: "Senior full-stack engineering talent embedded directly into your sprints." },
  { id: "other", label: "Other / Custom Software", category: "Custom Software", desc: "Unique business logic, specialized hardware integrations, or AI workflows." },
];

export const LOOKING_FOR_OPTIONS = [
  {
    id: "website",
    title: "A Website / Web App",
    desc: "We can help plan, design, and develop a website engineered around your business goals and customer journeys.",
  },
  {
    id: "software",
    title: "Business Software",
    desc: "We build custom digital systems engineered around your actual business workflows, team roles, and data structures.",
  },
  {
    id: "erp-crm",
    title: "Custom ERP / CRM",
    desc: "Unified operating platforms connecting multi-location inventory, billing, sales pipelines, and floor scheduling.",
  },
  {
    id: "ecommerce",
    title: "Ecommerce System",
    desc: "High-speed storefronts with sub-second catalog search, localized checkout, and automated fulfillment sync.",
  },
  {
    id: "automation",
    title: "Business Automation",
    desc: "Connecting disconnected software tools and repetitive document flows to eliminate manual errors and latency.",
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    desc: "Data-driven organic authority and performance campaigns that deliver verified qualified business inquiries.",
  },
  {
    id: "creative",
    title: "Creative & Brand Design",
    desc: "End-to-end brand identity systems, packaging design, and high-impact corporate cinematography.",
  },
  {
    id: "custom",
    title: "Something Else",
    desc: "Tell us about your specific challenge—we'll help evaluate the technical viability and design the architecture.",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "YOU REACH OUT",
    subtitle: "Share Your Vision",
    desc: "Tell us what you're working on, what's broken, or what you're trying to achieve with technology.",
  },
  {
    num: "02",
    title: "WE UNDERSTAND",
    subtitle: "Deep Architectural Review",
    desc: "We review your requirements, analyze operational bottlenecks, and ask the essential strategic questions.",
  },
  {
    num: "03",
    title: "WE PROPOSE",
    subtitle: "Clear Scope & Next Steps",
    desc: "We suggest the right technical approach, realistic milestone roadmap, stack selection, and transparent scope.",
  },
  {
    num: "04",
    title: "WE BUILD",
    subtitle: "Design, Code & Delivery",
    desc: "Once aligned, we move rapidly into interactive design, engineering sprints, automated testing, and deployment.",
  },
];

export const VERIFIED_CONTACT_DETAILS = {
  email: "hello@technomantra.in",
  responseWindow: "Within 24 business hours",
  businessHours: "Monday – Saturday, 9:30 AM – 6:30 PM IST",
  headquarters: {
    city: "Surat",
    state: "Gujarat",
    country: "India",
    note: "Serving commercial and enterprise clients globally.",
  },
  channels: [
    { label: "Direct Inquiries", value: "hello@technomantra.in", type: "email" },
    { label: "Business Consultations", value: "Available via Google Meet & Zoom", type: "video" },
    { label: "Technical Support", value: "Dedicated support portal for active enterprise clients", type: "portal" },
  ],
};

export const CONNECTION_FIELD_NODES = [
  { id: "idea", label: "IDEA", x: 20, y: 30, color: "#38bdf8" },
  { id: "business", label: "BUSINESS", x: 80, y: 25, color: "#d6a85f" },
  { id: "design", label: "DESIGN", x: 15, y: 70, color: "#a855f7" },
  { id: "technology", label: "TECHNOLOGY", x: 85, y: 75, color: "#38bdf8" },
  { id: "people", label: "PEOPLE", x: 50, y: 15, color: "#10b981" },
  { id: "product", label: "PRODUCT", x: 35, y: 85, color: "#f59e0b" },
  { id: "growth", label: "GROWTH", x: 65, y: 85, color: "#06b6d4" },
];
