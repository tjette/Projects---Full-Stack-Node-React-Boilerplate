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
    part1: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isEmployer: false
    },
    part2: {
      codeWarsToken: '',
      codeWarsUserName: ''
    },
    part3: {
      resumeUrl: ''
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
  onCodeWarsTokenChanged = (event) => this.setState({
    part2: {
      ...this.state.part2,
      codeWarsToken: event.target.value
    }
  })

  onCodeWarsUserNameChanged = (event) => this.setState({
    part2: {
      ...this.state.part2,
      codeWarsUserName: event.target.value
    }
  })

  onResumeUrlChanged = (event) => this.setState({
    part3: {
      ...this.state.part3,
      resumeUrl: event.target.value
    }
  })
  onSubmitJobSeekerPart1 = (event) => {
    console.log('Hi')
    event.preventDefault()
    this.props.userData.signUpUser(this.state.part1)
      .then(() => {
        console.log('on submit triggered')
        this.props.history.push('/signup/job-seeker-part2')
      })
      .catch((error) => {
        alert(error)
      })
  }

  onSubmitJobSeekerPart2 = (event) => {
    event.preventDefault()
    this.props.userData.updateUserInfo(this.state.part2)
      .then(() => {
        console.log('savedCodeWarsInfo method fired')
        this.props.history.push('/signup/job-seeker-part3')
      })
      .catch((error) => {
        alert(error)
      })
  }

  onSubmitJobSeekerPart3 = (event) => {
    event.preventDefault()
    this.props.userData.updateUserInfo(this.state.part3)
      .then(() => {
        console.log('update user Info method fired')
        this.props.history.push('/jobs')
      })
      .catch((error) => {
        alert(error)
      })
  }
  onSubmitEmployerPart1 = (event) => {
    event.preventDefault()
    this.props.userData.signUpUser(this.state.part1)
      .then(() => {
        alert(`Welcome, ${this.state.firstName}`)
        console.log('on submit triggered')
        this.setState({isEmployer: true})
        this.props.history.push('jobs/add')
      })
  }

  render () {
    const {match} = this.props

    return (
      <div>
        <Route path={`${match.path}/job-seeker`}
          render={() =>
            <SignupJobSeekerPart1
              {...this.state.part1}
              onFirstNameChanged={this.onFirstNameChanged}
              onLastNameChanged={this.onLastNameChanged}
              onEmailChanged={this.onEmailChanged}
              onPasswordChanged={this.onPasswordChanged}
              onSubmitJobSeekerPart1={this.onSubmitJobSeekerPart1}
            />} />
        <Route exact path={`${match.path}/job-seeker-part2`}
          render={() =>
            <SignupJobSeekerPart2
              {...this.state.part2}
              onSubmitJobSeekerPart2={this.onSubmitJobSeekerPart2}
              onCodeWarsTokenChanged={this.onCodeWarsTokenChanged}
              onCodeWarsUserNameChanged={this.onCodeWarsUserNameChanged}
            />} />
        <Route exact path={`${match.path}/job-seeker-part3`}
          render={() =>
            <SignupJobSeekerPart3
              {...this.state.part3}
              onSubmitJobSeekerPart3={this.onSubmitJobSeekerPart3}
              onResumeUrlChanged={this.onResumeUrlChanged}
            />} />
        <Route path={`${match.path}/employer`}
          render={() =>
            <SignupEmployerPart1
              {...this.state.part1}
              onFirstNameChanged={this.onFirstNameChanged}
              onLastNameChanged={this.onLastNameChanged}
              onEmailChanged={this.onEmailChanged}
              onPasswordChanged={this.onPasswordChanged}
              onSubmitEmployerPart1={this.onSubmitEmployerPart1}
            />} />
        <Route exact path={match.path} component={SignupChooser} />
      </div>
    )
  }
}

export default withRouter(withUserData(SignupContainer))
