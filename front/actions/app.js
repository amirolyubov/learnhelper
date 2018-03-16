import * as appTypes from '../constants/appTypes.js'
import * as appApi from '../api/app.js'

export const getDay = (day, month) => dispatch => {
  dispatch(getDay_process())
  appApi
  .getDay(day, month)
  .then(
    data => dispatch(getDay_success(data)),
    err => dispatch(getDay_success(err))
  )
}
const getDay_process = () => {
  return {
    type: appTypes.GET_DAY_PROCESS
  }
}
const getDay_success = data => {
  return {
    type: appTypes.GET_DAY_SUCCESS,
    payload: { day: data }
  }
}
const getDay_failure = err => {
  return {
    type: appTypes.GET_DAY_FAILURE,
    payload: { err }
  }
}

export const deselectDay = () => {
  return {
    type: appTypes.DESELECT_DAY
  }
}

export const hoverBook = book => {
  return {
    type: appTypes.HOVER_BOOK,
    payload: { book }
  }
}

export const add = () => {
  return {
    type: appTypes.ADD_NEW
  }
}
