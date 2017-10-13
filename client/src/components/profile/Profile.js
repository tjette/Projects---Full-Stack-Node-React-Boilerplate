import React from 'react'
import PropTypes from 'prop-types'
import withUserData from '../../components/providers/withUserData'
import injectSheet from 'react-jss'

const propTypes = {
  userData: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}
const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'lightgreen',
    paddingBottom: 50,
    paddingTop: 50,
    background: 'url(https://static1.squarespace.com/static/555df46ae4b0d3e57f287ab1/t/577b20bd9de4bb9417fccc29/1467687132636/) no-repeat center center fixed',
    backgroundSize: 'cover'

  },
  headerProfile: {
    fontWeight: 'bold'
  },
  flexContainer: {
    display: 'flex'
  },
  profileCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginRight: 200
  },
  codeWarsCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
}
const enhancer = injectSheet(styles)

const Profile = (props) => {
  return (
    <div>
      <div className={props.classes.header}>
        <h1 className={props.classes.headerProfile}>Profile - {props.userData.user.local.firstName}</h1>
      </div>
      <div className={props.classes.flexContainer}>
        <div className={props.classes.profileCard}>
          <h3>First Name: {props.userData.user.local.firstName}</h3>
          <h3>Last Name: {props.userData.user.local.lastName}</h3>
          <h3>Email: {props.userData.user.local.email}</h3>
        </div>
        { props.userData.profile ?
          <div className={props.classes.codeWarsCard}>
            <h1>CODE WARS</h1>
            <h3>Code Wars Username: {props.userData.profile.username}</h3>
            <h3>Total Code Challenges Completed: {props.userData.profile.codeChallenges.totalCompleted}</h3>
            <h3>Rank and name: {props.userData.profile.ranks.languages.javascript['name']}</h3>
            <h3>Code Wars Honor Level: {props.userData.profile.honor}</h3>
            <h3>Code Wars Leader Board Position: {props.userData.profile.leaderboardPosition}</h3>
            <h3>Code Wars: {props.userData.profile.leaderboardPosition}</h3>
          </div> : null
        }
      </div>
    </div>
  )
}

Profile.propTypes = propTypes

export default enhancer(withUserData(Profile))
