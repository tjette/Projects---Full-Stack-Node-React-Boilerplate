import React from 'react'
import PropTypes from 'prop-types'
import withUserData from '../providers/withUserData'
import injectSheet from 'react-jss'
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

  },
  profileCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginRight: 300,
    width: 300,
    border: {
      color: 'black',
      width: 3,
      style: 'solid'
    }
  },
  codeWarsCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
}
const enhancer = injectSheet(styles)

const Profile = ({classes, userData: {user, profile}}) => {
  const {firstName, lastName, email, resumeUrl} = user.local
  return (
    <div>
      <div className={classes.header}>
        <h1 className={classes.headerProfile}>Profile - {firstName}</h1>
      </div>
      <div className={classes.flexContainer}>
        <CardComponent className={classes.profileCard}>
          <h1>Profile</h1>
          <LabeledValue label='First Name'>{firstName}</LabeledValue>
          <LabeledValue label='Last Name'>{lastName}</LabeledValue>
          <LabeledValue label='Email'>{email}</LabeledValue>
          <LabeledValue label='Resume Url'>{resumeUrl}</LabeledValue>
        </CardComponent>
        { profile ?
          <div className={classes.codeWarsCard}>
            <h1>CODE WARS</h1>
            <LabeledValue label='Codewars Username'>{profile.username}</LabeledValue>
            <LabeledValue label='Total Code Challenges Completed'>{profile.codeChallenges.totalCompleted}</LabeledValue>
            <LabeledValue label='Rank and Name'>{profile.ranks.languages.javascript['name']}</LabeledValue>
            <LabeledValue label='Codewars Honor Level'>{profile.honor}</LabeledValue>
            <LabeledValue label='Codewars Leader Board Position'>{profile.leaderboardPosition}</LabeledValue>
            <LabeledValue label='Codewars Leader Board Position'>{profile.leaderboardPosition}</LabeledValue>

          </div> : null
        }
      </div>
    </div>
  )
}

Profile.propTypes = propTypes

export default enhancer(withUserData(Profile))
