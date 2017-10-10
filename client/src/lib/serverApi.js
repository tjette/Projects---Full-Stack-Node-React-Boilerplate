const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(`/api/${uri}`, options)
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

export const getAllJobs = () => ajaxRequest('jobs', 'GET')

export const addJob = (newJob) => ajaxRequest('jobs', 'POST', newJob)

export const deleteJob = (jobId) => ajaxRequest(`jobs/${jobId}`, 'DELETE')

export const updateJob = (job) => ajaxRequest(`jobs/${job._id}`, 'PUT', job)

export const signUpUser = (user) => ajaxRequest('signup', 'POST', user)

export const loginUser = (email, password) => ajaxRequest('login', 'POST', {email, password})

export const logoutUser = () => ajaxRequest('logout', 'GET')

export const getUser = () => ajaxRequest('get_user', 'GET')
