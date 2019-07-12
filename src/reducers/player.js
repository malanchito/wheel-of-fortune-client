import { PLAYER_CREATED, PLAYER_UPDATED } from '../actions/player'

const player = (state = {}, action = {}) => {
  switch (action.type) {
    case PLAYER_CREATED:
      return {
        ...action.player
      }
      case PLAYER_UPDATED:
        return {...state, 
          ...action.player
        }
    default:
      return state
  }
}

export default player 