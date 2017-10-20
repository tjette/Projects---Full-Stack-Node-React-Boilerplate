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
  .post((req, res, next) => {
    const {user} = req
    const job = new Job()
    job.companyName = req.body.companyName
    job.jobTitle = req.body.jobTitle
    job.jobDescription = req.body.jobDescription
    job.codeWarsLevel = req.body.codeWarsLevel
    job.categories = req.body.categories
    job.dateCreated = req.body.dateCreated
    job.applyBy = req.body.applyBy
    job.owner = req.user._id
    job.save((err, savedJob) => {
      if (err) {
        return next(err)
      }

      console.log(savedJob)
      res.json({ message: `Successfully created new job: ${savedJob.jobTitle}`, data: savedJob })
      
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

Router.route('/:job_id/users')
  .get((req, res, next) => {
    Job.findById(req.params.job_id).populate('owner').exec((err, job) => {
      if (err) {
        next(err)
        return
      } else {
        res.json({
          message: 'Found job by user',
          data: job
        })
      }
    })
  })

module.exports = Router
