module.exports = {
  extends: [
    './rules/eslint/errors',
    './rules/eslint/best-practices',
    './rules/eslint/strict',
    './rules/eslint/variables',
    './rules/eslint/style',
    './rules/eslint/es6',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { impliedStrict: true },
  },
  env: { es6: true },
};
