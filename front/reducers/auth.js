import * as authTypes from '../constants/authTypes'

const initialState = {
  username: '',
  email: '',
  password: '',
  logEmail: '',
  logPassword: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
      return state
  }
}

export default auth
