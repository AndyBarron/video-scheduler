import { themes as themeMap } from '../../styles';
import { SELECT_THEME_ACTION } from './actions';

const DEFAULT_THEME = 'dark';

const INITIAL_STATE = {
  currentConfig: themeMap[DEFAULT_THEME],
  presetConfigs: themeMap,
};

const themeReducer = (state = INITIAL_STATE, { payload, type }) => {
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

export default themeReducer;
