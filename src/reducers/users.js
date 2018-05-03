export default function usersReducer(state = {
  // username: null,
  // loggedIn: false,
  loading: false,
  userImg: '',
  userData: {},
  userGigs: [],
  userPostedGigs: []
}, action){

  switch(action.type){
    case 'START_FETCHING_USER_DATA_REQUEST':
      return Object.assign({}, state, {loading: true})
      // return {...this.state}
    case 'FETCH_USER':
      // debugger
      return Object.assign({}, state, {loading: false, userData: action.payload, userGigs: action.payload.gigs})
      // return {...this.state}
    case "START_ADDING_GIG_TO_USER":
      return {...state, loading: true}
    case "ADD_GIG_TO_USER":
    // debugger
    //DONT ADD MULTIPLE
    // state.userGigs.find(gig => gig.id === action.payload.id) === undefined ? [...state.userGigs, action.payload] : [...state.userGigs]
      return {...state, loading: false, userGigs: [...state.userGigs, action.payload]}
    case "START_REMOVING_GIG_FROM_USER":
      return {...state, loading: true}
    case "REMOVE_GIG_FROM_USER":
    let filtered = state.userGigs.filter(gig => gig.id !== action.payload.id)
      return {...state, loading: false, userGigs: filtered}
    case "START_ADDING_PROFILE_PIC_TO_USER":
      return {...state, loading:true}
    case "ADD_IMG_TO_USER":
      return {...state, userData: action.payload}
    case("START_ADDING_APPLICATION_TO_USER"):
      return {...state, loading: true}
    case("CREATE_GIG_APPLICATION"):
      return state
    default:
      return state
  }
}
