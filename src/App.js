import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Home from './components/Home';
import Tutorial from './components/Tutorial';
import { Route } from 'react-router-dom'
import GameScreenContainer from './components/GameScreenContainer'
import Register from './components/Register'
import Player from './components/Player'

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
            <Route path="/tutorial" component={Tutorial} />
            <Route path='/register' component={Register} />
            <Route path='/game' component={GameScreenContainer} />
            <Route path='/player' component={Player} />
          </main>

        </div>
      </Provider>
    );
  }
}

export default App;