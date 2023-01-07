import { resolve } from 'path'
import { defineConfig } from "vite";
const pathSrc = resolve('.');
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./styles/main.scss";'
      }
    }
  },
  test: {
    // ...
  },
  build: {
    emptyOutDir: true,
    // rollupOptions: {
    //   input: {
    //     // app: resolve(__dirname, 'main.js')
    //   }
    // }
  }
})