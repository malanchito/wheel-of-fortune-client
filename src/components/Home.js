import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Lobby</h1>
        <p>Click the links below to play the game and learn how the game works</p>
        <Link to="/tutorial">Learn to play</Link>
      </div>
    );
  }
}

export default Home;