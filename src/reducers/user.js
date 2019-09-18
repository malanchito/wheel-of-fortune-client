import { USER_CREATED, USER_LOGGED_IN } from '../actions/user'

const user = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return {
        ...action.user
      }
    case USER_LOGGED_IN:
      return {
        ...action.user
      }
    default:
      return state
  }
}

export default user