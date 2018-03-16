
module.exports = {
  extends: 'airbnb',
  plugins: [
    'babel',
  ],
  rules: {
    'babel/semi': ['error', 'always'],
    'func-names': ['error', 'as-needed'],
    'function-paren-newline': ['error', 'consistent'],
    'import/default': 'error',
    'import/extensions': ['error', 'never'],
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],
    semi: 'off',
    'sort-keys': 'error',
    'template-curly-spacing': ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js'], // .js for external deps only
      },
    },
  },
};
