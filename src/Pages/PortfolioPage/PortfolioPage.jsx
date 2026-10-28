import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import PageMeta from "../../Components/Site/PageMeta"
import ProjectCard from "../../Components/Site/ProjectCard"
import { CallToAction, SectionTitle } from "../../Components/Site/SiteSections"
import { projects } from "../../data/projects"

const filters = ["All", "Web", "Mobile", "UI/UX", "E-commerce"]

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const visibleProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter])
  return (
    <>
      <PageMeta title="Selected work" description="Explore six illustrative digital product concepts across web, mobile, design and commerce." />
      <section className="page-hero container portfolio-hero">
        <video className="portfolio-hero-video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=88">
          <source src="https://videos.pexels.com/video-files/3254007/3254007-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <span className="portfolio-hero-shade" aria-hidden="true" />
        <div className="portfolio-hero-content">
          <p className="section-index"><span>01</span> PORTFOLIO / CONCEPT INDEX 06</p>
          <h1>Work that starts<br />with <em>the right problem.</em></h1>
          <div className="page-hero-bottom"><p>Explore a few illustrative product concepts that show how we think about useful, people-first digital experiences.</p><span className="portfolio-count">6 CONCEPT STUDIES</span></div>
        </div>
      </section>
      <section className="section container portfolio-list">
        <div className="portfolio-list-heading"><SectionTitle number="02" eyebrow="Concept work" title={<>Different challenges.<br />A shared attention to detail.</>} /><div className="portfolio-filters" role="group" aria-label="Filter projects by category">{filters.map((filter) => <button className={activeFilter === filter ? "is-active" : ""} key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div>
        <motion.div layout className="projects-grid projects-grid-full">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => <motion.div layout key={project.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .22 }}><ProjectCard project={project} /></motion.div>)}
          </AnimatePresence>
        </motion.div>
        <p className="demo-banner"><span className="demo-dot" /> Every project shown here is an illustrative concept created for this demo website. No client relationship, delivery, or result is implied.</p>
      </section>
      <section className="case-study-note container"><div className="case-note-symbol">↗</div><div><p className="eyebrow">A good case study starts with context</p><h2>Show the thinking,<br />not just the finish.</h2></div><p>For real projects, a case study should clearly explain the client’s challenge, the team’s approach, what was delivered, and verified outcomes—only with permission to share. <Link className="text-link" to="/contact">Discuss a project <ArrowUpRight size={14} /></Link></p></section>
      <CallToAction eyebrow="Your challenge could be next" title="Let’s build something worth talking about." text="We’d love to hear what you’re working toward." />
    </>
  )
}

export default PortfolioPage
