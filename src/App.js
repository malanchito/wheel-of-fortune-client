import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import Home from './components/Home';
import Tutorial from './components/Tutorial';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Wheel of Fortune game</h1>
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/tutorial" component={Tutorial} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;