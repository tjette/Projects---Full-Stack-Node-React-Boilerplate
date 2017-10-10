import React, {Component} from 'react'
import PropTypes from 'prop-types'

const withMainData = (BaseComponent) => class WithMainData extends Component {
  static contextTypes = {
    mainData: PropTypes.object.isRequired
  }
  render () {
    console.log(this.context.mainData)
    return (
      <BaseComponent
        mainData={this.context.mainData}
        {...this.props}
      />
    )
  }
}

export default withMainData
