import React from 'react'
import {Route} from 'react-router-dom'
import SignupContainer from '../components/signup/SignupContainer'
import SignupEmployerPart1 from '../components/signup/SignupEmployerPart1'

const Main = () => {
  return (
    <div>
      <Route path='/' render={() => <SignupContainer />} />
      <Route path='/employerSignup' render={() => <SignupEmployerPart1 />} />
    </div>
  )
}

export default Main
