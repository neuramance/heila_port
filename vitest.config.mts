import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import stylexPlugin from '@stylexjs/rollup-plugin';
import path from 'path';

export default defineConfig({
  plugins: [stylexPlugin(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'e2e/**'],
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './'),
    },
  },
});
