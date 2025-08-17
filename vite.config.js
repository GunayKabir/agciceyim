import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // kök qovluq
  build: {
    outDir: 'dist', // çıxış qovluğu
  },
  plugins: [react()],
})
