import React from 'react'
import {Route} from 'react-router-dom'
import JobList from './JobList'
import AddJobContainer from './AddJobContainer'
import EditJobContainer from './EditJobContainer'

const Jobs = () => {
  return (
    <div>
      <Route path='/jobs' exact render={() => <JobList />} />
      <Route
        path='/jobs/add'
        render={(routeProps) => <AddJobContainer history={routeProps.history} />} />
      <Route
        path='/jobs/edit/:jobId'
        render={(routeProps) =>
          <EditJobContainer
            history={routeProps.history}
            match={routeProps.match}
          />}
      />
    </div>
  )
}

export default Jobs
