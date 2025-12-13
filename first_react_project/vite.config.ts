import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // слушать на всех интерфейсах
    port: 5173,       // порт (по умолчанию 5173)
    strictPort: true,  // не выбирать другой порт, если занят
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
