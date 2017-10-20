import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Moment from 'moment'
import withUserData from '../../components/providers/withUserData'
import {CardActions} from 'material-ui/Card'
import Button from 'material-ui/Button'
import FavoriteIcon from 'material-ui-icons/Favorite'
import IconButton from 'material-ui/IconButton'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import CardComponent from '../utils/CardComponent'
import LabeledValue from '../utils/LabeledValue'

const propTypes = {
  classes: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired
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
  jobTitle: {
    color: 'gray'
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
  }
}
const enhancer = injectSheet(styles)

const JobCard = ({classes, onDelete, onEdit, userData, job}) => {
  const {jobTitle, categories, applyBy, dateCreated, companyName, jobDescription, codeWarsLevel} = job
  return (
    <div className={classes.jobCard}>
      <CardComponent>
        <LabeledValue className={classes.jobTitle} label='Job Title'>{jobTitle}</LabeledValue>
        <LabeledValue label='Company Name'>{companyName}</LabeledValue>
        <LabeledValue label='Codewars Level'>{codeWarsLevel}</LabeledValue>
        <LabeledValue label='Job Description'>{jobDescription}</LabeledValue>
        <LabeledValue label='Job Category'>{categories}</LabeledValue>
        <LabeledValue label='Date Created'>{Moment(dateCreated).format('LL')}</LabeledValue>
        <LabeledValue label='Apply By'>{Moment(applyBy).format('LL')}</LabeledValue>
        <CardActions>
          {userData.loggedIn && userData.user.local.isAdmin ? <Button dense color='primary' onClick={onDelete}>Delete</Button> : null }
          {userData.loggedIn && userData.user.local.isAdmin ? <Button dense color='primary' onClick={onEdit}>Edit</Button> : null }
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
