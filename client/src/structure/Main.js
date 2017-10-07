import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/Home'
import SignupContainer from '../components/signup/SignupContainer'
import SignupEmployerPart1 from '../components/signup/SignupEmployerPart1'
import LoginContainer from '../components/auth/LoginContainer'
import Jobs from '../components/job/Jobs'

const Main = (props) => {
  return (
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/signup' render={() => <SignupContainer userData={props.userData} />} />
      <Route path='/employerSignup' render={() => <SignupEmployerPart1 />} />
      <Route path='/login' render={() => <LoginContainer />} />
      <Route path='/jobs' render={() => <Jobs />} />
    </div>
  )
}

export default Main
