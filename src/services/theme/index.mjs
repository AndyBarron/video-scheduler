import { readableColor } from 'polished';
import { createSelector } from 'reselect';
import { themes as themeMap } from '../../styles';

const DEFAULT_THEME = 'dark';

const SELECT_THEME_ACTION = 'theme/SELECT_THEME';

const INITIAL_STATE = {
  currentConfig: themeMap[DEFAULT_THEME],
  presetConfigs: themeMap,
};

const getThemeConfig = state => state.theme.currentConfig;
export const getTheme = createSelector(
  [getThemeConfig],
  config => ({
    ...config,
    colorTextDefault: readableColor(config.colorBackgroundDefault),
    colorTextNav: readableColor(config.colorBackgroundNav),
  }),
);

export const reducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SELECT_THEME_ACTION: {
      const themeId = payload;
      const currentConfig = state.presetConfigs[themeId];
      if (currentConfig) {
        return {
          ...state,
          currentConfig,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
