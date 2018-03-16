import * as appTypes from '../constants/appTypes.js'
import * as infoDataTypes from '../constants/infoDataTypes.js'
const initialState = {
  books: [
    {
      title: 'Программирование в Clojure',
      author: 'Чаз, Эмерик',
      // start: 1521131154000,
      start: 1520351240000,
      end: 1521992840000,
      holydays: false,
      _top: 0,
      _color: 'lightblue'
    },
    {
      title: 'Алгоритмы. Построение и анализ',
      author: 'Корман',
      start: 1520007954000,
      end: 1521831154000,
      holydays: true,
      _top: 10,
      _color: 'lightgreen'
    },
    {
      title: 'Python',
      author: 'Лутз',
      start: 1520231240000,
      end: 1521431154000,
      holydays: true,
      _top: 20,
      _color: 'lightpink'
    }
  ],
  events: [
    {}
  ],
  info: {},

  // META
  hoveredBook: -1,
  isDayLoading: false,
  infoDataType: infoDataTypes.BOOKS,
  err: {}
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
