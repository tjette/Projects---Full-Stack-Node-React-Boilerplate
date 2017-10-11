import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import withUserData from '../../components/providers/withUserData'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import FavoriteIcon from 'material-ui-icons/Favorite'
import IconButton from 'material-ui/IconButton'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

const propTypes = {

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
  media: {
    height: 200
  },
  jobContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
}
const enhancer = injectSheet(styles)

const JobCard = (props) => {
  return (
    <div className={props.classes.jobCard}>
      <Card>
        <CardMedia
          className={props.classes.media}
          image='https://images.unsplash.com/1/macbook-air-all-faded-and-stuff.jpg?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop='
        />
        <CardContent className={props.classes.jobContent}>
          <Typography type="headline" className=''>
            Job Title:{props.job.jobTitle}
          </Typography>
          <Typography type="body1" className=''>
            Company Name:{props.job.companyName}
          </Typography>
          <Typography type="body1" className=''>
            Job Description:{props.job.jobDescription}
          </Typography>
          <Typography type="body1" className=''>
            Codewar Level Required:{props.job.codeWarLevel}
          </Typography>
        <CardActions>
          { props.userData.user.local.isAdmin && props.userData.loggedIn ? <Button dense color='primary' onClick={props.onDelete}>Delete Product</Button> : null }
          { props.userData.user.local.isAdmin && props.userData.loggedIn ? <Button dnese color='primary' onClick={props.onEdit}>Edit</Button> : null }
        </CardActions>
        </CardContent>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </Card>
    </div>
  )
}

JobCard.propTypes = propTypes

export default enhancer(withUserData(JobCard))
