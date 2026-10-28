import { useState } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { faqs, testimonials } from "../../data/siteContent"
import useEmblaCarousel from "embla-carousel-react"

export function SectionTitle({ number, eyebrow, title, description, light = false }) {
  return (
    <div className={`section-title${light ? " section-title-light" : ""}`}>
      <p className="section-index"><span>{number}</span>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-title-description">{description}</p>}
    </div>
  )
}

export function Metric({ value, label }) {
  return <div className="metric-item"><strong>{value}</strong><span>{label}</span></div>
}

export function CallToAction({ eyebrow = "A good place to start", title = "Tell us what you’re working on.", text = "A little context is enough. We’ll help you think through a practical next step.", dark = false }) {
  return (
    <section className={`cta-section container${dark ? " cta-section-dark" : ""}`}>
      <div className="cta-panel">
        <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
        <Link className="button button-light" to="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
        <span className="cta-decoration" aria-hidden="true">n.</span>
      </div>
    </section>
  )
}

export function FAQList({ limit }) {
  const [openQuestion, setOpenQuestion] = useState(0)
  const entries = limit ? faqs.slice(0, limit) : faqs
  return (
    <div className="faq-list">
      {entries.map((item, index) => {
        const isOpen = openQuestion === index
        return (
          <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
            <h3>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? -1 : index)}>
                <span><small>0{index + 1}</small>{item.question}</span>
                <ChevronDown size={18} aria-hidden="true" />
              </button>
            </h3>
            {isOpen && <p>{item.answer}</p>}
          </article>
        )
      })}
    </div>
  )
}

export function TestimonialCarousel({ limit = testimonials.length }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, slidesToScroll: 1 })
  const entries = testimonials.slice(0, limit)
  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel-controls">
        <button type="button" aria-label="Previous testimonial" onClick={() => emblaApi?.scrollPrev()}>←</button>
        <button type="button" aria-label="Next testimonial" onClick={() => emblaApi?.scrollNext()}>→</button>
      </div>
      <div className="testimonial-viewport" ref={emblaRef}>
        <div className="testimonial-track">
          {entries.map((testimonial, index) => (
            <motion.article className="testimonial-card" key={testimonial.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }}>
              <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              <p>{testimonial.quote}</p>
              <div className="testimonial-card-person">
                <span className="testimonial-initials">{testimonial.initials}</span>
                <span><strong>{testimonial.name}</strong><small>{testimonial.role} · {testimonial.company}</small></span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CtaTextLink({ to, children }) {
  return <Link className="text-link" to={to}>{children}<ArrowRight size={16} /></Link>
}
