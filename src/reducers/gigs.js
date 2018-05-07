export default (state = {loading: false, gigsData: [], gig: {}, filteredGigs: []}, action) => {
  // debugger
  switch(action.type){
    case("START_FETCHING_GIGS_REQUEST"):
      return {...state, loading: true}
    case('FETCH_GIGS'):
      return {...state, loading:false, gigsData: action.payload, filteredGigs: action.payload}
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
    case("SEARCH_FILTER"):
      // debugger
        let filteredGigs = state.gigsData.filter(gig => gig.description.toLowerCase().includes(action.payload.toLowerCase()) || gig.venue.toLowerCase().includes(action.payload.toLowerCase()))

      return {...state, filteredGigs: filteredGigs}
    default:
      return state
  }
}
