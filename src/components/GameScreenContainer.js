import React from 'react'
import {newGame,loadGame} from '../actions/game'
import {checkWord,guessPuzzle,nextWord} from '../actions/word'
import {connect} from 'react-redux'
import Game from './Game';

class GameScreenContainer extends React.Component {
  state = {
    answer:''
  }
    
  componentDidMount() {
    const player = "david"
    this.props.loadGame(6,player)
    //this.props.newGame(1)
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
      this.props.playerId
      )
  }

  guessWord = (event) => {
    event.preventDefault()
    this.props.guessPuzzle(
                this.state.answer,
                this.props.word,
                this.props.gameId)
              
    setTimeout(() => this.props.nextWord(
                this.props.gameId,
                this.props.category),
              5000)
    this.setState({
      answer: '',
  })
  }

  render() {
    if(!this.props){
        return "loading game"
    }
    console.log("turnito",this.props.turn)
    return <Game 
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
  }
}

const mapStateToProps = state => ({
  word: state.game.word,
  guessed: state.game.guessed,
  clue: state.game.clue,
  wheelValue: state.game.wheelValue,
  gameId: state.game.gameId,
  puzzle: state.game.puzzle,
  category: state.game.category,
  players: state.game.players,
  currentPlayer: state.game.currentPlayer,
  playerId: state.game.playerId,
  score: state.game.score,
  turn: state.game.turn
})

const mapDispatchToProps = {newGame,checkWord,guessPuzzle,nextWord,loadGame}

export default connect(mapStateToProps,mapDispatchToProps)(GameScreenContainer)