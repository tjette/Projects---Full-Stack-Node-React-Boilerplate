import React from 'react'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmitJobSeekerPart1: PropTypes.func.isRequired
}

const styles = {
  header: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

const SignupJobSeekerPart1 = (props) => {
  return (
    <div>
      <h1 style={styles.header}>Job Seeker Signup Part 1</h1>
      <form style={styles.form} onSubmit={props.onSubmitJobSeekerPart1}>
        <TextField
          label='First Name'
          value={props.firstName}
          onChange={props.onFirstNameChanged}
        />
        <TextField
          label='Last Name'
          value={props.lastName}
          onChange={props.onLastNameChanged}
        />
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
        <Button raised type='submit'
          disabled={!props.firstName || !props.lastName || !props.email || !props.password}>Submit</Button>
        <Link to='/signup'>Back To Signup</Link>
      </form>
    </div>
  )
}
SignupJobSeekerPart1.propTypes = propTypes

export default SignupJobSeekerPart1
