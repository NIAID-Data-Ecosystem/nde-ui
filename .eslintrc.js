module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': ['error', {
      allowSingleExtends: true
    }]
  }
};