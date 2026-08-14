export const DATA = {
  name: 'Brunnemann Cervecería Restaurante',
  shortName: 'Brunnemann',
  address: 'Camino Angol–Collipulli km 2,5 · Parcela 7',
  city: 'Angol, Región de La Araucanía',
  phone: '+56 9 6871 0565',
  whatsapp: '56968710565',
  email: 'contacto@brunnemann.cl', // TODO
  instagram: 'https://www.instagram.com/brunnemanncerveceria/',
  facebook: 'https://www.facebook.com/cerveceriabrunnemann',
  rating: '4.8',
  reviewCount: 29,
  priceRange: '$15.000–20.000 por persona',
  mapsUrl: 'https://www.google.com/maps/place/Brunnemann-Cerveceria-Restaurante/@-37.8328949,-72.6569249,18z/data=!4m6!3m5!1s0x966bb3533424a5af:0xb74f04c16cd0ac3b!8m2!3d-37.8322167!4d-72.6574428!16s%2Fg%2F11k574hk45',
  reviewUrl: 'https://www.google.com/maps/search/?api=1&query=Brunnemann+Cerveceria+Restaurante+Angol&query_place_id=0xb74f04c16cd0ac3b',
  mapEmbed: 'https://www.google.com/maps?q=-37.8322167,-72.6574428&z=16&output=embed',
  hours: 'Mar–Dom · 18:30 a 23:45 hrs',
}

export const IMG = {
  hero: '/images/hero.jpg',
  glasses: '/images/cervezas.jpg',
  bottles: '/images/galeria-2.jpg',
  toast: '/images/brindis.jpg',
  brewing: '/images/sala.jpg',
  bar: '/images/barra.jpg',
}

export const IMG_FALLBACK = {
  hero: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1800&q=80',
  glasses: 'https://images.unsplash.com/photo-1572916108357-39ee1f59e007?w=1200&q=80',
  bottles: 'https://images.unsplash.com/photo-1505075106905-fb052892c116?w=1200&q=80',
  toast: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
  brewing: 'https://images.unsplash.com/photo-1532634931-f8ec541ea2aa?w=1200&q=80',
  bar: 'https://images.unsplash.com/photo-1546622891-02c72c1537b6?w=1200&q=80',
}

export const MENU = [
  { cat: 'Cervezas de la casa', items: [
    { name: 'Rubia Brunnemann', note: 'Rubia refrescante · 5.0%', price: '$4.500' },
    { name: 'Ámbar Brunnemann', note: 'Ámbar caramelizada · 5.5%', price: '$4.800' },
    { name: 'IPA del Bosque', note: 'IPA lupulada · 6.8%', price: '$5.500' },
    { name: 'Stout Chocolate', note: 'Stout con chocolate · 7.0%', price: '$6.000' },
  ]},
  { cat: 'Para comer', items: [
    { name: 'Hamburguesa Ahumada', note: 'Angus ahumada + papas fritas', price: '$10.900' },
    { name: 'Papas fritas Brunnemann', note: 'Rustic con salsa de la casa', price: '$6.900' },
    { name: 'Tabla Brunnemann', note: 'Quesos, embutidos y pan', price: '$15.900' },
    { name: 'Pizza de Horno', note: 'Horno a leña', price: '$12.900' },
  ]},
  { cat: 'Promos', items: [
    { name: 'Miércoles de Promos', note: 'Promociones todos los miércoles', price: '—' },
    { name: 'Cata Guiada', note: '5 estilos con el maestro cervecero', price: '$15.000' },
  ]},
]

export const PRICE = (n) => '$' + n.toLocaleString('es-CL')
