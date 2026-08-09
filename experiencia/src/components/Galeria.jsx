import { IMAGES } from '../lib/images.js'

export default function Galeria() {
  const items = [IMAGES.about, IMAGES.glasses, IMAGES.brewing, IMAGES.bottles, IMAGES.bar, IMAGES.hops]
  return (
    <section className="section" id="galeria" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Galería</span>
          <h2 className="section-title">El ambiente <span className="serif-amp">&</span> los detalles</h2>
        </div>
        <div className="galeria">
          {items.map((src, i) => (
            <div className="media" key={i}>
              <img src={src} alt={`Galería Brunnemann ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
