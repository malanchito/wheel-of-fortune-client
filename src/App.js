import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Home from './components/Home';
import Tutorial from './components/Tutorial';
import { Route } from 'react-router-dom'
import GameScreenContainer from './components/GameScreenContainer'
import Register from './components/Register'
import Player from './components/Player'
import ScoreboardContainer from './components/ScoreboardContainer'
import Login from './components/Login';
import GameScreen from './components/GameScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Wheel of Fortune game</h1>
          </header>
          <main>
            <Route exact path="/" component={GameScreen} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path='/register' component={Register} />
            <Route path='/game/' component={GameScreenContainer} />
            <Route path='/player' component={Player} />
            <Route path='/scoreboard' component={ScoreboardContainer} />
            <Route path='/login' component={Login} />
          </main>
          <footer id="sticky">A wheel of fortune game made by Marlon, Mario and Jelle. Enjoy!</footer>
        </div>
      </Provider>
    );
  }
}

export default App;