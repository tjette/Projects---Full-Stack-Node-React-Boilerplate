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
    left: 0,
    right: 20,
    height: 50,
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    fontFamily: 'Gloria Hallelujah',
    color: 'black'
  }
}

const enhancer = injectSheet(styles)

const Header = (props) => {
  console.log(props)
  return (
    <header>
      <AppBar position='static' style={styles.root}>
        <Toolbar>
          <nav>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/about'>About</NavItem>
            <NavItem to='/jobs'>Jobs</NavItem>
            { !props.userData.user ? <NavItem to='/signup'>Sign Up</NavItem> : <a onClick={props.userData.logoutUser}>Log Out</a> }
            { props.userData.user ? <NavItem to='/profile'>Profile</NavItem>
              : <NavItem to='/login'>Login</NavItem>
            }
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  )
}
Header.propTypes = propTypes

export default withUserData(Header)
