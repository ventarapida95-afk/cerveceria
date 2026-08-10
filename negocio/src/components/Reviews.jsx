import { BUSINESS } from '../lib/constants.js'
import { GoogleIcon, StarIcon } from './icons.jsx'

const REVIEWS = [
  { name: 'Agustín Esper', date: 'Hace 1 año', stars: 5, text: 'Muy bonito el local, y buen servicio. Muy buena la cerveza del local, además tienen promociones los días miércoles. Las papas y las hamburguesas estaban ricas.' },
  { name: 'Iván A. Regla Giacomozzi', date: 'Hace 8 meses', stars: 5, text: 'Excelente servicio, súper buena relación calidad precio. Probamos la cerveza ámbar y rubia, súper ricas las dos. Recomendado 5/5. Buena atención y ambiente.' },
  { name: 'Denisse Novoa Vega', date: 'Hace 3 meses', stars: 5, text: 'Un lugar que elegimos siempre que queremos compartir en familia. Celebramos nuestro matrimonio civil y nos fuimos para allá a festejar.' },
  { name: 'Matías S.', date: 'Hace 2 meses', stars: 4, text: 'Muy buen lugar, cervezas con carácter y precios justos. Los miércoles hay promociones que valen la pena. Recomendado.' },
]

export default function Reviews() {
  return (
    <section className="section" id="reseñas">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Opiniones reales</span>
          <h2 className="section-title">Lo que dicen <span className="serif-amp">nuestros</span> clientes</h2>
          <p className="section-sub">
            <strong style={{ color: 'var(--gold)' }}>{BUSINESS.rating}★ · {BUSINESS.reviewCount} reseñas</strong> en Google Maps.
            ¿Ya nos visitaste? Déjanos tu reseña y ayuda a que más gente descubra Brunnemann.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <article className="review" key={i}>
              <div className="stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
              <p>“{r.text}”</p>
              <div className="who">
                <div className="avatar">{r.name[0]}</div>
                <div>
                  <div className="name">{r.name}</div>
                  <div className="date">{r.date}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="g-review-cta">
          <a className="btn btn-gold" href={BUSINESS.reviewUrl} target="_blank" rel="noreferrer">
            <GoogleIcon /> Escribir reseña en Google Maps
          </a>
          <div className="g-logo" style={{ marginTop: 16 }}>
            <GoogleIcon /> Calificación verificada en Google
          </div>
        </div>
      </div>
    </section>
  )
}
