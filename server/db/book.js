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
  holydays: Boolean,
  color: String
})

BookSchema.statics.add = (params, cb) => {
  Book.create(params, (err, book) => {
    if (err) cb(err)
    cb(null, book)
  })
}
BookSchema.statics.get = (params, cb) => {
  Book.find({user: params.user}, (err, books) => {
    if (err) cb(err)
    cb(null, books)
  })
}

let Book = mongoose.model('Book', BookSchema)

module.exports = Book
