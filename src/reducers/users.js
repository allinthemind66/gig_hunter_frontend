export default function usersReducer(state = {
  username: null,
  loggedIn: false,
  loading: false,
  userData: {},
  userGigs: []}, action){

  switch(action.type){
    case 'START_FETCHING_USER_DATA_REQUEST':
      return Object.assign({}, state, {loading: true})
      // return {...this.state}
    case 'FETCH_USER':
      return Object.assign({}, state, {loading: false, userData: action.payload})
      // return {...this.state}
    case "START_ADDING_GIG_TO_USER":
      return {...state, loading: true}
    case "ADD_GIG_TO_USER":
      return {...state, loading: false, userGigs: [...state.userGigs, action.payload]}
    default:
      return state
  }
}
