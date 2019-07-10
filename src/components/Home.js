import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import './Home.css'
import { getGames } from '../actions/games'

class Home extends React.Component {

  componentDidMount() {
    this.props.getGames()
  }

  render() {
    const games = this.props.games
    return (
      games ? <ul>{games.map(game => { return <li>{game.id} </li> })}</ul>
        : <div className="home">
          <Login />
          <h1>Lobby</h1>
          <p>Click the links below to play the game and learn how the game works</p>
          <Link to="/tutorial">Learn to play</Link>
          <Link to="/game">Try your luck</Link>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}


export default connect(mapStateToProps, { getGames })(Home);
