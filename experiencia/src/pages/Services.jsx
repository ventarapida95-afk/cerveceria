import { Link } from 'react-router-dom'
import { BUSINESS } from '../lib/constants.js'
import { BoltIcon, StarBadgeIcon, ShieldIcon, GoogleIcon, WhatsAppIcon } from '../components/icons.jsx'

const PLANS = [
  {
    name: 'Presencia',
    price: 'desde $250.000',
    desc: 'Tu propia página web con la identidad de Brunnemann. Simple, elegante y lista para mostrar.',
    features: [
      { text: 'Diseño premium con los colores de tu marca', on: true },
      { text: 'Carta digital con productos y precios', on: true },
      { text: 'Ubicación y horarios en Google Maps', on: true },
      { text: 'Botón de WhatsApp para consultas', on: true },
      { text: 'Enlace a Instagram y Facebook', on: true },
      { text: 'Diseño adaptable a celular y computador', on: true },
      { text: 'Botón para reseñas en Google', on: true },
      { text: 'Formulario de reservas por WhatsApp', on: false },
    ],
  },
  {
    name: 'Reservas',
    featured: true,
    ribbon: 'Más completo',
    price: 'desde $450.000',
    desc: 'Tu página toma reservas de mesas y experiencias directo por WhatsApp. La que te trae clientes.',
    features: [
      { text: 'Todo lo del plan Presencia', on: true },
      { text: 'Formulario de reservas de mesas', on: true },
      { text: 'Reservas de catas, tours y eventos', on: true },
      { text: 'Pedidos de carta por WhatsApp', on: true },
      { text: 'Galería de ambiente y productos', on: true },
      { text: 'Reseñas reales de clientes en Google', on: true },
      { text: 'SEO local para aparecer en Google', on: true },
      { text: 'Panel simple para gestionar reservas', on: true },
    ],
  },
]

const PITCH = [
  { icon: <WhatsAppIcon />, title: 'Reservas fáciles', desc: 'Tus clientes reservan mesa o experiencia y el detalle llega directo a tu WhatsApp.' },
  { icon: <BoltIcon />, title: 'Lista en días', desc: 'Tu página queda en línea en menos de una semana, sin trámites ni complicaciones.' },
  { icon: <StarBadgeIcon />, title: 'Reseñas en Google Maps', desc: 'Botón para que cada cliente satisfecho te califique. Más estrellas, más clientes.' },
  { icon: <ShieldIcon />, title: 'Con tu identidad', desc: 'Colores, logo y fotos reales de Brunnemann. Tu negocio se ve como es.' },
]

const FAQ = [
  { q: '¿En cuánto tiempo estará lista mi página?', a: 'La propuesta Presencia puede estar en 5 a 7 días. La propuesta Reservas, entre 7 y 10 días incluyendo pruebas.' },
  { q: '¿Necesito saber de computación para administrarla?', a: 'No. Te capacitamos y todo es simple: ver reservas, actualizar la carta y responder por WhatsApp. Nosotros nos encargamos del resto.' },
  { q: '¿Cómo llegan las reservas?', a: 'Cada reserva se arma como mensaje y llega directo a tu WhatsApp. Tú confirmas con un clic y respondes al cliente.' },
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
            La página web de <span className="gold-text">Brunnemann</span>:<br />
            presencia digital o reservas <span className="gold-text">por WhatsApp</span>
          </h1>
          <p>
            Dos propuestas simples y a medida, con los colores, el logo y las fotos reales
            de tu cervecería. Elige la que mejor se ajusta a lo que necesitas hoy.
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
                <a className={`btn ${p.featured ? 'btn-gold' : 'btn-outline'}`} href={`https://wa.me/${BUSINESS.phoneWhatsApp}?text=${encodeURIComponent(`Hola, me interesa el plan "${p.name}" para la página web de Brunnemann.`)}`} target="_blank" rel="noreferrer">
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
            <span className="eyebrow">Por qué una página propia</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)' }}>
              Tu negocio, <span className="serif-amp">como se ve</span> en persona
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
            <p style={{ color: 'var(--muted)', marginBottom: 22 }}>Mira la propuesta «Reservas» en vivo: este mismo sitio.</p>
            <Link to="/" className="btn btn-gold">Ver el sitio de la cervecería</Link>
          </div>
        </div>
      </section>
    </>
  )
}
