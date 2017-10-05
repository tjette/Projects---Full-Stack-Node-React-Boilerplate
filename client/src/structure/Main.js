import React from 'react'
import {Route} from 'react-router-dom'
import SignupContainer from '../components/signup/SignupContainer'
import SignupEmployerPart1 from '../components/signup/SignupEmployerPart1'
import LoginContainer from '../components/auth/LoginContainer'
import Jobs from '../components/job/Jobs'

const Main = () => {
  return (
    <div>
      <Route path='/' render={() => <SignupContainer />} />
      <Route path='/employerSignup' render={() => <SignupEmployerPart1 />} />
      <Route path='/login' render={() => <LoginContainer />} />
      <Route path='/jobs' render={() => <Jobs />} />
      <Route path='/login' render={() => <LoginContainer />} />
    </div>
  )
}

export default Main
