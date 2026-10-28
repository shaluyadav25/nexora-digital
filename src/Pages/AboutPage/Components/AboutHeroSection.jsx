import { ArrowRight, ArrowUpRight, Check, Code2, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const journey = [
  { number: "01", label: "Discover", height: "42%" },
  { number: "02", label: "Design", height: "61%" },
  { number: "03", label: "Build", height: "78%" },
  { number: "04", label: "Launch", height: "100%" },
]

function AboutHeroSection() {
  return (
    <section className="page-hero container about-hero">
      <div className="about-hero-copy">
        <p className="about-hero-kicker"><span className="status-dot" /> A small team for your big ideas</p>
        <h1>Good products<br />begin with<br /><em>good questions.</em></h1>
        <p className="about-hero-description">
          We bring thoughtful design and dependable engineering together to turn meaningful ideas into digital products people enjoy using.
        </p>
        <div className="about-hero-actions">
          <Link className="about-hero-primary" to="/contact">Start a conversation <ArrowRight size={17} /></Link>
          <Link className="about-hero-secondary" to="/services">Explore our services <ArrowUpRight size={16} /></Link>
        </div>
        <div className="about-hero-proof" aria-label="Our approach">
          <span><Check size={14} /> Thoughtful by design</span>
          <span><Check size={14} /> Built with care</span>
          <span><Check size={14} /> People come first</span>
        </div>
      </div>

      <div className="about-hero-art" role="img" aria-label="Illustration of the Northline design and development process">
        <div className="about-dashboard">
          <div className="about-dashboard-heading">
            <div className="about-dashboard-brand">
              <span className="about-dashboard-mark"><Code2 size={17} /></span>
              <span><strong>Northline</strong><small>PROJECT OVERVIEW</small></span>
            </div>
            <span className="about-dashboard-menu" aria-hidden="true">•••</span>
          </div>
          <div className="about-dashboard-title">
            <div><span>THE WAY WE WORK</span><h2>From first thought<br />to launch day.</h2></div>
            <span className="about-dashboard-spark"><Sparkles size={18} /></span>
          </div>
          <div className="about-dashboard-chart">
            <div className="about-chart-heading"><span>A GOOD IDEA, MADE REAL</span><span>OUR PROCESS / 04</span></div>
            <div className="about-chart-bars" aria-hidden="true">
              {journey.map((step) => (
                <div className="about-chart-column" key={step.number}>
                  <div className="about-chart-track"><span style={{ height: step.height }} /></div>
                  <span className="about-chart-number">{step.number}</span>
                  <span className="about-chart-label">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-dashboard-footer">
            <span><i /> A close-knit team, start to finish</span>
            <span>DESIGN · ENGINEERING</span>
          </div>
        </div>

        <div className="about-float-card about-float-card-note">
          <span className="about-float-icon"><Check size={16} /></span>
          <span><strong>Thoughtfully made</strong><small>Every detail has a purpose</small></span>
        </div>
        <div className="about-float-card about-float-card-spark">
          <span className="about-sparkle-icon"><Sparkles size={17} /></span>
          <strong>People first.<br />Always.</strong>
        </div>
        <span className="about-art-caption">GOOD WORK STARTS TOGETHER <span>✳</span></span>
      </div>
    </section>
  )
}

export default AboutHeroSection
