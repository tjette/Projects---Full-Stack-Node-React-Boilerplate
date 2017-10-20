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
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    textTransform: 'uppercase',
    margin: 10,
    padding: 10,
    backgroundColor: 'gray',
    fontFamily: 'sans-serif',
    borderRadius: 5
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20
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
        <div className='button-container' style={styles.buttonContainer}>
          <Button raised type='submit'
            disabled={!props.firstName || !props.lastName || !props.email || !props.password}>Submit</Button>
          <Link style={styles.link} to='/'>Back To Home</Link>
        </div>
      </form>
    </div>
  )
}
SignupJobSeekerPart1.propTypes = propTypes

export default SignupJobSeekerPart1
