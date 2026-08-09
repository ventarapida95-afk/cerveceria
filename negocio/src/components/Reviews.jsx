import { BUSINESS } from '../lib/constants.js'
import { GoogleIcon, StarIcon } from './icons.jsx'

const REVIEWS = [
  { name: 'Carolina M.', date: 'Hace 2 semanas', stars: 5, text: 'La mejor cerveza artesanal de Angol. El ambiente es espectacular y la atención de primer nivel. Totalmente recomendada.' },
  { name: 'Jorge A.', date: 'Hace 1 mes', stars: 5, text: 'Pedí online y llegó en perfecto estado y rápido. La IPA del Bosque es un viaje. ¡Y las papas que envían son brutales!' },
  { name: 'Valentina R.', date: 'Hace 1 mes', stars: 5, text: 'Fuimos por la cata guiada y nos encantó. Aprendimos un montón y la comida de fuego es imperdible. Volveremos seguro.' },
  { name: 'Matías S.', date: 'Hace 2 meses', stars: 4, text: 'Muy buen lugar, cervezas con carácter y precios justos. El único detalle es que los fines de semana se llena, pero vale la pena esperar.' },
]

export default function Reviews() {
  return (
    <section className="section" id="reseñas">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Opiniones reales</span>
          <h2 className="section-title">Lo que dicen <span className="serif-amp">nuestros</span> clientes</h2>
          <p className="section-sub">
            Cada visita cuenta. ¿Ya nos visitaste? Déjanos tu reseña en Google Maps
            y ayuda a que más gente descubra Brunnemann.
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
