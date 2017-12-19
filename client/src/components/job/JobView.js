import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import withUserData from '../../components/providers/withUserData'

const propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  codeWarsLevel: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
}
const styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}
const enhancer = injectSheet(styles)

const JobView = ({classes, jobTitle, companyName, jobDescription, codeWarsLevel, categories}) => {
  return (
    <div className={classes.flexContainer}>
      <h1>{jobTitle}</h1>
      <h3>{companyName}</h3>
      <h4>{codeWarsLevel}</h4>
      <h4>{categories}</h4>
      <p>{jobDescription}</p>
      <Link to='/jobs'>Back To Jobs</Link>
    </div>
  )
}
JobView.propTypes = propTypes

export default enhancer(withUserData(JobView))
