import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabase.js'
import { FALLBACK_PRODUCTS } from '../data/products.js'
import { CURRENCY } from '../lib/constants.js'
import { useCart } from '../context/CartContext.jsx'
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

export default function Products() {
  const [products, setProducts] = useState([])
  const [active, setActive] = useState('Todos')
  const { addItem } = useCart()

  useEffect(() => {
    let mounted = true
    const load = async () => {
      let list = FALLBACK_PRODUCTS
      try {
        const { data, error } = await supabase
          .from('brewery_products')
          .select('id, name, category, description, price, badge, available')
          .eq('available', true)
          .order('id')
        if (!error && data?.length) list = data
      } catch {
        /* usa respaldo local */
      }
      if (mounted) setProducts(list)
    }
    load()
    return () => { mounted = false }
  }, [])

  const visible = useMemo(
    () => (active === 'Todos' ? products : products.filter((p) => p.category === active)),
    [products, active],
  )

  return (
    <section className="section" id="carta" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Nuestra Carta</span>
          <h2 className="section-title">Elige, pide <span className="serif-amp">&</span> recibe</h2>
          <p className="section-sub">
            Todo el menú disponible para pedir online. Agrega al carrito, paga con
            tarjeta y recibe en casa o retira en el local.
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
          {visible.map((p, idx) => (
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
                  <button className="add-btn" aria-label={`Agregar ${p.name}`} onClick={() => addItem(p)}>+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
