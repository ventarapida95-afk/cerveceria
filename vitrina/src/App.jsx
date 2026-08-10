import { useEffect, useState } from 'react'
import { DATA, IMG, IMG_FALLBACK, MENU } from './data.js'

const SmartImg = ({ name, alt, className, ...rest }) => {
  const [src, setSrc] = useState(IMG[name])
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setSrc(IMG_FALLBACK[name])}
      {...rest}
    />
  )
}

const WhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

const Pin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const Clock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const Phone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const waLink = (text) => `https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(text)}`

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#top" className="nav-logo"><img src="/brunnemann.jpg" alt="" />{DATA.shortName}</a>
          <nav className="nav-links">
            <a href="#menu">Carta</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="container hero" id="top">
        <div>
          <span className="eyebrow">Cervecería & Restaurante · Angol, Chile</span>
          <h1>Cerveza artesanal<br />y cocina de <em>fuego</em></h1>
          <p>Te esperamos en Angol con las mejores cervezas de la casa, gastronomía para acompañar cada vaso y un ambiente para quedarse.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={waLink('Hola Brunnemann, quiero hacer una reserva.')}>Reservar por WhatsApp</a>
            <a className="btn btn-line" href="#menu">Ver la carta</a>
          </div>
        </div>
        <div className="hero-img"><SmartImg name="hero" alt="Cervecería Brunnemann" /></div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="features">
            <div className="feature"><div className="num">12+</div><h3>Cervezas de la casa</h3><p>Recetas propias con lúpulos nobles y agua del sur.</p></div>
            <div className="feature"><div className="num">4.8★</div><h3>En Google Maps</h3><p>{DATA.reviewCount} reseñas de clientes reales.</p></div>
            <div className="feature"><div className="num">Fuego</div><h3>Cocina de leña</h3><p>Horno a leña, ahumados y tablas para compartir.</p></div>
            <div className="feature"><div className="num">Mar–Dom</div><h3>Desde las 18:30 hrs</h3><p>{DATA.priceRange}. Promos todos los miércoles.</p></div>
          </div>
        </div>
      </section>

      <section className="section menu" id="menu">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Nuestra carta</span>
            <h2 className="section-title">Lo que hay que probar</h2>
            <p className="section-sub">Precios en pesos chilenos. Todo se puede pedir para llevar.</p>
          </div>
          <div className="menu-grid">
            {MENU.map((col) => (
              <div className="menu-col" key={col.cat}>
                <h3>{col.cat}</h3>
                {col.items.map((i) => (
                  <div className="menu-item" key={i.name}>
                    <div>
                      <div className="name">{i.name}</div>
                      <div className="note">{i.note}</div>
                    </div>
                    <div className="price">{i.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="menu-cta">
            <a className="btn btn-primary" href={waLink('Hola Brunnemann, quisiera pedir: ') }>Pedir por WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section" id="nosotros">
        <div className="container split">
          <SmartImg name="brewing" alt="Sala de cocción" />
          <div>
            <span className="eyebrow">Nosotros</span>
            <h2 className="section-title">Un oficio familiar<br />hecho cerveza</h2>
            <p className="section-sub" style={{ marginBottom: 18 }}>Brunnemann nace del respeto por los procesos lentos: maltas seleccionadas, fermentación paciente y recetas que no cambian con las modas.</p>
            <div className="info-row"><Pin />{DATA.address} · {DATA.city}</div>
            <div className="info-row"><Clock />{DATA.hours}</div>
            <div className="info-row"><Phone />{DATA.phone}</div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="gallery">
            <SmartImg name="glasses" alt="Cervezas" />
            <SmartImg name="toast" alt="Brindis" />
            <SmartImg name="bar" alt="Barra" />
            <SmartImg name="bottles" alt="Botellas" />
          </div>
        </div>
      </section>

      <section className="section" id="ubicacion" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="head">
            <span className="eyebrow">Ubicación</span>
            <h2 className="section-title">Ven a visitarnos</h2>
          </div>
          <div className="map-wrap">
            <iframe title="Mapa" src={DATA.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div style={{ marginTop: 18 }}>
            <a className="btn btn-primary" href={DATA.mapsUrl} target="_blank" rel="noreferrer">Cómo llegar en Google Maps</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact">
            <span className="eyebrow" style={{ color: '#f0c887' }}>Contacto</span>
            <h2>¿Ganas de una cerveza?</h2>
            <p>Escríbenos para reservas, pedidos o consultas. También puedes dejarnos tu reseña en Google Maps.</p>
            <div className="actions">
              <a className="btn btn-primary" href={waLink('Hola Brunnemann, quiero información.')}><WhatsApp /> WhatsApp</a>
              <a className="btn btn-line" style={{ borderColor: 'rgba(240,200,135,0.3)', color: '#f6eeda' }} href={DATA.reviewUrl} target="_blank" rel="noreferrer">Deja tu reseña en Google</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {DATA.name}</span>
          <span><a href={DATA.instagram} target="_blank" rel="noreferrer">Instagram</a> · <a href={DATA.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a href={DATA.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a></span>
        </div>
      </footer>
    </>
  )
}
