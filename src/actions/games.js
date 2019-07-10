import * as request from 'superagent'
export const GET_GAMES = 'GET GAMES'

function setGames(payload) {
  return {
    type: GET_GAMES,
    payload
  }
}

export function getGames() {
  return function(dispatch) {
    request('https://dashboard.heroku.com/apps/wheel-of-fortune-server/stream')
    .then(response => {
      dispatch(setGames(Object.keys(response.body)))
    })
    .catch(console.error)
  }
}
