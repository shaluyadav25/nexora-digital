import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import ContactForm from "../../Components/Site/ContactForm"
import PageMeta from "../../Components/Site/PageMeta"
import { CallToAction } from "../../Components/Site/SiteSections"
import { company } from "../../data/siteContent"

function ContactPage() {
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`
  return (
    <>
      <PageMeta title="Contact" description="Start a conversation about a website, software product, mobile app or workflow challenge." />
      <section className="page-hero container contact-hero">
        <p className="section-index"><span>01</span> CONTACT / EVERY GOOD THING STARTS SOMEWHERE</p>
        <h1>Tell us what<br />you’re <em>thinking.</em></h1>
        <div className="page-hero-bottom"><p>Have a project, a question, or a tricky problem to untangle? A little context is enough to start.</p><span className="contact-response"><Clock3 size={15} /> No pressure. Just a first conversation.</span></div>
      </section>
      <section className="contact-section container">
        <aside className="contact-info">
          <p className="section-index"><span>02</span> GET IN TOUCH</p>
          <h2>A little context<br />goes a long way.</h2>
          <p>Tell us where you are and what you would like to make possible. We’ll help figure out a practical next step.</p>
          <div className="contact-details-card">
            <div className="contact-detail"><span className="contact-method-icon"><MapPin size={18} /></span><span><small>Based in</small><strong>{company.location}</strong></span></div>
            {company.email && <a className="contact-detail" href={`mailto:${company.email}`}><span className="contact-method-icon"><Mail size={18} /></span><span><small>Email address</small><strong>{company.email}</strong></span><ArrowUpRight size={16} /></a>}
            {company.phone && <a className="contact-detail" href={`tel:${company.phone}`}><span className="contact-method-icon"><Phone size={18} /></span><span><small>Phone</small><strong>{company.phone}</strong></span><ArrowUpRight size={16} /></a>}
            <a className="contact-detail" href={whatsappHref} target="_blank" rel="noreferrer"><span className="contact-method-icon"><MessageCircle size={18} /></span><span><small>Prefer a quick chat?</small><strong>Message us on WhatsApp</strong></span><ArrowUpRight size={16} /></a>
          </div>
          <p className="contact-detail-note">Business email, phone and WhatsApp number can be added in <code>src/data/siteContent.js</code> before launch.</p>
          <div className="contact-map"><iframe title="Map showing Lucknow, Uttar Pradesh" src="https://maps.google.com/maps?q=Lucknow%2C%20Uttar%20Pradesh%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          <p className="contact-map-label">LUCKNOW, UTTAR PRADESH, INDIA <span>BY APPOINTMENT</span></p>
        </aside>
        <div className="contact-form-wrap"><p className="contact-form-kicker">03 / A NOTE ABOUT YOUR PROJECT</p><ContactForm /></div>
      </section>
      <CallToAction eyebrow="Not ready to send a brief?" title="Start with the question you have." text="We’re happy to help you work out what to ask next." />
    </>
  )
}

export default ContactPage
