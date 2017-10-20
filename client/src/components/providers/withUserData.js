import React, {Component} from 'react'
import PropTypes from 'prop-types'

const defaultUserData = {
  user: {}
}
const withUserData = (BaseComponent) => class WithUserData extends Component {
  static contextTypes = {
    userData: PropTypes.object.isRequired
  }
  render () {
    console.log('User data in hoc', this.context.userData)
    return (
      <BaseComponent
        userData={this.context.userData || defaultUserData}
        {...this.props}
      />
    )
  }
}

export default withUserData
