import * as appTypes from '../constants/appTypes.js'
import * as appApi from '../api/app.js'

export const getDay = (day, month) => dispatch => {
  dispatch(getDay_process())
  appApi
  .getDay(day, month)
  .then(
    data => dispatch(getDay_success(data)),
    err => dispatch(getDay_failure(err))
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

export const getBooks = () => dispatch => {
  dispatch(getBooks_process())
  appApi
  .getBooks()
  .then(
    data => dispatch(getBooks_success(data)),
    err => {
      dispatch(getBooks_failure(err))
      dispatch(getBooks())
    }
  )
}
const getBooks_process = () => {
  return {
    type: appTypes.GET_BOOKS_PROCESS
  }
}
const getBooks_success = data => {
  data.forEach((book, key) => {
    book._top = key * 10
  })
  console.log(data);
  return {
    type: appTypes.GET_BOOKS_SUCCESS,
    payload: { books: data }
  }
}
const getBooks_failure = err => {
  return {
    type: appTypes.GET_BOOKS_FAILURE,
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

export const saveBook = book => dispatch => {
  dispatch(saveBook_process())
  const apiData = {
    ...book,
    start: Date.now(),
    end: Date.now() + 1325240000
  }
  appApi
  .saveBook(apiData)
  .then(
    data => {
      dispatch(saveBook_success(data))
      dispatch(getBooks())
    },
    err => dispatch(saveBook_failure(err))
  )
}
const saveBook_process = () => {
  return {
    type: appTypes.SAVE_BOOK_PROCESS
  }
}
const saveBook_success = data => {
  return {
    type: appTypes.SAVE_BOOK_SUCCESS,
    payload: { book: data }
  }
}
const saveBook_failure = err => {
  return {
    type: appTypes.SAVE_BOOK_FAILURE,
    payload: { err }
  }
}

export const confirmError = () => {
  return {
    type: appTypes.CONFIRM_ERROR
  }
}

export const updateAddBookField = (field, value) => {
  return {
    type: appTypes.UPDATE_ADD_BOOK_FIELD,
    payload: { field, value }
  }
}
