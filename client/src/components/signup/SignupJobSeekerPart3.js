import React from 'react'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField'
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
  }
}
const SignupJobSeekerPart3 = () => {
  return (
    <div>
      <form style={styles.form}>
        <TextField
          label='Upload Resume'
        />
        <Button style={styles.button} raised>Submit</Button>
        <Button><Link to='/signup/jobSeekerpart2'>Go Back To Part 2</Link></Button>
        <Button><Link to='/'>Skip resume upload. Finish Signup Process</Link></Button>
        <Button><Link to='/'>Cancel Signup</Link></Button>
      </form>
    </div>
  )
}

export default SignupJobSeekerPart3
