const db = require('../db/db');

module.exports = (app, middleware) => {

  app.post('/api/signup', middleware, (req, res) => {
    db.user.signup(req.body, (err, user) => {
      if (err || user.length == 0) {
        res.send(409)
      } else {
        req.session.user = {id: user._id, name: user.name}
        res.send(user)
      }
    })
  })
  app.post('/api/signin', middleware, (req, res) => {
    db.user.signin(req.body, (err, user) => {
      if (err || !user) {
        res.send(err)
      } else {
        req.session.user = {id: user._id, name: user.name}
        res.send({email: user.email});
      }
    })
  })
  app.post('/api/signout', middleware, (req, res) => {
    if (req.session.user) {
      delete req.session.user
      res.send(200)
    } else {
      res.send(200)
    }
  })
  app.get('/api/session', middleware, (req, res) => {
    if (req.session.user) {
      // db.user.get
      res.send(200)
    } else {
      res.send(401)
    }
  })

  // *************************************************************************
  //                                 Books
  // *************************************************************************

  app.post('/api/books', middleware, (req, res) => {
    db.book.add({...req.body, user: req.session.user.id}, (err, book) => {
      res.send(book) // TODO: error handling
    })
  })
  app.get('/api/books', middleware, (req, res) => {
    db.book.get({user: req.session.user.id}, (err, books) => {
      res.send(books) // TODO: error handling
    })
  })
}
