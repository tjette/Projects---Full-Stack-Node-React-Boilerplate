import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignupPart1 from './SignupPart1'
import SignupEmployerPart1 from './SignupEmployerPart1'

const styles = {
  title: {
    textAlign: 'center',
    backgroundColor: 'orange',
    marginBottom: 30
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    border: '3px solid black'
  }
}

class SignupContainer extends Component {

  state = {
    employer: false,
    jobSeeker: false
  }
  signUpAsEmployer = () => {
    this.setState({employer: !this.state.employer})
    this.setState({jobSeeker: false})
  }
  signUpAsJobSeeker = () => {
    this.setState({jobSeeker: !this.state.jobSeeker})
    this.setState({employer: false})
  }

  render () {
    return (
      <div>
        <div style={styles.title}>
          <h1>Tech Job Site</h1>
        </div>
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <button onClick={this.signUpAsEmployer}>Employer</button>
          </div>
          <div style={styles.headerTitle}>
            <button onClick={this.signUpAsJobSeeker}>Job Seeker</button>
          </div>
        </div>
        {
          this.state.jobSeeker ?
            <SignupPart1
              {...this.state}
              signUpAsEmployer={this.signUpAsEmployer}
            />
            : null
        }
        {
          this.state.employer ?
            <SignupEmployerPart1
              {...this.state}
              signUpAsEmployer={this.signUpAsEmployer} />
            : null
        }

      </div>
    )
  }
}

export default SignupContainer
