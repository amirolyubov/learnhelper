import * as appTypes from '../constants/appTypes.js'

const initialState = {
  isError: false,
  err: {
    type: 0,
    message: ''
  }
}

const err = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.GET_DAY_FAILURE:
      return {
        ...state,
        err: action.payload.err,
        isError: true
      }
    case appTypes.GET_BOOKS_FAILURE:
      return {
        ...state,
        err: action.payload.err,
        isError: true
      }
    case appTypes.CONFIRM_ERROR:
      return {
        ...state,
        isError: false
      }
    default:
      return state
  }
}

export default err
