export default (state = {loading: false, gigsData: {}, gig: {}}, action) => {
  switch(action.type){
    case("START_FETCHING_GIGS_REQUEST"):
      return {...state, loading: true}
    case('FETCH_GIGS'):
      return {...state, loading:false, gigsData: action.payload}
    case("START_ADDING_GIG_TO_USER"):
      return {...state, loading: true}
    case("ADD_GIG"):
      return state
    case("START_POSTING_GIG"):
      return {...state, loading: true}
    case("START_FETCHING_GIG"):
      return {...state, loading: true}
    case("FETCH_GIG"):
      return {...state, gig: action.payload}
    default:
      return state
  }
}
