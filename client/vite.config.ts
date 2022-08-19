import {defineConfig} from "vite";

export default defineConfig({
  server: {
    proxy: {
      /* "/api": "http://localhost:3000/api/menu/books", */
      '/api': {
        target: 'http://localhost:3000/api/menu/books/2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
});