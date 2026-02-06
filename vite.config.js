import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Esto asegura que Vite genere las rutas correctamente para Netlify
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})