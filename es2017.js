module.exports = {
  extends: ['./es6'],
  parserOptions: { ecmaVersion: 2017 },
  env: { es2017: true },
  rules: {
    'no-async-promise-executor': 'error',
    'prefer-exponentiation-operator': 'error',
  },
};
