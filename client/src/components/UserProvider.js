import React, {Component} from 'react'
import * as ServerApi from '../lib/serverApi'
import PropTypes from 'prop-types'

class UserProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  state = {
    user: null
  }

  methods = {
    signUpUser: (user) =>
      ServerApi.signUpUser(user)
        .then((savedUser) => this.setState({
          user: savedUser
        })),

    loginUser: (email, password) =>
      ServerApi.loginUser(email, password)
        .then((loggedInUser) => {
          this.setState({
            user: loggedInUser
          })
          return loggedInUser
        }),

    logoutUser: () =>
      ServerApi.logoutUser()
        .then(() => this.setState({ user: null }))
  }

  componentDidMount () {
    ServerApi.getUser()
      .then(user =>
        this.setState({
          user: user
        }))
  }

  render () {
    const userData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null
    }
    return React.cloneElement(this.props.children, {userData})
  }

}

export default UserProvider
