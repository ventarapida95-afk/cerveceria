import { IMAGES } from '../lib/images.js'

export default function About() {
  return (
    <section className="section" id="historia">
      <div className="container split">
        <div className="media-stack">
          <div className="media">
            <img src={IMAGES.about} alt="Vaso de cerveza artesanal" loading="lazy" />
            <span className="tag">Estilo & tradición</span>
          </div>
          <div className="media">
            <img src={IMAGES.brewing} alt="Sala de cocción" loading="lazy" />
            <span className="tag">Elaboración propia</span>
          </div>
        </div>
        <div>
          <span className="eyebrow">Nuestra Historia</span>
          <h2 className="section-title">Una cervecería nacida <span className="serif-amp">del</span> sur de Chile</h2>
          <p className="section-sub" style={{ marginBottom: 20 }}>
            Brunnemann nace del oficio familiar y la pasión por la cerveza de verdad.
            Cada lote se cocina en nuestra sala en Angol con maltas seleccionadas,
            lúpulos nobles y agua del sur.
          </p>
          <ul className="text-list">
            <li>Recetas propias, fermentación lenta y sin apuros.</li>
            <li>Maridajes creados junto a nuestra cocina de fuego y leña.</li>
            <li>Pedidos online con despacho en Angol y retiro en local.</li>
            <li>Tu opinión cuenta: califícanos en Google Maps tras tu visita.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
