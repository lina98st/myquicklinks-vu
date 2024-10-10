import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/myquicklinks-vu/',  // Name deines Repos
  plugins: [vue()],
// https://vitejs.dev/config/
export default defineConfig({
  base: '/myquicklinks-vu/',  // Dies sollte der Name deines Repos sein
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
