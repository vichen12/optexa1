import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['prerender.js'],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // jsx-uses-vars: reconoce que <motion.div> usa la variable `motion`
      // (sin esto, no-unused-vars marca falsos positivos en JSX namespaced)
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    // Estos archivos exportan a propósito constantes/hooks junto a componentes
    // (reutilizados por el SSR/prerender y otras páginas). La regla react-refresh
    // es solo para HMR de desarrollo y no aplica a producción.
    files: [
      'src/App.jsx',
      'src/App.ssr.jsx',
      'src/lib/i18n-utils.jsx',
      'src/pages/IndustriasPage.jsx',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
