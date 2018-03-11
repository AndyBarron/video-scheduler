
export const SELECT_THEME_ACTION = 'theme/SELECT_THEME';

export const selectTheme = themeId => ({
  payload: themeId,
  type: SELECT_THEME_ACTION,
});
