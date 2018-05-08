export default (state = {
  loading: false,
  gigsData: [],
  gig: {},
  filteredGigs: [],
  signedInUserGigs: [],
  dateSortedReversed: false,
  venueSortedReversed: false}, action) => {
  switch(action.type){
    case("START_FETCHING_GIGS_REQUEST"):
      return {...state, loading: true}
    case('FETCH_GIGS'):
    debugger
      action.payload.sort((a, b) => new Date(a.date) - new Date(b.date))
      return {...state, loading:false, gigsData: action.payload, filteredGigs: action.payload}
    case("FETCH_GIGS_FOR_SIGNED_IN_USER"):
      action.payload.length > 0 ? action.payload.sort((a, b) => new Date(a.date) - new Date(b.date)) : null
      return {...state, loading: false, gigsData: action.payload, filteredGigs: action.payload}
    case("START_POSTING_GIG"):
      return {...state, loading: true}
    case("START_UPDATING_GIG"):
      return {...state, loading: true}
    case("UPDATE_GIG"):
      debugger
      return {...state, loading: false, gig: action.payload}
    case("START_FETCHING_GIG"):
      return {...state, loading: true}
    case("START_ADDING_APPLICATION_TO_USER"):
      return {...state, loading: true}
    case("CREATE_GIG_APPLICATION"):
      let newFilteredGigs = state.filteredGigs.filter(gig => gig.id != action.payload.id)
      return {...state, filteredGigs: newFilteredGigs}
    case("FETCH_GIG"):
      return {...state, gig: action.payload}
    case("SEARCH_FILTER"):
      let filteredGigs = state.gigsData.filter(gig => gig.description.toLowerCase().includes(action.payload.toLowerCase()) || gig.venue.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state, filteredGigs: filteredGigs}
    case("SORT_BY_DATE"):
        return state.dateSortedReversed ? {...state, filteredGigs: state.gigsData, dateSortedReversed:false} : {...state, filteredGigs: state.gigsData.slice().reverse(), dateSortedReversed:true}
    case('SORT_BY_VENUE'):
    let returnArr = state.gigsData.slice().sort(function(a, b) {
      let venueA = a.venue.toUpperCase();
      let venueB = b.venue.toUpperCase();
      if (venueA < venueB) {
        return -1;
      }
      if (venueA > venueB) {
        return 1;
      }
      return 0;
    });
      return state.venueSortedReversed ? {...state, filteredGigs: state.filteredGigs.slice().reverse(), venueSortedReversed:false} : {...state, filteredGigs: returnArr, venueSortedReversed:true}
    default:
      return state
  }
}
