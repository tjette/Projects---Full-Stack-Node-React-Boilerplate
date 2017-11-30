import {Component} from 'react'
import * as ServerApi from '../../lib/serverApi'
import PropTypes from 'prop-types'

class DataProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  static childContextTypes = {
    mainData: PropTypes.object.isRequired
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

    updateJob: (job) =>
      ServerApi.updateJob(job)
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
    return {
      mainData: {
        ...this.state,
        ...this.methods
      }
    }
  }

  render () {
    return (
      this.props.children
    )
  }
}

export default DataProvider
