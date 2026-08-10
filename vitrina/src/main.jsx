import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initReveal } from './reveal.js'
import './index.css'

createRoot(document.getElementById('root')).render(<App />)

window.requestAnimationFrame(() => window.requestAnimationFrame(initReveal))
