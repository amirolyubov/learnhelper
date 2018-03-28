import * as authTypes from '../constants/authTypes'
import * as authApi from '../api/auth'
import { history } from '../index'

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
    data => {
      dispatch(signIn_success(data))
      dispatch(redirectToApp())
    }
  )
}
const signIn_success = data => {
  return {
    type: authTypes.SIGNIN_SUCCESS
  }
}

export const signOut = () => dispatch => {
  authApi
  .signOut()
  .then(
    data => dispatch(signOut_success(data))
  )
}
const signOut_success = () => {
  return {
    type: authTypes.SIGNOUT_SUCCESS
  }
}

export const checkSession = () => dispatch => {
  dispatch(checkSession_process())
  authApi
  .checkSession()
  .then(
    data => {
      dispatch(checkSession_success(data))
      dispatch(redirectToApp())
    },
    err => {
      dispatch(checkSession_failure(err))
    }
  )
}
const redirectToApp = () => {
  history.push('/')
  return { type: 'redirect' }
}
const checkSession_process = () => {
  return { type: authTypes.CHECK_SESSION_PROCESS }
}
const checkSession_success = data => {
  return {
    type: authTypes.CHECK_SESSION_SUCCESS,
    payload: {
      user: data
    }
  }
}
const checkSession_failure = err => {
  return {
    type: authTypes.CHECK_SESSION_FAILURE
  }
}
