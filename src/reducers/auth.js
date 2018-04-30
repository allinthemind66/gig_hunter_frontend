export default (state = {
  currentUser: {}
}, action) => {
  switch(action.type){
    case("LOGIN_USER"):
      localStorage.setItem('token', action.payload.id)
      return {...state, currentUser: action.payload}
    case("LOGOUT_USER"):
    localStorage.removeItem('token')
      return {...state, currentUser: {}}
    case("HANDLE_MOUNTING"):
      return {...state, currentUser: action.payload.user}
    default:
      return state
  }
}
