const mongoose = require('mongoose')
const user = require('./user');

const initDb = () => {
  mongoose.connect('mongodb://localhost/calendardb')
  .then(() => console.log('MongoDB is started'))
  .catch(err => console.log('ERROR: ' + err))
}

module.exports = {
  init: initDb,
  user: user
}
