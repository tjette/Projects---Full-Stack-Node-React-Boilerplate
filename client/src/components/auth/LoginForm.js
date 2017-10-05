import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const LoginForm = () => {
  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <TextField
          label='Email'
        />
        <TextField
          label='Password'
        />
        <Button raised>Login</Button>
      </form>
    </div>
  )
}

export default LoginForm
