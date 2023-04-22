import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: /^moment$/, replacement: path.resolve(__dirname, './src/moment.ts') }]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
