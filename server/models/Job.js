const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  companyName: {type: String, required: true},
  jobTitle: {type: String, required: true},
  jobDescription: {type: String, required: true},
  codeWarsLevel: {type: Number, required: true},
  categories: {type: Array, required: true},
  dateCreated: {type: Date, default: Date.now},
  applyBy: {type: Date, required: true}
})

module.exports = mongoose.model('Job', JobSchema)
