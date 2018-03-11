
const PROD_MODE = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-dev-expression',
    PROD_MODE && 'babel-plugin-transform-react-remove-prop-types',
    'react-hot-loader/babel',
  ].filter(plugin => plugin),
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      modules: false,
      targets: {
        browsers: ['last 1 year'],
      },
    }],
  ],
};
