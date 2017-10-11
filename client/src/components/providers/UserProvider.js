import React, {Component} from 'react'
import * as ServerApi from '../../lib/serverApi'
import PropTypes from 'prop-types'

class UserProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  static childContextTypes = {
    userData: PropTypes.object.isRequired
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
        .then(() => this.setState({ user: null })),

    saveCodeWarsInfo: (info) =>
      ServerApi.saveCodeWarsInfo(this.state.user, info)
        .then(() => this.methods.getUser()),

    getUser: () =>
      ServerApi.getUser()
        .then(user => {
          this.setState({
            user: user
          })
          if (user) {
            this.methods.fetchCodeWarsProfile()
          }
        }),

    fetchCodeWarsProfile: () =>
      ServerApi.fetchCodeWarsProfile(this.state.user)
        .then(profile =>
          this.setState({
            profile: profile
          }))
  }

  componentDidMount () {
    this.methods.getUser()
  }

  getChildContext () {
    console.log('in get child context')
    return {
      userData: {
        ...this.state,
        ...this.methods,
        loggedIn: this.state.user != null,
        loggedOut: this.state.user == null
      }
    }
  }
  render () {
    console.log('in render')
    return this.props.children
  }
}

export default UserProvider
