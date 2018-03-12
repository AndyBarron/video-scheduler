import invariant from 'invariant';

const createTheme = (config) => {
  const {
    colorActive,
    colorDanger,
    colorBackgroundDefault,
    colorBackgroundNav,
    fontDefault,
    name,
  } = config;
  invariant(
    colorActive && colorDanger && colorBackgroundDefault && colorBackgroundNav && fontDefault &&
      name,
    `Missing required options in theme config: ${ JSON.stringify(config, null, 2) }`,
  );
  return config;
};

export default {
  dark: createTheme({
    colorActive: '#004499',
    colorBackgroundDefault: '#222',
    colorBackgroundNav: '#375a7f',
    colorDanger: '#772111',
    fontDefault: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    name: 'Dark',
  }),
  light: createTheme({
    colorActive: '#004499',
    colorBackgroundDefault: '#EEE',
    colorBackgroundNav: '#6699AA',
    colorDanger: '#440000',
    fontDefault: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    name: 'Light',
  }),
};
