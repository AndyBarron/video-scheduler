
import { SELECT_THEME } from '../actionTypes';

export const selectTheme = themeId => ({
  payload: themeId,
  type: SELECT_THEME,
});
