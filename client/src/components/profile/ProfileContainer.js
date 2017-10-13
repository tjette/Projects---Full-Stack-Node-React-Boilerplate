import React, {Component} from 'react'
import Profile from './Profile'
import withUserData from '../../components/providers/withUserData'

class ProfileContainer extends Component {
  render () {
    return (
      <Profile
      />
    )
  }
}

export default withUserData(ProfileContainer)
