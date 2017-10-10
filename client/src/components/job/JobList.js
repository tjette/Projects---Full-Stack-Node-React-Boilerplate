import React from 'react'
import {Link} from 'react-router-dom'
import JobCard from './JobCard'

const JobList = (props) => {
  return (
    <div>
      <h1>Job List</h1>
      <Link to='/jobs/add'>Add Job</Link>
      <div>

        {
          props.jobData.jobs.length > 0
            ? props.jobData.jobs.map(job =>
              <JobCard
                key={job._id}
                job={job}
                onDelete={() => props.jobData.deleteJob(job._id)}
                onEdit={() => props.history.push(`/jobs/edit/${job._id}`)}
              />
            )
            : <h1>No Jobs have been added</h1>
        }
      </div>
    </div>
  )
}

export default JobList
