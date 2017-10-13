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
    profile: null
  }

  methods = {
    signUpUser: (user) =>
      ServerApi.signUpUser(user)
        .then(user => this.onUserUpdated(user))
        .catch(err => alert(err)),

    loginUser: (email, password) =>
      ServerApi.loginUser(email, password)
        .then(user => this.onUserUpdated(user))
        .catch((err) => alert(err)),

    logoutUser: () =>
      ServerApi.logoutUser()
        .then(() => this.onUserUpdated(null)),

    saveCodeWarsInfo: (info) =>
      ServerApi.saveCodeWarsInfo(this.state.user, info)
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
          console.log(profile)
          return profile
        })
        .then(profile => this.setState({user, profile}))
    }
    return user
  }

  componentDidMount () {
    this.methods.getUser()
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
    return this.props.children
  }
}

export default UserProvider
