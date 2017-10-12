module.exports = (statusCode, errorCode, message) => (info) => {
  const err = Error(message)
  err.type = 'RestError'
  err.serverStatusCode = statusCode
  err.errorCode = errorCode
  err.errorMessage = message
  err.info = info
  return err
}
