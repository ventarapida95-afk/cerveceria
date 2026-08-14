# Brunnemann Cervecería · 2 propuestas web

Propuestas de sitio web para mostrarle al cliente. Dos opciones de distinto alcance y precio:

| Propuesta | Carpeta | Qué incluye | Precio aprox. |
|---|---|---|---|
| **Presencia** | `vitrina/` | Página propia con la identidad de la marca: carta, ubicación, horarios, WhatsApp e Instagram/Facebook | desde $250.000 |
| **Reservas** | `experiencia/` | Todo lo anterior + reservas de mesas, catas, tours y eventos por WhatsApp, pedidos de carta y reseñas reales | desde $450.000 |

El cliente decide cuál de las dos quiere. `experiencia/` incluye una página interna (`/servicios`) que presenta ambas propuestas.

## Identidad de marca
- **Paleta:** espresso/café oscuro (`#14100c`), ámbar dorado (`#c9a25f`) y crema (`#f2eddf`).
- **Fuentes:** Cormorant Garamond (títulos) + Inter (texto).
- **Datos reales:** 4.8★ en Google (29 reseñas), `$15.000–20.000 por persona`, Camino Angol–Collipulli km 2,5 · Parcela 7, Angol.
- **Social:** [Instagram](https://www.instagram.com/brunnemanncerveceria/) · [Facebook](https://www.facebook.com/cerveceriabrunnemann)

## Stack
- React + Vite
- Reservas y pedidos 100% por WhatsApp (sin backend ni pasarela de pago)
- Google Maps embebido + enlace directo para reseñas

## Despliegue
Cada app tiene su propio proyecto en Vercel conectado a este repo:
- `vitrina/` → proyecto `brunnemann-vitrina`
- `experiencia/` → proyecto `brunnemann-experiencia`

Un push a `main` despliega automáticamente ambos sitios.

## Desarrollo local
```
cd vitrina && npm i && npm run dev
cd experiencia && npm i && npm run dev
```
