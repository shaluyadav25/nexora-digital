import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { company } from "../../data/siteContent"

const Layout = () => {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [location.pathname])

  useEffect(() => {
    const updateScrollTop = () => setShowScrollTop(window.scrollY > 560)
    window.addEventListener("scroll", updateScrollTop, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollTop)
  }, [])

  const whatsappHref = company.whatsappNumber
    ? `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`
    : `https://wa.me/?text=${encodeURIComponent(company.whatsappMessage)}`

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <Navbar />
      <AnimatePresence mode="sync" initial={false}>
        <motion.main id="main-content" key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .08, ease: "easeOut" }}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      {(company.whatsappNumber || location.pathname === "/") && (
        <a
          className="whatsapp-float"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Start a WhatsApp conversation"
        >
          <FaWhatsapp size={21} aria-hidden="true" />
          <span>Chat with us</span>
        </a>
      )}
      {showScrollTop && <button className="scroll-to-top" type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={18} /></button>}
    </div>
  )
}

export default Layout