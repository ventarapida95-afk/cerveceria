const words = ['Cerveza Artesanal', 'Gastronomía de Fuego', 'Pedidos Online', 'Reseñas en Google', 'Brunnemann', 'Angol · Chile', 'Elaborada en Casa']

export default function Marquee() {
  const track = [...words, ...words]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((w, i) => <span key={i}>{w}</span>)}
      </div>
    </div>
  )
}
