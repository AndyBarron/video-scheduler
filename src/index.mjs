import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../css/global.css';
import App from './components/App';
import { createStore } from './services';

const tree = (
  <Provider store={createStore()}>
    <App />
  </Provider>
);

const container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);
ReactDOM.render(tree, container);
