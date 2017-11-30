import React, {Component} from 'react'
import Profile from './Profile'
import withUserData from '../providers/withUserData'

class ProfileContainer extends Component {
  state = {
    jobs: []
  }

  render () {
    return (
      <Profile
      />
    )
  }
}

export default withUserData(ProfileContainer)
