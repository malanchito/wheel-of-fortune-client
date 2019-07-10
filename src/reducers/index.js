import { combineReducers } from 'redux'
import word from './word'
import game from './game'
import games from './games'

export default combineReducers({
  word,
  game,
  games
})