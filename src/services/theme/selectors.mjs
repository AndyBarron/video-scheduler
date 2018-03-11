import { readableColor } from 'polished';
import { createSelector } from 'reselect';

const getThemeConfig = state => state.theme.currentConfig;
export const getTheme = createSelector(
  [getThemeConfig],
  config => ({
    ...config,
    colorTextDefault: readableColor(config.colorBackgroundDefault),
    colorTextNav: readableColor(config.colorBackgroundNav),
  }),
);

export const getPresetConfigs = state => state.theme.presetConfigs;
