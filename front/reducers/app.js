import * as appTypes from '../constants/appTypes.js'
import * as infoDataTypes from '../constants/infoDataTypes.js'
const initialState = {
  books: [],
  events: [
    {}
  ],
  info: {},

  // META
  hoveredBook: -1,
  isBooksLoading: true,
  isDayLoading: false,
  infoDataType: infoDataTypes.ADD_NEW
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.GET_DAY_PROCESS:
      return {
        ...state,
        isDayLoading: true
      }
    case appTypes.GET_DAY_SUCCESS:
      return {
        ...state,
        day: action.payload.day,
        isDayLoading: false
      }
    case appTypes.GET_DAY_FAILURE:
      return {
        ...state,
        err: action.payload.err,
        isDayLoading: false
      }
    case appTypes.GET_BOOKS_PROCESS:
      return {
        ...state,
        isBooksLoading: true
      }
    case appTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        isBooksLoading: false
      }
    case appTypes.GET_BOOKS_FAILURE:
      return {
        ...state,
        err: action.payload.err,
        isBooksLoading: false
      }
    case appTypes.HOVER_BOOK:
      return {
        ...state,
        hoveredBook: action.payload.book
      }
    case appTypes.ADD_NEW:
      return {
        ...state,
        infoDataType: infoDataTypes.ADD_NEW
      }
    default:
      return state
  }
}

export default app
