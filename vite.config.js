import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        historiapresentacion: 'public/historiapresentacion.html',
        escenario1: 'public/escenario1.html',
        escenario2: 'public/escenario2.html',
        escenario3: 'public/escenario3.html',
        escenario4: 'public/escenario4.html',
        escenario5: 'public/escenario5.html',
        final: 'public/final.html'
      }
    }
  }
})