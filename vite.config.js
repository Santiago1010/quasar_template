import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  test: {
    include: ['src/testing/unit/**/*.{spec,test}.{js,ts,jsx,tsx}'],
    globals: true,
  },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      sassVariables: './public/styles/sass/quasar-variables.sass',
    }),
  ],
});
