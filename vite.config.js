import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core ayrı chunk — tarayıcı cache'ler, değişmez
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Küçük chunk'ları inline et, HTTP request sayısını azalt
    chunkSizeWarningLimit: 600,
  },
})