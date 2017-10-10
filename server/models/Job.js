const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  company: {type: String, required: true},
  jobTitle: {type: String, required: true},
  jobDescription: {type: String, required: true},
  categories: {type: String, required: true},
  codeWarLevel: {type: Number, required: true},
  applyBy: {type: Date, required: true}
})

module.exports = mongoose.model('Job', JobSchema)
