import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Em produção (GitHub Pages) o site vive em /site-claude/.
  // Em dev continua na raiz para não atrapalhar o npm run dev.
  base: command === 'build' ? '/site-claude/' : '/',
  server: {
    port: 5173,
    open: true,
  },
}))
