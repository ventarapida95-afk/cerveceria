# Brunnemann Cervecería · 3 propuestas web

Monorepo con 3 sitios web distintos para mostrarle al cliente 3 propuestas de distinto valor y complejidad:

| Propuesta | Carpeta | Funciones | Precio aprox. |
|---|---|---|---|
| **Vitrina** | `vitrina/` | Diseño claro, informativo, menú, mapa y WhatsApp | desde $250.000 |
| **Negocio** | `negocio/` | Carrito, checkout con MercadoPago, reseñas Google | desde $450.000 |
| **Experiencia** | `experiencia/` | Todo lo anterior + reservas, membresía y galería | desde $700.000 |

## Stack
- React + Vite
- Supabase (productos, pedidos y reservas en el proyecto `simple-reparto`)
- MercadoPago Checkout Pro (`/api/create-payment` + webhook)

## Despliegue
Cada app tiene su propio proyecto en Vercel conectado a este repo:
- `vitrina/` → proyecto `brunnemann-vitrina`
- `negocio/` → proyecto `cerveceria`
- `experiencia/` → proyecto `brunnemann-experiencia`

Un push a `main` despliega automáticamente los 3 sitios.

## Desarrollo local
```
cd negocio && npm i && npm run dev
```

Variables de entorno requeridas (ver `.env.example` de cada app):
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (solo servidor)
- `MERCADOPAGO_ACCESS_TOKEN` (aún pendiente en el plan)
