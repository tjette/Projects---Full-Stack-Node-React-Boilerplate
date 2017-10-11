import React from 'react'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'

const styles = {
  navLink: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    '&:hover': {
      color: 'black',
      backgroundColor: '#ccc',
      borderRadius: 10,
    }
  }
}

const enhancer = injectSheet(styles)

const NavItem = (props) => {
  return (
    <div>
      <NavLink className={props.classes.navLink} to={props.to}>{props.children}</NavLink>
    </div>
  )
}

export default enhancer(NavItem)
