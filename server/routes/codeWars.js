const express = require('express')
const createError = require('../utils/createError')
const fetch = require('isomorphic-fetch')

const Router = express.Router()

const notLoggedIn = createError(401, 'NOT_LOGGED_IN', 'Must be logged in to access codewars api.')
const noCodewarsInfo = createError(401, 'MISSING_CODEWARS_INFO', 'Need codewars token and username to continue.')

Router.route('/')
  .get((req, res, next) => {
    const user = req.user
    if (!user) {
      next(notLoggedIn())
      return
    }
    console.log(user)

    const {codeWarsToken, codeWarsUserName} = user.local

    if (!codeWarsToken || !codeWarsUserName) {
      next(noCodewarsInfo())
      return
    }

    fetch(`https://www.codewars.com/api/v1/users/${codeWarsUserName}?access_key=${codeWarsToken}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data
      })
      .then(data => res.json({ message: 'Successfully retrieved codewars info!', data }))
      .catch(err => next(err))
  })

module.exports = Router
