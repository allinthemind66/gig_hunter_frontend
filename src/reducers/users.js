export default function usersReducer(state = {
  // username: null,
  // loggedIn: false,
  loading: false,
  userImg: '',
  userData: {},
  userGigs: [],
  userPostedGigs: [],
  allUsers: [],
  filteredUsers: []
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
    // case "ADD_GIG_TO_USER":
    // // debugger
    // //DONT ADD MULTIPLE
    // // state.userGigs.find(gig => gig.id === action.payload.id) === undefined ? [...state.userGigs, action.payload] : [...state.userGigs]
    //   return {...state, loading: false, userGigs: [...state.userGigs, action.payload]}
    case "START_REMOVING_GIG_FROM_USER":
      return {...state, loading: true}
    case "REMOVE_GIG_FROM_USER":
    let filtered = state.userGigs.filter(gig => gig.id !== action.payload.id)
      return {...state, loading: false, userGigs: filtered}
    case "START_ADDING_PROFILE_PIC_TO_USER":
      return {...state, loading:true}
    case "ADD_IMG_TO_USER":
      return {...state, userData: action.payload, loading: false}
    // case("START_ADDING_APPLICATION_TO_USER"):
    //   return {...state, loading: true}
    // case("CREATE_GIG_APPLICATION"):
    //   return state
    case("START_GETTING_USERS_POSTED_GIGS"):
      return {...state, loading: true}
    case("ADD_USERS_POSTED_GIGS_TO_USER"):
      let usersGigs = action.payload.filter(gig => gig.user_id == localStorage.id)
      return {...state, loading: false, userPostedGigs: usersGigs}
    case("START_GETTING_ALL_USERS"):
      return {...state, loading: true}
    case("GET_ALL_USERS"):
      return {...state, allUsers: action.payload, filteredUsers: action.payload,loading: false}
    case("SEARCH_FILTER_FOR_ALL_USERS"):
      return {...state, filteredUsers: state.allUsers.filter(user => user.name.toLowerCase().includes(action.payload.toLowerCase()))}
    case("START_UPDATING_USER_PROFILE"):
      return {...state, loading: true}
    case("UPDATE_USER_PROFILE"):
    debugger
      return state
    default:
      return state
  }
}
