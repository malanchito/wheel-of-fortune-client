import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import GameScreenContainer from './components/GameScreenContainer'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>wheel of fortune</h1>
          <Route exact path= '/' component={Home} />
          <Route path= '/game' component={GameScreenContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;