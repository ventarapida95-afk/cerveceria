import { useState } from 'react'
import { BUSINESS } from '../lib/constants.js'
import { CheckIcon, WhatsAppIcon } from './icons.jsx'

const OPTIONS = ['Mesa', 'Cata Guiada', 'Tour de Cervecería', 'Evento privado']

export default function Reservas() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '20:00', guests: '2', type: 'Mesa', note: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const msg =
      `Hola Brunnemann, quiero reservar:\n\n` +
      `• ${form.type} — ${form.guests} persona(s)\n` +
      `• Fecha: ${form.date} a las ${form.time} hrs\n` +
      (form.name ? `• Nombre: ${form.name}\n` : '') +
      (form.phone ? `• Contacto: ${form.phone}\n` : '') +
      (form.note ? `• Comentarios: ${form.note}\n` : '') +
      `\n¿Me confirman por favor?`
    window.open(`https://wa.me/${BUSINESS.phoneWhatsApp}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="reserva-box">
        <div className="check"><CheckIcon /></div>
        <h3>¡Reserva lista para enviar!</h3>
        <p>Se abrió WhatsApp con tu solicitud. Solo presiona enviar y te confirmaremos.</p>
      </div>
    )
  }

  return (
    <form className="reserva-form" onSubmit={submit}>
      <div className="form-grid">
        <div className="form-field">
          <label>Nombre</label>
          <input required value={form.name} onChange={set('name')} placeholder="Tu nombre" />
        </div>
        <div className="form-field">
          <label>WhatsApp</label>
          <input required value={form.phone} onChange={set('phone')} placeholder="+56 9 ..." />
        </div>
        <div className="form-field">
          <label>Fecha</label>
          <input required type="date" value={form.date} onChange={set('date')} />
        </div>
        <div className="form-field">
          <label>Hora</label>
          <input required type="time" value={form.time} onChange={set('time')} />
        </div>
        <div className="form-field">
          <label>Personas</label>
          <select value={form.guests} onChange={set('guests')}>
            {['1','2','3','4','5','6','7','8','10+'].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label>Tipo de reserva</label>
          <select value={form.type} onChange={set('type')}>
            {OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label>Comentarios</label>
        <textarea rows="3" value={form.note} onChange={set('note')} placeholder="Algo que debamos saber…" />
      </div>
      <button className="btn btn-gold" type="submit" style={{ width: '100%' }}>
        <WhatsAppIcon /> Solicitar reserva por WhatsApp
      </button>
    </form>
  )
}
