export const DATA = {
  name: 'Brunnemann Cervecería Restaurante',
  shortName: 'Brunnemann',
  city: 'Angol, Región de La Araucanía',
  phone: '+56 9 0000 0000', // TODO: teléfono real
  whatsapp: '56900000000', // TODO
  email: 'contacto@brunnemann.cl', // TODO
  instagram: 'https://instagram.com', // TODO
  facebook: 'https://facebook.com', // TODO
  mapsUrl: 'https://www.google.com/maps/place/Brunnemann-Cerveceria-Restaurante/@-37.8328949,-72.6569249,18z/data=!4m6!3m5!1s0x966bb3533424a5af:0xb74f04c16cd0ac3b!8m2!3d-37.8322167!4d-72.6574428!16s%2Fg%2F11k574hk45',
  reviewUrl: 'https://search.google.com/local/writereview?placeid=g/11k574hk45',
  mapEmbed: 'https://www.google.com/maps?q=-37.8322167,-72.6574428&z=16&output=embed',
  hours: 'Mar–Dom · 12:00 a 00:00',
}

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1800&q=80',
  glasses: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1200&q=80',
  bottles: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=1200&q=80',
  toast: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
  brewing: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=1200&q=80',
  bar: 'https://images.unsplash.com/photo-1505075106905-fb052892c116?w=1200&q=80',
}

export const MENU = [
  { cat: 'Cervezas de la casa', items: [
    { name: 'Golden Lager', note: 'Lager dorada · 5.2%', price: '$4.500' },
    { name: 'IPA del Bosque', note: 'IPA lupulada · 6.8%', price: '$5.500' },
    { name: 'Stout Chocolate', note: 'Stout con chocolate · 7.0%', price: '$6.000' },
    { name: 'Trigo Selva', note: 'Weissbier · 5.0%', price: '$5.000' },
  ]},
  { cat: 'Para comer', items: [
    { name: 'Tabla Brunnemann', note: 'Quesos, embutidos y pan', price: '$15.900' },
    { name: 'Hamburguesa Ahumada', note: 'Angus ahumada + papas', price: '$10.900' },
    { name: 'Pizza de Horno', note: 'Horno a leña', price: '$12.900' },
  ]},
  { cat: 'Experiencias', items: [
    { name: 'Cata Guiada', note: '5 estilos con el maestro cervecero', price: '$15.000' },
    { name: 'Tour de Cervecería', note: 'Sala de cocción + maridaje', price: '$20.000' },
  ]},
]

export const PRICE = (n) => '$' + n.toLocaleString('es-CL')
