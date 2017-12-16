import React from 'react'
import {Route} from 'react-router-dom'
import JobContainer from './JobContainer'
import AddJobContainer from './AddJobContainer'
import EditJobContainer from './EditJobContainer'
import JobView from './JobView'

const Jobs = (props) => {
  return (
    <div>
      <Route path='/jobs' exact render={(routeProps) => <JobContainer history={routeProps.history} />} />
      <Route
        path='/jobs/add'
        render={(routeProps) => <AddJobContainer history={routeProps.history} />} />
      <Route
        path='/jobs/edit/:jobId'
        render={() =>
          <EditJobContainer
          />}
      />
      <Route
        path='/jobs/jobView'
        render={() => <JobView />}
      />
    </div>
  )
}

export default Jobs
