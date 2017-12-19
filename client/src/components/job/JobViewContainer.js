import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import withMainData from '../../components/providers/withMainData'
import JobView from './JobView'

const propTypes = {
  mainData: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

class JobViewContainer extends Component {
  constructor (props) {
    console.log(props.mainData)
    super()
    const jobId = props.match.params.jobId
    this.state = props.mainData.findJobById(jobId)
  }
  render () {
    return (
      <div>
        <JobView
          {...this.state}
        />
      </div>
    )
  }
}

JobViewContainer.propTypes = propTypes

export default withRouter(withMainData(JobViewContainer))
