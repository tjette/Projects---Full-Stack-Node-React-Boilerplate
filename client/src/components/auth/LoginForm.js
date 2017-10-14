import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import injectSheet from 'react-jss'

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  container: {
    backgroundColor: 'darkseagreen',
    border: {
      color: 'black',
      width: 3,
      style: 'solid'
    }
  },
  header: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    marginTop: 5,
    backgroundColor: 'green'
  }
}

const enhancer = injectSheet(styles)

const LoginForm = ({classes, email, password, onEmailChanged, onPasswordChanged, onSubmit}) => {
  return (
    <div className={classes.container}>
      <h1 style={styles.header}>Login Form</h1>
      <form style={styles.form} onSubmit={onSubmit}>
        <TextField
          label='Email'
          value={email}
          onChange={onEmailChanged}
        />
        <TextField
          label='Password'
          value={password}
          onChange={onPasswordChanged}
        />
        <Button type='submit' className={classes.button} disabled={!email || !password} raised>Login</Button>
      </form>
    </div>
  )
}

LoginForm.propTypes = propTypes

export default enhancer(LoginForm)
