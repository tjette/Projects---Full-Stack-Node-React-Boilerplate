import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Button from 'material-ui/Button'

const propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}
const styles = {
  container: {
    backgroundColor: 'darkseagreen',
    border: {
      color: 'black',
      width: 3,
      style: 'solid'
    }
  },
  title: {
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    border: '3px solid black'
  },
  button: {
    '&:hover': {
      backgroundColor: 'lawngreen'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}

const enhancer = injectSheet(styles)

const SignupChooser = ({match, classes}) => {
  return (
    <div className={classes.container}>
      <div style={styles.title}>
        <h1>Signup For Tech Job Site</h1>
        <h3>Please Choose Your Signup Page:</h3>
      </div>
      <div style={styles.header}>
        <div style={styles.headerTitle}>
          <Button className={classes.button}><Link className={classes.link} to={`${match.url}/employer`}>Employer</Link></Button>
        </div>
        <div style={styles.headerTitle}>
          <Button className={classes.button}><Link className={classes.link} to={`${match.url}`}>Job Seeker</Link></Button>
        </div>
      </div>
    </div>
  )
}

SignupChooser.propTypes = propTypes

export default enhancer(withRouter(SignupChooser))
