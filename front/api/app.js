let BOOKS_MOCK = [
  {
    title: 'Программирование в Clojure',
    author: 'Чаз, Эмерик',
    start: 1520351240000,
    end: 1522692840000,
    holydays: false,
    color: 'lightblue'
  },
  {
    title: 'Алгоритмы. Построение и анализ',
    author: 'Корман',
    start: 1520007954000,
    end: 1521831154000,
    holydays: true,
    color: 'lightgreen'
  },
  {
    title: 'Python',
    author: 'Лутз',
    start: 1520231240000,
    end: 1521431154000,
    holydays: true,
    color: 'lightpink'
  }
]

export const getDay = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    return Math.random() > 0.4
    ? resolve({
      day: 'test'
    })
    : reject(new Error('День не пришел с сервера'))
  }, 700)
})

export const saveBook = book => new Promise((resolve, reject) => {
  setTimeout(() => {
    return Math.random() > 0.4
    ? BOOKS_MOCK.push(book) && resolve(BOOKS_MOCK)
    : reject(new Error('Книга не сохранилась'))
  }, 700)
})

export const getBooks = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    return Math.random() > 0.4
    ? resolve(BOOKS_MOCK)
    : reject(new Error('Книги не пришли'))
  }, 700)
})
