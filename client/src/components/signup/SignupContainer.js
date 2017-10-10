import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import withUserData from '../../components/providers/withUserData'
import PropTypes from 'prop-types'
import SignupJobSeekerPart1 from './SignupJobSeekerPart1'
import SignupJobSeekerPart2 from './SignupJobSeekerPart2'
import SignupJobSeekerPart3 from './SignupJobSeekerPart3'
import SignupEmployerPart1 from './SignupEmployerPart1'
import SignupChooser from './SignupChooser'

class SignupContainer extends Component {
  static propTypes = {
    userData: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    jobSeeker: false,
    employer: false
  }

  onFirstNameChanged = (event) => this.setState({firstName: event.target.value})
  onLastNameChanged = (event) => this.setState({lastName: event.target.value})
  onEmailChanged = (event) => this.setState({email: event.target.value})
  onCompanyChanged = (event) => this.setState({company: event.target.value})
  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onSubmitJobSeekerPart1 = (event) => {
    event.preventDefault()
    this.props.userData.signUpUser(this.state)
    alert(`Welcome, ${this.state.firstName}`)
    console.log('on submit triggered')
    this.setState({jobSeeker: true})
    this.props.history.push('/signup/jobSeekerpart2')
  }
  onSubmitEmployerPart1 = (event) => {
    event.preventDefault()
    this.props.userData.signUpUser(this.state)
    alert(`Welcome, ${this.state.firstName}`)
    console.log('on submit triggered')
    this.setState({employer: true})
    this.props.history.push('jobs/add')
  }

  render () {
    const {match} = this.props

    return (
      <div>
        <Route path={`${match.path}/job-seeker`}
          render={() =>
            <SignupJobSeekerPart1
              {...this.state}
              onFirstNameChanged={this.onFirstNameChanged}
              onLastNameChanged={this.onLastNameChanged}
              onEmailChanged={this.onEmailChanged}
              onPasswordChanged={this.onPasswordChanged}
              onSubmitJobSeekerPart1={this.onSubmitJobSeekerPart1}
            />} />
        <Route exact path={`${match.path}/jobSeekerpart2`}
          render={() =>
            <SignupJobSeekerPart2
              {...this.state}
              onSubmitJobSeekerPart2={this.onSubmitJobSeekerPart2}
            />} />
        <Route exact path={`${match.path}/jobSeekerpart3`}
          render={() =>
            <SignupJobSeekerPart3
              {...this.state}
              onSubmitJobSeekerPart3={this.onSubmitJobSeekerPart3}
            />} />
        <Route path={`${match.path}/employer`}
          render={() =>
            <SignupEmployerPart1
              {...this.state}
              onFirstNameChanged={this.onFirstNameChanged}
              onLastNameChanged={this.onLastNameChanged}
              onEmailChanged={this.onEmailChanged}
              onCompanyChanged={this.onCompanyChanged}
              onPasswordChanged={this.onPasswordChanged}
              onSubmitJobSeekerPart1={this.onSubmitJobSeekerPart1}
            />} />
        <Route exact path={match.path} component={SignupChooser} />
      </div>
    )
  }
}

export default withRouter(withUserData(SignupContainer))
