import * as appTypes from '../constants/appTypes.js'
import * as infoDataTypes from '../constants/infoDataTypes.js'
import * as calendarViewTypes from '../constants/calendarViewTypes'

const initialState = {
  books: [],
  events: [],
  newBook: {
    title: '',
    author: '',
    pages4day: 0,
    pages: 100,
    color: '#fab165'
  },
  day: {

  },

  // META
  hoveredBook: -1,
  isBooksLoading: false,
  isDayLoading: false,
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  infoDataType: infoDataTypes.BOOKS,
  calendarViewType: calendarViewTypes.MONTH
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
        infoDataType: infoDataTypes.DAY,
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
    case appTypes.SELECT_MONTH:
      return {
        ...state,
        calendarViewType: calendarViewTypes.MONTH,
        month: action.payload.month,
        year: action.payload.year
      }
    case appTypes.SAVE_BOOK_PROCESS:
      return {
        ...state,
        isBookSaving: true
      }
    case appTypes.SAVE_BOOK_SUCCESS:
      return {
        ...state,
        isBookSaving: false,
        infoDataType: infoDataTypes.BOOKS
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
    case appTypes.UPDATE_ADD_BOOK_FIELD:
      return {
        ...state,
        newBook: {
          ...state.newBook,
          [action.payload.field]: action.payload.value
        }
      }
    default:
      return state
  }
}

export default app
