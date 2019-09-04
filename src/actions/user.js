import request from 'superagent'

export const USER_CREATED = 'USER_CREATED'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'

const baseUrl = 'http://localhost:5000'

const userCreated = user => ({
  type: USER_CREATED,
  user
})

const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
})

export const createUser = (username, password) => (dispatch) => {
  const user = {
    username,
    password
  }
  request
    .post(`${baseUrl}/users`, user)
    .send(user)
    .then(response => {
      dispatch(userCreated(response.body))
    })
    .catch(console.error)
}

export const userLogin = (username, password) => (dispatch) => {
  const user = {
    username,
    password
  }
  request
    .post(`${baseUrl}/logins`, user)
    .send(user)
    .then(response => {
      dispatch(userLoggedIn(response.body))
    })
    .catch(console.error)
}

