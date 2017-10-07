import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'

const propTypes = {
  userData: PropTypes.object.isRequired
}

const styles = {
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'space-around',
    fontFamily: 'Gloria Hallelujah',
    color: 'black'
  }
}

const Header = (props) => {
  return (
    <header>
      <nav style={styles.header}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/jobs'>Jobs</NavItem>
        { !props.userData.user ? <NavItem to='/signup'>Sign Up</NavItem> : <NavItem to='/' onClick={() => props.userData.logoutUser()}>Log Out</NavItem> }
        { props.userData.user ? <NavItem to='/profile'>Profile</NavItem>
          : <NavItem to='/login'>Login</NavItem>
        }
      </nav>
    </header>
  )
}
Header.propTypes = propTypes

export default Header
