const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  companyName: {type: String, required: true},
  jobTitle: {type: String, required: true},
  jobDescription: {type: String, required: true},
  codeWarLevel: {type: Number, required: true}
})

JobSchema.methods.loadData = function (data) {
  this.companyName = data.companyName || this.companyName
  this.jobTitle = data.jobTitle || this.jobTitle
  this.jobDescription = data.jobDescription || this.jobDescription
  this.codeWarLevel = data.codeWarLevel || this.codeWarLevel
}

JobSchema.methods.setMetaDates = function () {
  const newDate = new Date()
  this.created = this.created || newDate
  this.modified = newDate
}

module.exports = mongoose.model('Job', JobSchema)
