import { useMemo, useState } from 'react'
import { FALLBACK_PRODUCTS } from '../data/products.js'
import { CURRENCY, BUSINESS } from '../lib/constants.js'
import { WhatsAppIcon } from './icons.jsx'
import { localProductImage, stockProductImage } from '../lib/productImages.js'

const CATEGORIES = ['Todos', 'Cerveza', 'Comida', 'Experiencia']

function ProductImage({ name, category }) {
  const [src, setSrc] = useState(localProductImage(name))
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setSrc(stockProductImage(name, category))}
    />
  )
}

const waLink = (name) =>
  `https://wa.me/${BUSINESS.phoneWhatsApp}?text=${encodeURIComponent(`Hola Brunnemann, quiero pedir: ${name}.`)}`

export default function Products() {
  const [active, setActive] = useState('Todos')

  const visible = useMemo(
    () => (active === 'Todos' ? FALLBACK_PRODUCTS : FALLBACK_PRODUCTS.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section className="section" id="carta" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Nuestra Carta</span>
          <h2 className="section-title">Lo que <span className="serif-amp">hay que</span> probar</h2>
          <p className="section-sub">
            Cervezas de la casa, cocina de fuego y experiencias. Pide por WhatsApp
            y retira en el local o reserva tu visita.
          </p>
        </div>

        <div className="filters" style={{ justifyContent: 'center' }}>
          {CATEGORIES.map((c) => (
            <button key={c} className={`chip ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.map((p) => (
            <article className="card" key={p.id}>
              <div className="card-img">
                <ProductImage name={p.name} category={p.category} />
              </div>
              {p.badge && <span className="card-badge">{p.badge}</span>}
              <div className="card-body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="card-foot">
                  <span className="price">{CURRENCY.format(p.price)}</span>
                  <a className="add-btn" aria-label={`Pedir ${p.name} por WhatsApp`} href={waLink(p.name)} target="_blank" rel="noreferrer">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
