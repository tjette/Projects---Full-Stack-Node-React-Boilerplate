import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
const defaultProps = {
  children: ''
}
const LabeledValue = ({label, children}) => {
  return (
    <h3>{label}: {children}</h3>
  )
}

LabeledValue.propTypes = propTypes
LabeledValue.defaultProps = defaultProps

export default LabeledValue
