import {api} from '../services/api'
// const API_ROOT = 'https://agile-tor-43621.herokuapp.com/api/v1'
// const headers = api.auth.headers

export function handleLogin(data){
  // debugger
  return {type: "LOGIN_USER", payload: data}
}

export function handleSignUp(data){
  return {type: "SIGNUP_USER", payload: data}
}

export function handleLogout(){
  api.auth.signOut()
  // return (dispatch) => {
  //   dispatch({type: "START_LOGGING_OUT_USER"})
  //   return fetch(`${API_ROOT}/signout`, {
  //     method: "DELETE",
  //     headers: headers
  //   })
  //   // .then(resp => resp.json())
  //   .then(() => dispatch({type: "LOGOUT_USER"}))
  // }
}

export function handleMounting(data){
  return {type: "HANDLE_MOUNTING", payload: data}
}
