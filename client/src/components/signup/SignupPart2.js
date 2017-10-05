import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/Menu/MenuItem'
import Button from 'material-ui/Button'
import Select from 'material-ui/Select'
import {FormControl} from 'material-ui/Form'
import {InputLabel} from 'material-ui/Input'

const SignupPart2 = () => {
  return (
    <div>
      <h1>Signup Part 2</h1>
      <form>
        <TextField
          label='City'
        />
        <FormControl>
          <InputLabel>Select State</InputLabel>
          <Select value=''>
            <MenuItem value=''>Select State</MenuItem>
            <MenuItem value='Montana'>Montana</MenuItem>
            <MenuItem value='Idaho'>Idaho</MenuItem>
            <MenuItem value='Wyoming'>Wyoming</MenuItem>
            <MenuItem value='North Dakota'>North Dakota</MenuItem>
          </Select>
        </FormControl>
        <Button raised>Submit</Button>
      </form>
    </div>
  )
}

export default SignupPart2
