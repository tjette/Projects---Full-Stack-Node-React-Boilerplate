import {Component} from 'react'
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
    user: null,
    profile: null,
    loading: true
  }

  handleServerApiError = err => {
    alert(err)
    throw err
  }

  methods = {
    signUpUser: (user) =>
      ServerApi.signUpUser(user)
        .then(user => this.onUserUpdated(user))
        .catch(this.handleServerApiError),

    loginUser: (email, password) =>
      ServerApi.loginUser(email, password)
        .then(user => this.onUserUpdated(user))
        .catch(this.handleServerApiError),

    logoutUser: () =>
      ServerApi.logoutUser()
        .then(() => this.onUserUpdated(null)),

    updateUserInfo: (info) =>
      ServerApi.updateUserInfo(this.state.user, info)
        .then(user => this.onUserUpdated(user)),

    getUser: () =>
      ServerApi.getUser()
        .then(user => this.onUserUpdated(user))
  }

  onUserUpdated = user => {
    if (!user) {
      this.setState({
        user: null,
        profile: null
      })
    } else if (!user.local.codeWarsToken || !user.local.codeWarsUserName) {
      console.log('no codewars info found')
      this.setState({user})
    } else {
      console.log('about to fetch codewars info')
      ServerApi.fetchCodeWarsProfile()
        .then(profile => {
          return profile
        })
        .then(profile => this.setState({user, profile}))
    }
    return user
  }

  componentDidMount () {
    this.methods.getUser()
      .then(() => this.setState({loading: false}))
  }

  getChildContext () {
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
    console.log('Loading boolean:', this.state.loading)
    return !this.state.loading ? this.props.children : null
  }
}

export default UserProvider
