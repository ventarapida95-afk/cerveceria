import { IMAGES } from '../lib/images.js'

const KEYS = ['about', 'glasses', 'brewing', 'bottles', 'bar', 'hops', 'toast', 'brewery']

export default function Galeria() {
  return (
    <section className="section" id="galeria" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Galería</span>
          <h2 className="section-title">El ambiente <span className="serif-amp">&</span> los detalles</h2>
        </div>
        <div className="galeria">
          {KEYS.map((k, i) => (
            <div className="media" key={k}>
              <img
                src={`/images/galeria-${i + 1}.jpg`}
                alt={`Galería Brunnemann ${i + 1}`}
                loading="lazy"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = IMAGES[k] }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
