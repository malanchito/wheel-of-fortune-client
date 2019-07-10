<<<<<<< HEAD
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
=======
import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
>>>>>>> master

class Home extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Login />
      <Link to='/game'>Try your luck</Link>
=======
      <div className="home">
        <h1>Lobby</h1>
        <p>Click the links below to play the game and learn how the game works</p>
        <Link to="/tutorial">Learn to play</Link>
        <Link to="/game">Play the game</Link>
>>>>>>> master
      </div>
    );
  }
}

export default Home;
