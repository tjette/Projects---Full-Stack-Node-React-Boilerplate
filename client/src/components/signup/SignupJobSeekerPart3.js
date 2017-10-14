import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmitJobSeekerPart3: PropTypes.func.isRequired,
  onResumeUrlChanged: PropTypes.func.isRequired
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
  button: {
    marginTop: 50
  }
}

const enhancer = injectSheet(styles)

const SignupJobSeekerPart3 = ({classes, onSubmitJobSeekerPart3, onResumeUrlChanged}) => {
  return (
    <div>
      <form className={classes.form} onSubmit={onSubmitJobSeekerPart3}>
        <TextField
          label='Link to Resume URL'
          onChange={onResumeUrlChanged}
        />
        <Button type='submit' className={classes.button} raised>Submit</Button>
        <Button><Link to='/signup/jobSeekerpart2'>Go Back To Part 2</Link></Button>
        <Button><Link to='/'>Skip resume upload. Finish Signup Process</Link></Button>
        <Button><Link to='/'>Cancel Signup</Link></Button>
      </form>
    </div>
  )
}

SignupJobSeekerPart3.propTypes = propTypes

export default enhancer(SignupJobSeekerPart3)
