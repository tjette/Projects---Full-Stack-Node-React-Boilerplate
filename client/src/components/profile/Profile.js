import React from 'react'
import PropTypes from 'prop-types'
import withUserData from '../providers/withUserData'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import LabeledValue from '../utils/LabeledValue'
import CardComponent from '../utils/CardComponent'

const propTypes = {
  userData: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}
const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'darkseagreen',
    paddingBottom: 50,
    paddingTop: 50,
    backgroundSize: 'cover'

  },
  headerProfile: {
    fontWeight: 'bold'
  },
  flexContainer: {
    display: 'flex'
  },
  profileHeader: {
    textAlign: 'center',
    borderBottom: 'solid'
  },
  profileCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: '10px 200px 10px 10px'
  },
  codeWarsCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: '10px 10px 10px 10px'
  },
  codeWarsHeader: {
    textAlign: 'center',
    borderBottom: 'solid'
  }
}
const enhancer = compose(
  injectSheet(styles),
  withUserData
)

const Profile = ({classes, userData: {user, profile}}) => {
  if (!user) {
    return null
  }
  const {firstName, lastName, email, resumeUrl} = user.local

  return (
    <div>
      <div className={classes.header}>
        <h1 className={classes.headerProfile}>Profile - {firstName}</h1>
      </div>
      <div className={classes.flexContainer}>
        <CardComponent className={classes.profileCard}>
          <h1 className={classes.profileHeader}>Profile</h1>
          <LabeledValue label='First Name'>{firstName}</LabeledValue>
          <LabeledValue label='Last Name'>{lastName}</LabeledValue>
          <LabeledValue label='Email'>{email}</LabeledValue>
          <LabeledValue label='Resume Url'>{resumeUrl}</LabeledValue>
        </CardComponent>
        { profile ?
          <div className={classes.flexContainer}>
            <CardComponent className={classes.codeWarsCard}>
              <h1 className={classes.codeWarsHeader}>CODE WARS</h1>
              <LabeledValue label='Codewars Username'>{profile.username}</LabeledValue>
              <LabeledValue label='Total Code Challenges Completed'>{profile.codeChallenges.totalCompleted}</LabeledValue>
              <LabeledValue label='Rank and Name'>{profile.ranks.languages.javascript['name']}</LabeledValue>
              <LabeledValue label='Codewars Honor Level'>{profile.honor}</LabeledValue>
              <LabeledValue label='Codewars Leader Board Position'>{profile.leaderboardPosition}</LabeledValue>
            </CardComponent>
          </div> : null
        }
        <div>
          <h1>Jobs Posted</h1>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = propTypes

export default enhancer(Profile)
