import { IMAGES, IMAGE_LOCAL } from '../lib/images.js'
import { BUSINESS } from '../lib/constants.js'
import { useLocalImage } from '../lib/useLocalImage.js'

export default function ExperienceBanner() {
  const brewery = useLocalImage(IMAGE_LOCAL.brewery, IMAGES.brewery)
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="banner">
          <div className="banner-bg" style={{ backgroundImage: `url(${brewery})` }} />
          <div className="banner-overlay" />
          <div className="banner-content">
            <span className="eyebrow">Experiencias</span>
            <h2>Vive la cervecería <span className="gold-text">por dentro</span></h2>
            <p className="section-sub" style={{ margin: '0 0 28px' }}>
              Catas guiadas, tour por la sala de cocción y maridajes con la cocina.
              Agenda tu experiencia desde la carta o escríbenos por WhatsApp.
            </p>
            <a href="#carta" className="btn btn-gold">Reservar experiencia</a>
          </div>
        </div>
      </div>
    </section>
  )
}
