import { Link } from 'react-router-dom'
import { BUSINESS } from '../lib/constants.js'
import { GoogleIcon } from './icons.jsx'
import { InstagramIcon, FacebookIcon } from './social.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand">
            <Link to="/" className="nav-logo">
              <img src="/brunnemann.jpg" alt="Brunnemann" />
              <span>BRUNNEMANN</span>
            </Link>
            <p>Cerveza artesanal elaborada en Angol con agua de la cordillera, granos seleccionados y mucha paciencia. Gastronomía para acompañar cada vaso.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
              <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href={BUSINESS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" aria-label="Google Maps"><GoogleIcon /></a>
            </div>
          </div>
          <div>
            <h4>Explorar</h4>
            <ul>
              <li><a href="/#inicio">Inicio</a></li>
              <li><a href="/#carta">Nuestra Carta</a></li>
              <li><a href="/#historia">Historia</a></li>
              <li><a href="/#reseñas">Reseñas</a></li>
            </ul>
          </div>
          <div>
            <h4>Visítanos</h4>
            <ul>
              <li><a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">{BUSINESS.city}</a></li>
              <li><a href={`tel:${BUSINESS.phone.replace(/[^+\d]/g, '')}`}>{BUSINESS.phone}</a></li>
              <li><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href={BUSINESS.reviewUrl} target="_blank" rel="noreferrer">Deja tu reseña en Google</a></li>
              <li><a href={BUSINESS.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={BUSINESS.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {BUSINESS.name}. Todos los derechos reservados.</span>
          <span>Hecho en Chile · Angol</span>
        </div>
      </div>
    </footer>
  )
}
