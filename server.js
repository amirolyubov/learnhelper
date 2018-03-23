const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const db = require('./server/db/db.js')
const morgan = require('morgan');

db.init()

app.use(morgan('dev'))
app.use(session({
    secret: 'vdfsdgjsfosbnvslkbnvsklrbnsokbnvslvnpi',
    name: 'session',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: 'mongodb://localhost/calendardb',
      ttl: 60 * 60 * 24 * 3,
      autoRemove: 'interval',
      autoRemoveInterval: 1
    })
}))


app.use(express.static('dist', { redirect: false }))
require('./server/routes/routes.js')(app, bodyParser.json())

app.listen(3000, () => {})
