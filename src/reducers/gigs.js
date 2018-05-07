export default (state = {
  loading: false,
  gigsData: [],
  gig: {},
  filteredGigs: [],
  dateSortedReversed: false,
  venueSortedReversed: false}, action) => {
  switch(action.type){
    case("START_FETCHING_GIGS_REQUEST"):
      return {...state, loading: true}
    case('FETCH_GIGS'):
    let dateSortedGigs = action.payload.sort((a, b) => new Date(a.date) - new Date(b.date))
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
