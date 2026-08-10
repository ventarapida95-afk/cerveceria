import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { CartIcon } from './icons.jsx'

const links = [
  { to: '/#inicio', label: 'Inicio' },
  { to: '/#carta', label: 'Nuestra Carta' },
  { to: '/#historia', label: 'Historia' },
  { to: '/#reseñas', label: 'Reseñas' },
  { to: '/#ubicacion', label: 'Ubicación' },
  { to: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { count, setDrawerOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobile(false)
  }, [location])

  const go = (e, to) => {
    e.preventDefault()
    const hash = to.split('#')[1]
    if (location.pathname !== '/') {
      window.location.href = '/#' + hash
      return
    }
    const el = document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/brunnemann.jpg" alt="Brunnemann" />
          <span>BRUNNEMANN</span>
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.to} href={l.to} onClick={(e) => go(e, l.to)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/servicios" className="btn btn-outline">Propuestas web</Link>
          <button className="cart-btn" aria-label="Carrito" onClick={() => setDrawerOpen(true)}>
            <CartIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
          <button className="nav-burger" onClick={() => setMobile((v) => !v)} aria-label="Menú">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobile ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {mobile && (
        <nav className="nav-links" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '18px 5vw', background: 'rgba(15,13,11,0.97)' }}>
          {links.map((l) => (
            <a key={l.to} href={l.to} onClick={(e) => go(e, l.to)}>{l.label}</a>
          ))}
          <Link to="/servicios" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>Propuestas web</Link>
        </nav>
      )}
    </header>
  )
}
