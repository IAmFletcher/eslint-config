module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': 'error',
    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': 'error',
    // enforce line breaks after each array element
    'array-element-newline': 'error',
    // disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': 'off',
    // enforce consistent brace style for blocks
    'brace-style': 'error',
    // enforce camelcase naming convention
    camelcase: [
      'error',
      { properties: 'never' },
    ],
    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',
    // require or disallow trailing commas
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    // enforce consistent spacing before and after commas
    'comma-spacing': 'error',
    // enforce consistent comma style
    'comma-style': 'error',
    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true },
    ],
    // enforce consistent naming when capturing the current execution context
    'consistent-this': 'off', // Revisit
    // require or disallow newline at the end of files
    'eol-last': 'error',
    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'error',
    // require function names to match the name of the variable or property to which they are
    // assigned
    'func-name-matching': 'off',
    // require or disallow named `function` expressions
    'func-names': [
      'error',
      'as-needed',
    ],
    // enforce the consistent use of either `function` declarations or expressions
    'func-style': [
      'error',
      'declaration',
    ],
    // enforce line breaks between arguments of a function call
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'error',
    // disallow specified identifiers
    'id-blacklist': 'off',
    // enforce minimum and maximum identifier lengths
    'id-length': 'off',
    // require identifiers to match a specified regular expression
    'id-match': 'off',
    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'error',
    // enforce consistent indentation
    indent: [
      'error',
      2,
    ],
    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': 'off', // Revisit
    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': 'error',
    // enforce consistent spacing before and after keywords
    'keyword-spacing': 'error',
    // enforce position of line comments
    'line-comment-position': 'off',
    // enforce consistent linebreak style
    'linebreak-style': 'error',
    // require empty lines around comments
    'lines-around-comment': 'off',
    // require or disallow an empty line between class members
    'lines-between-class-members': 'error',
    // enforce a maximum depth that blocks can be nested
    'max-depth': [
      'error',
      4,
    ],
    // enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // enforce a maximum number of lines per file
    'max-lines': [
      'off',
      300,
    ],
    // enforce a maximum number of line of code in a function
    'max-lines-per-function': [
      'off',
      50,
    ],
    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': [
      'error',
      3,
    ],
    // enforce a maximum number of parameters in function definitions
    'max-params': [
      'error',
      3,
    ],
    // enforce a maximum number of statements allowed in function blocks
    'max-statements': [
      'off',
      10,
    ],
    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': [
      'off',
      1,
    ],
    // enforce a particular style for multiline comments
    'multiline-comment-style': 'off',
    // enforce newlines between operands of ternary expressions
    'multiline-ternary': [
      'error',
      'never',
    ],
    // require constructor names to begin with a capital letter
    'new-cap': 'error',
    // enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // require a newline after each call in a method chain
    'newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 2 },
    ],
    // disallow `Array` constructors
    'no-array-constructor': 'error',
    // disallow bitwise operators
    'no-bitwise': 'error',
    // disallow `continue` statements
    'no-continue': 'error',
    // disallow inline comments after code
    'no-inline-comments': 'off',
    // disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': 'error',
    // disallow mixed binary operators
    'no-mixed-operators': 'error',
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',
    // disallow multiple empty lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
      },
    ],
    // disallow negated conditions
    'no-negated-condition': 'error',
    // disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // disallow `Object` constructors
    'no-new-object': 'error',
    // disallow the unary operators `++` and `--`
    'no-plusplus': [
      'error',
      { allowForLoopAfterthoughts: true },
    ],
    // disallow specified syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'MethodDefinition[kind=\'set\']',
        message: 'Property setters are not allowed',
      },
      {
        selector: 'MethodDefinition[kind=\'get\']',
        message: 'Property getters are not allowed',
      },
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain. Use Object.{keys|values|entries} and iterate over the resulting array instead.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime. Use forEach()/map()/filter()/reduce()/... instead.',
      },
    ],
    // disallow all tabs
    'no-tabs': 'error',
    // disallow ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'error',
      { allowAfterThis: true },
    ],
    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': [
      'error',
      { defaultAssignment: false },
    ],
    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'off', // Using 'all' option for curly
    // enforce consistent line breaks inside braces
    'object-curly-newline': [
      'error',
      { multiline: true },
    ],
    // enforce consistent spacing inside braces
    'object-curly-spacing': [
      'error',
      'always',
    ],
    // enforce placing object properties on separate lines
    'object-property-newline': 'error',
    // enforce variables to be declared either together or separately in functions
    'one-var': [
      'error',
      'never',
    ],
    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': [
      'error',
      'always',
    ],
    // require or disallow assignment operator shorthand where possible
    'operator-assignment': 'error',
    // enforce consistent linebreak style for operators
    'operator-linebreak': [
      'error',
      'after',
    ],
    // require or disallow padding within blocks
    'padded-blocks': [
      'error',
      'never',
    ],
    // require or disallow padding lines between statements
    'padding-line-between-statements': 'off',
    // disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': 'error', // ES 2016+
    // disallow using Object.assign with an object literal as the first argument and prefer the use
    // of object spread instead.
    'prefer-object-spread': 'off', // ES 2018+
    // require quotes around object literal property names
    'quote-props': [
      'error',
      'as-needed',
    ],
    // enforce the consistent use of either backticks, double, or single quotes
    quotes: [
      'error',
      'single',
    ],
    // require or disallow semicolons instead of ASI
    semi: 'error',
    // enforce consistent spacing before and after semicolons
    'semi-spacing': 'error',
    // enforce location of semicolons
    'semi-style': 'error',
    // require object keys to be sorted
    'sort-keys': 'off',
    // require variables within the same declaration block to be sorted
    'sort-vars': 'off',
    // enforce consistent spacing before blocks
    'space-before-blocks': 'error',
    // enforce consistent spacing before `function` definition opening parenthesis
    'space-before-function-paren': 'error',
    // enforce consistent spacing inside parentheses
    'space-in-parens': 'error',
    // require spacing around infix operators
    'space-infix-ops': 'error',
    // enforce consistent spacing before or after unary operators
    'space-unary-ops': 'error',
    // enforce consistent spacing after the `//` or `/*` in a comment
    'spaced-comment': 'error',
    // enforce spacing around colons of switch statements
    'switch-colon-spacing': 'error',
    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': [
      'error',
      'always',
    ],
    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'error',
    // require parenthesis around regex literals
    'wrap-regex': 'off',
  },
};
