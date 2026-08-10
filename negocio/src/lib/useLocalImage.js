import { useEffect, useState } from 'react'

// Muestra la foto local si existe en public/images; si no, usa el stock.
export function useLocalImage(local, stock) {
  const [src, setSrc] = useState(stock)
  useEffect(() => {
    if (!local) return
    const img = new Image()
    img.onload = () => setSrc(local)
    img.onerror = () => setSrc(stock)
    img.src = local
  }, [local, stock])
  return src
}
