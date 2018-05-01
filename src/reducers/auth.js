export default (state = {
  currentUser: {}
}, action) => {
  switch(action.type){
    case("LOGIN_USER"):
    const newState = {...state, currentUser: action.payload}
      localStorage.setItem('token', action.payload.jwt)
      return newState
    case("LOGOUT_USER"):
    localStorage.removeItem('token')
      return {...state, currentUser: {}}
    case("HANDLE_MOUNTING"):
    // debugger
    // localStorage.setItem('token', action.payload.jwt)
      return {...state, currentUser: action.payload.user}
    default:
      return state
  }
}
