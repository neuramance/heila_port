import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylexPlugin from '@stylexjs/eslint-plugin';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      '@stylexjs': stylexPlugin,
    },
    rules: {
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/valid-shorthands': 'error',
      '@stylexjs/enforce-extension': 'error',
      '@stylexjs/no-unused': 'error',
      '@stylexjs/no-legacy-contextual-styles': 'error',
      '@stylexjs/no-nonstandard-styles': 'error',
      '@stylexjs/no-conflicting-props': 'error',
    },
  },
  {
    files: ['*.config.js', 'babel.config.js', 'postcss.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
