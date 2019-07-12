import { GET_GAMES } from '../actions/games'

const showGames = (state = [], action = {}) => {
  switch (action.type) {
    case GET_GAMES:
      return [
        {
          ...state,
          ...action.payload
        }
      ]
    default:
      return state
  }
}

export default showGames