import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
const baseUrl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^lazy-ui/,
        replacement: path.resolve(baseUrl, 'packages/lazy-ui/src'),
      },
      {
        find: /^@lazy-ui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
