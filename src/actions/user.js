import request from 'superagent'

export const USER_CREATED = 'USER_CREATED'

const baseUrl = 'http://localhost:5000'

const userCreated = user => ({
  type: USER_CREATED,
  user
})

export const createUser = (username, password) => (dispatch) => {
  const user = {
    username,
    password
  }
console.log('TRY AND CREATE AN USER')
  request
    .post(`${baseUrl}/users`, user)
    .send(user)
    .then(response => {
      dispatch(userCreated(response.body))
    })
    .catch(console.error)
}

