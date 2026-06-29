import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project page needs '/myportfolio/'
// Vercel serves from root '/'
// Set VITE_BASE_PATH in your environment to override.
// GitHub Actions workflow sets this automatically via secrets.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
