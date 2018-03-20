let BOOKS_MOCK = [
  {
    _id: 'id_142',
    title: 'Программирование в Clojure',
    author: 'Чаз, Эмерик',
    start: 1520231240000,
    end: 1521212840000,
    holydays: false,
    color: 'lightblue'
  },
  {
    _id: 'id_143',
    title: 'Алгоритмы. Построение и анализ',
    author: 'Корман',
    start: 1520007954000,
    end: 1721831154000,
    holydays: true,
    color: 'lightgreen'
  },
  {
    _id: 'id_542',
    title: 'Python',
    author: 'Лутз',
    start: 1517231240000,
    end: 1520431154000,
    holydays: true,
    color: 'lightpink'
  }
]
let DAY_MOCK = {
  date: Date.now(),
  books: [
    {
      _id: 'id_142',
      color: BOOKS_MOCK.filter(book => book._id == 'id_142')[0].color,
      title: BOOKS_MOCK.filter(book => book._id == 'id_142')[0].title,
      author: BOOKS_MOCK.filter(book => book._id == 'id_142')[0].author,
      pages: 25
    },
    {
      _id: 'id_542',
      color: BOOKS_MOCK.filter(book => book._id == 'id_542')[0].color,
      title: BOOKS_MOCK.filter(book => book._id == 'id_542')[0].title,
      author: BOOKS_MOCK.filter(book => book._id == 'id_542')[0].author,
      pages: 40
    }
  ],
  events: [],
  bisy: 70
}

export const getDay = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    return Math.random() > 0.1
    ? resolve(DAY_MOCK)
    : reject(new Error('День не пришел с сервера'))
  }, 700)
})

export const saveBook = book => new Promise((resolve, reject) => {
  setTimeout(() => {
    return Math.random() > 0.1
    ? BOOKS_MOCK.push(book) && resolve(BOOKS_MOCK)
    : reject(new Error('Книга не сохранилась'))
  }, 700)
})

export const getBooks = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    return Math.random() > 0.1
    ? resolve(BOOKS_MOCK)
    : reject(new Error('Книги не пришли'))
  }, 700)
})
