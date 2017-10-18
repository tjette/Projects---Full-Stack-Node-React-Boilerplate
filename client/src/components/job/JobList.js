import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import JobCard from './JobCard'
import withMainData from '../../components/providers/withMainData'
import Button from 'material-ui/Button'

const propTypes = {
  classes: PropTypes.object.isRequired,
  mainData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
const styles = {
  headerContainer: {
    textAlign: 'center',
    backgroundColor: 'darkseagreen',
    marginTop: -21
  },
  jobContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    paddingTop: 50,
    paddingBottom: 50
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

const JobList = ({classes, mainData, history}) => {
  return (
    <div>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>Current Jobs</h1>
        <Button raised className={classes.button}><Link className={classes.link} to='/jobs/add'>Add Job</Link></Button>
      </div>
      <div className={classes.jobContainer}>

        {
          mainData.jobs.length > 0
            ? mainData.jobs.map(job =>
              <JobCard
                key={job._id}
                job={job}
                onDelete={() => mainData.deleteJob(job._id)}
                onEdit={() => history.push(`/jobs/edit/${job._id}`)}
              />
            )
            : <h1>No Jobs have been added</h1>
        }
      </div>
    </div>
  )
}

JobList.propTypes = propTypes

export default enhancer(withRouter(withMainData(JobList)))
