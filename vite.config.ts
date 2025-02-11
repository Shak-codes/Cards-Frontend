import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [svgr() as PluginOption, react()],
  resolve: {
    alias: {
      '@/': '/src/', // Optional: Use `@/` instead of `src/` for cleaner imports
    },
  },
  server: {
    port: 3000,
  },
});
