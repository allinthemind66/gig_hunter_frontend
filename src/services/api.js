const API_ROOT = 'http://localhost:3000/api/v1'

const token = localStorage.getItem('token')
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
}

const login = (data) => {
  // console.log(data)
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({user: data})
  })
  .then(resp => resp.json())
}

const signUp = (data) => {
  debugger
  return fetch(`${API_ROOT}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
}

const getCurrentUser = () => {
  console.log('token is', token)
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(resp => resp.json())
}


export const api = {
  auth: {
    login: login,
    getCurrentUser,
    headers,
    signUp
  }
}
