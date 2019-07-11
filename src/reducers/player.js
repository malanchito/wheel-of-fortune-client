import { PLAYER_CREATED } from '../actions/player'

const player = (state = {}, action = {}) => {
  console.log('CREATING NEW PLAYER')
  switch (action.type) {
    case PLAYER_CREATED:
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default player 