const mongoose = require('mongoose')
const user = require('./user')
const book = require('./book')
const config = require('../../config');

const initDb = () => {
  mongoose.connect(config.db.URI)
  .catch(err => console.log('ERROR: ' + err))
}

module.exports = {
  init: initDb,
  user: user,
  book: book
}
