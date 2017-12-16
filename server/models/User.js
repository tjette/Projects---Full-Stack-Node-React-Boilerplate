const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  local: {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    codeWarsToken: String,
    codeWarsUserName: String,
    resumeUrl: String
  },
  jobsCreated: [{type: mongoose.Schema.Types.ObjectId, ref: 'Job'}],
  jobsApplied: [{type: mongoose.Schema.Types.ObjectId, ref: 'Job'}]
})

UserSchema.methods.setMetaDates = function () {
  const newDate = new Date()
  this.created = this.created || newDate
  this.modified = newDate
}

module.exports = mongoose.model('User', UserSchema)
