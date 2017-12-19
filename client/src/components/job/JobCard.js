import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Moment from 'moment'
import withUserData from '../../components/providers/withUserData'
import {CardActions} from 'material-ui/Card'
import Button from 'material-ui/Button'
import FavoriteIcon from 'material-ui-icons/Favorite'
import IconButton from 'material-ui/IconButton'
import CardComponent from '../utils/CardComponent'
import LabeledValue from '../utils/LabeledValue'

const propTypes = {
  classes: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired,
  onJobView: PropTypes.func.isRequired
}
const styles = {
  jobCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 350,
    margin: 50
  },
  jobInputs: {
    textAlign: 'center'
  },
  jobTitle: {
    backgroundColor: 'gray'
  },
  media: {
    height: 200
  },
  jobContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  favoriteIcon: {
    '&:hover': {
      color: 'red'
    }
  },
  jobView: {
    display: 'block',
    margin: 'auto'
  }
}
const enhancer = injectSheet(styles)

const JobCard = ({classes, onDelete, onEdit, userData, job, onJobView}) => {
  const {jobTitle, categories, applyBy, dateCreated, companyName, jobDescription, codeWarsLevel} = job
  return (
    <div className={classes.jobCard}>
      <CardComponent className={classes.jobInputs}>
        <LabeledValue label='Job Title'>{jobTitle}</LabeledValue>
        <LabeledValue label='Company Name'>{companyName}</LabeledValue>
        <LabeledValue label='Codewars Level'>{codeWarsLevel}</LabeledValue>
        <LabeledValue label='Job Description'>{jobDescription}</LabeledValue>
        <LabeledValue label='Job Category'>{categories.join(', ')}</LabeledValue>
        <LabeledValue label='Date Created'>{Moment(dateCreated).format('LL')}</LabeledValue>
        <LabeledValue label='Apply By'>{Moment(applyBy).format('LL')}</LabeledValue>
        <CardActions>
          {userData.loggedIn && userData.user.local.isAdmin ? <Button dense color='primary' onClick={onDelete}>Delete</Button> : null }
          {userData.loggedIn && userData.user.local.isAdmin ? <Button dense color='primary' onClick={onEdit}>Edit</Button> : null }
          <Button dense color='primary' className={classes.jobView} onClick={onJobView}>View Job</Button>
        </CardActions>
        <IconButton>
          <FavoriteIcon className={classes.favoriteIcon} />
        </IconButton>
      </CardComponent>
    </div>
  )
}

JobCard.propTypes = propTypes

export default enhancer(withUserData(JobCard))
