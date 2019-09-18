import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Wheel of Fortune game</h1>
          </header>
          <main>
            <Routes/>
          </main>
          <footer id="sticky">A wheel of fortune game made by Marlon, Mario and Jelle. Enjoy!</footer>
        </div>
      </Provider>
    );
  }
}

export default App;