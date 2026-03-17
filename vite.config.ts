import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // или './' для деплоя в папку
  build: {
    outDir: 'dist', // папка сборки
    emptyOutDir: true,
  }
});
