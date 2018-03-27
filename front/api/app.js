let BOOKS_MOCK = [
  {
    _id: 'id_142',
    title: 'Программирование в Clojure',
    author: 'Чаз, Эмерик',
    start: 1520231240000,
    end: 1521212840000,
    holydays: true,
    color: 'lightblue'
  },
  {
    _id: 'id_143',
    title: 'Алгоритмы. Построение и анализ',
    author: 'Корман',
    start: 1520007954000,
    end: 1721831154000,
    holydays: false,
    color: 'lightgreen'
  },
  {
    _id: 'id_542',
    title: 'Python',
    author: 'Лутз',
    start: 1517231240000,
    end: 1520431154000,
    holydays: false,
    color: 'lightpink'
  }
]
const generateDay = date => {
  return {
    date: date,
    books: [
      {
        _id: 'id_142',
        color: BOOKS_MOCK.filter(book => book._id == 'id_142')[0].color,
        title: BOOKS_MOCK.filter(book => book._id == 'id_142')[0].title,
        author: BOOKS_MOCK.filter(book => book._id == 'id_142')[0].author,
        pages: Math.round(Math.random() * 80)
      },
      {
        _id: 'id_542',
        color: BOOKS_MOCK.filter(book => book._id == 'id_542')[0].color,
        title: BOOKS_MOCK.filter(book => book._id == 'id_542')[0].title,
        author: BOOKS_MOCK.filter(book => book._id == 'id_542')[0].author,
        pages: Math.round(Math.random() * 80)
      }
    ],
    events: [],
    bisy: 70
  }
}

export const getDay = day => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', `/api/books?date=${day.getTime()}`, true)
  xhr.onreadystatechange = () => {
    xhr.status == 200 && resolve(JSON.parse(xhr.responseText))
  }
  xhr.send()
})

export const saveBook = book => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/api/books', true)
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
  xhr.onreadystatechange = () => {
    if (xhr.status == 200) {
      resolve(xhr.responseText)
    }
  }
  xhr.send(JSON.stringify(book))
})

export const getBooks = () => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', '/api/books', true)
  xhr.onreadystatechange = () => {
    xhr.status == 200 && resolve(JSON.parse(xhr.responseText))
  }
  xhr.send()
})
