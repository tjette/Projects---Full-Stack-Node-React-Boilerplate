import React from 'react'
import {Route} from 'react-router-dom'
import JobContainer from './JobContainer'
import AddJobContainer from './AddJobContainer'
import EditJobContainer from './EditJobContainer'

const Jobs = (props) => {
  return (
    <div>
      <Route path='/jobs' exact render={() => <JobContainer />} />
      <Route
        path='/jobs/add'
        render={(routeProps) => <AddJobContainer history={routeProps.history} />} />
      <Route
        path='/jobs/edit/:jobId'
        render={() =>
          <EditJobContainer
          />}
      />
    </div>
  )
}

export default Jobs
