export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const token = process.env.MERCADOPAGO_ACCESS_TOKEN
  const { orderId, items, total, payer } = req.body || {}

  if (!token || token.includes('00000000')) {
    return res.status(503).json({ error: 'Pasarela no configurada' })
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Sin items' })
  }

  const siteUrl = process.env.SITE_URL || `https://${process.env.VERCEL_URL || 'localhost:3000'}`

  try {
    const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: items.map((i) => ({
          title: i.name,
          quantity: i.qty,
          unit_price: Number(i.price),
          currency_id: 'CLP',
        })),
        payer: payer?.name ? { name: payer.name, phone: payer.phone ? { number: payer.phone } : undefined } : undefined,
        external_reference: String(orderId),
        auto_return: 'approved',
        back_urls: {
          success: `${siteUrl}/confirmacion`,
          pending: `${siteUrl}/confirmacion`,
          failure: `${siteUrl}/confirmacion`,
        },
        notification_url: `${siteUrl}/api/payment-webhook`,
        statement_descriptor: 'BRUNNEMANN',
      }),
    })

    const data = await mpRes.json()

    if (!mpRes.ok) {
      return res.status(mpRes.status).json({ error: data.message || 'Error MercadoPago' })
    }

    return res.status(200).json({ init_point: data.init_point, preference_id: data.id })
  } catch (err) {
    console.error('create-payment error', err)
    return res.status(500).json({ error: 'Error interno' })
  }
}
