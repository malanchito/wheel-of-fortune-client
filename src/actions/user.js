import request from 'superagent'

export const USER_CREATED = 'USER_CREATED'

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

const userCreated = user => ({
  type: USER_CREATED,
  user
})

export const createUser = () => (dispatch) => {
  const user = {
    name: request.body.name,
    password: request.body.password
  }

  request
    .post(`${baseUrl}/user`)
    .send(user)
    .then(response => {
      dispatch(userCreated(response.body))
    })
    .catch(console.error)
}

