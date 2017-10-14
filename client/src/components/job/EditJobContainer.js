import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import withMainData from '../../components/providers/withMainData'
import EditJob from './EditJob'

const propTypes = {
  mainData: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

class EditJobContainer extends Component {
  constructor (props) {
    console.log(props.mainData)
    super()
    const jobId = props.match.params.jobId
    const job = props.mainData.findJobById(jobId)
    this.state = {
      companyName: job.companyName,
      jobTitle: job.jobTitle,
      jobDescription: job.jobDescription,
      codeWarLevel: job.codeWarLevel
    }
  }
    toggleEditing = () => {
      this.setState({editing: !this.state.editing})
    }
    onCompanyNameChanged = (event) => {
      this.setState({companyName: event.target.value})
    }
    onJobTitleChanged = (event) => {
      this.setState({jobTitle: event.target.value})
    }
    onJobDescriptionChanged = (event) => {
      this.setState({jobDescription: event.target.value})
    }
    onCodewarLevelChanged = (event) => {
      this.setState({codeWarLevel: event.target.value})
    }
    onSubmit = (event) => {
      event.preventDefault()
      this.props.mainData.updateJob(this.state)
      this.props.history.push('/jobs')
      console.log('edited job')
      console.log(this.state)
    }

    render () {
      return (
        <EditJob
          {...this.state}
          toggleEditing={this.toggleEditing}
          onCompanyNameChanged={this.onCompanyNameChanged}
          onJobTitleChanged={this.onJobTitleChanged}
          onJobDescriptionChanged={this.onJobDescriptionChanged}
          onCodewarLevelChanged={this.onCodewarLevelChanged}
          onSubmit={this.onSubmit}
        />
      )
    }
}

EditJobContainer.propTypes = propTypes

export default withRouter(withMainData(EditJobContainer))
