import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { supabase } from '../lib/supabase.js'
import { CURRENCY, BUSINESS } from '../lib/constants.js'
import { CheckIcon, WhatsAppIcon } from './icons.jsx'

export default function CheckoutModal({ open, onClose }) {
  const { items, total, clear, setDrawerOpen } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', type: 'delivery', address: '' })
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState('form')
  const [orderInfo, setOrderInfo] = useState(null)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    try {
      const itemsJson = items.map(({ name, qty, price }) => ({ name, qty, price }))
      const { data: order, error } = await supabase
        .from('brewery_orders')
        .insert({ customer_name: form.name, phone: form.phone, items: itemsJson, total, status: 'pending' })
        .select()
        .single()
      if (error) throw error

      const res = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: order.id,
          items: itemsJson,
          total,
          payer: { name: form.name, phone: form.phone },
        }),
      })
      const pay = await res.json()

      if (pay?.init_point) {
        await supabase.from('brewery_orders').update({ payment_id: pay.preference_id }).eq('id', order.id)
        window.location.href = pay.init_point
        return
      }
      // Sin pasarela configurada aún → fallback WhatsApp
      setStep('whatsapp')
      setOrderInfo({ orderId: order.id })
    } catch (err) {
      console.error(err)
      setStep('error')
    } finally {
      setLoading(false)
    }
  }

  const waMsg = encodeURIComponent(
    `Hola Brunnemann, hice un pedido online:\n\n` +
      items.map((i) => `• ${i.qty}× ${i.name} — ${CURRENCY.format(i.price * i.qty)}`).join('\n') +
      `\n\nTotal: ${CURRENCY.format(total)}\nNombre: ${form.name}\n` +
      (form.type === 'delivery' ? `Dirección: ${form.address}` : 'Retiro en local'),
  )

  const close = () => {
    onClose()
    setStep('form')
    setForm({ name: '', phone: '', type: 'delivery', address: '' })
    setOrderInfo(null)
  }

  const finish = () => {
    clear()
    setDrawerOpen(false)
    close()
  }

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {step === 'form' && (
          <>
            <h3>Finalizar pedido</h3>
            <p className="sub">Completa tus datos para procesar el pago.</p>

            <div className="order-summary">
              {items.map((i) => (
                <div className="line" key={i.id}>
                  <span>{i.qty}× {i.name}</span>
                  <span>{CURRENCY.format(i.price * i.qty)}</span>
                </div>
              ))}
              <div className="line total">
                <span>Total a pagar</span>
                <span>{CURRENCY.format(total)}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Nombre</label>
                <input required value={form.name} onChange={set('name')} placeholder="Tu nombre" />
              </div>
              <div className="form-field">
                <label>WhatsApp / Teléfono</label>
                <input required value={form.phone} onChange={set('phone')} placeholder="+56 9 ..." />
              </div>
              <div className="form-field">
                <label>Tipo de entrega</label>
                <select value={form.type} onChange={set('type')}>
                  <option value="delivery">Despacho a domicilio</option>
                  <option value="pickup">Retiro en local</option>
                </select>
              </div>
              {form.type === 'delivery' && (
                <div className="form-field">
                  <label>Dirección de entrega</label>
                  <input required value={form.address} onChange={set('address')} placeholder="Calle, número, referencia" />
                </div>
              )}
              <button className="btn btn-gold" type="submit" disabled={loading} style={{ width: '100%' }}>
                {loading ? 'Procesando…' : `Pagar ${CURRENCY.format(total)}`}
              </button>
              <p style={{ textAlign: 'center', color: 'var(--dim)', fontSize: '0.78rem', marginTop: 14 }}>
                Pago seguro con tarjeta · MercadoPago
              </p>
            </form>
          </>
        )}

        {step === 'whatsapp' && (
          <div className="success-box">
            <div className="check"><CheckIcon /></div>
            <h3>¡Pedido registrado!</h3>
            <p className="sub">
              Confirmaremos tu pedido por WhatsApp. Código: <strong>#{orderInfo?.orderId}</strong>
            </p>
            <a className="btn btn-gold" href={`https://wa.me/${BUSINESS.phoneWhatsApp}?text=${waMsg}`} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
              <WhatsAppIcon /> Confirmar por WhatsApp
            </a>
            <button className="btn btn-outline" onClick={finish} style={{ width: '100%', marginTop: 12 }}>Cerrar</button>
          </div>
        )}

        {step === 'error' && (
          <div className="success-box">
            <h3>Ups, algo salió mal</h3>
            <p className="sub">No pudimos procesar tu pedido. Intenta nuevamente o escríbenos por WhatsApp.</p>
            <button className="btn btn-gold" onClick={() => setStep('form')} style={{ width: '100%' }}>Reintentar</button>
          </div>
        )}
      </div>
    </div>
  )
}
