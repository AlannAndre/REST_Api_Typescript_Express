import {defineConfig} from "vite";

export default defineConfig({
  server: {
    proxy: {
       '/api': {
        target: 'http://localhost:3000/api/books',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      } 
    },
  },
});