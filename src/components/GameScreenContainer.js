import React from 'react'
import { loadGame } from '../actions/game'
import { checkWord } from '../actions/word'
import { connect } from 'react-redux'
import Game from './Game';
import GameScreen from './GameScreen';
import { saveWheelValue } from '../actions/wheel'



const options = [
  'Bankrupt',
  '50$',
  '100$',
  '200$',
  '500$',
  '1000$',
  '2000$',
  'Skip Turn',
  '1000000$'
];

class GameScreenContainer extends React.Component {

   onComplete = (value) => {
    console.log(value,"letter v?") 
    this.props.saveWheelValue(value) 
  };

  componentDidMount() {
    this.props.loadGame(1)
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value, "letter v?")
    this.props.checkWord(
      this.props.word,
      event.target.value,
      this.props.gameId,
      this.props.guessed,
      this.props.puzzle
    )
  }

  render() {
    if (!this.props) {
      return "loading game"
    }
    if(this.props.wheelValue){
      console.log("wheel",this.props.wheelValue)
    }
    return <div>
      <Game
        word={this.props.word}
        guessed={this.props.guessed}
        clue={this.props.clue}
        onSubmit={this.onSubmit}
        wheelValue={this.props.wheelValue}
        gameId={this.props.gameId}
        puzzle={this.props.puzzle}
      />
      <GameScreen
        options={options}
        baseSize={200}
        onComplete={this.onComplete}
      />
    </div>
  }
}

const mapStateToProps = state => ({
  word: state.game.word,
  guessed: state.game.guessed,
  clue: state.game.clue,
  wheelValue: state.wheel.wheelValue,
  gameId: state.game.gameId,
  puzzle: state.game.puzzle,
})

const mapDispatchToProps = { loadGame, checkWord, saveWheelValue }

export default connect(mapStateToProps, mapDispatchToProps)(GameScreenContainer)
