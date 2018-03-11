import { applyMiddleware, combineReducers, compose, createStore as createReduxStore } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import { reducer as scheduleReducer } from './schedule';
import { reducer as themeReducer } from './theme';

export {
  addScheduleEntry,
  getScheduleEntries,
  removeScheduleEntry,
} from './schedule';
export {
  getCurrentThemeId,
  getPresetConfigs,
  getTheme,
  selectTheme,
} from './theme';

const REDUX_DEVTOOLS_COMPOSE_KEY = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

export const createStore = () => {
  const router = routerForBrowser({
    routes: {},
  });

  const reducer = combineReducers({
    router: router.reducer,
    schedule: scheduleReducer,
    theme: themeReducer,
  });
  const middleware = [
    router.middleware,
  ];
  const composeEnhancers = window[REDUX_DEVTOOLS_COMPOSE_KEY] || compose;
  const enhancer = composeEnhancers(
    router.enhancer,
    applyMiddleware(...middleware),
  );

  return createReduxStore(
    reducer,
    undefined,
    enhancer,
  );
};
