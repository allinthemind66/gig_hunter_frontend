export default (state = {
  currentUser: {}
}, action) => {
  switch(action.type){
    case("LOGIN_USER"):
    const newState = {...state, currentUser: action.payload}
    // debugger
      localStorage.setItem('token', action.payload.jwt)
      localStorage.setItem('id', action.payload.id)
      return newState
    case("LOGOUT_USER"):
    localStorage.removeItem('token')
    localStorage.removeItem('id')
      return {...state, currentUser: {}}
    case("SIGNUP_USER"):
      debugger
      localStorage.setItem('token', action.payload.jwt)
      localStorage.setItem('id', action.payload.id)
      return state
      // return {...state, currentUser: action.payload}
    case("HANDLE_MOUNTING"):
    // debugger
    // localStorage.setItem('token', action.payload.jwt)
      return {...state, currentUser: action.payload.user}
    default:
      return state
  }
}
