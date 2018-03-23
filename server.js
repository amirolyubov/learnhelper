const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const db = require('./server/db/db.js')

require('./server/routes/routes.js')(app, bodyParser.json())

db.init()

app.use(session({
    secret: 'vdfsdgjsfosbnvslkbnvsklrbnsokbnvslvnpi',
    name: 'session',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: 'mongodb://localhost/calendardb',
      ttl: 30,
      autoRemove: 'interval',
      autoRemoveInterval: 1
    })
}));
app.use(express.static('dist'))

app.get('/', (req, res) => res.sendfile(__dirname + '/dist/index.html'))

app.listen(3000, () => console.log('BookHelper listening on port 3000!'))
