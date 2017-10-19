import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import TextField from 'material-ui/TextField'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import {MenuItem} from 'material-ui/Menu'
import Chip from 'material-ui/Chip'
import AddCircle from 'material-ui-icons/AddCircle'
import IconButton from 'material-ui/IconButton'

const propTypes = {
  companyName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  codeWarsLevel: PropTypes.number.isRequired,
  onCompanyNameChanged: PropTypes.func.isRequired,
  onJobTitleChanged: PropTypes.func.isRequired,
  onJobDescriptionChanged: PropTypes.func.isRequired,
  onCodewarsLevelChanged: PropTypes.func.isRequired,
  onApplyByChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  jobCategories: PropTypes.array.isRequired,
  addJobCategory: PropTypes.func.isRequired,
  onRequestDelete: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}
const styles = {
  container: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    border: {
      color: 'black',
      width: 3,
      style: 'solid'
    }
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '80%'
  },
  labelInput: {
    margin: 20
  },
  header: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  dropdownWrapper: {
    margin: 20,
  },
  dropdown: {
    width: '50%'
  }
}

const enhancer = injectSheet(styles)

const AddJobForm = (props) => {
  console.log(props)
  return (
    <div className={props.classes.container}>
      <form onSubmit={props.onSubmit} className={props.classes.form} noValidate>
        <TextField
          className={props.classes.labelInput}
          label='Company' value={props.job.companyName}
          onChange={props.onCompanyNameChanged}
        />
        <TextField
          className={props.classes.labelInput}
          label='Job Title' value={props.job.jobTitle}
          onChange={props.onJobTitleChanged}
        />
        <TextField
          className={props.classes.labelInput}
          label='Job Description'
          value={props.job.jobDescription}
          onChange={props.onJobDescriptionChanged}
        />
        <TextField
          className={props.classes.labelInput}
          label='Codewars Level'
          value={props.job.codeWarsLevel}
          onChange={props.onCodewarsLevelChanged}
        />
        <div className={props.classes.dropdownWrapper}>
          <Select
            className={props.classes.dropdown}
            value={props.addCategorySelect}
            onChange={props.onAddCategorySelect}
          >
            <MenuItem value=''>
              Select Category
            </MenuItem>
            {
              props.jobCategories
                .filter(c => !props.job.categories.includes(c))
                .map(c => <MenuItem value={c}>{c}</MenuItem>)
            }
          </Select>
          <IconButton 
            className={props.classes.labelInput} 
            onClick={props.addJobCategory}
            disabled={!props.addCategorySelect}
          >
            <AddCircle />
          </IconButton>
          <div>
            {
              props.job.categories.map(
                c => 
                  <Chip label={c} onRequestDelete={() => props.onDeleteCategory(c)}>
                    Delete Me
                  </Chip>
              )
            }
          </div>
        </div>
        <TextField
          className={props.classes.labelInput}
          label='Apply By'
          id='date'
          type='date'
          value={props.job.applyBy}
          onChange={props.onApplyByChanged}
          InputLabelProps={{shrink: true}}
        />
        <Button
          className={props.classes.labelInput}
          disabled={!props.job.companyName || !props.job.jobTitle || !props.job.jobDescription || !props.job.codeWarsLevel || !props.job.categories || !props.job.applyBy}
          raised type='submit'
        >
          Submit Job
        </Button>
        <Button
          className={props.classes.labelInput}
          raised
        >
          <Link to='/'>Cancel</Link>
        </Button>
      </form>

    </div>
  )
}

AddJobForm.propTypes = propTypes

export default enhancer(AddJobForm)
