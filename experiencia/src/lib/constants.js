export const BUSINESS = {
  name: 'Brunnemann Cervecería Restaurante',
  shortName: 'Brunnemann',
  tagline: 'Cerveza artesanal & gastronomía',
  address: 'Camino Angol–Collipulli km 2,5 · Parcela 7',
  city: 'Angol, Región de La Araucanía',
  phone: '+56 9 6871 0565',
  phoneWhatsApp: '56968710565',
  email: 'contacto@brunnemann.cl', // TODO: reemplazar
  instagram: 'https://www.instagram.com/brunnemanncerveceria/',
  facebook: 'https://www.facebook.com/cerveceriabrunnemann',
  hours: 'Mar–Dom · 18:30 a 23:45',
  rating: '4.8',
  reviewCount: 29,
  priceRange: '$15.000–20.000 por persona',
  // Ubicación real desde Google Maps
  mapsUrl: 'https://www.google.com/maps/place/Brunnemann-Cerveceria-Restaurante/@-37.8328949,-72.6569249,18z/data=!4m6!3m5!1s0x966bb3533424a5af:0xb74f04c16cd0ac3b!8m2!3d-37.8322167!4d-72.6574428!16s%2Fg%2F11k574hk45',
  // Enlace directo para escribir reseña en Google (Place ID: 0xb74f04c16cd0ac3b)
  reviewUrl: 'https://www.google.com/maps/search/?api=1&query=Brunnemann+Cerveceria+Restaurante+Angol&query_place_id=0xb74f04c16cd0ac3b',
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
