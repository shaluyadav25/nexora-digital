import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Insights" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined
    function handleKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Nexora Digital home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-copy"><strong>NEXORA</strong><small>DIGITAL</small></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {link.label}
            </NavLink>
          ))}
          <NavLink className="nav-contact" to="/contact" onClick={closeMenu}>
            Let's Talk <ArrowUpRight size={15} aria-hidden="true" />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
