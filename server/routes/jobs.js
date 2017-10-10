const express = require('express')

const Router = express.Router()
const Job = require('../models/Job')

Router.route('/')
  .get((req, res) => {
    Job.find((err, jobs) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Successfully retrieved all jobs!', data: jobs })
      }
    })
  })
  .post((req, res) => {
    const job = new Job()
    job.loadData(req.body)
    job.save((err, savedJob) => {
      console.log(err)
      console.log(savedJob)
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: `Successfully created new job: ${savedJob.jobTitle}`, data: savedJob })
      }
    })
  })

module.exports = Router
