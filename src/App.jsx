import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { create as createStore } from './store';
import Body from './Body';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: createStore(),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <div>
          <Nav />
          <Body />
        </div>
      </Provider>
    );
  }
}

export default App;
