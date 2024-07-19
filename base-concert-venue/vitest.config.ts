import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// const path = require('path');

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.js',
  },
  resolve: {
    alias: {
      // '^@/(.*)$': '<rootDir>/$1',
      // '@': path.resolve(__dirname, './src'),
      // '@/*': './*',
      // '@/pages*': '<rootDir>/pages',
      '@': path.resolve(__dirname, './'),
    },
  },
});
