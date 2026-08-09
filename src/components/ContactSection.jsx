import { BUSINESS } from '../lib/constants.js'
import { MapPinIcon, PhoneIcon, ClockIcon, WhatsAppIcon } from './icons.jsx'

export default function ContactSection() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title">Hablemos, <span className="serif-amp">brindemos</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="icon"><MapPinIcon /></div>
            <h3>Dirección</h3>
            <p>{BUSINESS.city}</p>
          </div>
          <div className="contact-card">
            <div className="icon"><PhoneIcon /></div>
            <h3>Teléfono</h3>
            <p><a href={`tel:${BUSINESS.phone.replace(/[^+\d]/g, '')}`}>{BUSINESS.phone}</a></p>
          </div>
          <div className="contact-card">
            <div className="icon"><ClockIcon /></div>
            <h3>Horarios</h3>
            <p>Mar a Dom · 12:00 – 00:00</p>
          </div>
          <div className="contact-card">
            <div className="icon"><WhatsAppIcon /></div>
            <h3>Pedidos & reservas</h3>
            <p>
              <a href={`https://wa.me/${BUSINESS.phoneWhatsApp}`} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>
                Escríbenos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
