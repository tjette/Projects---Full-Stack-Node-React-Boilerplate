import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import withUserData from '../../components/providers/withUserData'

const propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  codeWarLevel: PropTypes.string.isRequired,
  onJobTitleChanged: PropTypes.string.isRequired,
  onCompanyNameChanged: PropTypes.string.isRequired,
  onJobDescriptionChanged: PropTypes.string.isRequired,
  onCodewarLevelChanged: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired
}
const styles = {

}
const enhancer = injectSheet(styles)

const EditJob = (props) => {
  return (
    <div>
      <div>
        <h1>{props.jobTitle}</h1>
      </div>
      <div >
        <form onSubmit={props.onSubmit}>
          <div>
            <label>Company Name</label>
            <input type='text' value={props.companyName} onChange={props.onCompanyNameChanged} />
          </div>
          <div>
            <label>JobTitle</label> : null
            <input type='text' value={props.jobTitle} onChange={props.onJobTitleChanged} />
          </div>
          <div>
            <label>Job Description</label>
            <input type='text' value={props.jobDescription} onChange={props.onJobDescriptionChanged} />
          </div>
          <div>
            <label>Codewar Level</label>
            <input type='text' value={props.codeWarLevel} onChange={props.onCodewarLevelChanged} />
          </div>
          <div>
            <button type='submit'>Save Job</button>
          </div>
        </form>
      </div>
    </div>
  )
}
EditJob.propTypes = propTypes

export default enhancer(withUserData(EditJob))
