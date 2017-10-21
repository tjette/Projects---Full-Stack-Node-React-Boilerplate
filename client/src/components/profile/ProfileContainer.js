import React, {Component} from 'react'
import Profile from './Profile'
import withUserData from '../providers/withUserData'
import * as ServerApi from '../../lib/serverApi'

class ProfileContainer extends Component {

  state = {
    jobs: []
  }

  getJobsOfUser = (jobId) =>
    ServerApi.getJobsOfUser(jobId)

  componentDidMount () {
    this.getJobsOfUser()
  }
  render () {
    return (
      <Profile
        getJobsOfUser={this.getJobsOfUser}
      />
    )
  }
}

export default withUserData(ProfileContainer)
