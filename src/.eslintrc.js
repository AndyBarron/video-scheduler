
module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'jsx-a11y/label-has-for': 'off', // TODO: Require nesting
    'react/jsx-filename-extension': 'off', // TODO: Enforce .mjs
    'react/jsx-sort-props': 'error',
    'react/prefer-stateless-function': 'off',
  },
};
