import has from 'lodash/has';
import { themes as themeMap } from '../../styles';
import { SELECT_THEME_ACTION } from './actions';

const DEFAULT_THEME = 'dark';

const INITIAL_STATE = {
  currentConfig: themeMap[DEFAULT_THEME],
  currentConfigId: DEFAULT_THEME,
  presetConfigs: themeMap,
};

const themeReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SELECT_THEME_ACTION: {
      const currentConfigId = payload;
      if (has(state.presetConfigs, currentConfigId)) {
        const currentConfig = state.presetConfigs[currentConfigId];
        return {
          ...state,
          currentConfig,
          currentConfigId,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default themeReducer;
