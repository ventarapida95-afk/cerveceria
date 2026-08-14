import { WhatsAppIcon } from './icons.jsx'
import { BUSINESS } from '../lib/constants.js'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${BUSINESS.phoneWhatsApp}?text=${encodeURIComponent('Hola Brunnemann, quiero reservar una mesa.')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar por WhatsApp"
    >
      <WhatsAppIcon />
      <span className="wa-float-label">Reserva por WhatsApp</span>
    </a>
  )
}
