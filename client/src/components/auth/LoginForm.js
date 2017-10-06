import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const styles = {
  header: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}
const LoginForm = () => {
  return (
    <div>
      <h1 style={styles.header}>Login Form</h1>
      <form style={styles.form}>
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
