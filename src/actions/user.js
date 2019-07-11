import request from 'superagent'

export const USER_CREATED = 'USER_CREATED'

const baseUrl = 'https://wheel-of-fortune-server.herokuapp.com'

const userCreated = user => ({
  type: USER_CREATED,
  user
})

export const createUser = (name, password) => (dispatch) => {
  const user = {
    name,
    password
  }
console.log('TRY AND CREATE AN USER')
  request
    .post(`${baseUrl}/user`, user)
    .send(user)
    .then(response => {
      dispatch(userCreated(response.body))
    })
    .catch(console.error)
}

