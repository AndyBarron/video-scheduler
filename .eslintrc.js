
module.exports = {
  extends: 'airbnb',
  plugins: [
    'babel',
  ],
  rules: {
    'babel/semi': ['error', 'always'],
    'function-paren-newline': ['error', 'consistent'],
    'import/prefer-default-export': 'off',
    semi: 'off',
    'sort-keys': 'error',
  },
};
