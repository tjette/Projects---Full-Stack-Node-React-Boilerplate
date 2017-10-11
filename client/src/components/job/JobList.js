import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import JobCard from './JobCard'
import withMainData from '../../components/providers/withMainData'

const JobList = (props) => {
  return (
    <div>
      <h1>Job List</h1>
      <Link to='/jobs/add'>Add Job</Link>
      <div>

        {
          props.mainData.jobs.length > 0
            ? props.mainData.jobs.map(job =>
              <JobCard
                key={job._id}
                job={job}
                onDelete={() => props.mainData.deleteJob(job._id)}
                onEdit={() => props.history.push(`/jobs/edit/${job._id}`)}
              />
            )
            : <h1>No Jobs have been added</h1>
        }
      </div>
    </div>
  )
}

export default withRouter(withMainData(JobList))
