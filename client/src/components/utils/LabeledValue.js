import React from 'react'

const LabeledValue = ({label, children}) => {
  return (
    <h3>{label}: {children}</h3>
  )
}

export default LabeledValue
