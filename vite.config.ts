import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'

// import vue from '@vitejs/plugin-vue'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
const baseUrl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@lazy-ui\/utils/,
        repalcement: path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
