import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { countries } from './src/data/countries.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    script: 'async',
    includedRoutes(paths) {
      const staticPaths = paths.filter(
        (path) => !path.includes(':slug') && !path.includes(':pathMatch'),
      )
      const countryPaths = countries.map((country) => `/countries/${country.slug}`)
      return [...staticPaths, ...countryPaths, '/404']
    },
  },
})
