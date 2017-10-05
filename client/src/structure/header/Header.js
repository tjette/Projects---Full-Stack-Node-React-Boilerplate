import React from 'react'
import NavItem from './NavItem'

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
        <NavItem to='/signUp'>Sign Up</NavItem>
        <NavItem to='/login'>Login</NavItem>
      </nav>
    </header>
  )
}

export default Header
