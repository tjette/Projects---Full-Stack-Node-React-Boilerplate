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
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}
const SignupPart1 = () => {
  return (
    <div>
      <h1 style={styles.header}>Job Seeker Signup Part 1</h1>
      <form style={styles.form}>
        <TextField
          label='Name'
        />
        <TextField
          label='Email'
        />
        <TextField
          label='Password'
        />
        <TextField
          label='Confirm Password'
        />
        <Button raised>Submit</Button>
      </form>
    </div>
  )
}

export default SignupPart1
