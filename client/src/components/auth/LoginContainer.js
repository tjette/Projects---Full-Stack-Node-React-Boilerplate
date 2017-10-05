import React, {Component} from 'react'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
  }
  render () {
    return (
      <div>
        <LoginForm
          {...this.state}
        />
      </div>
    )
  }
}

export default LoginContainer
