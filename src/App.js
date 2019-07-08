import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>wheel of fortune</h1>
        </div>
      </Provider>
    );
  }
}

export default App;