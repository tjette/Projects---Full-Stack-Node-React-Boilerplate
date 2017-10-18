import React from 'react'
import {withRouter} from 'react-router-dom'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import {compose} from 'recompose'

const propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

const styles = {
  container: {
    display: 'flex',
    height: '100%'
  },
  header: {
    textAlign: 'center'
  },
  jobSeekerContainer: {
    display: 'flex',
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(https://s3-us-west-1.amazonaws.com/prosky/careerbuzz/articles/image_prevs/000/000/334/normal/t6njoebtarec-lee-campbell.jpg?1491887042) no-repeat',
    '&:hover': {
      opacity: 0.7
    },
    backgroundSize: 'cover',
    jobSeekerItems: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  employerContainer: {
    display: 'flex',
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(https://resumer.io/images/blog/hiring.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&:hover': {
      opacity: 0.7
    },
    employerItems: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

  },
  jobContainer: {
    display: 'flex',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(http://www.bizmagsb.com/wp-content/uploads/2015/10/tech.jpg) no-repeat',
    backgroundSize: 'cover',
    '&:hover': {
      opacity: 0.7
    },
    jobItems: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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

const enhancer = compose(
  injectSheet(styles),
  withRouter
)

const Home = (props) => {
  return (
    <div className={props.classes.container}>
      <div className={props.classes.jobSeekerContainer} onClick={() => props.history.push('/signup/job-seeker')}>
        <Button raised className={props.classes.jobSeekerContainer.jobSeekerItems}>Job Seeker</Button>
      </div>
      <div className={props.classes.employerContainer} onClick={() => props.history.push('/signup/employer')}>
        <Button raised className={props.classes.employerContainer.employerItems}>Employer</Button>
      </div>
      <div className={props.classes.jobContainer} onClick={() => props.history.push('/jobs')}>
        <Button raised className={props.classes.jobContainer.jobItems}>Jobs</Button>
      </div>
    </div>
  )
}

Home.propTypes = propTypes

export default enhancer(Home)
