import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
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
    password: ''
  }

  onFirstNameChanged = (event) => this.setState({firstName: event.target.value})
  onLastNameChanged = (event) => this.setState({lastName: event.target.value})
  onEmailChanged = (event) => this.setState({email: event.target.value})
  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onSubmitJobSeekerPart1 = (event) => {
    event.preventDefault()
    this.props.userData.signUpUser(this.state)
    alert(`Welcome, ${this.state.firstName}`)
    console.log('on submit triggered', this.state)
    this.props.history.push('/signup/job-seeker-part2')
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
        <Route exact path={`${match.path}/job-seeker-part2`}
          render={() =>
            <SignupJobSeekerPart2
              {...this.state}
              onSubmitJobSeekerPart2={this.onSubmitJobSeekerPart2}
            />} />
        <Route exact path={`${match.path}/job-seeker-part3`}
          render={() =>
            <SignupJobSeekerPart3
              {...this.state}
              onSubmitJobSeekerPart3={this.onSubmitJobSeekerPart3}
            />} />
        <Route path={`${match.path}/employer`} component={SignupEmployerPart1} />
        <Route exact path={match.path} component={SignupChooser} />
      </div>
    )
  }
}

export default withRouter(SignupContainer)
