export default (state = {loading: false, gigsData: {}}, action) => {
  switch(action.type){
    case("START_FETCHING_GIGS_REQUEST"):
      return {...state, loading: true}
    case('FETCH_GIGS'):
      return {...state, loading:false, gigsData: action.payload}
    default:
      return state
  }
}
