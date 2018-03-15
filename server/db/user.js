const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const bcrypt = require('bcrypt')

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
})
UserSchema.statics.authenticate = (credentials, callback) => {
  User.findOne({ email: credentials.email })
    .exec((err, user) => {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err)
      }
      if (credentials.password === user.password) {
        return callback(null, user)
      } else {
        return callback()
      }
    })
}
UserSchema.pre('save', (next) => {
  let user = this
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      next()
    }
    user.password = hash
    next()
  })
})
let User = mongoose.model('User', UserSchema)

module.exports = User
