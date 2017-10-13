import React from 'react'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onCompanyChanged: PropTypes.func.isRequired,
  onSubmitEmployerPart1: PropTypes.func.isRequired
}

const enhancer = injectSheet(styles)

const styles = {
  header: {
    textAlign: 'center'
  },
  headerTitle: {
    border: '3px solid black'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textFields: {
    display: 'flex'
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

const SignupEmployerPart1 = (props) => {
  return (
    <div>
      <h1 style={styles.header}>Employer Signup Part 1</h1>
      <form style={styles.form} onSubmit={props.onSubmitEmployerPart1}>
        <TextField style={styles.textFields}
          label='First Name'
          value={props.firstName}
          onChange={props.onFirstNameChanged}
        />
        <TextField style={styles.textFields}
          label='Last Name'
          value={props.lastName}
          onChange={props.onLastNameChanged}
        />
        <TextField style={styles.textFields}
          label='Email'
          value={props.email}
          onChange={props.onEmailChanged}
        />
        <TextField style={styles.textFields}
          label='Company'
          value={props.company}
          onChange={props.onCompanyChanged}
        />
        <TextField style={styles.textFields}
          label='Password'
          value={props.password}
          onChange={props.onPasswordChanged}
        />
        <div style={styles.buttonContainer}>
          <Button type='submit' raised>Submit</Button>
          <Link style={styles.link} to='/signup'>Back To Signup</Link>
        </div>
      </form>
    </div>
  )
}

SignupEmployerPart1.propTypes = propTypes

export default enhancer(SignupEmployerPart1)
