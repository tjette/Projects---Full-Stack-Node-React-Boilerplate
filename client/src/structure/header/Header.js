import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'
import withUserData from '../../components/providers/withUserData'
import injectSheet from 'react-jss'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

const propTypes = {
  userData: PropTypes.object.isRequired
}

const styles = {
  root: {
    top: 0,
    left: 20,
    right: 20,
    height: 50,
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontFamily: 'Gloria Hallelujah',
    color: 'black'
  }
}

const enhancer = injectSheet(styles)

const Header = (props) => {
  return (
    <header>
      <nav style={styles.root}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        {props.userData.user ? <NavItem to='/jobs'>Jobs</NavItem> : null }
        { props.userData.user ? <NavItem to='/profile'>Profile</NavItem> : <NavItem to='/login'>Login</NavItem>}
        { !props.userData.user ? <NavItem to='/signup'>Sign Up</NavItem> : <a href='/' onClick={props.userData.logoutUser}>Log Out</a> }
      </nav>
    </header>
  )
}
Header.propTypes = propTypes

export default enhancer(withUserData(Header))
