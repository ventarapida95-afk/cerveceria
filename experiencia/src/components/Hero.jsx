import { IMAGES, IMAGE_LOCAL } from '../lib/images.js'
import { BUSINESS } from '../lib/constants.js'
import { useLocalImage } from '../lib/useLocalImage.js'

export default function Hero() {
  const hero = useLocalImage(IMAGE_LOCAL.hero, IMAGES.hero)
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" style={{ backgroundImage: `url(${hero})` }} />
      <div className="hero-overlay" />
      <div className="hero-badge">Miércoles de <b>Promos</b> · 18:30 a 23:45 hrs</div>
      <div className="container hero-content">
        <span className="eyebrow">Cervecería & Restaurante · Angol, Chile</span>
        <h1>
          Donde el <span className="gold-text">fuego</span> se encuentra<br />
          con la <span className="gold-text">mejor cerveza</span>
        </h1>
        <p className="lead">
          Cerveza artesanal elaborada en casa, gastronomía de fuego y madera,
          y un ambiente que invita a quedarse. Reserva tu mesa o escríbenos
          por WhatsApp.
        </p>
        <div className="hero-actions">
          <a href="#reservas" className="btn btn-gold">Reservar mesa</a>
          <a href="#carta" className="btn btn-outline">Ver la carta</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="num">4.8★</div><div className="lbl">{BUSINESS.reviewCount} reseñas en Google</div></div>
          <div className="stat"><div className="num">Mar–Dom</div><div className="lbl">18:30 a 23:45 hrs</div></div>
          <div className="stat"><div className="num">$15.000</div><div className="lbl">Precio promedio por persona</div></div>
        </div>
      </div>
      <div className="hero-cue" aria-hidden="true"><span /></div>
    </section>
  )
}
