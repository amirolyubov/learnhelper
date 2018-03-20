import * as authTypes from '../constants/authTypes'
import * as authApi from '../api/auth'

export const updateField = (key, value) => {
  return {
    type: authTypes.UPDATE_FIELD,
    payload: { key, value }
  }
}

export const register = user => dispatch => {
  authApi
  .signUp({
    username: user.username,
    email: user.email,
    password: user.password
  })
  .then(
    data => dispatch(register_success(data))
  )
}
const register_success = data => {
  return {
    type: authTypes.REGISTER_SUCCESS
  }
}

export const signIn = user => dispatch => {
  authApi
  .signIn({
    email: user.logEmail,
    password: user.logPassword
  })
  .then(
    data => dispatch(signIn_success(data))
  )
}
const signIn_success = data => {
  return {
    type: authTypes.SIGNIN_SUCCESS
  }
}
