import { useState } from 'react'
import { IMAGES, IMAGE_LOCAL } from '../lib/images.js'
import { useLocalImage } from '../lib/useLocalImage.js'

const PERKS = [
  { name: 'Descuento 15%', desc: 'En toda tu cuenta, todos los días.' },
  { name: 'Cerveza del mes', desc: 'Una edición limitada para miembros.' },
  { name: 'Eventos privados', desc: 'Catas y lanzamientos solo para el círculo.' },
  { name: 'Prioridad', desc: 'Reservas y mesas preferentes los fines de semana.' },
]

export default function Membresia() {
  const toast = useLocalImage(IMAGE_LOCAL.toast, IMAGES.toast)
  const [src, setSrc] = useState(toast)
  return (
    <section className="section" id="membresia">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">El Círculo Brunnemann</span>
          <h2 className="section-title">Una membresía <span className="serif-amp">para</span> los de casa</h2>
          <p className="section-sub">Únete al círculo y disfruta beneficios exclusivos cada vez que nos visites.</p>
        </div>
        <div className="split media-right">
          <div className="media">
            <img src={src} alt="Membresía" loading="lazy"
              onError={() => { setSrc(IMAGES.toast) }} />
            <span className="tag">Beneficios exclusivos</span>
          </div>
          <div>
            <ul className="text-list">
              {PERKS.map((p) => (
                <li key={p.name}>
                  <div>
                    <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--gold-2)' }}>{p.name}</strong>
                    <div style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>{p.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn btn-outline" style={{ marginTop: 30 }}>Quiero unirme</a>
          </div>
        </div>
      </div>
    </section>
  )
}
