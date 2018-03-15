const db = require('../db/db');

module.exports = (app, middleware) => {
  app.post('/api/signup', middleware, (req, res) => {
    if (
      req.body.username
      && req.body.password
      && req.body.email
    ) {
      db.user.create(req.body, (err, user) => {
        if (err) {
          return next(err)
        } else {
          return res.send()
        }
      })
    } else {
      res.status(400)
      res.send('Missing')
    }
  })
  app.post('/api/signin', middleware, (req, res) => {
    db.user.authenticate(req.body, (err, user) => {
      if (err || !user) {
        const err = new Error('Wrong email or password.')
        res.status = 401;
        res.send('wrong pass or username')
      } else {
        req.session.userId = user._id;
        res.send('success');
      }
    })
  })
}
