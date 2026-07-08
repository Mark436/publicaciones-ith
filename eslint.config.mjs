import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import tsParser from '@typescript-eslint/parser'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: (await import('astro-eslint-parser')).default,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    ignores: ['dist', '.astro', 'node_modules'],
  },
)
