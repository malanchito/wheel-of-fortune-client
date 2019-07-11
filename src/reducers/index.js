import { combineReducers } from 'redux'
import word from './word'
import game from './game'
import games from './games'
import user from './user'
import wheel from './wheel'

export default combineReducers({
  word,
  game,
  games,
  user,
  wheel
})