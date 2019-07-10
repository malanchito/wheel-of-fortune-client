import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import GameScreenContainer from './components/GameScreenContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path="/" component={GameScreenContainer} />
      </Provider>
    );
  }
}

export default App;