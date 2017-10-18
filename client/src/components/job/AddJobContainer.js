import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import AddJobForm from './AddJobForm'
import withMainData from '../../components/providers/withMainData'
import jobCategories from '../../lib/jobCategories'

const propTypes = {
  mainData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

class AddJobContainer extends Component {
  state = {
    job: {
      companyName: 'test',
      jobTitle: 'test',
      jobDescription: 'test',
      codeWarsLevel: 2,
      categories: [],
      applyBy: ''
    },
    addCategorySelect: ''
  }

  onCompanyNameChanged = (event) => this.setState({
    job: {
      ...this.state.job,
      companyName: event.target.value
    }
  })

  onJobTitleChanged = (event) => this.setState({
    job: {
      ...this.state.job,
      jobTitle: event.target.value
    }
  })

  onJobDescriptionChanged = (event) => this.setState({
    job: {
      ...this.state.job,
      jobDescription: event.target.value
    }
  })
 
  onCodewarsLevelChanged = (event) => this.setState({
    job: {
      ...this.state.job,
      codeWarsLevel: event.target.value
    }
  })

  onAddCategorySelect = (event) => this.setState({addCategorySelect: event.target.value})

  addJobCategory = (event) => {
    const categories = this.state.job.categories
    categories.push(this.state.addCategorySelect)
    categories.sort()
    this.setState({
      job: {
        ...this.state.job,
        categories
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.mainData.addJob(this.state.job)
    this.props.history.push('/jobs')
    console.log('form submitted')
  }

  render () {
    return (
      <div>
        <AddJobForm
          {...this.state}
          onCompanyNameChanged={this.onCompanyNameChanged}
          onJobTitleChanged={this.onJobTitleChanged}
          onJobDescriptionChanged={this.onJobDescriptionChanged}
          onCodewarsLevelChanged={this.onCodewarsLevelChanged}
          onApplyByChanged={this.onApplyByChanged}
          onAddCategorySelect={this.onAddCategorySelect}
          jobCategories={jobCategories}
          addJobCategory={this.addJobCategory}
          onSubmit={this.onSubmit}
        />
      </div>

    )
  }
}

AddJobContainer.propTypes = propTypes

export default withRouter(withMainData(AddJobContainer))
