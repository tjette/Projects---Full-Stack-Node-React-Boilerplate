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
  jobSeekerContainer: {
    display: 'flex',
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(https://s3-us-west-1.amazonaws.com/prosky/careerbuzz/articles/image_prevs/000/000/334/normal/t6njoebtarec-lee-campbell.jpg?1491887042) no-repeat',
    jobSeekerItems: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        opacity: 0.7
      }
    }
  },
  employerContainer: {
    display: 'flex',
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(https://resumer.io/images/blog/hiring.jpg) no-repeat',
    employerItems: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        opacity: 0.7
      }
    }

  },
  jobContainer: {
    display: 'flex',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(http://www.bizmagsb.com/wp-content/uploads/2015/10/tech.jpg) no-repeat',
    jobItems: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        opacity: 0.7
      }
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
      <div className={props.classes.jobSeekerContainer}>
        <Button raised className={props.classes.jobSeekerContainer.jobSeekerItems}><Link className={props.classes.link} to='/signup/job-seeker'>Job Seeker</Link></Button>
      </div>
      <div className={props.classes.employerContainer}>
        <Button raised className={props.classes.employerContainer.employerItems}><Link className={props.classes.link} to='/signup/employer'>Employer</Link></Button>
      </div>
      <div className={props.classes.jobContainer}>
        <Button raised className={props.classes.jobContainer.jobItems}><Link className={props.classes.link} to='/jobs'>Jobs</Link></Button>
      </div>
    </div>
  )
}

Home.propTypes = propTypes

export default enhancer(Home)
