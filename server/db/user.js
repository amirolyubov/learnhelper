const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
})

let User = mongoose.model('User', UserSchema)

module.exports = User
