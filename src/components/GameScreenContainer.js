import React from 'react'
import {newGame,loadGame,loadGames} from '../actions/game'
import {checkWord,guessPuzzle,nextWord,bankRupt} from '../actions/word'
import {connect} from 'react-redux'
import Game from './Game';
import GameScreen from './GameScreen';
import { saveWheelValue } from '../actions/wheel'

const options = [
  'Bankrupt',
  '100',
  '300',
  '10000000',
  'Bankrupt',
  '1',
  '5',
  '10',
  '200',
  'Bankrupt',
  '50',
  '1',
  '5',
  '10',
  '50',
  '300',
];

class GameScreenContainer extends React.Component {
  state = {
    answer:''
  }
    
  url = 'http://localhost:5000'
  gameId = this.props.match.params.gameId
  source = new EventSource(`${this.url}/stream/${this.gameId}`)

  onComplete = (value) => {
    this.props.saveWheelValue(value) 
  };

  componentDidMount() {
    const game = this.props.match.params.gameId
    const playerId = this.props.match.params.playerId
    //this.source.onmessage=event=>this.props.loadGames(event,game,playerId)
    this.props.newGame()
   // this.props.loadGame(game,playerId)
  }

  componentDidUpdate() {
    if(this.props.wheelValue==="Bankrupt"){
      this.props.bankRupt(this.props.players,this.props.playerId)
    }
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
      this.props.players,
      this.props.turn
      )
  }

  guessWord = (event) => {
    event.preventDefault()
    this.props.guessPuzzle(
                this.state.answer,
                this.props.word,
                this.props.gameId,
                this.props.players,
                this.props.playerId,
                this.props.turn
                )
    if(this.props.turn >= 0 ){
      setTimeout(() => this.props.nextWord(
        this.props.gameId,
        this.props.category),
      2000)
    }          
    this.setState({
      answer: '',
  })
  }

  render() {
    if(!this.props){
        return "loading game"
    }
    const puzzle = <Game 
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
    const wheel=<GameScreen
    options={options}
    baseSize={200}
    onComplete={this.onComplete}
  />
  if(this.props.wheelValue===''||this.props.wheelValue==='Bankrupt'){
    return <div className="gameBoard">
      {puzzle}{wheel}
            </div>
  }else{
    return <div className="gameBoard">
      {puzzle}
            </div>
  }
                  
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
                            nextWord,loadGame,saveWheelValue,loadGames,bankRupt}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenContainer)
