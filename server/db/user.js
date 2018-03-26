const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const bcrypt = require('bcrypt')

const hashPassword = pass => new Promise(resolve => bcrypt.hash(pass, 10, (err, hash) => resolve(hash)))
const equalPassword = (pass, hash) => new Promise(resolve => {
  bcrypt.compare(pass, hash, (_err, _hash) => {
    if (_err) console.log(_err)
    resolve(_hash)
  })
})

let UserSchema = new mongoose.Schema({
  email: {
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

UserSchema.statics.signup = (params, cb) => {
  hashPassword(params.password).then((hashed) => {
    User.create({
      email: params.email,
      password: hashed
    }, (err, user) => {
      if (err) {
        cb(err)
      } else {
        cb(null, user)
      }
    })
  })
}
UserSchema.statics.signin = (params, cb) => {
  User.find({email: params.email}, (err, user) => {
    if (err || user.length === 0) {
      cb(403)
    } else {
      equalPassword(params.password, user[0].password).then(data => {
        if (data) {
          cb(null, user[0])
        } else {
          cb(403)
        }
      })
    }
  })
}
// UserSchema.statics.getOne = (params, cb) => {
//   User.findById(params)
// }

let User = mongoose.model('User', UserSchema)

module.exports = User
