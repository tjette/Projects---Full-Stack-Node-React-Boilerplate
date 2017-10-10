const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  local: {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: Boolean
  }
})

UserSchema.methods.loadData = function (data) {
  this.firstName = data.firstName || this.firstName
  this.lastName = data.lastName || this.lastName
  this.email = data.email || this.email
  this.password = data.password || this.password
  this.isAdmin = false
}

UserSchema.methods.setMetaDates = function () {
  const newDate = new Date()
  this.created = this.created || newDate
  this.modified = newDate
}

module.exports = mongoose.model('User', UserSchema)
