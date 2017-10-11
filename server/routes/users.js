const express = require('express')

const Router = express.Router()
const User = require('../models/User')

Router.route('/:user_id')
  .put((req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      user.local.codeWarsToken = req.body.codeWarsToken
      user.local.codeWarsUserName = req.body.codeWarsUserName
      console.log('PUTTING User', user)
      user.save((err, savedUser) => {
        console.log(savedUser)
        if (err) {
          res.json({ message: err, data: null })
        } else {
          res.json({ message: `Successfully updated user: ${user.local.firstName} ${user.local.lastName}`, data: savedUser })
        }
      })
    })
  })

module.exports = Router
