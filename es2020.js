module.exports = {
  extends: ['./index'],
  parserOptions: { ecmaVersion: 2020 },
  env: { es2020: true },
  rules: {
    'prefer-named-capture-group': 'error',
    'prefer-object-spread': 'error',
  },
};
