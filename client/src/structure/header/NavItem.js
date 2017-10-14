import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

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
      borderRadius: 10
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

NavItem.propTypes = propTypes

export default enhancer(NavItem)
