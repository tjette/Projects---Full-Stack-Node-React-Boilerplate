import React from 'react'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

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
  button: {
    marginTop: 50
  },
  accessTokenField: {
    marginBottom: '50'
  }
}
const SignupJobSeekerPart2 = () => {
  return (
    <div>
      <h1 style={styles.header}>Signup Part 2</h1>
      <p>The Tech Job Site will use <a href='https://www.codewars.com/users/sign_in'>Codewars (Click link to start setting up account)</a> to show employers what skill level
      you are at. This will help employers find qualified applicants. Employers will look at other experience as well. Setting up a Codewars account is not required</p>
      <p>Once you have a Codewars account setup, go to your account settings and find your API access token</p>
      <form style={styles.form}>
        <TextField
          style={styles.accessTokenField}
          className='codeWarsToken'
          label='Codewars API Access Token'
        />
        <Button style={styles.button} raised>Submit</Button>
        <Link to='/'><Button style={styles.button} raised>Go Back Home</Button></Link>
        <Link to='/signup/job-seeker'><Button style={styles.button} raised>Go Back To Part 1</Button></Link>
        <Link to='/signup/jobSeekerpart3'>Skip This Step</Link>
      </form>
    </div>
  )
}

export default SignupJobSeekerPart2
