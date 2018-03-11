import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../css/global.css';
import { App } from './components';
import { create as createStore } from './redux-store';

const tree = (
  <Provider store={createStore()}>
    <App />
  </Provider>
);

const container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);
ReactDOM.render(tree, container);
