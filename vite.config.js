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
        manualChunks: isSsrBuild ? undefined : {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
          'spline': ['@splinetool/react-spline', '@splinetool/runtime'],
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
