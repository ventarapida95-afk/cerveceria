export const BUSINESS = {
  name: 'Brunnemann Cervecería Restaurante',
  shortName: 'Brunnemann',
  tagline: 'Cerveza artesanal & gastronomía',
  address: 'Camino Angol–Collipulli km 2,5 · Parcela 7',
  city: 'Angol, Región de La Araucanía',
  phone: '+56 9 6871 0565',
  phoneWhatsApp: '56968710565',
  email: 'contacto@brunnemann.cl', // TODO: reemplazar
  instagram: 'https://instagram.com', // TODO
  facebook: 'https://facebook.com', // TODO
  hours: 'Mar–Dom · 18:30 a 00:00',
  rating: '4.8',
  reviewCount: 28,
  priceRange: '$15.000–20.000 por persona',
  // Ubicación real desde Google Maps
  mapsUrl: 'https://www.google.com/maps/place/Brunnemann-Cerveceria-Restaurante/@-37.8328949,-72.6569249,18z/data=!4m6!3m5!1s0x966bb3533424a5af:0xb74f04c16cd0ac3b!8m2!3d-37.8322167!4d-72.6574428!16s%2Fg%2F11k574hk45',
  // Enlace directo para escribir reseña en Google (Place ID: g/11k574hk45)
  reviewUrl: 'https://search.google.com/local/writereview?placeid=g/11k574hk45',
  // Mapa embebido (iframe)
  mapEmbed: 'https://www.google.com/maps?q=-37.8322167,-72.6574428&z=16&output=embed',
  lat: -37.8322167,
  lng: -72.6574428,
}

export const CURRENCY = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})
