import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
  globalIgnores(['.next/**', 'node_modules/**', 'public/**']),
  nextCoreWebVitals,
  nextTypescript,
  {
    rules: {
      // The hydration-safe "read localStorage after mount" pattern requires a
      // synchronous setState in the effect — advisory, not an error.
      'react-hooks/set-state-in-effect': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  }
]);
