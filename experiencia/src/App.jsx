import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import CheckoutModal from './components/CheckoutModal.jsx'
import Toast from './components/Toast.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Confirmacion from './pages/Confirmacion.jsx'

function Shell() {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const { count, setDrawerOpen } = useCart()

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
        </Routes>
      </main>
      <Footer />

      <CartDrawer onCheckout={() => { setCheckoutOpen(true); setDrawerOpen(false) }} />
      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      <Toast />
      <ScrollTop />

      {count > 0 && (
        <button className="fab" aria-label="Ver carrito" onClick={() => setDrawerOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
      )}
    </>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Shell />
    </CartProvider>
  )
}
