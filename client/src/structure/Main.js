import React from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Home from '../components/Home'
import SignupContainer from '../components/signup/SignupContainer'
import SignupEmployerPart1 from '../components/signup/SignupEmployerPart1'
import LoginContainer from '../components/auth/LoginContainer'
import Jobs from '../components/job/Jobs'
import ProfileContainer from '../components/profile/ProfileContainer'

const propTypes = {
  classes: PropTypes.object.isRequired
}
const styles = {
  main: {
    overflow: 'scroll',
    position: 'fixed',
    top: 50,
    bottom: 30,
    left: 0,
    right: 0
  }
}

const enhancer = injectSheet(styles)

const Main = (props) => {
  return (
    <div className={props.classes.main}>
      <Route path='/' exact component={Home} />
      <Route path='/signup' render={() => <SignupContainer />} />
      <Route path='/employerSignup' render={() => <SignupEmployerPart1 />} />
      <Route path='/login' render={() => <LoginContainer />} />
      <Route path='/jobs' render={() => <Jobs />} />
      <Route path='/profile' render={() => <ProfileContainer />} />
    </div>
  )
}

Main.propTypes = propTypes

export default enhancer(Main)
