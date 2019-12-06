module.exports = {
  rules: {
    // require `return` statements after callbacks
    'callback-return': 'error',
    // require `require()` calls to be placed at top-level module scope
    'global-require': 'error',
    // require error handling in callbacks
    'handle-callback-err': [
      'error',
      '^(err|.+Error)$',
    ],
    // disallow use of the `Buffer()` constructor
    'no-buffer-constructor': 'error',
    // disallow `require` calls to be mixed with regular variable declarations
    'no-mixed-requires': 'off',
    // disallow `new` operators with calls to `require`
    'no-new-require': 'error',
    // disallow string concatenation with `__dirname` and `__filename`
    'no-path-concat': 'error',
    // disallow the use of `process.env`
    'no-process-env': 'warn',
    // disallow the use of `process.exit()`
    'no-process-exit': 'error',
    // disallow specified modules when loaded by `require`
    'no-restricted-modules': 'off',
    // disallow synchronous methods
    'no-sync': 'error',
  },
};
