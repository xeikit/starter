import { reactRouter } from '@react-router/dev/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), reactRouter()],
  test: {
    environment: 'happy-dom',
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json'],
      reportsDirectory: './coverage',
    },
  },
  resolve: {
    alias: {
      '@': `${__dirname}/app`,
    },
  },
});
