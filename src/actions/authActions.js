export function handleLogin(data){
  return {type: "LOGIN_USER", payload: data}
}

export function handleSignUp(data){
  return {type: "SIGNUP_USER", payload: data}
}

export function handleLogout(){
  return {type: "LOGOUT_USER"}
}

export function handleMounting(data){
  return {type: "HANDLE_MOUNTING", payload: data}
}
