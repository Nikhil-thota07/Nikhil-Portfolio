import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**', 'C:/*.png', 'C:/*.jpeg', '**/*.png', '**/*.jpeg', '**/*.jpg']
    }
  },
  preview: {
    port: 5173,
    host: true,
    open: true
  }
})
