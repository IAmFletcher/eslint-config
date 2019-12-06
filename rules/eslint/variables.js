module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    'init-declarations': 'off',
    // disallow deleting variables
    'no-delete-var': 'error',
    // disallow labels that share a name with a variable
    'no-label-var': 'error',
    // disallow specified global variables
    'no-restricted-globals': [
      'error',
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead.',
      },
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead.',
      },
    ],
    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        // hoist: 'all',
      },
    ],
    // disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',
    // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    'no-undef': [
      'error',
      { typeof: true },
    ],
    // disallow initializing variables to `undefined`
    'no-undef-init': 'error',
    // disallow the use of `undefined` as an identifier
    'no-undefined': 'off',
    // disallow unused variables
    'no-unused-vars': [
      'error',
      { ignoreRestSibilings: true },
    ],
    // disallow the use of variables before they are defined
    'no-use-before-define': 'error',
  },
};
