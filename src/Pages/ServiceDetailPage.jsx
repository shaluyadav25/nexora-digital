import { ArrowLeft, ArrowUpRight, Check } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import PageMeta from "../Components/Site/PageMeta"
import { CallToAction, SectionTitle } from "../Components/Site/SiteSections"
import { services } from "../data/services"
import NotFoundPage from "./NotFoundPage"

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <NotFoundPage />
  const Icon = service.icon
  return (
    <>
      <PageMeta title={service.title} description={service.description} />
      <section className="detail-hero container">
        <Link className="detail-back-link" to="/services"><ArrowLeft size={15} /> All capabilities</Link>
        <div className="detail-hero-grid">
          <div>
            <p className="section-index"><span>{service.number}</span>{service.category}</p>
            <h1>{service.title}<br /><em>built around you.</em></h1>
            <p className="detail-lede">{service.detail}</p>
            <Link className="button button-primary" to="/contact">Talk through a project <ArrowUpRight size={17} /></Link>
          </div>
          <motion.div className="detail-service-art" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }}>
            <span className="detail-service-icon"><Icon size={28} /></span>
            <span className="detail-art-number">{service.number} / 06</span>
            <h2>{service.outcome}</h2>
            <div className="tag-list">{service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          </motion.div>
        </div>
      </section>
      <section className="detail-content-section">
        <div className="container detail-content-grid">
          <SectionTitle number="01" eyebrow="What’s included" title={<>A useful outcome,<br />without the guesswork.</>} description="The exact scope depends on the product and the people using it. These are the areas we can shape together." />
          <div className="detail-feature-list">
            {service.features.map((feature) => <div className="detail-feature" key={feature}><span><Check size={16} /></span><p>{feature}</p></div>)}
          </div>
        </div>
      </section>
      <section className="container detail-stack-section">
        <p className="section-index"><span>02</span> TOOLS ARE CHOSEN FOR THE JOB</p>
        <div className="tag-list">{service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <p>We recommend a stack based on your team, constraints and product needs—not a fashionable tool list.</p>
      </section>
      <CallToAction eyebrow="Have a question about this service?" title="Let’s talk through what you need." />
    </>
  )
}
