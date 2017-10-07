import React, {Component} from 'react'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
import {withRouter} from 'react-router-dom'

class LoginContainer extends Component {
  static propTypes = {
    userData: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  state = {
    email: '',
    password: ''
  }

  onEmailChanged = (event) => this.setState({email: event.target.value})
  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
    // this.props.domainData.loginUser(this.state.email, this.state.password)
    this.props.userData.loginUser(this.state.email, this.state.password)
      .then((user) => {
        this.props.history.push('/')
        alert(`You are logged in ${user.local.firstName}`)
      })
  }
  render () {
    return (
      <LoginForm
        {...this.state}
        onEmailChanged={this.onEmailChanged}
        onPasswordChanged={this.onPasswordChanged}
        onSubmit={this.onPasswordChanged}
        userData={this.userData}
      />
    )
  }
}

export default withRouter(LoginContainer)
