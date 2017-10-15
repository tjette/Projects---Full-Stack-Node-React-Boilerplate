import React from 'react'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  container: {
    display: 'flex',
    height: '100%'
  },
  header: {
    textAlign: 'center'
  },
  containerItems: {
    display: 'flex',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  jobSeeker: {
    backgroundColor: 'green',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'lightgreen'
    }
  },
  employer: {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'coral'
    }
  },
  jobs: {
    backgroundColor: 'blue',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'lightblue'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 30
  },
  button: {

  }
}

const enhancer = injectSheet(styles)

const Home = (props) => {
  return (
    <div className={props.classes.container}>
      <div className={props.classes.containerItems}>
        <Button raised className={props.classes.jobSeeker}><Link className={props.classes.link} to='/signup/job-seeker'>Job Seeker</Link></Button>
      </div>
      <div className={props.classes.containerItems}>
        <Button raised className={props.classes.employer}><Link className={props.classes.link} to='/signup/employer'>Employer</Link></Button>
      </div>
      <div className={props.classes.containerItems}>
        <Button raised className={props.classes.jobs}><Link className={props.classes.link} to='/jobs'>Jobs</Link></Button>
      </div>
    </div>
  )
}

Home.propTypes = propTypes

export default enhancer(Home)
