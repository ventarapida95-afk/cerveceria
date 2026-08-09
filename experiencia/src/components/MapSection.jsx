import { BUSINESS } from '../lib/constants.js'
import { MapPinIcon, ClockIcon, PhoneIcon } from './icons.jsx'

export default function MapSection() {
  return (
    <section className="section" id="ubicacion" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Encuéntranos</span>
          <h2 className="section-title">Estamos <span className="serif-amp">en</span> Angol</h2>
        </div>
        <div className="map-wrap">
          <iframe
            title="Ubicación Brunnemann"
            src={BUSINESS.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-card">
            <h3>{BUSINESS.shortName}</h3>
            <div className="row"><MapPinIcon />{BUSINESS.city}</div>
            <div className="row"><ClockIcon /> Mar–Dom · 12:00 a 00:00</div>
            <div className="row"><PhoneIcon /> {BUSINESS.phone}</div>
            <a className="btn btn-gold" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  )
}
