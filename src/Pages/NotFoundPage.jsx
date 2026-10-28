import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import PageMeta from "../Components/Site/PageMeta"

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found" description="The page you are looking for could not be found." />
      <section className="not-found container">
        <p className="section-index"><span>404</span> WRONG TURN</p>
        <h1>This page isn’t<br />where we left it.</h1>
        <p>Let’s get you back to something useful.</p>
        <Link className="button button-primary" to="/"><ArrowLeft size={17} /> Back to home</Link>
      </section>
    </>
  )
}
