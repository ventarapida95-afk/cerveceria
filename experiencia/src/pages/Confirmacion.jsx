import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { CheckIcon } from '../components/icons.jsx'

export default function Confirmacion() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    const collectionStatus = params.get('collection_status')
    const orderRef = params.get('order')
    const paymentId = params.get('payment_id')

    if (!orderRef || !collectionStatus) {
      setStatus('unknown')
      return
    }

    if (collectionStatus === 'approved') {
      supabase
        .from('brewery_orders')
        .update({ status: 'paid', payment_status: 'approved', payment_id })
        .eq('id', orderRef)
        .then(() => setStatus('paid'))
    } else if (collectionStatus === 'pending') {
      setStatus('pending')
    } else {
      setStatus('declined')
    }
  }, [params])

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: 560 }}>
        {status === 'checking' && <p className="section-sub" style={{ textAlign: 'center' }}>Verificando tu pago…</p>}

        {status === 'paid' && (
          <div className="success-box">
            <div className="check"><CheckIcon /></div>
            <h2>¡Pago recibido!</h2>
            <p className="sub">Gracias por tu pedido. Lo estamos preparando y te confirmaremos por WhatsApp.</p>
            <Link to="/" className="btn btn-gold" style={{ width: '100%' }}>Volver al inicio</Link>
          </div>
        )}

        {status === 'pending' && (
          <div className="success-box">
            <h2>Pago pendiente</h2>
            <p className="sub">Tu pago está siendo procesado por el banco. Cuando se apruebe te notificaremos.</p>
            <Link to="/" className="btn btn-gold" style={{ width: '100%' }}>Volver al inicio</Link>
          </div>
        )}

        {status === 'declined' && (
          <div className="success-box">
            <h2>Pago no completado</h2>
            <p className="sub">El pago no pudo procesarse. Puedes intentar nuevamente desde el inicio.</p>
            <Link to="/" className="btn btn-gold" style={{ width: '100%' }}>Volver al inicio</Link>
          </div>
        )}

        {status === 'unknown' && (
          <div className="success-box">
            <h2>Estado desconocido</h2>
            <p className="sub">No encontramos tu orden. Si necesitas ayuda, escríbenos.</p>
            <Link to="/" className="btn btn-gold" style={{ width: '100%' }}>Volver al inicio</Link>
          </div>
        )}
      </div>
    </section>
  )
}
