import React from 'react'
import {NavLink} from 'react-router-dom'

const NavItem = (props) => {
  return (
    <div>
      <NavLink to={props.to}>{props.children}</NavLink>
    </div>
  )
}

export default NavItem
