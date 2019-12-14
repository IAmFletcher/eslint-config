module.exports = {
  extends: [
    './typescript',
    './rules/typescript/types',
  ],
  parserOptions: { project: ['./tsconfig.json'] },
};
