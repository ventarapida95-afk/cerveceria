import { useCart } from '../context/CartContext.jsx'
import { CURRENCY } from '../lib/constants.js'
import { CartIcon } from './icons.jsx'

export default function CartDrawer({ onCheckout }) {
  const { items, drawerOpen, setDrawerOpen, changeQty, removeItem, total, count } = useCart()

  return (
    <>
      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-head">
          <h3>Tu pedido {count > 0 && <span className="gold-text">({count})</span>}</h3>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Cerrar">×</button>
        </div>

        <div className="drawer-items">
          {items.length === 0 && (
            <div className="drawer-empty">
              <CartIcon />
              <p style={{ marginTop: 14 }}>Tu carrito está vacío.</p>
              <p style={{ fontSize: '0.85rem' }}>Agrega algo rico de la carta.</p>
            </div>
          )}
          {items.map((i) => (
            <div className="drawer-item" key={i.id}>
              <img src={i.image_url} alt={i.name} />
              <div className="info">
                <h4>{i.name}</h4>
                <div className="price">{CURRENCY.format(i.price)}</div>
                <div className="qty">
                  <button onClick={() => changeQty(i.id, -1)}>−</button>
                  <span>{i.qty}</span>
                  <button onClick={() => changeQty(i.id, 1)}>+</button>
                </div>
              </div>
              <button className="drawer-close" onClick={() => removeItem(i.id)} aria-label="Eliminar">×</button>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="drawer-foot">
            <div className="drawer-total">
              <span>Total</span>
              <span className="gold-text">{CURRENCY.format(total)}</span>
            </div>
            <button className="btn btn-gold" onClick={onCheckout}>Continuar al pago</button>
          </div>
        )}
      </aside>
    </>
  )
}
