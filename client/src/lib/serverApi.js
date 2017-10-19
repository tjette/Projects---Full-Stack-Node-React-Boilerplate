const ajaxRequest = ({url, method, body, headers = {}}) => {
  const requestHeaders = new Headers({
    'Content-Type': 'application/json',
    ...headers
  })

  const options = {
    headers: requestHeaders,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(url, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  if (!response.ok) {
    return response.json()
      .then(({message, data}) => {
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}

export const getAllJobs = () => ajaxRequest({url: '/api/jobs', method: 'GET'})

export const addJob = (newJob) => ajaxRequest({url: '/api/jobs', method: 'POST', body: newJob})

export const deleteJob = (jobId) => ajaxRequest({url: `/api/jobs/${jobId}`, method: 'DELETE'})

export const updateJob = (job) => ajaxRequest({url: `/api/jobs/${job._id}`, method: 'PUT', body: job})

export const signUpUser = (user) => ajaxRequest({url: '/api/signup', method: 'POST', body: user})

export const loginUser = (email, password) => ajaxRequest({url: '/api/login', method: 'POST', body: {email, password}})

export const logoutUser = () => ajaxRequest({url: '/api/logout', method: 'GET'})

export const getUser = () => ajaxRequest({url: '/api/get_user', method: 'GET'})

export const getJobsOfUser = (job) => ajaxRequest({url: `/api/jobs/${job._id}/users`, method: 'GET'})

export const updateUserInfo = (user, info) => ajaxRequest({url: `/api/users/${user._id}`, method: 'PUT', body: info})

export const fetchCodeWarsProfile = () =>
  ajaxRequest({
    url: '/api/codewars', method: 'GET'
  })
