import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import HomePage from "./Pages/HomePage/HomePage"
import AboutPage from "./Pages/AboutPage/AboutPage"
import ServicesPage from "./Pages/ServicesPage/ServicesPage"
import ServiceDetailPage from "./Pages/ServiceDetailPage"
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage"
import ProjectDetailPage from "./Pages/ProjectDetailPage"
import TestimonialsPage from "./Pages/TestimonialsPage"
import ContactPage from "./Pages/ContactPage/ContactPage"
import NotFoundPage from "./Pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
