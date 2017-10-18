import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField'
import {withStyles} from 'material-ui/styles'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import {MenuItem} from 'material-ui/Menu'

const propTypes = {
  companyName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  codeWarLevel: PropTypes.number.isRequired,
  onCompanyNameChanged: PropTypes.func.isRequired,
  onJobTitleChanged: PropTypes.func.isRequired,
  onJobDescriptionChanged: PropTypes.func.isRequired,
  onCodewarLevelChanged: PropTypes.func.isRequired,
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

const enhancer = injectSheet(styles)

const AddJobForm = (props) => {
  return (
    <div>
      <h1>Add Job</h1>
      <form onSubmit={props.onSubmit} noValidate>
        <TextField
          label='Company' value={props.job.companyName} onChange={props.onCompanyNameChanged} />
        <TextField
          label='Job Title' value={props.job.jobTitle} onChange={props.onJobTitleChanged} />
        <TextField
          label='Job Description' value={props.job.jobDescription} onChange={props.onJobDescriptionChanged} />
        <TextField
          label='Codewars Level' value={props.job.codeWarsLevel} onChange={props.onCodewarsLevelChanged} />
        <div>
          <Select
            value={props.addCategorySelect}
            onChange={props.onAddCategorySelect}
          >
            <MenuItem value=''>
              Select Category
            </MenuItem>
            {
              props.jobCategories.map(c => <MenuItem value={c}>{c}</MenuItem>)
            }
          </Select>
          <Button onClick={props.addJobCategory}>
            Add Category
          </Button>
        </div>
        <TextField
          label='Apply By'
          id='date'
          type='date'
          value={props.applyBy}
          onChange={props.onApplyByChanged}
        />
        <Button type='submit'>Submit Job</Button>
        <Link to='/'>Cancel</Link>
      </form>

    </div>
  )
}

AddJobForm.propTypes = propTypes

export default enhancer(AddJobForm)
