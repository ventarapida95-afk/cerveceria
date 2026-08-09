import { useCart } from '../context/CartContext.jsx'

export default function Toast() {
  const { toast } = useCart()
  return (
    <div className={`toast ${toast ? 'show' : ''}`}>
      <span className="dot" />
      {toast}
    </div>
  )
}
