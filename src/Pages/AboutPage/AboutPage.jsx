import { ArrowUpRight, Compass, Handshake, Lightbulb, ShieldCheck } from "lucide-react"
import countUpModule from "react-countup"
import { Link } from "react-router-dom"
import PageMeta from "../../Components/Site/PageMeta"
import AboutHeroSection from "./Components/AboutHeroSection"
import { CallToAction, SectionTitle } from "../../Components/Site/SiteSections"
import { team } from "../../data/team"
import { company, processSteps } from "../../data/siteContent"

const CountUp = countUpModule.default

const values = [
  { icon: Compass, title: "Start with the why", text: "We ask good questions before reaching for familiar answers." },
  { icon: Handshake, title: "Work in the open", text: "Clear communication and shared decisions make better partnerships." },
  { icon: Lightbulb, title: "Make it useful", text: "The most impressive solution is the one that genuinely helps." },
  { icon: ShieldCheck, title: "Build with care", text: "We value accessibility, reliability, and the details people depend on." },
]

const milestones = [
  { number: "01", label: "Listen", text: "Understand the people, constraints and purpose behind the brief." },
  { number: "02", label: "Make it visible", text: "Put an early direction in front of the people who will use it." },
  { number: "03", label: "Build together", text: "Develop in small steps and keep decisions close to the work." },
  { number: "04", label: "Leave it stronger", text: "Hand over clear documentation and a sensible next step." },
]

function AboutPage() {
  return (
    <>
      <PageMeta title="About" description="Meet Northline Digital Studio: a provisional, people-first product design and engineering studio based in Lucknow." />
      <AboutHeroSection />
      <section className="section container about-story">
        <div className="about-story-aside"><span className="section-index"><span>01</span> THE SHORT VERSION</span><span className="story-index">{company.location.toUpperCase()}</span></div>
        <div className="about-story-copy">
          <h2>We believe good technology should feel <span>clear, useful, and human.</span></h2>
          <p>Northline is a provisional digital studio concept based in Lucknow. We bring product design and software engineering into one conversation, then stay close to the people the work is for.</p>
          <p>That means asking better questions, making choices in the open, and giving every product a thoughtful path from early idea to real-world use. No oversized promises—just considered work and a steady partnership.</p>
          <Link className="text-link" to="/services">Explore what we do <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="container about-mission-grid">
          <article className="about-mission-card"><span>01 / OUR MISSION</span><h2>Make the useful thing easier to build.</h2><p>Help teams turn real needs into clear, dependable digital products with less guesswork and better collaboration.</p></article>
          <article className="about-vision-card"><span>02 / OUR POINT OF VIEW</span><h2>Technology should give people room to do their best work.</h2><p>The right product fits the people, purpose and practical realities around it.</p><span className="about-vision-mark" aria-hidden="true">n.</span></article>
        </div>
      </section>

      <section className="values-section">
        <div className="container section">
          <SectionTitle number="03" eyebrow="What guides us" title={<>A few things we<br />won’t compromise on.</>} />
          <div className="values-grid">{values.map(({ icon: Icon, title, text }, index) => <article className="value-card" key={title}><span className="value-number">0{index + 1}</span><span className="value-icon"><Icon size={20} strokeWidth={1.7} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section container about-timeline-section">
        <div className="section-row"><SectionTitle number="04" eyebrow="A better way to make progress" title={<>Four steps. Shared<br />understanding at each one.</>} description="A practical rhythm for collaborative work. The exact plan depends on what you are building." /></div>
        <div className="about-timeline">{milestones.map((item) => <article className="about-timeline-item" key={item.number}><span>{item.number}</span><h3>{item.label}</h3><p>{item.text}</p></article>)}</div>
        <div className="process-grid about-process-cards">{processSteps.map(({ number, title, description, icon: Icon }) => <article className="process-card" key={number}><div className="process-card-top"><span>{number}</span><Icon size={20} /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="about-numbers-band">
        <div className="container about-numbers-grid">
          <div><p className="section-index"><span>05</span> A SMALL STUDIO, A COMPLETE JOURNEY</p><h2>Good work has<br /><em>more than one shape.</em></h2></div>
          <div className="about-number"><strong><CountUp end={6} enableScrollSpy scrollSpyOnce duration={1.3} /></strong><span>service areas</span></div>
          <div className="about-number"><strong><CountUp end={4} enableScrollSpy scrollSpyOnce duration={1.3} /></strong><span>delivery stages</span></div>
          <p className="about-numbers-note">These are the capabilities and steps represented on this demo site—not company performance claims.</p>
        </div>
      </section>

      <section className="section container team-section">
        <div className="section-row"><SectionTitle number="06" eyebrow="The people behind the practice" title={<>Different strengths.<br />A shared table.</>} description="Sample team profiles are shown for layout demonstration. Replace with verified team details before launch." /></div>
        <div className="team-grid">{team.map((member, index) => <article className="team-card" key={member.name}><div className="team-photo-wrap"><img src={member.image} alt={`Illustrative team portrait for ${member.name}`} loading="lazy" /><span>0{index + 1}</span></div><h3>{member.name}</h3><span className="team-role">{member.role}</span><p>{member.focus}</p></article>)}</div>
      </section>
      <CallToAction eyebrow="A good partnership starts with listening" title="Tell us what you’re trying to make better." />
    </>
  )
}

export default AboutPage
