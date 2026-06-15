import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: isSsrBuild ? undefined : (id) => {
          if (id.includes('node_modules')) {
            if (/[\\/]react(-dom)?[\\/]|react[\\/]jsx-runtime/.test(id)) return 'react-vendor';
            if (id.includes('react-helmet-async')) return 'helmet';
            if (id.includes('react-router')) return 'router';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('@splinetool')) return 'spline';
            return undefined;
          }
          /* Datos de producto (ficha ES + traducciones) en su propio chunk
             cacheable: evita re-descarga al navegar entre fichas y no contamina
             los bundles de las páginas de categoría. */
          if (id.includes('/src/data/productosI18n') || id.includes('/src/data/productosData')) {
            return 'productos-data';
          }
          return undefined;
        },
      },
    },
  },
  ssr: {
    format: 'esm',
    // react-helmet-async is CJS — bundle it to avoid ESM named-import failure at runtime
    noExternal: ['react-helmet-async'],
    external: [
      'react',
      'react/jsx-runtime',
      'react-dom',
      'react-dom/server',
      'react-router-dom',
    ],
  },
}))
