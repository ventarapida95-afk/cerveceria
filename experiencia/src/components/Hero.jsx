import { IMAGES } from '../lib/images.js'
import { BUSINESS } from '../lib/constants.js'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="eyebrow">Cervecería & Restaurante · Angol, Chile</span>
        <h1>
          Donde el <span className="gold-text">fuego</span> se encuentra<br />
          con la <span className="gold-text">mejor cerveza</span>
        </h1>
        <p className="lead">
          Cerveza artesanal elaborada en casa, gastronomía de fuego y madera,
          y un ambiente que invita a quedarse. Pide online y recibe en tu puerta
          o ven a disfrutar en nuestro local.
        </p>
        <div className="hero-actions">
          <a href="#carta" className="btn btn-gold">Ver carta y pedir</a>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">Cómo llegar</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="num">12+</div><div className="lbl">Cervezas de la casa</div></div>
          <div className="stat"><div className="num">4.8★</div><div className="lbl">{BUSINESS.reviewCount} reseñas en Google</div></div>
          <div className="stat"><div className="num">$15.000</div><div className="lbl">Precio promedio por persona</div></div>
        </div>
      </div>
    </section>
  )
}
