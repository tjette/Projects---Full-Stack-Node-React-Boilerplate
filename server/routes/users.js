const express = require('express')

const Router = express.Router()
const User = require('../models/User')

Router.route('/:user_id')
  .put((req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      user.local.codeWarsToken = req.body.codeWarsToken || user.local.codeWarsToken
      user.local.codeWarsUserName = req.body.codeWarsUserName || user.local.codeWarsUserName
      user.local.resumeUrl = req.body.resumeUrl || user.local.resumeUrl

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

Router.route('/:user_id/jobs')
  .get((req, res, next) => {
    User.findById(req.params.user_id).populate('owner').exec((err, user) => {
      console.log(user)
      if (err) {
        next(err)
        return
      }
      res.json({
        message: 'Received users jobs',
        data: user.jobsCreated
      })
    })
  })

module.exports = Router
