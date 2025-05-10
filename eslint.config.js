export default [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      env: {
        node: true,
        es2021: true,
      },
      rules: {
        'semi': ['error', 'never'],
        'no-console': 'off',
        'prefer-const': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
      },
      plugins: {
        import: require('eslint-plugin-import'),
      },
    }
  ];