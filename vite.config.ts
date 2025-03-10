import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import checker from 'vite-plugin-checker';
export default defineConfig({
  base: './', // Убедитесь, что base указан как './' для относительных путей
  build: {
    outDir: 'dist', // Папка для собранного проекта
  },
  plugins: [vue(), checker({ typescript: true }), ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/mixins" as *;
        `
      }
    }
  }
})
