import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { create as createStore } from './store';
import Body from './Body';
import Nav from './Nav';
import { SAVE_KEY } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(props.state);
  }
  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      const state = this.store.getState();
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Nav />
          <Body />
        </div>
      </Provider>
    );
  }
}

export default App;
