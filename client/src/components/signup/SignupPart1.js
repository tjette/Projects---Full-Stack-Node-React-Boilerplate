import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/Menu/MenuItem'
import Button from 'material-ui/Button'

const SignupPart1 = () => {
  return (
    <div>
      <h1>Signup Part 1</h1>
      <form>
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
