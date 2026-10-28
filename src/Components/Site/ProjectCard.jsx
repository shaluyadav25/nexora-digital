import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/portfolio/${project.slug}`} className={`project-art ${project.theme}`} aria-label={`View ${project.title} illustrative case study`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project-art-label"><span className="demo-dot" /> Concept study</span>
        <span className="project-art-arrow"><ArrowUpRight size={19} /></span>
      </Link>
      <div className="project-info">
        <div>
          <span className="project-type">{project.type}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  )
}

export default ProjectCard
