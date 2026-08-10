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
  'rubia-brunnemann': 'https://images.unsplash.com/photo-1782450681554-1dedff0b9d9d?w=1000&q=80',
  'ambar-brunnemann': 'https://images.unsplash.com/photo-1778164483558-38853e79cbd0?w=1000&q=80',
  'ipa-del-bosque': 'https://images.unsplash.com/photo-1644085159560-8b6745fc8b60?w=1000&q=80',
  'stout-chocolate': 'https://images.unsplash.com/photo-1716339140117-ade27f94c11b?w=1000&q=80',
  'pack-degustacion-6': 'https://images.unsplash.com/photo-1522057306606-8d84daa75e87?w=1000&q=80',
  'tabla-brunnemann': 'https://images.unsplash.com/photo-1616631124348-c63521eb484c?w=1000&q=80',
  'hamburguesa-ahumada': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=80',
  'papas-fritas-brunnemann': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1000&q=80',
  'pizza-de-horno': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&q=80',
  'cata-guiada': 'https://images.unsplash.com/photo-1641631366865-8f7aa9fbc584?w=1000&q=80',
}

const CATEGORY_FALLBACK = {
  Cerveza: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1000&q=80',
  Comida: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80',
  Experiencia: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=1000&q=80',
}

export const stockProductImage = (name, category) =>
  STOCK[slugify(name)] || CATEGORY_FALLBACK[category] || CATEGORY_FALLBACK.Comida
