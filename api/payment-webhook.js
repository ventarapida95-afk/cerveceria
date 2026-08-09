import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const url = process.env.VITE_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const token = process.env.MERCADOPAGO_ACCESS_TOKEN

  if (!url || !serviceKey || !token) {
    return res.status(503).json({ error: 'No configurado' })
  }

  try {
    const paymentId = req.body?.data?.id
    const type = req.body?.type

    if (type !== 'payment' || !paymentId) {
      return res.status(200).json({ ok: true })
    }

    const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!mpRes.ok) return res.status(502).json({ error: 'No se pudo consultar pago' })
    const payment = await mpRes.json()

    const statusMap = {
      approved: 'paid',
      pending: 'pending',
      in_process: 'pending',
      rejected: 'declined',
      cancelled: 'cancelled',
    }
    const status = statusMap[payment.status] || 'pending'
    const orderRef = String(payment.external_reference)

    const admin = createClient(url, serviceKey, { auth: { persistSession: false } })
    await admin
      .from('brewery_orders')
      .update({ status, payment_status: payment.status, payment_id: String(paymentId) })
      .eq('id', orderRef)

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('webhook error', err)
    return res.status(500).json({ error: 'Error interno' })
  }
}
