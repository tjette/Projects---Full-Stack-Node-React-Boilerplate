import React, {Component} from 'react'
import * as ServerApi from '../../lib/serverApi'
import PropTypes from 'prop-types'

class DataProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  state = {
    jobs: []
  }

  methods = {
    getAllJobs: () =>
      ServerApi.getAllJobs()
        .then(jobs =>
          this.setState({
            jobs
          })),

    addJob: (newJob) =>
      ServerApi.addJob(newJob)
        .then(this.methods.getAllJobs),

    deleteJob: (jobId) =>
      ServerApi.deleteJob(jobId)
        .then(this.methods.getAllJobs),

    updateJob: (jobId) =>
      ServerApi.updateJob(jobId)
        .then(this.methods.getAllJobs),

    findJobById: (jobId) => {
      for (let i = 0; i < this.state.jobs.length; i++) {
        const currentJob = this.state.jobs[i]
        if (currentJob._id === jobId) {
          return currentJob
        }
      }
    }
  }

  componentDidMount () {
    this.methods.getAllJobs()
  }
  getChildContext () {
    console.log('in get child context')
    return {
      mainData: {
        ...this.state,
        ...this.methods
      }
    }
  }

  render () {
    return this.props.children
  }
}

export default DataProvider
