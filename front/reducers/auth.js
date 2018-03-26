import * as authTypes from '../constants/authTypes'

const initialState = {
  isAuth: false,
  username: '',
  email: '',
  password: '',
  logEmail: '',
  logPassword: '',
  isAuthentificate: false,
  isLoading: true
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    case authTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthentificate: true
      }
    case authTypes.CHECK_SESSION_SUCCESS:
      return {
        ...state,
        isAuthentificate: true,
        isLoading: false
      }
    case authTypes.CHECK_SESSION_FAILURE:
      return {
        ...state,
        isAuthentificate: false,
        isLoading: false
      }
    case authTypes.CHECK_SESSION_PROCESS:
      return {
        ...state,
        isLoading: true
      }
    case authTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        isAuthentificate: false
      }
    default:
      return state
  }
}

export default auth
