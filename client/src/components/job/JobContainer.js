import React, {Component} from 'react'
import JobList from './JobList'
import withMainData from '../../components/providers/withMainData'

class JobContainer extends Component {
  state = {
    companyName: null,
    jobTitle: null,
    jobDescription: null,
    categories: null,
    codeWarLevel: null,
    dateAdded: new Date(),
    applyBy: null
  }
  render () {
    return (
      <div>
        <JobList
        />
      </div>
    )
  }
}

export default withMainData(JobContainer)
