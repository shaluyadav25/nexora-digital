import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import PageMeta from "../Components/Site/PageMeta"
import { SectionTitle } from "../Components/Site/SiteSections"
import { projects } from "../data/projects"
import NotFoundPage from "./NotFoundPage"

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFoundPage />
  return (
    <>
      <PageMeta title={project.title} description={project.description} />
      <section className="case-hero container">
        <Link className="detail-back-link" to="/portfolio"><ArrowLeft size={15} /> All concepts</Link>
        <div className="case-hero-copy">
          <p className="section-index"><span>{project.number}</span>{project.category} / CONCEPT STUDY</p>
          <h1>{project.title}<br /><em>{project.type.split(" · ")[0]} concept.</em></h1>
          <p>{project.description}</p>
          <div className="tag-list">{project.tech.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        </div>
        <img className="case-hero-image" src={project.image} alt={project.imageAlt} />
      </section>
      <section className="container case-study-content">
        <article><span>01 / THE CHALLENGE</span><h2>A familiar friction point.</h2><p>{project.problem}</p></article>
        <article><span>02 / THE APPROACH</span><h2>Make the useful path clearer.</h2><p>{project.solution}</p></article>
        <article><span>03 / THE OUTCOME</span><h2>A direction to test.</h2><p>{project.result}</p></article>
      </section>
      <section className="container case-study-note"><span className="demo-dot" /><p>This portfolio entry is an illustrative concept created for this demo website. It does not represent a commissioned client project, verified result, or production product.</p></section>
      <section className="case-next container">
        <SectionTitle number="04" eyebrow="A real project, a real conversation" title={<>Bring us a problem<br />you want to solve.</>} />
        <Link className="button button-primary" to="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
      </section>
    </>
  )
}
