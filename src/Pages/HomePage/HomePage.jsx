import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Layers3,
  Smartphone, Palette, Bot, Cloud, Cable, ShieldCheck,
  Sparkles, Workflow, ChevronDown,
} from "lucide-react"
import { Link } from "react-router-dom"
import PageMeta from "../../Components/Site/PageMeta"
import "./HomePage.css"

const services = [
  { n: "01", icon: Code2, title: "Custom software", text: "Purpose-built platforms that make complex work feel simple.", tags: "Platforms · Internal tools", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85" },
  { n: "02", icon: Layers3, title: "Web applications", text: "Fast, thoughtful digital products made around real user needs.", tags: "React · Full-stack", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85" },
  { n: "03", icon: Smartphone, title: "Mobile experiences", text: "Useful, intuitive experiences for customers on the move.", tags: "iOS · Android", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85" },
  { n: "04", icon: Palette, title: "Product design", text: "Clear journeys and interfaces that make every interaction count.", tags: "Research · UI/UX", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85" },
  { n: "05", icon: Bot, title: "AI & automation", text: "Practical automation that gives teams more time for meaningful work.", tags: "AI workflows · Integration", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85" },
  { n: "06", icon: Cloud, title: "Cloud & DevOps", text: "Dependable foundations that help products grow with confidence.", tags: "Cloud · Delivery", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85" },
  { n: "07", icon: Cable, title: "API integration", text: "Connect tools, services, and data into one coherent system.", tags: "APIs · Data flows", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85" },
  { n: "08", icon: ShieldCheck, title: "Ongoing support", text: "Thoughtful improvements, maintenance, and care after launch.", tags: "Quality · Evolution", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85" },
]

const projects = [
  { name: "ORBIT", type: "Analytics platform", category: "DATA / SAAS", description: "A clearer view of the numbers behind better decisions.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85", className: "nx-project-orbit", slug: "orbit-analytics" },
  { name: "FORGE", type: "Operations platform", category: "OPERATIONS / B2B", description: "Bringing busy teams and complex workflows into sync.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85", className: "nx-project-forge", slug: "forge-operations" },
  { name: "MONO", type: "Commerce experience", category: "COMMERCE / DIGITAL", description: "A calmer, more considered way to discover and shop.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85", className: "nx-project-mono", slug: "mono-commerce" },
]

const steps = [
  { n: "01", title: "Discover", text: "We listen, ask better questions, and understand what success needs to mean." },
  { n: "02", title: "Shape", text: "We define the experience, technical direction, scope, and next right steps." },
  { n: "03", title: "Build", text: "We work in clear iterations, share progress, test, and refine together." },
  { n: "04", title: "Evolve", text: "We launch carefully and help your product keep getting better." },
]

const stack = [
  { title: "FRONTEND", items: "React · JavaScript · TypeScript" },
  { title: "BACKEND", items: "Node.js · Express · Python" },
  { title: "DATA", items: "MongoDB · PostgreSQL" },
  { title: "DELIVERY", items: "AWS · Docker · Git" },
]

const principles = [
  { title: "Clear communication", text: "You know what is happening, why it matters, and what comes next." },
  { title: "Useful by design", text: "We focus on the real problem before choosing a shiny solution." },
  { title: "Built with care", text: "Accessibility, reliability, and maintainability are part of the work." },
]

function SectionEyebrow({ children, number }) {
  return <p className="nx-eyebrow"><span>{number}</span>{children}</p>
}

export default function HomePage() {
  const [faqOpen, setFaqOpen] = useState(0)
  const [activeService, setActiveService] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", dragFree: false })

  useEffect(() => {
    if (!emblaApi) return undefined
    const updateActive = () => setActiveService(emblaApi.selectedScrollSnap())
    emblaApi.on("select", updateActive)
    return () => emblaApi.off("select", updateActive)
  }, [emblaApi])

  const selectService = (index) => {
    setActiveService(index)
    emblaApi?.scrollTo(index)
  }
  const faqs = [
    { q: "Can you help shape an idea before development starts?", a: "Yes. We can begin with discovery, requirements, user journeys, and a practical roadmap before deciding what to build." },
    { q: "Can you work with an existing product or codebase?", a: "Yes. An engagement can focus on improving an existing application, integrating systems, resolving technical issues, or planning the next stage." },
    { q: "How do projects usually begin?", a: "We start with a conversation about your goals, users, constraints, and timeline. From there, we suggest a sensible next step and scope." },
    { q: "Do you provide support after launch?", a: "Support and ongoing improvement can be planned around your product, team, and operational needs." },
  ]

  return (
    <>
      <PageMeta title="Nexora Digital | Software built around people" description="Nexora Digital designs and builds thoughtful digital products, dependable software, and connected experiences for growing businesses." />

      <div className="nx-site">
        <section className="nx-hero">
          <div className="nx-hero-grid">
            <motion.div className="nx-hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
              <p className="nx-hero-kicker"><span className="nx-live-dot" /> SOFTWARE · DESIGN · DIGITAL PRODUCTS</p>
              <h1>Technology that<br />moves your business<br /><em>forward.</em></h1>
              <p className="nx-hero-lede">We design and build thoughtful digital products, dependable software, and connected experiences that help businesses do their best work.</p>
              <div className="nx-hero-actions">
                <Link className="nx-btn nx-btn-orange" to="/contact">Let’s build something <ArrowUpRight size={18} /></Link>
                <Link className="nx-btn nx-btn-quiet" to="/portfolio">Explore our work <ArrowRight size={17} /></Link>
              </div>
              <div className="nx-hero-foot"><span><Check size={15} /> Thoughtful from day one</span><i /> <span>From first idea to launch</span></div>
            </motion.div>

            <motion.div className="nx-hero-visual" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .12 }}>
              <div className="nx-hero-image-frame">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=90" alt="A software team collaborating around a table in a bright modern workspace" fetchPriority="high" />
                <div className="nx-image-shade" />
                <div className="nx-photo-caption"><span>GOOD WORK, BUILT TOGETHER</span><ArrowUpRight size={17} /></div>
              </div>
              <div className="nx-floating-note"><span className="nx-note-icon"><Workflow size={19} /></span><span><strong>One connected team</strong><small>Strategy · Design · Engineering</small></span></div>
              <div className="nx-hero-stamp"><span>IDEAS INTO</span><strong>IMPACT<span>.</span></strong><ArrowDownRight size={23} /></div>
            </motion.div>
          </div>
          <div className="nx-hero-bottomline"><span>INDEPENDENT DIGITAL STUDIO</span><span>BASED IN LUCKNOW · WORKING EVERYWHERE</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="nx-capability-strip" aria-label="Technology capabilities">
          <span className="nx-strip-label">GOOD THINKING.<br />SOLID ENGINEERING.</span>
          <div className="nx-strip-items"><span>Web platforms</span><i /><span>Custom software</span><i /><span>Digital products</span><i /><span>Connected systems</span><i /><span>Product design</span></div>
        </section>

        <section className="nx-about nx-section" id="about">
          <div className="nx-about-content">
            <SectionEyebrow number="01">A LITTLE ABOUT US</SectionEyebrow>
            <h2>Better software begins with <em>understanding.</em></h2>
            <p className="nx-about-lead">Technology is only useful when it makes something better for the people who depend on it.</p>
            <p>We bring product thinking, thoughtful design, and dependable engineering into one conversation. That means asking the right questions, making decisions visible, and building around the real needs of your business.</p>
            <Link className="nx-text-link" to="/about">Get to know our approach <ArrowUpRight size={17} /></Link>
          </div>
          <div className="nx-about-visual">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85" alt="Bright contemporary workspace with collaborative desks and natural light" loading="lazy" />
            <div className="nx-about-image-label"><Sparkles size={17} /><span>Thoughtful work.<br /><strong>Made together.</strong></span></div>
          </div>
        </section>

        <section className="nx-services nx-section" id="services">
          <div className="nx-section-heading"><div><SectionEyebrow number="02">WHAT WE DO</SectionEyebrow><h2>Big ideas need<br /><em>the right kind</em> of build.</h2></div><div className="nx-heading-aside"><p>From a focused feature to a complete digital platform, we connect the right people, thinking, and technology to move your business forward.</p><Link className="nx-text-link" to="/services">Explore all services <ArrowUpRight size={17} /></Link></div></div>
          <div className="nx-services-carousel" ref={emblaRef}>
            <div className="nx-services-track">
              {services.map(({ n, icon: Icon, title, text, tags, image }, index) => <motion.article className={`nx-service-slide ${activeService === index ? "is-active" : ""}`} key={n} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .4, delay: (index % 4) * .045 }}>
                <button className="nx-service-card" type="button" aria-label={`Open ${title} details`} aria-expanded={activeService === index} onClick={() => selectService(index)}>
                  <img src={image} alt={`${title} service`} loading="lazy" />
                  <span className="nx-service-shade" />
                  <span className="nx-service-number">{n}</span>
                  <span className="nx-service-icon"><Icon size={21} strokeWidth={1.7} /></span>
                  <span className="nx-service-copy">
                    <span className="nx-service-tags">{tags}</span>
                    <strong>{title}</strong>
                    <span className="nx-service-description">{text}</span>
                    <span className="nx-service-link">Explore service <ArrowUpRight size={16} /></span>
                  </span>
                </button>
              </motion.article>)}
            </div>
          </div>
          <div className="nx-services-controls" aria-label="Service carousel controls">
            <span>{String(activeService + 1).padStart(2, "0")}</span><div><i style={{ width: `${((activeService + 1) / services.length) * 100}%` }} /></div><span>{String(services.length).padStart(2, "0")}</span>
            <button type="button" aria-label="Previous service" onClick={() => selectService(Math.max(0, activeService - 1))}>←</button>
            <button type="button" aria-label="Next service" onClick={() => selectService(Math.min(services.length - 1, activeService + 1))}>→</button>
          </div>
        </section>

        <section className="nx-work nx-section" id="work">
          <div className="nx-section-heading"><div><SectionEyebrow number="03">SELECTED CONCEPTS</SectionEyebrow><h2>Ideas, made<br /><em>tangible.</em></h2></div><div className="nx-heading-aside"><p>A glimpse at the kinds of digital experiences we love shaping. These are illustrative concept studies, not commissioned client projects.</p><Link className="nx-text-link" to="/portfolio">View portfolio <ArrowUpRight size={17} /></Link></div></div>
          <div className="nx-project-grid">
            {projects.map((project, index) => <motion.article className={`nx-project ${project.className}`} key={project.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: index * .08 }}>
              <Link to="/portfolio" className="nx-project-image" aria-label={`Explore ${project.name} concept`}><img src={project.image} alt={`${project.type} visual concept`} loading="lazy" /><span className="nx-project-open"><ArrowUpRight size={21} /></span><span className="nx-project-image-tag">{project.category}</span></Link>
              <div className="nx-project-info"><div><h3>{project.name}<span>.</span></h3><p className="nx-project-type">{project.type}</p><p className="nx-project-description">{project.description}</p></div><span className="nx-project-number">0{index + 1}</span></div>
            </motion.article>)}
          </div>
          <p className="nx-demo-note"><span /> Portfolio visuals represent illustrative concepts for this demo site, not verified client engagements or results.</p>
        </section>

        <section className="nx-process nx-section" id="process">
          <div className="nx-process-intro"><SectionEyebrow number="04">HOW WE WORK</SectionEyebrow><h2>Clear steps.<br /><em>Better outcomes.</em></h2><p>Good work does not need a mysterious process. We keep the plan visible, make room for feedback, and move forward together.</p><Link className="nx-text-link" to="/about">More about our process <ArrowUpRight size={17} /></Link></div>
          <div className="nx-process-list">{steps.map((step) => <article className="nx-process-step" key={step.n}><span className="nx-process-number">{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowUpRight className="nx-process-arrow" size={20} /><span className="nx-process-track" aria-hidden="true" /></article>)}</div>
        </section>

        <section className="nx-tech nx-section">
          <div className="nx-tech-heading"><SectionEyebrow number="05">OUR TOOLKIT</SectionEyebrow><h2>Chosen for the job.<br /><em>Connected end to end.</em></h2><p>Tools should serve the product—not the other way around. We choose a practical stack to fit the people, priorities, and problem.</p></div>
          <div className="nx-tech-list">{stack.map((group) => <div className="nx-tech-row" key={group.title}><span>{group.title}</span><strong>{group.items}</strong><ArrowUpRight size={17} /></div>)}</div>
        </section>

        <section className="nx-principles nx-section">
          <div className="nx-principles-heading"><SectionEyebrow number="06">WHAT YOU CAN EXPECT</SectionEyebrow><h2>A good partnership<br />should feel <em>like one.</em></h2><p>We believe the way we build matters just as much as what we build.</p></div>
          <div className="nx-principle-list">{principles.map((item, i) => <article className="nx-principle" key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><Check size={20} /></article>)}</div>
        </section>

        <section className="nx-faq nx-section">
          <div className="nx-faq-heading"><SectionEyebrow number="07">A FEW FIRST QUESTIONS</SectionEyebrow><h2>Curious about<br /><em>how it works?</em></h2><p>Still shaping the idea? That is a perfectly good place to start.</p><Link className="nx-text-link" to="/contact">Talk to our team <ArrowUpRight size={17} /></Link></div>
          <div className="nx-faq-list">{faqs.map((faq, index) => <article className={`nx-faq-item ${faqOpen === index ? "nx-faq-active" : ""}`} key={faq.q}><button type="button" aria-expanded={faqOpen === index} onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}><span>{faq.q}</span><ChevronDown size={19} /></button>{faqOpen === index && <p>{faq.a}</p>}</article>)}</div>
        </section>

        <section className="nx-contact-cta">
          <div className="nx-cta-orbit nx-cta-orbit-one" /><div className="nx-cta-orbit nx-cta-orbit-two" />
          <div className="nx-cta-inner"><div><p className="nx-cta-kicker"><span /> HAVE SOMETHING IN MIND?</p><h2>Let’s make the<br /><em>useful thing real.</em></h2><p>Tell us what you are trying to solve. We’ll help you find a sensible next step.</p></div><Link className="nx-btn nx-btn-cream" to="/contact">Start a conversation <ArrowUpRight size={18} /></Link></div>
          <span className="nx-cta-mark" aria-hidden="true">n.</span>
        </section>
      </div>
    </>
  )
}
