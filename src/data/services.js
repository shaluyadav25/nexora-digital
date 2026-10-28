import { AppWindow, Cloud, Code2, Layers3, ShoppingBag, Sparkles } from "lucide-react"

export const services = [
  {
    number: "01", slug: "web-development", title: "Web development", shortTitle: "Web platforms",
    description: "Marketing sites and web applications that load quickly, read clearly, and make the next step obvious.",
    detail: "A useful website has to do more than look polished. We plan its structure around the people using it, then build a responsive, accessible experience your team can confidently maintain.",
    icon: AppWindow, category: "Engineering", tags: ["React", "Vite", "Node.js"],
    features: ["Responsive marketing and product websites", "Customer portals and internal dashboards", "Accessibility, performance and search foundations", "CMS and third-party integrations"],
    outcome: "A considered digital front door your team can grow into.",
  },
  {
    number: "02", slug: "mobile-app-development", title: "Mobile app development", shortTitle: "Mobile apps",
    description: "Focused iOS and Android experiences designed around real-life habits, not feature checklists.",
    detail: "From first-use flows to the small details people rely on every day, we design mobile products that feel simple to use and practical to build on.",
    icon: Code2, category: "Engineering", tags: ["React Native", "Expo", "TypeScript"],
    features: ["Product discovery and interaction design", "Cross-platform iOS and Android apps", "API and authentication integration", "Release planning and ongoing improvements"],
    outcome: "A mobile experience that earns its place on the home screen.",
  },
  {
    number: "03", slug: "product-design", title: "Product & UI/UX design", shortTitle: "Product design",
    description: "Clear product journeys and accessible interfaces that make complicated work feel straightforward.",
    detail: "We help teams understand what users need, remove friction from important journeys, and give the product a coherent visual language.",
    icon: Layers3, category: "Design", tags: ["Figma", "Prototyping", "Design systems"],
    features: ["User flows and information architecture", "Wireframes and interactive prototypes", "Accessible interface and visual design", "Reusable component libraries"],
    outcome: "A shared, testable direction before the expensive build begins.",
  },
  {
    number: "04", slug: "cloud-devops", title: "Cloud & DevOps", shortTitle: "Cloud & DevOps",
    description: "Reliable delivery pipelines and cloud foundations that keep releases predictable.",
    detail: "We shape a deployment workflow that fits your product and your team, with monitoring and sensible operational practices from day one.",
    icon: Cloud, category: "Infrastructure", tags: ["AWS", "Docker", "CI/CD"],
    features: ["Cloud architecture and environment setup", "Continuous integration and deployment", "Monitoring, backups and recovery planning", "Infrastructure documentation and handover"],
    outcome: "Fewer release surprises and clearer ownership of production.",
  },
  {
    number: "05", slug: "ai-automation", title: "AI & workflow automation", shortTitle: "AI automation",
    description: "Practical automation for repetitive tasks, with human review where it matters.",
    detail: "We look for well-defined, repeated work where automation can save time, then design a measured workflow with clear safeguards and useful fallbacks.",
    icon: Sparkles, category: "Automation", tags: ["APIs", "LLMs", "Workflow tools"],
    features: ["Workflow mapping and opportunity assessment", "Document and information processing", "API-connected automations", "Human review, evaluation and logging"],
    outcome: "Less time spent on repetitive work, without hiding important decisions.",
  },
  {
    number: "06", slug: "ecommerce-development", title: "E-commerce development", shortTitle: "E-commerce",
    description: "Thoughtful storefronts that make it easier to find, understand, and buy the right thing.",
    detail: "A strong storefront gives products room to speak, makes checkout feel dependable, and gives the people running the shop straightforward tools.",
    icon: ShoppingBag, category: "Commerce", tags: ["Shopify", "React", "Payments"],
    features: ["Storefront strategy and experience design", "Catalog, search and product detail pages", "Checkout and payment integrations", "Analytics and merchandising improvements"],
    outcome: "An easier shopping journey for customers and store teams.",
  },
]
