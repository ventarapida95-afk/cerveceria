import { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import { CheckIcon, WhatsAppIcon } from './icons.jsx'

const OPTIONS = ['Mesa', 'Cata Guiada', 'Tour de Cervecería', 'Evento privado']

export default function Reservas() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '20:00', guests: '2', type: 'Mesa', note: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const { error: err } = await supabase.from('brewery_reservations').insert({
        customer_name: form.name,
        phone: form.phone,
        reservation_date: form.date,
        reservation_time: form.time,
        guests: Number(form.guests),
        reservation_type: form.type,
        note: form.note || null,
      })
      if (err) throw err
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="reserva-box">
        <div className="check"><CheckIcon /></div>
        <h3>¡Reserva solicitada!</h3>
        <p>Recibimos tu solicitud y te confirmaremos por WhatsApp.</p>
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
      {error && <p style={{ color: '#e0706c', marginBottom: 12 }}>No pudimos guardar tu reserva. Intenta de nuevo.</p>}
      <button className="btn btn-gold" type="submit" disabled={sending} style={{ width: '100%' }}>
        {sending ? 'Enviando…' : 'Solicitar reserva'}
      </button>
    </form>
  )
}
