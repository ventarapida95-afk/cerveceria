import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
      <WhatsAppFloat />
      <div className="mobile-cta">
        <a href="#carta" className="btn btn-dark">Ver la carta</a>
        <a href="#reservas" className="btn btn-gold">Reservar mesa</a>
      </div>
    </>
  )
}
