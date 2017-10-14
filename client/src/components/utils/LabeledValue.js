import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

const LabeledValue = ({label, children}) => {
  return (
    <h3>{label}: {children}</h3>
  )
}

LabeledValue.propTypes = propTypes

export default LabeledValue
