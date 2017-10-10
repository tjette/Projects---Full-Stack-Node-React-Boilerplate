import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import withUserData from '../../components/providers/withUserData'

const propTypes = {

}
const styles = {
  jobCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    opacity: 0.7,
    flexWrap: 'wrap',
    width: 350,
    margin: 50
  }
}
const enhancer = injectSheet(styles)

const JobCard = (props) => {
  return (
    <div className={props.classes.jobCard}>
      <h1>{props.job.companyName}</h1>
      <h3>{props.job.jobTitle}</h3>
      <p>{props.job.jobDescription}</p>

      { props.userData.user.local.isAdmin && props.userData.loggedIn ? <button onClick={props.onDelete}>Delete Product</button> : null }
      { props.userData.user.local.isAdmin && props.userData.loggedIn ? <button onClick={props.onEdit}>Edit</button> : null }
    </div>
  )
}

JobCard.propTypes = propTypes

export default enhancer(withUserData(JobCard))
