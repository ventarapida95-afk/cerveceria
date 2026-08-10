// Imágenes de productos: primero busca la foto real en /images/<slug>.jpg
// (carpeta public/images). Si no existe, el <img> usa onError y cae al stock.
export const slugify = (name) =>
  String(name)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const localProductImage = (name) => `/images/${slugify(name)}.jpg`

const STOCK = {
  'rubia-brunnemann': 'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=1000&q=80',
  'ambar-brunnemann': 'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?w=1000&q=80',
  'ipa-del-bosque': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1000&q=80',
  'stout-chocolate': 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=1000&q=80',
  'pack-degustacion-6': 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=1000&q=80',
  'tabla-brunnemann': 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=1000&q=80',
  'hamburguesa-ahumada': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=80',
  'papas-fritas-brunnemann': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1000&q=80',
  'pizza-de-horno': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&q=80',
  'cata-guiada': 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=1000&q=80',
}

const CATEGORY_FALLBACK = {
  Cerveza: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1000&q=80',
  Comida: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80',
  Experiencia: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=1000&q=80',
}

export const stockProductImage = (name, category) =>
  STOCK[slugify(name)] || CATEGORY_FALLBACK[category] || CATEGORY_FALLBACK.Comida
