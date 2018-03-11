
module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'import/extensions': ['error', 'never'],
    'react/jsx-filename-extension': 'off', // TODO: Enforce .mjs
    'react/jsx-sort-props': 'error',
    'react/prefer-stateless-function': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs'],
      },
    },
  },
};
