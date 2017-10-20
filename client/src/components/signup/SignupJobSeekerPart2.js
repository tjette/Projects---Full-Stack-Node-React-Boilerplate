import React from 'react'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmitJobSeekerPart2: PropTypes.func.isRequired,
  onCodeWarsTokenChanged: PropTypes.func.isRequired,
  onCodeWarsUserNameChanged: PropTypes.func.isRequired
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
  accessTokenField: {
    marginBottom: '50',
    width: '50%'
  },
  button: {
    margin: '10px'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}
const enhancer = injectSheet(styles)

const SignupJobSeekerPart2 = ({classes, onSubmitJobSeekerPart2, onCodeWarsTokenChanged, onCodeWarsUserNameChanged}) => {
  return (
    <div>
      <h1 className={classes.header}>Signup Part 2</h1>
      <p>The Tech Job Site will use <a href='https://www.codewars.com/users/sign_in'>Codewars</a> (Click the link to start setting up an account) to show employers what skill level
      you are at. This will help employers find qualified applicants. Employers will look at other experience as well. Setting up a Codewars account is not required</p>
      <p>Once you have a Codewars account setup, go to your account settings and find your API access token</p>
      <form className={classes.form} onSubmit={onSubmitJobSeekerPart2}>
        <TextField
          className={classes.accessTokenField}
          label='Codewars API Access Token'
          onChange={onCodeWarsTokenChanged}
        />
        <TextField
          className={classes.accessTokenField}
          label='Codewars User Name'
          onChange={onCodeWarsUserNameChanged}
        />
        <div>
          <Button type='submit' className={classes.button} raised>Submit</Button>
          <Link className={classes.link} to='/'><Button className={classes.button} raised>Go Back Home</Button></Link>
          <Link className={classes.link} to='/signup/part3'><Button className={classes.button} raised>Skip This Step</Button></Link>
        </div>
      </form>
    </div>
  )
}

SignupJobSeekerPart2.propTypes = propTypes

export default enhancer(SignupJobSeekerPart2)
