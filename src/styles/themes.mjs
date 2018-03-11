import invariant from 'invariant';

const createTheme = (config) => {
  const {
    colorActive,
    colorBackgroundDefault,
    colorBackgroundNav,
    fontDefault,
    name,
  } = config;
  invariant(
    colorActive && colorBackgroundDefault && colorBackgroundNav && fontDefault && name,
    `Missing required options in theme config: ${JSON.stringify(config, null, 2)}`,
  );
  return config;
};

export default {
  dark: createTheme({
    colorActive: '#375a7f',
    colorBackgroundDefault: '#222',
    colorBackgroundNav: '#375a7f',
    fontDefault: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    name: 'Dark',
  }),
  light: createTheme({
    colorActive: '#004499',
    colorBackgroundDefault: '#EEE',
    colorBackgroundNav: '#6699AA',
    fontDefault: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    name: 'Light',
  }),
};
