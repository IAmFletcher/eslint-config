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
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: { impliedStrict: true },
  },
  env: { es2017: true },
};
