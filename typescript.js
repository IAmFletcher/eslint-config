module.exports = {
  extends: [
    './es2020',
    './rules/typescript/eslint',
    './rules/typescript/index',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: ['@typescript-eslint'],
};
