import React, {Component} from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import SignupJobSeekerPart1 from './SignupJobSeekerPart1'
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

  render () {
    const {match} = this.props
    return (
      <div>
        <div style={styles.title}>
          <h1>Signup For Tech Job Site</h1>
        </div>
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <Link to={`${match.path}/employer`}>Employer</Link>
          </div>
          <div style={styles.headerTitle}>
            <Link to={`${match.path}/job-seeker`}>Job Seeker</Link>
          </div>
        </div>
        <Route path={`${match.path}/job-seeker`} component={SignupJobSeekerPart1} />
        <Route path={`${match.path}/employer`} component={SignupEmployerPart1} />

      </div>
    )
  }
}

export default withRouter(SignupContainer)
