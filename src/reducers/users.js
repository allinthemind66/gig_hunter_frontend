export default function usersReducer(state = {loading: false, userData: {}}, action){
  switch(action.type){
    case 'START_FETCHING_USER_DATA_REQUEST':
      return Object.assign({}, state, {loading: true})
      // return {...this.state}
    case 'FETCH_USER':
      return Object.assign({}, state, {loading: false, userData: action.payload})
      // return {...this.state}
    default:
      return state
  }
}
