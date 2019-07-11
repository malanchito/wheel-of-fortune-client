import { USER_CREATED } from '../actions/user'

const user = (state = {}, action = {}) => {
  console.log('CAN I SEE MY ACTION')
  switch (action.type) {
    case USER_CREATED:
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default user