import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Player from './Player'
import './Home.css'
import { setGames } from '../actions/games'

class Home extends React.Component {
  source = new EventSource('https://wheel-of-fortune-server.herokuapp.com/stream')

  componentDidMount() {
    this.source.onmessage = this.props.setGames
  }

  render() {
    return (
      this.props.games.length ?
        <div className="home">
          <ul>
            {Object
              .values(this.props.games[0])
              .map(game => <li key={game.id}>{game.id}</li>)}
          </ul>
          <Login />
          <Player />
          <h1>Lobby</h1>
          <p>Click the links below to play the game and learn how the game works</p>
          <Link to="/tutorial">Learn to play</Link>
          <Link to="/game">Try your luck</Link>
        </div> : <p>...loading</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = { setGames }
export default connect(mapStateToProps, mapDispatchToProps)(Home)
