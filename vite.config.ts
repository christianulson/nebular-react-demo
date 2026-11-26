import { defineConfig } from 'vitest/config';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react', '@emotion/cache', '@emotion/utils'],
    alias: [
      {
        find: /^react$/,
        replacement: path.resolve(import.meta.dirname, 'node_modules/react')
      },
      {
        find: /^react\/jsx-runtime$/,
        replacement: path.resolve(import.meta.dirname, 'node_modules/react/jsx-runtime.js')
      },
      {
        find: /^react\/jsx-dev-runtime$/,
        replacement: path.resolve(import.meta.dirname, 'node_modules/react/jsx-dev-runtime.js')
      },
      {
        find: /^react-dom$/,
        replacement: path.resolve(import.meta.dirname, 'node_modules/react-dom')
      },
      {
        find: /^react-dom\/client$/,
        replacement: path.resolve(import.meta.dirname, 'node_modules/react-dom/client.js')
      }
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
    // Large vendor libraries (ECharts, CKEditor, maps) are lazy-loaded per route.
    // Split the eager vendors and allow those isolated library chunks above 500 kB.
    chunkSizeWarningLimit: 1200,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/,
              priority: 30
            },
            {
              name: 'emotion-vendor',
              test: /node_modules[\\/]@emotion[\\/]/,
              priority: 20
            },
            {
              name: 'echarts-vendor',
              test: /node_modules[\\/](echarts|echarts-for-react|zrender)[\\/]/,
              priority: 22
            },
            {
              name: 'chartjs-vendor',
              test: /node_modules[\\/](chart\.js|react-chartjs-2)[\\/]/,
              priority: 21
            },
            {
              name: 'editor-vendor',
              test: /node_modules[\\/](ckeditor5|@ckeditor|tinymce|@tinymce)[\\/]/,
              priority: 20
            },
            {
              name: 'maps-vendor',
              test: /node_modules[\\/](leaflet|react-leaflet|@react-google-maps)[\\/]/,
              priority: 20
            }
          ]
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 15000,
    exclude: ['**/node_modules/**', '**/dist/**', 'e2e/**'],
    setupFiles: ['./src/test/setup.ts'],
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json-summary'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx', 'src/test/**', 'src/**/*.d.ts'],
      thresholds: {
        statements: 13,
        branches: 10,
        functions: 8,
        lines: 13
      }
    }
  }
});
