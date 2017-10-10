import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import AddJobForm from './AddJobForm'
import withMainData from '../../components/providers/withMainData'

class AddJobContainer extends Component {
  state = {
    companyName: 'test',
    jobTitle: 'test',
    jobDescription: 'test',
    codeWarLevel: 2
  }

  onCompanyChanged = (event) => this.setState({companyName: event.target.value})
  onJobTitleChanged = (event) => this.setState({jobTitle: event.target.value})
  onJobDescriptionChanged = (event) => this.setState({jobDescription: event.target.value})
  onCodewarLevelChanged = (event) => this.setState({codeWarLevel: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
    this.props.mainData.addJob(this.state)
    this.props.history.push('/jobs')
    console.log('form submitted')
  }
  render () {
    return (
      <div>
        <AddJobForm
          {...this.state}
          onCompanyChanged={this.onCompanyChanged}
          onJobTitleChanged={this.onJobTitleChanged}
          onJobDescriptionChanged={this.onJobDescriptionChanged}
          onCodewarLevelChanged={this.onCodewarLevelChanged}
          onSubmit={this.onSubmit}
        />
      </div>

    )
  }
}

export default withRouter(withMainData(AddJobContainer))
