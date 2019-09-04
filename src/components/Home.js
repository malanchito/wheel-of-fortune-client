import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Player from './Player'
import './Home.css'
import { setGames } from '../actions/games'
import { updatePlayer } from '../actions/player'

class Home extends React.Component {

  source = new EventSource('http://localhost:5000/stream')

  openGame = () => {
    
  }

  componentDidMount() {
    this.source.onmessage = this.props.setGames
  }
  onSubmit = (event) => {
    const { value } = event.target
    const { id, name } = this.props.player
    event.preventDefault()
    this.props.updatePlayer(id, value)
    this.props.history.push(`/game/${value}/${name}`)
  }

  render() {
    // const gameId = this.props.game.id
    return (
      this.props.games.length ?
        <div className="home">
          <Player />
          <p>{!this.props.player.name ? 'Please enter a player name' : `Welcome ${this.props.player.name}, choose your category`}</p>
          <ul>
            {Object
              .values(this.props.games[0])
              .map(game =>
                <div>
                  <button
                    type="submit"
                    onClick={this.onSubmit}
                    value={game.id}
                  >
                    Select a game {game.id}
                  </button>
                </div>
                //  <Link to={`/game/${game.id}/${this.props.player.name}`}> <li key={game.id}>{game.id} category name</li>  
                //   </Link> 
              )}
          </ul>
          <br />
          <Login />

          <h1>Lobby</h1>
          <p>Click the links below to play the game and learn how the game works</p>
          <Link to="/tutorial">Learn to play</Link>
          <Link to="/game">Try your luck</Link>
          <Link to="/scoreboard"> Scoreboard</Link>
        </div> : <p>...loading</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    player: state.player
  }
}

const mapDispatchToProps = { setGames, updatePlayer }
export default connect(mapStateToProps, mapDispatchToProps)(Home)
