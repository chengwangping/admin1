module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  plugins: [ 'html', 'promise', 'react', 'jsx' ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  "rules": {
    "no-console": "off",
    'space-before-function-paren': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': 'off',
    'no-throw-literal': 'off',
    'linebreak-style': 'off',
    'no-useless-call': 'off',
    'standard/no-callback-literal': 'off'
  }
};