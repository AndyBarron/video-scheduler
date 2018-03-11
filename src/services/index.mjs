import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { routerForBrowser } from 'redux-little-router';
import { reducer as scheduleReducer } from './schedule';
import { reducer as themeReducer } from './theme';
import { reducer as videoReducer, saga as videoSaga } from './video';

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
export {
  enterVideoUrl,
  getVideoUrl,
  getVideoUrlInput,
  setVideoDuration,
  setVideoUrl,
} from './video';

const REDUX_DEVTOOLS_COMPOSE_KEY = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

export const createStore = () => {
  const router = routerForBrowser({
    routes: {},
  });

  const rootReducer = combineReducers({
    router: router.reducer,
    schedule: scheduleReducer,
    theme: themeReducer,
    video: videoReducer,
  });
  const rootSaga = function* () {
    yield all([
      call(videoSaga),
    ]);
  };
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    sagaMiddleware,
    router.middleware,
  ];
  const enhancers = [
    router.enhancer,
    applyMiddleware(...middleware),
  ];
  const composeEnhancers = window[REDUX_DEVTOOLS_COMPOSE_KEY] || compose;
  const enhancer = composeEnhancers(...enhancers);

  const store = createReduxStore(
    rootReducer,
    undefined,
    enhancer,
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
