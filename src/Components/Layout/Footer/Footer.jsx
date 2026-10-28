import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { company, services } from "../../../data/siteContent"

const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: company.social.linkedin },
  { label: "GitHub", icon: FaGithub, href: company.social.github },
  { label: "Instagram", icon: FaInstagram, href: company.social.instagram },
  { label: "X", icon: FaXTwitter, href: company.social.x },
  { label: "YouTube", icon: FaYoutube, href: company.social.youtube },
].filter(({ href }) => href)

function Footer() {
  const [newsletterMessage, setNewsletterMessage] = useState("")

  function handleNewsletter(event) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get("newsletterEmail")
    if (!company.email) {
      setNewsletterMessage("Newsletter signup isn’t connected yet. Add a receiving email or mailing-list endpoint before launch.")
      return
    }
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Nexora Digital newsletter signup")}&body=${encodeURIComponent(`Please add ${email} to the newsletter.`)}`
    setNewsletterMessage("Your email app should open with a signup request. Send it there to complete the request.")
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-intro">
            <Link className="brand brand-footer" to="/"><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-copy"><strong>NEXORA</strong><small>DIGITAL</small></span></Link>
            <p>{company.tagline}</p>
            <span className="footer-location">{company.location}</span>
            {socialLinks.length > 0 && <div className="footer-socials">{socialLinks.map(({ label, icon: Icon, href }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} — opens in a new tab`}><Icon size={16} /></a>)}</div>}
          </div>
          <div className="footer-column"><span className="footer-label">Explore</span><Link to="/about">About the studio</Link><Link to="/services">Services</Link><Link to="/portfolio">Selected work</Link><Link to="/testimonials">Testimonials</Link><Link to="/contact">Contact</Link></div>
          <div className="footer-column"><span className="footer-label">Capabilities</span>{services.map((service) => <Link key={service.slug} to={`/services/${service.slug}`}>{service.shortTitle}</Link>)}</div>
          <div className="footer-newsletter"><span className="footer-label">A useful note, now and then</span><p>Occasional ideas about making digital work clearer and more useful.</p><form className="newsletter-form" onSubmit={handleNewsletter}><label className="visually-hidden" htmlFor="newsletter-email">Your email address</label><input id="newsletter-email" name="newsletterEmail" type="email" placeholder="you@company.com" required /><button type="submit" aria-label="Request newsletter signup"><ArrowUpRight size={17} /></button></form>{newsletterMessage && <p className="newsletter-status" role="status">{newsletterMessage}</p>}</div>
        </div>
        <div className="footer-contact-strip"><span>Have a project in mind?</span><Link to="/contact">Let’s talk it through <ArrowUpRight size={15} /></Link><span className="footer-contact-details">{company.email && <a href={`mailto:${company.email}`}>{company.email}</a>}{company.phone && <a href={`tel:${company.phone}`}>{company.phone}</a>}</span></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {company.name}</span><span>Made with care in Lucknow, India</span></div>
        <p className="demo-note">{company.sampleNotice}</p>
      </div>
    </footer>
  )
}

export default Footer
