import { Link } from 'react-router-dom'
import { BUSINESS } from '../lib/constants.js'
import { BoltIcon, WalletIcon, StarBadgeIcon, ShieldIcon, GoogleIcon, WhatsAppIcon } from '../components/icons.jsx'

const PLANS = [
  {
    name: 'Vitrina',
    price: 'desde $250.000',
    desc: 'La vitrina digital perfecta para presentar tu negocio y atraer clientes.',
    features: [
      { text: 'Diseño premium con tu marca', on: true },
      { text: 'Menú / catálogo digital', on: true },
      { text: 'Ubicación y horarios en Google Maps', on: true },
      { text: 'Botón de WhatsApp para consultas', on: true },
      { text: 'Diseño adaptable a celular y computador', on: true },
      { text: 'Botón para reseñas en Google', on: true },
      { text: 'Pedidos online con pago en línea', on: false },
      { text: 'Toma de pedidos automática', on: false },
    ],
  },
  {
    name: 'Negocio',
    featured: true,
    ribbon: 'Más elegido',
    price: 'desde $450.000',
    desc: 'Tu página toma pedidos y recibe pagos sola. La que más vende por ti.',
    features: [
      { text: 'Todo lo del plan Vitrina', on: true },
      { text: 'Carrito y checkout con tarjeta (MercadoPago)', on: true },
      { text: 'Toma de pedidos automática 24/7', on: true },
      { text: 'Confirmación de pedidos por WhatsApp', on: true },
      { text: 'Panel para ver y gestionar pedidos', on: true },
      { text: 'Cupones y ofertas', on: true },
      { text: 'Enlace directo para reseñas en Google Maps', on: true },
      { text: 'SEO local para aparecer en Google', on: true },
    ],
  },
  {
    name: 'Experiencia',
    price: 'desde $700.000',
    desc: 'Experiencia completa con reservas, eventos y datos en tiempo real.',
    features: [
      { text: 'Todo lo del plan Negocio', on: true },
      { text: 'Sistema de reservas de mesas y experiencias', on: true },
      { text: 'Cuenta de cliente con historial', on: true },
      { text: 'Programa de fidelización', on: true },
      { text: 'Reportes de ventas en tiempo real', on: true },
      { text: 'Integración con tu sistema de reparto', on: true },
      { text: 'Soporte prioritario y capacitación', on: true },
    ],
  },
]

const PITCH = [
  { icon: <WalletIcon />, title: 'Recibe pagos en línea', desc: 'Tus clientes pagan con tarjeta al momento. Sin efectivo, sin esperas, sin pérdidas.' },
  { icon: <BoltIcon />, title: 'Pedidos automáticos', desc: 'La página toma el pedido, cobra y te llega la notificación. Vende aunque estés durmiendo.' },
  { icon: <StarBadgeIcon />, title: 'Reseñas en Google Maps', desc: 'Botón para que cada cliente satisfecho te califique. Más estrellas, más clientes nuevos.' },
  { icon: <ShieldIcon />, title: 'Rápida y segura', desc: 'Carga instantánea, certificado SSL y datos protegidos. Tu negocio en la vitrina del mundo.' },
]

const FAQ = [
  { q: '¿En cuánto tiempo estará lista mi página?', a: 'Depende del plan. La página Vitrina puede estar en 5 a 7 días. Las que toman pedidos y pagos en línea, entre 2 y 3 semanas, incluyendo pruebas.' },
  { q: '¿Necesito saber de computación para administrarla?', a: 'No. Te capacitamos y todo es simple: agregar productos, ver pedidos y responder por WhatsApp. Nosotros nos encargamos del resto.' },
  { q: '¿Los pagos de mis clientes llegan directo a mi cuenta?', a: 'Sí. Se cobran con MercadoPago y el dinero va a tu cuenta de MercadoPago o banco. Sin intermediarios de nuestra parte.' },
  { q: '¿La página funciona en celular?', a: 'Sí, es lo más importante. Diseñamos primero para el celular, donde está el 80% de tus clientes.' },
  { q: '¿Puedo pedir cambios después?', a: 'Sí. Cada plan incluye un mes de ajustes gratuitos. Después ofrecemos mantención con planes accesibles.' },
]

export default function Services() {
  return (
    <>
      <section className="services-hero" style={{ background: 'radial-gradient(900px 500px at 50% -10%, rgba(201,162,95,0.14), transparent 60%)' }}>
        <div className="container">
          <span className="eyebrow">Propuestas para tu negocio</span>
          <h1>
            Tu página web que <span className="gold-text">vende sola</span>:<br />
            recibe pagos, toma pedidos y junta <span className="gold-text">reseñas en Google</span>
          </h1>
          <p>
            La mejor página no es la más bonita: es la que <strong style={{ color: 'var(--gold-2)' }}>recibe pagos, toma pedidos en automático</strong> y
            convierte a cada cliente satisfecho en una <strong style={{ color: 'var(--gold-2)' }}>reseña en Google Maps</strong>.
            Elige la propuesta que mejor se ajusta a tu presupuesto.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="plans">
            {PLANS.map((p) => (
              <article className={`plan ${p.featured ? 'featured' : ''}`} key={p.name}>
                {p.ribbon && <span className="ribbon">{p.ribbon}</span>}
                <h3>{p.name}</h3>
                <p className="plan-desc">{p.desc}</p>
                <div className="plan-price">{p.price}</div>
                <ul>
                  {p.features.map((f, i) => (
                    <li key={i} className={f.on ? 'on' : 'off'}>{f.text}</li>
                  ))}
                </ul>
                <a className={`btn ${p.featured ? 'btn-gold' : 'btn-outline'}`} href={`https://wa.me/${BUSINESS.phoneWhatsApp}?text=${encodeURIComponent(`Hola, me interesa el plan "${p.name}" para la página web de mi negocio.`)}`} target="_blank" rel="noreferrer">
                  Quiero este plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pitch">
            <span className="eyebrow">Por qué una página con funciones</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)' }}>
              Tu página debe <span className="serif-amp">trabajar por ti</span>
            </h2>
            <div className="pitch-cards">
              {PITCH.map((f, i) => (
                <div className="pitch-card" key={i}>
                  <div className="icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="faq">
            <h2 className="section-title" style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3.6vw, 2.4rem)' }}>Preguntas frecuentes</h2>
            {FAQ.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 80 }}>
            <p style={{ color: 'var(--muted)', marginBottom: 22 }}>Mira la propuesta en vivo: este mismo sitio web es un ejemplo del plan «Negocio».</p>
            <Link to="/" className="btn btn-gold">Ver el sitio de la cervecería</Link>
          </div>
        </div>
      </section>
    </>
  )
}
