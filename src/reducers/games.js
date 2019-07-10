import { GET_GAMES } from '../actions/games'

const showGames = (state = [], action = {}) => {
  switch (action.type) {
    case GET_GAMES:
      console.log(action.payload, "surprise")
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