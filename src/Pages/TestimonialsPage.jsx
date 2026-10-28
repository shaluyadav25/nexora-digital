import { ArrowUpRight, Star } from "lucide-react"
import { Link } from "react-router-dom"
import PageMeta from "../Components/Site/PageMeta"
import { CallToAction, SectionTitle } from "../Components/Site/SiteSections"
import { testimonials } from "../data/testimonials"

export default function TestimonialsPage() {
  return (
    <>
      <PageMeta title="Testimonials" description="Illustrative feedback examples about a clear, collaborative product development process." />
      <section className="page-hero container insights-hero">
        <div className="insights-hero-copy">
          <p className="section-index"><span>01</span> PEOPLE AND PARTNERSHIP</p>
          <h1>Good work is<br />better <em>together.</em></h1>
          <div className="page-hero-bottom"><p>Thoughtful collaboration is part of the product. These sample quotes show the kind of feedback this demo is designed around.</p><span className="portfolio-count">ILLUSTRATIVE EXAMPLES / 06</span></div>
        </div>
        <div className="insights-hero-image">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=88" alt="Team collaborating in a modern office" />
          <span>PEOPLE FIRST · EVERY DAY</span>
        </div>
      </section>
      <section className="section container testimonial-page-section">
        <div className="testimonial-demo-note"><span className="demo-dot" /> These quotes and profiles are illustrative placeholders, not real testimonials or client endorsements.</div>
        <SectionTitle number="02" eyebrow="Sample feedback" title={<>Clear communication.<br />Useful progress.</>} />
        <div className="testimonial-page-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-page-card" key={item.name}>
              <div className="testimonial-stars" aria-label="Illustrative rating, not a real client rating">{Array.from({ length: 5 }, (_, star) => <Star key={star} size={14} fill="currentColor" />)}</div>
              <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              <p>{item.quote}</p>
              <div className="testimonial-card-person"><span className="testimonial-initials">{item.initials}</span><span><strong>{item.name}</strong><small>{item.role} · {item.company}</small></span></div>
              <span className="testimonial-page-index">EXAMPLE / 0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="container testimonials-cta">
        <SectionTitle number="03" eyebrow="Starting from scratch is fine" title={<>Let’s make your<br />next project a good one.</>} />
        <Link className="button button-primary" to="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
      </section>
      <CallToAction eyebrow="Your work, your story" title="Tell us what you want to make possible." />
    </>
  )
}
