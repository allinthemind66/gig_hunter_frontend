const API_ROOT = 'http://localhost:3000/api/v1'

const headers = {
  "Content-Type": "application/json",
    Accepts: "application/json"
}

const login = (data) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  }).then(resp => resp.json())
}

const getCurrentUser = () => {
  const token = localStorage.getItem('token')
  return fetch(`${API_ROOT}/current_user`, {
    headers: {Authorization: token}
  }).then(resp => resp.json())
}

export const api = {
  auth: {
    login: login,
    getCurrentUser
  }
}
