const db = require('../db/db');

module.exports = (app, middleware) => {

  app.post('/api/signup', middleware, (req, res) => {
    db.user.signup(req.body, (err, user) => {
      if (err || user.length == 0) {
        console.log(err);
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
        res.send('success');
      }
    })
  })
  app.post('/api/signout', middleware, (req, res) => {
    if (req.session.user) {
      console.log(req.session);
      delete req.session.user
      res.send(200)
    }
  })
}
