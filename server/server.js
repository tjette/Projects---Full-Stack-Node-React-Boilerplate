const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const jobRoutes = require('./routes/jobs')
const userRoutes = require('./routes/users')
const codeWarsRoutes = require('./routes/codeWars')

const app = express()
const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__DB_PROJECT__')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  name: '__PROJECT__',
  secret: '111',
  secure: false,
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions

require('./passport/strategies')(passport) // pass passport for configuration
require('./passport/routes')(app, passport) // load our routes and pass in our app and fully configured passport

app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)
app.use('/api/codewars', codeWarsRoutes)

app.use(require('./config/error-handler'))

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
