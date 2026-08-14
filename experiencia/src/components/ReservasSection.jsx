import { useState } from 'react'
import Reservas from './Reservas.jsx'
import { ClockIcon, WhatsAppIcon, CheckIcon } from './icons.jsx'
import { BUSINESS } from '../lib/constants.js'

const PERKS = [
  { icon: <CheckIcon />, title: 'Confirmación inmediata', text: 'Te respondemos por WhatsApp' },
  { icon: <ClockIcon />, title: 'Horario flexible', text: 'Mar–Dom · 18:30 a 23:45 hrs' },
  { icon: <WhatsAppIcon />, title: 'Sin anticipo', text: 'Solo confirma y ven a disfrutar' },
]

export default function ReservasSection() {
  const [img, setImg] = useState('/images/cervezas.jpg')
  return (
    <section className="section" id="reservas">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Reservas</span>
          <h2 className="section-title">Reserva tu <span className="serif-amp">mesa</span> o experiencia</h2>
          <p className="section-sub">Elige fecha y hora, te confirmamos por WhatsApp. Para grupos grandes escríbenos directo.</p>
        </div>
        <div className="reservas-wrap">
          <div>
            <div className="media" style={{ marginBottom: 26 }}>
              <img src={img} alt="Reservas" loading="lazy"
                onError={() => setImg('https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1200&q=80')} />
              <span className="tag">Catas y tours disponibles</span>
            </div>
            <div className="contact-card" style={{ padding: 26 }}>
              <div className="icon" style={{ width: 52, height: 52, marginBottom: 14 }}><WhatsAppIcon /></div>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>¿Evento o grupo grande?</h3>
              <p>Coordina tu evento privado directo por WhatsApp.</p>
              <a className="btn btn-outline" href={`https://wa.me/${BUSINESS.phoneWhatsApp}`} target="_blank" rel="noreferrer" style={{ marginTop: 16, width: '100%' }}>
                <WhatsAppIcon /> Hablar con el equipo
              </a>
            </div>
          </div>
          <Reservas />
        </div>
        <div className="reserva-perks">
          {PERKS.map((p) => (
            <div className="perk" key={p.title}>
              <div className="perk-icon">{p.icon}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
