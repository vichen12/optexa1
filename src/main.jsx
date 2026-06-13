import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { i18nReady } from './i18n/index.js'
import './index.css'
import App from './App.jsx'
import './App.css'

/* Esperar el locale inicial (en/zh se cargan como chunk) antes de montar,
   para no pisar el HTML prerenderizado con un flash en español. */
i18nReady.then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>,
  )
})
