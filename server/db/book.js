const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let BookSchema = new mongoose.Schema({
  user: ObjectId,
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
  start: Date,
  end: Date,
  pages: Number,
  holydays: {
    type: Boolean,
    default: true
  },
  color: String
})

const setTimeIn0 = date => new Date(new Date(new Date(date.setHours(0)).setMinutes(0)).setSeconds(0)).setMilliseconds(0)
const getDaysDiff = data => Math.round((data.end.getTime() - data.start.getTime()) / (1000 * 60 * 60 * 24))

BookSchema.statics.add = (params, cb) => {
  Book.create(params, (err, book) => {
    if (err) cb(err)
    cb(null, book)
  })
}
BookSchema.statics.get = (params, cb) => {
  Book.find({user: params.user}, (err, books) => {
    if (err) cb(err)
    if (params.query.type !== undefined) {
      if (params.query.type == 'day') {
        let booksInDay = books
                          .map(book => book = {...book._doc, pages: Math.round(book.pages / getDaysDiff(book))})
                          .filter(book => (setTimeIn0(new Date(new Number(params.query.date))) >= setTimeIn0(book.start) &&
                                           setTimeIn0(new Date(new Number(params.query.date))) <= setTimeIn0(book.end)) &&
                                           book)
        cb(null, booksInDay)
      } else if (params.query.type == 'month') {
        // TODO: таргетизировать запрос для разных временных отрезков
        let booksInMonth = []
        cb(null, booksInMonth)
      } else if (params.query.type == 'year') {
        let booksInYear = []
        cb(null, booksInYear)
      }
    } else {
      cb(null, books)
    }
  })
}

let Book = mongoose.model('Book', BookSchema)

module.exports = Book
