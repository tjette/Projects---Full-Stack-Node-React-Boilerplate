import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import injectSheet from 'react-jss'

const propTypes = {
  userData: PropTypes.object.isRequired
}

const styles = {
  root: {
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: 'Gloria Hallelujah',
    color: 'black'
  }
}

const enhancer = injectSheet(styles)

const Header = (props) => {
  return (
    <header>
      <nav>
        <AppBar classes={{root: props.classes.root}} position='static'>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/jobs'>Jobs</NavItem>
          { !props.userData.user ? <NavItem to='/signup'>Sign Up</NavItem> : <NavItem to='/' onClick={() => props.userData.logoutUser()}>Log Out</NavItem> }
          { props.userData.user ? <NavItem to='/profile'>Profile</NavItem>
            : <NavItem to='/login'>Login</NavItem>
          }
        </AppBar>
      </nav>
    </header>
  )
}
Header.propTypes = propTypes

export default enhancer(Header)
