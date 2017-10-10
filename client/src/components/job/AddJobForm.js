import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import MenuItem from 'material-ui/Menu/MenuItem'
import {FormControl} from 'material-ui/Form'
import {InputLabel} from 'material-ui/Input'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

const propTypes = {
  companyName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  codeWarLevel: PropTypes.number.isRequired,
  applyBy: PropTypes.string.isRequired,
  onCompanyChanged: PropTypes.func.isRequired,
  onJobTitleChanged: PropTypes.func.isRequired,
  onJobDescriptionChanged: PropTypes.func.isRequired,
  onCodewarLevelChanged: PropTypes.func.isRequired,
  onApplyByChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  form: {
    display: 'flex',
    justityContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    opacity: 0.7

  }
}

const AddJobForm = (props) => {
  return (
    <div>
      <h1>Add Job</h1>
      <form onSubmit={props.onSubmit}>
        <TextField
          label='Company' value={props.companyName} onChange={props.onCompanyChanged} />
        <TextField
          label='Job Title' value={props.jobTitle} onChange={props.onJobTitleChanged} />
        <TextField
          label='Job Description' value={props.jobDescription} onChange={props.onJobDescriptionChanged} />
        <TextField
          label='Codewar Level' value={props.codeWarLevel} onChange={props.onCodewarLevelChanged} />
        <TextField
          label='Apply By' value={props.applyBy} onChange={props.onApplyByChanged} />
        <Button type='submit'>Submit Job</Button>
        <Link to='/'>Cancel</Link>
      </form>

    </div>
  )
}

AddJobForm.propTypes = propTypes

export default AddJobForm
