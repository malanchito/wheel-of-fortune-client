import request from 'superagent'

export const PLAYER_CREATED = 'PLAYER_CREATED'

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

const playerCreated = player => ({
  type: PLAYER_CREATED,
  player
})

export const createPlayer = (name) => (dispatch) => {
  const player = {
    name: name
  }
  request
    .post(`${baseUrl}/players`, player)
    // .send(player)
    .then(response => {
      dispatch(playerCreated(response.body))
    })
    .catch(console.error)
}
