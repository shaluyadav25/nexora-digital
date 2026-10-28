import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>
        <span className="service-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-card-bottom">
        <div className="tag-list">
          {service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <Link to={`/services/${service.slug}`} className="icon-link" aria-label={`Learn about ${service.title}`}><ArrowUpRight size={17} /></Link>
      </div>
    </article>
  )
}

export default ServiceCard
