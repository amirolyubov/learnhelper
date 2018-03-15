const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

require('./server/routes/routes.js')(app, bodyParser.json())

const db = require('./server/db/db.js')
db.init()

app.use(express.static('dist'))
app.use(session({
  secret: 'secret secret 123123',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: require('mongoose').connection })
}))

app.get('/', (req, res) => res.sendfile(__dirname + '/dist/index.html'))

app.listen(3000, () => console.log('BookHelper listening on port 3000!'))
