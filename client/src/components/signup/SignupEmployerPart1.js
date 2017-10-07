import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

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
  }
}

class SignupEmployerPart1 extends Component {

  render () {
    return (
      <div>
        <h1 style={styles.header}>Employer Signup Part 1</h1>
        <form style={styles.form}>
          <TextField style={styles.textFields}
            label='First Name'
          />
          <TextField style={styles.textFields}
            label='Last Name'
          />
          <TextField style={styles.textFields}
            label='Email'
          />
          <TextField style={styles.textFields}
            label='Company'
          />
          <TextField style={styles.textFields}
            label='Password'
          />
          <TextField style={styles.textFields}
            label='Confirm Password'
          />
          <Button raised>Submit</Button>
          <Link to='/signup'>Back To Signup</Link>
        </form>
      </div>
    )
  }
}

export default SignupEmployerPart1
