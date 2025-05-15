// @ts-check
import tsEslintParser from '@typescript-eslint/parser';
import eslintReactiveValueSuffix from 'eslint-plugin-reactive-value-suffix';
import globals from 'globals';
import vueEslintParser from 'vue-eslint-parser';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslintParser,
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'reactive-value-suffix': eslintReactiveValueSuffix,
    },
    rules: {
      'no-console': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [{ pattern: '@/**', group: 'parent', position: 'before' }],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc' },
          'newlines-between': 'never',
        },
      ],
      'reactive-value-suffix/suffix': [
        'error',
        {
          /** @type {string[]} */
          functionNamesToIgnoreValueCheck: [],
        },
      ],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
]);
