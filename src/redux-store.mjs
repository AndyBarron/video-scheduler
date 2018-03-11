import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducers } from './services';

const REDUX_DEVTOOLS_COMPOSE_KEY = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

const reducer = combineReducers(reducers);
const middleware = [];
const composeEnhancers = window[REDUX_DEVTOOLS_COMPOSE_KEY] || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const create = () => createStore(
  reducer,
  undefined,
  enhancer,
);
