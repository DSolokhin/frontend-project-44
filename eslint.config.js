import pluginJs from '@eslint/js'
import pluginImport from 'eslint-plugin-import'
import pluginStylistic from '@stylistic/eslint-plugin'

export default [
  pluginJs.configs.recommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
    },
  },

  {
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-dangle': ['error', 'never'],
    },
  },

  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      node: true,
      es2021: true,
    },
    files: ['**/*.js'],
  },
]
