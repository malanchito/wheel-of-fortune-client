import { USER_CREATED } from '../actions/user'

const user = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return {
        ...action.user
      }
    default:
      return state
  }
}

export default user