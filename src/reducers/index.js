import { combineReducers } from 'redux'
import word from './word'
import game from './game'
import games from './games'
import wheel from './wheel'

export default combineReducers({
  word,
  game,
  games,
  wheel
})