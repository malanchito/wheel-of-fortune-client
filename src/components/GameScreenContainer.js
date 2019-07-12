import React from 'react'
import {newGame,loadGame,loadGames} from '../actions/game'
import {checkWord,guessPuzzle,nextWord} from '../actions/word'
import {connect} from 'react-redux'
import Game from './Game';
import GameScreen from './GameScreen';
import { saveWheelValue } from '../actions/wheel'



const options = [
  'Bankrupt',
  '50',
  '100',
  '200',
  '500',
  '1000',
  '2000',
  'Lose a Turn',
  '1000000'
];

class GameScreenContainer extends React.Component {
  state = {
    answer:'',
    wheel:''
  }
    
  // url = 'https://wheel-of-fortune-server.herokuapp.com'
  url = 'http://localhost:5000'
  source = new EventSource(`${this.url}/stream`)

  onComplete = (value) => {
    this.props.saveWheelValue(value) 
  };

  componentDidMount() {
    const game = this.props.match.params.gameId
    console.log("why are you not working",game)
    const playerId = this.props.match.params.playerId
    this.source.onmessage=event=>this.props.loadGames(event,game,playerId)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

 onSubmit = (event) => {
    event.preventDefault()
    this.props.checkWord(
      this.props.word,
      event.target.value,
      this.props.gameId,
      this.props.guessed,
      this.props.puzzle,
      this.props.wheelValue,
      this.props.score,
      this.props.playerId,
      this.props.players
      )
  }

  guessWord = (event) => {
    event.preventDefault()
    this.props.guessPuzzle(
                this.state.answer,
                this.props.word,
                this.props.gameId,
                this.props.players,
                this.props.playerId)
    if(this.props.turn===1){
      setTimeout(() => this.props.nextWord(
        this.props.gameId,
        this.props.category),
      5000)
    }          
    this.setState({
      answer: '',
  })
  }

  render() {
    if(!this.props){
        return "loading game"
    }
    
    return <div className="gameBoard"><Game 
              word={this.props.word}
              guessed={this.props.guessed}
              clue={this.props.clue}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              guessWord={this.guessWord}
              wheelValue={this.props.wheelValue}
              gameId={this.props.gameId}
              puzzle={this.props.puzzle} 
              values={this.state}
              currentPlayer={this.props.currentPlayer}
              playerId={this.props.playerId}
              score={this.props.score}
              players={this.props.players}
              turn={this.props.turn}
              />
            <GameScreen
              options={options}
              baseSize={200}
              onComplete={this.onComplete}
            /></div>
              
                
  }
}

const mapStateToProps = state => ({
  word: state.game.word,
  guessed: state.game.guessed,
  clue: state.game.clue,
  wheelValue: state.wheel.wheelValue,
  gameId: state.game.gameId,
  puzzle: state.game.puzzle,
  category: state.game.category,
  players: state.game.players,
  currentPlayer: state.game.currentPlayer,
  playerId: state.game.playerId,
  score: state.game.score,
  turn: state.game.turn
})

const mapDispatchToProps = {newGame,checkWord,guessPuzzle,
                            nextWord,loadGame,saveWheelValue,loadGames}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenContainer)
