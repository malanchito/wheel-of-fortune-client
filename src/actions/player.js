import request from 'superagent'

export const PLAYER_CREATED = 'PLAYER_CREATED'
export const PLAYER_UPDATED = 'PLAYER_UPDATED'

// const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'
const baseUrl = 'http://localhost:5000'

const playerCreated = player => ({
  type: PLAYER_CREATED,
  player
})

export const createPlayer = (name) => (dispatch) => {
  const player = {
    name: name,
    turn: 3
  }
  request
    .post(`${baseUrl}/players`, player)
    // .send(player)
    .then(response => {
      dispatch(playerCreated(response.body))
    })
    .catch(console.error)
}

const playerUpdated = player => ({
  type: PLAYER_UPDATED,
  player
})


export const updatePlayer = (id, gameId) => (dispatch) => {
  console.log('WANNNA SEE MEE????')
  const updatedPlayer = {
    gameId:gameId
  }
  request
    .put(`${baseUrl}/players/${id}`, updatedPlayer)
    .then(response => {
      dispatch(playerUpdated(response.body))
    })
    .catch(console.error)
}
