import { Helmet } from "react-helmet-async"

function PageMeta({ title, description }) {
  return (
    <Helmet>
      <title>{title} | Northline Digital Studio</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default PageMeta
