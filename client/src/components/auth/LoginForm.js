import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

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
const LoginForm = (props) => {
  return (
    <div>
      <h1 style={styles.header}>Login Form</h1>
      <form style={styles.form} onSubmit={props.onSubmit}>
        <TextField
          label='Email'
          value={props.email}
          onChange={props.onEmailChanged}
        />
        <TextField
          label='Password'
          value={props.password}
          onChange={props.onPasswordChanged}
        />
        <Button type='submit' raised>Login</Button>
      </form>
    </div>
  )
}

LoginForm.propTypes = propTypes

export default LoginForm
