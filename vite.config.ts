import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  // @ts-ignore
  base: process.env.GH_PAGES ? '/hackatonantikor/' : './',
  server: {
    fs: {
      allow: ['../sdk', './'],
    },
  },
})