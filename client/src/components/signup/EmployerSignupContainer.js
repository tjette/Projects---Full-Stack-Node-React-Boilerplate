import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import withUserData from '../../components/providers/withUserData'
import PropTypes from 'prop-types'
import SignupEmployerPart1 from './SignupEmployerPart1'
import SignupChooser from './SignupChooser'

class EmployerSignupContainer extends Component {
  static propTypes = {
    userData: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    part1: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      companyName: ''
    }
  }

  onFirstNameChanged = (event) => this.setState({
    part1: {
      ...this.state.part1,
      firstName: event.target.value
    }
  })

  onLastNameChanged = (event) => this.setState({
    part1: {
      ...this.state.part1,
      lastName: event.target.value
    }
  })

  onEmailChanged = (event) => this.setState({
    part1: {
      ...this.state.part1,
      email: event.target.value
    }
  })

  onPasswordChanged = (event) => this.setState({
    part1: {
      ...this.state.part1,
      password: event.target.value
    }
  })

  onCompanyNameChanged = (event) => this.setState({
    part1: {
      ...this.state.part1,
      companyName: event.target.value
    }
  })

  onSubmitEmployerPart1 = (event) => {
    event.preventDefault()
    this.props.userData.signUpUser(this.state.part1)
      .then(() => {
        alert(`Congratulations, you have an account, ${this.state.part1.firstName}! You will now be transported to the Add Job page.`)
        this.props.history.push('jobs/add')
      })
  }

  render () {
    const {match} = this.props

    return (
      <div>
        <Route path={`/employerSignup`}
          render={() =>
            <SignupEmployerPart1
              {...this.state.part1}
              onFirstNameChanged={this.onFirstNameChanged}
              onLastNameChanged={this.onLastNameChanged}
              onEmailChanged={this.onEmailChanged}
              onPasswordChanged={this.onPasswordChanged}
              onSubmitEmployerPart1={this.onSubmitEmployerPart1}
              onCompanyNameChanged={this.onCompanyNameChanged}
          />} />
      </div>
    )
  }
}

export default withRouter(withUserData(EmployerSignupContainer))
