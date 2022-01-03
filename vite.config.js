import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from "vite";
import path from "path"

export default defineConfig({
  root: "src/",
  publicDir: "public/",
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/app"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/mixins";` 
      }
    }
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
});
