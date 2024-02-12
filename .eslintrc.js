module.exports = {
  root: true,
  extends: [ 'eslint:recommended' ],
  env: {
    es2021: true,
    node: true,
    browser: true,
    commonjs: true,
    'shared-node-browser': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first'
      }
    ],

    // quotes
    quotes: [ 'error', 'single' ],
    'quote-props': [ 'error', 'as-needed' ],
    'jsx-quotes': [ 'error', 'prefer-single' ],
  }
}
