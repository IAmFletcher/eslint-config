module.exports = {
  overrides: [
    {
      files: '*.test.js',
      extends: ['./rules/jest/index'],
      env: { jest: true },
      plugins: ['jest'],
    },
  ],
};
