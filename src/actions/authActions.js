export function handleLogin(data){
  debugger
  return {type: "LOGIN_USER", payload: data}
}

export function handleLogout(){
  return {type: "LOGOUT_USER"}
}

export function handleMounting(data){
  return {type: "HANDLE_MOUNTING", payload: data}
}
