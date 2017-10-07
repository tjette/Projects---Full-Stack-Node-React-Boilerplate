import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'

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

const SignupChooser = ({match}) => {
    return (
        <div>
            <div style={styles.title}>
                <h1>Signup For Tech Job Site</h1>
                <h3>Please Choose Your Signup Page:</h3>
            </div>
                <div style={styles.header}>
                    <div style={styles.headerTitle}>
                        <Link to={`${match.url}/employer`}>Employer</Link>
                    </div>
                    <div style={styles.headerTitle}>
                        <Link to={`${match.url}/job-seeker`}>Job Seeker</Link>
                    </div>
                </div>
        </div>
    )
}

export default withRouter(SignupChooser)
