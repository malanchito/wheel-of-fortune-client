import { PLAYER_CREATED } from '../actions/player'

const player = (state = {}, action = {}) => {
  switch (action.type) {
    case PLAYER_CREATED:
      return {
        ...action.player
      }
    default:
      return state
  }
}

export default player 