import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
   ...nextVitals,
   ...nextTs,
   {
      rules: {
         'no-console': ['warn'],
         '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' },
         ],
      },
   },
   eslintPluginPrettierRecommended,
   globalIgnores([
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '.claude/**',
      '.cursor/**',
      '.agents/**',
   ]),
]);

export default eslintConfig;
