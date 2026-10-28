import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PageMeta from "../../Components/Site/PageMeta"
import ServiceCard from "../../Components/Site/ServiceCard"
import { CallToAction, SectionTitle } from "../../Components/Site/SiteSections"
import { processSteps, services } from "../../data/siteContent"

function ServicesPage() {
  return (
    <>
      <PageMeta title="Services" description="Web, mobile, design, cloud, automation and commerce services tailored to your product and team." />
      <section className="page-hero container services-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(17, 47, 73, .94) 0%, rgba(17, 47, 73, .72) 58%, rgba(17, 47, 73, .28) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=88')" }}>
        <p className="section-index"><span>01</span> CAPABILITIES / BUILT AROUND YOUR NEEDS</p>
        <h1>Good work starts<br />with <em>a clear plan.</em></h1>
        <div className="page-hero-bottom">
          <p>Product thinking, design and engineering from one small team. Start with one challenge or bring us the full journey.</p>
          <Link className="text-link" to="/contact">Talk through a project <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <section className="section container services-page-grid">
        <div className="section-row">
          <SectionTitle number="02" eyebrow="What we can take on" title={<>Six capabilities.<br />One considered approach.</>} description="Each engagement starts with the problem, not a preselected technology stack." />
          <span className="services-count">CAPABILITIES / 06</span>
        </div>
        <motion.div className="services-grid services-grid-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }} variants={{ visible: { transition: { staggerChildren: .08 } } }}>
          {services.map((service) => <motion.div key={service.slug} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .35 }}><ServiceCard service={service} /></motion.div>)}
        </motion.div>
      </section>
      <section className="approach-section">
        <div className="container section">
          <div className="section-row">
            <SectionTitle number="03" eyebrow="How we work" title={<>Four clear steps.<br />No mystery process.</>} description="We make the work visible, break big decisions into smaller ones, and work with your team at every stage." />
            <Link className="text-link section-side-link" to="/about">More about Northline <ArrowUpRight size={16} /></Link>
          </div>
          <div className="process-grid">
            {processSteps.map(({ number, title, description, icon: Icon }) => (
              <article className="process-card" key={number}><div className="process-card-top"><span>{number}</span><Icon size={20} /></div><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction eyebrow="Not sure where to start?" title="Let’s scope the useful next step." />
    </>
  )
}

export default ServicesPage
