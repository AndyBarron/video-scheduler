import 'bootswatch/dist/darkly/bootstrap.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SAVE_KEY } from './utils';

let state;
const jsonState = localStorage.getItem(SAVE_KEY);
if (jsonState) {
  try {
    state = JSON.parse(jsonState);
  } catch (error) {
    console.error('Failed to load previously saved state:');
    console.error(error);
    state = undefined;
    localStorage.removeItem(SAVE_KEY);
  }
}

ReactDOM.render(React.createElement(App, { state }), document.getElementById('root'));
