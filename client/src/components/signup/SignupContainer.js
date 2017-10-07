import React, {Component} from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import SignupJobSeekerPart1 from './SignupJobSeekerPart1'
import SignupEmployerPart1 from './SignupEmployerPart1'
import SignupChooser from './SignupChooser'

class SignupContainer extends Component {

  render () {
    const {match} = this.props
    return (
      <div>
        <Route path={`${match.path}/job-seeker`} component={SignupJobSeekerPart1} />
        <Route path={`${match.path}/employer`} component={SignupEmployerPart1} />
        <Route exact path={match.path} component={SignupChooser} />
      </div>
    )
  }
}

export default withRouter(SignupContainer)
