
module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 'off', // TODO: Enforce .mjs
    'react/jsx-sort-props': 'error',
    'react/prefer-stateless-function': 'off',
  },
};
