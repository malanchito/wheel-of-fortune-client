import request from 'superagent'

export const PLAYER_CREATED = 'PLAYER_CREATED'

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

const playerCreated = player => ({
  type: PLAYER_CREATED,
  player
})

export const createPlayer = () => (dispatch) => {
  const player = {
    name: request.body.name,
    password: request.body.password
  }
  request
    .post(`${baseUrl}/players`)
    .send(player)
    .then(response => {
      dispatch(playerCreated(response.body))
    })
    .cathc(console.error)
}
