import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  server: {
    host: '0.0.0.0',
    port: 8686,
    open: true,
    // 端口占用直接退出
    strictPort: true,
    // 本地服务 CORS 是否开启
    // cors: true,
    // proxy: {
    //   '': {
    //     target: 'http://localhost:3000',
    //     // 允许跨域
    //     changeOrigin: true,
    //     // rewrite: path => path.replace('/mock', '/'),
    //   },
    // },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static/assets',
    // sourcemap: true,
    // 规定触发警告的 chunk 大小，消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
