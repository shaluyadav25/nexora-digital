import { Compass, Palette, Rocket, Workflow } from "lucide-react"
export { services } from "./services"
export { projects } from "./projects"
export { testimonials } from "./testimonials"
export { team } from "./team"
export { faqs } from "./faqs"

export const company = {
  name: "Nexora Digital",
  shortName: "Nexora",
  tagline: "Independent digital engineering for businesses ready to move forward.",
  location: "Lucknow, Uttar Pradesh, India",
  email: "",
  phone: "",
  whatsappNumber: "",
  whatsappMessage: "Hi, I need a quote for a project.",
  social: {
    linkedin: "",
    github: "",
    instagram: "",
    x: "",
    youtube: "",
  },
  sampleNotice: "Nexora Digital is a demonstration brand. Projects, metrics and testimonials are illustrative, not verified client work or endorsements.",
}

export const processSteps = [
  { number: "01", title: "Discover", description: "We listen, map the real problem, and agree on what a useful outcome looks like.", icon: Compass },
  { number: "02", title: "Design", description: "We shape the experience, test important assumptions, and make the direction tangible.", icon: Palette },
  { number: "03", title: "Develop", description: "We build in reviewable increments, sharing progress and decisions as the product takes shape.", icon: Workflow },
  { number: "04", title: "Deploy", description: "We prepare a considered handover and help your team take the next step with confidence.", icon: Rocket },
]

export const technologyStack = ["React", "TypeScript", "Node.js", "Figma", "PostgreSQL", "AWS", "Vite", "Shopify"]
