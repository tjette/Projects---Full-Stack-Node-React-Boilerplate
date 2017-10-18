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
    job.companyName = req.body.companyName
    job.jobTitle = req.body.jobTitle
    job.jobDescription = req.body.jobDescription
    job.codeWarsLevel = req.body.codeWarsLevel
    job.categories = req.body.categories
    job.dateCreated = req.body.dateCreated
    job.applyBy = req.body.applyBy
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

Router.route('/:job_id')
  .get((req, res) => {
    Job.findById(req.params.job_id, (err, job) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: `Successfully updated job: ${job.jobTitle}`, data: job })
      }
    })
  })
  .put((req, res) => {
    console.log('job', req.params)
    Job.findById(req.params.job_id, (err, job) => {
      console.log('job', job)
      job.companyName = req.body.companyName
      job.jobTitle = req.body.jobTitle
      job.jobDescription = req.body.jobDescription
      job.codeWarLevel = req.body.codeWarLevel
      console.log('PUTTING PRODUCT', job)
      job.save((err, savedJob) => {
        if (err) {
          res.json({ message: err, data: null })
        } else {
          res.json({ message: `Successfully updated job: ${job.jobTitle}`, data: savedJob })
        }
      })
    })
  })
  .delete((req, res) => {
    Job.remove({ _id: req.params.job_id }, (err) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Product successfully deleted.', data: {} })
      }
    })
})

module.exports = Router
