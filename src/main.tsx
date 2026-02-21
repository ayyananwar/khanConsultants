import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const legacyHashPath = window.location.hash.startsWith('#/')
  ? window.location.hash.slice(1)
  : ''

if (legacyHashPath) {
  window.history.replaceState(null, '', legacyHashPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
