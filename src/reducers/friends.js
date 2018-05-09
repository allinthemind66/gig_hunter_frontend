export default (state = {
  loading: false
}, action) => {
  switch(action.type){
    case("START_CREATING_FRIEND_REQUEST"):
      return {...state, loading: true}
    case("CREATE_FRIEND_REQUEST"):
      return {...state, loading: false}
    default:
      return state
  }
}
