module.exports = {
  extends: ['./rules/eslint/node'],
  env: { node: true },
  rules: {
    'no-console': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'req', // for Express requests
          'res', // for Express responses
        ],
      },
    ],
  },
};
